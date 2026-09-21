#!/usr/bin/env node
// core-local.mjs — 把 OpenClaw 本体 (app/core) 同步到本机硬盘，启动时从本机读
//
// 背景（U 盘拔插后启动慢 30s 的根因，实测）：
//   - OpenClaw gateway 启动时要读 app/core/node_modules/openclaw/dist 下 6927 个
//     js 模块（约 70MB，平均 13KB）。
//   - 盘一直插着时，Windows Standby 文件缓存命中，读这批文件只要 ~0.6s；
//     拔盘重插后 Standby 失效，全部冷读，测到 68.5s——这正是"拔过盘再启动，
//     banner 前要等 30s"的来源。
//   - 本机 SSD/HDD 冷读同一批只需 ~1.3s。
//
// 方案：把 app/core 同步到本机（同一 slot 目录，portable-cache.mjs 复用），
// 启动时 CORE_DIR 直接指向本机副本。U 盘上的 app/core 原样保留（作兜底/离线）。
//
// 设计原则（对齐 portable-cache.mjs）：
//   - fail-open：任何一步失败/不可写，就返回"用 U 盘"，绝不阻断启动。
//   - 首次同步不阻塞：本机没有副本时，返回"仍需用 U 盘"，同时后台起一个
//     detach 的 robocopy 同步；下次启动检测到副本完成即以本机为准。
//   - 版本感知：目录名带 OPENCLAW_VERSION，core 升级后自动重新同步。
//
// 用法（供 bat source）：node core-local.mjs <USB_ROOR/app>
// 输出 KEY=VALUE：
//   UCLAW_LOCAL_CORE=<本机 core 绝对路径>    ← 存在且有效时输出
//   UCLAW_LOCAL_CORE_STATUS=synced|syncing|none|unavailable
//   UCLAW_CORE_SYNC_PID=<后台同步的 PID>      ← 本轮发起了后台同步时输出

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, openSync, closeSync } from 'node:fs';
import { join } from 'node:path';
import { homedir, tmpdir } from 'node:os';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const CACHE_ID_FILE = 'portable-cache-id';
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function systemCacheRoot(platform = process.platform, env = process.env) {
  if (platform === 'win32') {
    return env.LOCALAPPDATA?.trim() || join(homedir() || tmpdir(), 'AppData', 'Local');
  }
  if (platform === 'darwin') {
    return join(homedir() || tmpdir(), 'Library', 'Caches');
  }
  return env.XDG_CACHE_HOME?.trim() || join(homedir() || tmpdir(), '.cache');
}

function readCacheId(stateDir) {
  if (!stateDir) return null;
  const idPath = join(stateDir, CACHE_ID_FILE);
  try {
    if (existsSync(idPath)) {
      const existing = readFileSync(idPath, 'utf8').trim();
      if (UUID_RE.test(existing)) return existing.toLowerCase();
    }
  } catch { /* 读不到就算没 UUID */ }
  return null;
}

// 拿 slot 目录（身份 = UUID 或 usbRoot，与 portable-cache.mjs 同源）
function cacheSlot({ stateDir, usbRoot, platform, env }) {
  const cacheId = readCacheId(stateDir);
  const identity = cacheId ? `portable-id:${cacheId}` : String(usbRoot || stateDir || 'u-claw').toLowerCase();
  const slot = createHash('sha256').update(identity).digest('hex').slice(0, 16);
  const root = join(systemCacheRoot(platform, env), 'U-Claw', slot);
  try { mkdirSync(root, { recursive: true }); } catch { return null; }
  return root;
}

function installedCoreIsSane(coreDir) {
  try {
    return existsSync(join(coreDir, 'node_modules', 'openclaw', 'openclaw.mjs'));
  } catch { return false; }
}

// 后台同步 U 盘 core → 本机 target。Windows 用 robocopy /E（保留空目录）。
// 返回后台子进程 PID；失败返回 null。
function spawnBackgroundSync(usbCore, target, logPath) {
  const cmd = 'robocopy.exe';
  // robocopy: /E 全量含空目录，/NFL /NDL /NJH /NJS /NP 静默，/R:1 /W:1 少重试
  const args = [usbCore, target, '/E', '/NFL', '/NDL', '/NJH', '/NJS', '/NP', '/R:1', '/W:1'];
  let logFd = null;
  if (logPath) {
    try { logFd = openSync(logPath, 'a'); } catch { logFd = null; }
  }
  try {
    const child = spawn(cmd, args, {
      detached: true,
      stdio: logFd ? ['ignore', logFd, logFd] : 'ignore',
      windowsHide: true,
    });
    child.unref();
    return child.pid;
  } catch {
    return null;
  } finally {
    if (logFd != null) { try { closeSync(logFd); } catch { /* best effort */ } }
  }
}

export function resolveCoreLocal({
  appDir,             // U 盘 app/ 目录
  stateDir,           // U 盘 data/.openclaw
  version = '',       // OPENCLAW_VERSION 文件内容
  platform = process.platform,
  env = process.env,
  syncInBackground = true,
} = {}) {
  const output = { key: 'UCLAW_LOCAL_CORE', status: 'none', path: '' };

  const usbCore = join(appDir, 'core');
  const sane = installedCoreIsSane(usbCore);
  if (!sane) { output.status = 'unavailable'; return output; }  // U盘 core 都不完整，无从谈起

  // 仅 Windows 用 robocopy。其它平台暂不加速（Mac 场景后续再说，避免过度设计）。
  if (platform !== 'win32') { output.status = 'unavailable'; return output; }

  const root = cacheSlot({ stateDir, usbRoot: appDir, platform, env });
  if (!root) { output.status = 'unavailable'; return output; }

  const verTag = version ? `-${version.replace(/[^A-Za-z0-9_.-]/g, '')}` : '';
  const target = join(root, `core${verTag}`);

  if (installedCoreIsSane(target)) {
    output.status = 'synced';
    output.path = target;
    return output;
  }

  // 本机还没有完整副本 → 本次仍用 U盘，后台发起同步（若允许）
  if (syncInBackground) {
    mkdirSync(root, { recursive: true });
    const logPath = join(root, 'core-sync.log');
    const pid = spawnBackgroundSync(usbCore, target, logPath);
    if (pid) output.status = 'syncing';
  }
  output.status = output.status === 'syncing' ? 'syncing' : 'none';
  return output;
}

const isMain = (() => {
  try { return !!process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href; }
  catch { return false; }
})();

if (isMain) {
  const appDir = process.argv[2];
  const stateDir = process.argv[3];
  const version = (process.argv[4] ?? '').trim();
  try {
    const r = resolveCoreLocal({ appDir, stateDir, version });
    if (r.path) process.stdout.write(`UCLAW_LOCAL_CORE=${r.path}\n`);
    process.stdout.write(`UCLAW_LOCAL_CORE_STATUS=${r.status}\n`);
    process.exit(0);
  } catch (err) {
    // fail-open：任何异常 → 让启动脚本继续用 U盘
    process.stderr.write(`[core-local] ${err && err.message}\n`);
    process.stdout.write('UCLAW_LOCAL_CORE_STATUS=none\n');
    process.exit(1);
  }
}