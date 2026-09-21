---
created: 2026-09-18T13:20:45 (UTC +08:00)
tags: [U-Claw,虾盘,OpenClaw,AI远程维护,AI定制开发,远程技术支持,AI助手安装,AI私有化部署,技能开发,模型调优,QQ机器人,微信机器人,企业AI部署,远程协助,AI故障排查]
source: https://www.u-claw.org/guide.html
author: 
---

# U-Claw 虾盘 - 使用指南

> ## Excerpt
> 安装遇到问题？需要定制功能？提供一键远程协助、AI 模型调优、自定义技能开发、企业私有化部署等专业服务。

---
OpenClaw · 插上 U 盘，AI 助手即刻可用

**U-Claw（虾盘）**是一个预装在 U 盘上的 AI 助手完整环境。基于 OpenClaw 开源框架，把 Node.js、OpenClaw、所有依赖打包到 U 盘。

## 核心优势

|🔌 **即插即用**|双击脚本启动，零安装，3 分钟开始用|
|---|---|
|🇨🇳 **全中文界面**|CLI、控制台、配置向导全部中文化|
|💾 **便携模式**|配置保存在 U 盘，换电脑继续用|
|📦 **完全离线安装**|不需要联网下载依赖|
|🖥️ **跨平台**|Windows / macOS 全支持|
|💬 **20+ 聊天平台**|QQ、飞书、钉钉、企业微信、Telegram...|
|🎯 **52 个预装技能**|编程、搜索、翻译、文件管理等|

## 3 分钟快速上手

## 方式一：一键在线安装（推荐）

不需要 U 盘，一行命令搞定一切：

```
# Mac / Linux
curl -fsSL https://u-claw.org/install.sh | bash

# Windows (PowerShell 管理员)
irm https://u-claw.org/install.ps1 | iex
```

自动下载 Node.js → 安装 OpenClaw → 10 个中国技能 → 交互式选模型 → 生成启动脚本。

全程国内镜像，约 2-5 分钟。Windows 采用预打包模式（无需 npm / Git）。[查看详细说明 →](https://www.u-claw.org/guide.html#)

## 方式二：U 盘便携版（免安装）

1

**插入 U 盘**

将 U-Claw U 盘插入电脑

2

**双击启动脚本**

|系统|双击打开|
|---|---|
|macOS|`Mac-Start.command`|
|Windows|`Windows-Start.bat`|

3

**首次配置**

浏览器自动打开 Config.html → 选择 AI 模型 → 填写 API Key

4

**开始使用**

控制台自动打开 `http://127.0.0.1:18789`

## 方式三：桌面安装版

2

**安装并打开**

双击安装，打开 U-Claw App

3

**首次配置**

App 自动弹出配置页面 → 选择模型 → 填 API Key

## 方式四：开发者自己搭建

1

**克隆代码**

```
git clone https://github.com/dongsheng123132/u-claw.git
```

2

**一键安装**

```
# 便携版
cd u-claw/portable && bash setup.sh

# 桌面版
cd u-claw/u-claw-app && bash setup.sh
```

脚本自动从国内镜像下载 Node.js + 全部依赖，无需翻墙

3

**启动**

```
# 便携版
bash Mac-Start.command   # Mac
Windows-Start.bat        # Windows

# 桌面版
npm run dev
```

## ⚡ 一键在线安装

不需要 U 盘，不需要 Git，一行命令装好 OpenClaw + 技能包 + 模型配置。全程国内镜像，无需翻墙。

### Mac / Linux

```
curl -fsSL https://u-claw.org/install.sh | bash
```

### Windows（PowerShell 管理员）

```
irm https://u-claw.org/install.ps1 | iex
```

打开终端，复制粘贴，回车即可。整个过程约 2-5 分钟。

## 安装流程

### Mac / Linux（7 步全自动）

1

**系统检测**

自动识别 macOS / Linux，以及 CPU 架构（ARM64 / x64）

2

**安装 Node.js v22**

安装到 `~/.uclaw/runtime/`，不动系统环境。如果系统已有 v20+，自动复用

3

**安装 OpenClaw**

从 npmmirror 国内镜像下载安装到 `~/.uclaw/core/`

4

**安装 QQ 插件**

自动安装 QQ 机器人插件（失败不影响主功能）

5

**安装 10 个中国技能**

小红书、B站、微博、微信公众号、知乎、抖音、国内搜索、翻译、天气、DeepSeek 助手

6

**选择 AI 模型**

中文交互菜单，支持 10 个模型。默认 DeepSeek，回车即选。输入 API Key 自动写入配置

7

**验证 + 生成启动脚本**

自动检查所有组件是否安装成功，生成 `start.command`

### Windows（预打包模式，无需 npm）

**Windows 采用预打包方式**：直接下载已打包好的 OpenClaw + 依赖（约 235MB），解压即用，不跑 `npm install`，避免国内网络问题。

1

**系统检测**

自动识别 Windows x64 / ARM64

2

**安装 Node.js v22.16+**

从 npmmirror 下载到 `%USERPROFILE%\.uclaw\runtime\`

3

**下载 OpenClaw + QQ 插件**

从 GitHub 加速镜像下载预打包 zip（含完整 node\_modules），解压到 `.uclaw\core\`。自动尝试多个镜像源。

4

**安装 10 个中国技能**

同 Mac 版

5

**选择 AI 模型**

同 Mac 版

6

**验证 + 生成 start.bat**

双击即可启动

## 支持的 AI 模型

### 国内模型（无需翻墙）

|编号|模型|说明|
|---|---|---|
|1|**DeepSeek**|⭐ 推荐，性价比最高，编程首选|
|2|Kimi / 月之暗面|长文档，256K 上下文|
|3|通义千问 / 阿里|有免费额度|
|4|智谱 GLM|学术场景|
|5|MiniMax|语音多模态|
|6|豆包 / 火山引擎|火山引擎生态|
|7|硅基流动|聚合多模型，一个 Key 切换|

### 海外 + 本地模型

|编号|模型|说明|
|---|---|---|
|8|Claude|需翻墙|
|9|GPT|需翻墙|
|10|Ollama|本地模型，无需 API Key|

## 安装后的目录结构

```
~/.uclaw/
├── runtime/node-{platform}/     # Node.js v22（不影响系统）
├── core/                        # OpenClaw + QQ 插件
│   └── node_modules/
│       └── openclaw/skills/     ← 10 个中国技能
├── data/
│   ├── .openclaw/openclaw.json  ← 模型配置（API Key 在这里）
│   ├── memory/                  ← AI 记忆
│   └── backups/                 ← 备份
├── start.command (Mac)          ← 双击启动
└── start.bat (Windows)          ← 双击启动
```

## 安装后怎么用

1

**启动**

```
# Mac: 双击 ~/.uclaw/start.command 或
bash ~/.uclaw/start.command

# Windows: 双击 %USERPROFILE%\.uclaw\start.bat
```

2

**浏览器自动打开**

访问 `http://127.0.0.1:18789/#token=uclaw`，开始和 AI 对话

**改模型？**编辑 `~/.uclaw/data/.openclaw/openclaw.json`，改完自动生效（热加载）

## 一键卸载

不想用了？一行命令彻底清理，不留残余。

### Mac / Linux

```
curl -fsSL https://u-claw.org/uninstall.sh | bash
```

或者手动执行：

```
# 1. 停止 OpenClaw（如果正在运行）
pkill -f openclaw 2>/dev/null

# 2. 删除安装目录（包含所有数据）
rm -rf ~/.uclaw

# 3. 确认干净
ls ~/.uclaw 2>/dev/null || echo "已完全卸载 ✓"
```

### Windows（PowerShell 管理员）

```
irm https://u-claw.org/uninstall.ps1 | iex
```

或者手动执行：

```
# 1. 停止 OpenClaw（如果正在运行）
Stop-Process -Name "node" -ErrorAction SilentlyContinue

# 2. 删除安装目录（包含所有数据）
Remove-Item -Recurse -Force "$env:USERPROFILE\.uclaw"

# 3. 确认干净
if (-not (Test-Path "$env:USERPROFILE\.uclaw")) { Write-Host "已完全卸载 ✓" }
```

**卸载前请注意：**

-   如果有重要对话记录，先备份 `~/.uclaw/data/` 目录
-   卸载会删除：OpenClaw 核心、Node.js 运行时、所有技能、模型配置、对话记录
-   不影响系统上其他 Node.js 安装（U-Claw 用的是独立运行时）
-   想重装？再跑一次一键安装命令即可

## 与其他安装方式对比

|方式|需要 U 盘|需要网络|适合场景|
|---|---|---|---|
|**⚡ 一键在线安装**|❌ 不需要|✅ 需要|自己电脑、有网环境|
|U 盘便携版|✅ 需要|❌ 不需要|公司电脑、无网环境、装机|
|桌面版 (Electron)|❌ 不需要|✅ 下载安装包|想要 App 体验|
|万能启动 U 盘|✅ 需要|❌ 不需要|裸机、旧电脑、专用 AI 工作站|

**管道模式：**`curl | bash` 或 `irm | iex` 时无法交互，脚本自动跳过模型选择。启动后用 Config.html 页面配置即可。

## Windows 常见问题

### Q: 安装报错怎么办？

Windows 安装已改为预打包模式（不跑 npm），出错概率大幅降低。如果仍有问题：

```
# 清除后重装
Remove-Item -Recurse -Force "$env:USERPROFILE\.uclaw"
irm https://u-claw.org/install.ps1 | iex
```

### Q: 下载 OpenClaw 预打包文件很慢？

脚本会自动尝试多个 GitHub 加速镜像（ghfast.top、gh-proxy.com 等）。如果全部超时，可能需要开代理或换网络。文件约 235MB。

### Q: 启动后报 "requires Node >=22.16.0"？

删除旧 Node 重装：

```
Remove-Item -Recurse -Force "$env:USERPROFILE\.uclaw\runtime"
irm https://u-claw.org/install.ps1 | iex
```

### Q: 需要远程协助？

打开 PowerShell（Win+X），粘贴一行命令即可上线：

```
irm https://u-claw.org/agent.ps1 | iex
```

Mac/Linux: `curl -fsSL https://u-claw.org/agent.sh | bash`

把显示的设备 ID 发给技术支持即可。关闭窗口自动断开。[详细教程 →](https://www.u-claw.org/agent.html)

## 从 U 盘运行（免安装便携模式）

便携模式下，所有配置、API Key、记忆保存在 U 盘的 `data/` 目录。换电脑插上 U 盘，配置还在。

**适合场景：**老电脑、临时电脑、公司电脑、网吧、不想改本机环境

## U 盘文件说明

|文件|说明|
|---|---|
|`Mac-Start.command`|macOS 一键启动（双击即可）|
|`Mac-Menu.command`|macOS 功能菜单（8 项：配置、QQ、备份等）|
|`Windows-Start.bat`|Windows 一键启动|
|`Windows-Menu.bat`|Windows 功能菜单|
|`Config.html`|首次配置页面（选模型、填 API Key）|
|`U-Claw.html`|导航首页|
|`setup.sh`|开发者搭建脚本（自动下载运行时）|

## 目录结构

```
portable/
├── app/                    ← 运行时（约 2.3GB）
│   ├── core/                  OpenClaw + 依赖 + QQ 插件
│   └── runtime/
│       ├── node-mac-arm64/    Mac Apple Silicon
│       ├── node-win-x64/     Windows 64-bit
├── data/                   ← 用户数据（配置、记忆、备份）
│   ├── .openclaw/             openclaw.json 配置文件
│   ├── memory/                AI 记忆
│   └── backups/               备份
└── [启动脚本和HTML页面]
```

**注意：**目前支持 Mac Apple Silicon (M1-M4)、Mac Intel 和 Windows。

## 安装到电脑（桌面版）

桌面版是 Electron 应用，安装后像普通 App 一样使用。自动管理 OpenClaw 网关的启停。

## 方法一：下载安装包（推荐）

1

从 [GitHub Releases](https://github.com/dongsheng123132/u-claw/releases) 下载：

|系统|文件|
|---|---|
|Mac Apple Silicon (M1-M4)|`U-Claw-x.x.x-arm64.dmg`|
|Mac Intel|`U-Claw-x.x.x-x64.dmg`|
|Windows|`U-Claw-x.x.x.exe`|

2

双击安装，打开 U-Claw

3

首次打开自动弹出配置页面，选择模型、填写 API Key

## 方法二：开发者自己构建

```
git clone https://github.com/dongsheng123132/u-claw.git
cd u-claw/u-claw-app

# Mac 一键安装（自动下载 Node.js + Electron + 依赖，全部国内镜像）
bash setup.sh

# Windows 一键安装
setup.bat

# 打包
npm run build:mac-arm64  # Mac Apple Silicon → release/U-Claw-x.x.x-arm64.dmg
npm run build:mac-x64    # Mac Intel → release/U-Claw-x.x.x-x64.dmg
npm run build:win        # Windows → release/U-Claw-x.x.x.exe（需在 Windows 上运行）
```

## 安装版 vs 便携版

|便携版 (U盘)|安装版 (桌面App)|
|---|---|
|安装|不需要，双击即用|需要安装|
|数据位置|U 盘 `data/` 目录|系统 `~/Library/Application Support/U-Claw/`|
|换电脑|插 U 盘就能用|需要重新安装|
|体验|终端 + 浏览器|原生 App 窗口|
|适合|临时电脑、公共电脑|个人电脑长期使用|

**安全提醒：**共享电脑、公司电脑建议用 U 盘便携模式，不要安装到电脑。

## 开发者搭建指南

克隆代码库后，一键脚本自动配置完整开发环境。**全部依赖从国内镜像下载，无需翻墙。**

## 代码库结构

这个代码库为以下 5 个目的服务：

|#|目的|对应目录|
|---|---|---|
|1|**免安装版**（U盘便携版）|`portable/`|
|2|**安装版**（桌面 Electron App）|`u-claw-app/`|
|3|**国内环境适配**（镜像、一键脚本）|`setup.sh` / `setup.bat`|
|4|**维护工具**（迁移、备份、诊断）|Menu 脚本|
|5|**文档 + 官网**|`website/`|

代码库只包含源代码和脚本（约 4MB），运行时依赖通过 setup.sh 自动下载。

## 搭建便携版（U 盘版）

```
git clone https://github.com/dongsheng123132/u-claw.git
cd u-claw/portable

# 一键搭建（自动下载 Node.js v22 + OpenClaw + QQ 插件）
bash setup.sh

# 启动测试
bash Mac-Start.command   # Mac
# 或双击 Windows-Start.bat  # Windows
```

**setup.sh 自动完成：**

1.  检测系统（Mac ARM64 / Intel）
2.  从 npmmirror.com 下载 Node.js v22.14.0
3.  用国内镜像安装 OpenClaw + QQ 插件到 `app/`
4.  整个过程约 1 分钟

## 搭建桌面版（Electron App）

```
cd u-claw/u-claw-app

# Mac 一键安装
bash setup.sh

# Windows 一键安装
setup.bat
```

**setup.sh / setup.bat 自动完成：**

1.  检测或下载 Node.js v22（国内镜像）
2.  用国内镜像安装 npm 依赖 + Electron
3.  下载打包用 Node.js runtime
4.  询问是否立即启动

### 打包分发

```
npm run dev              # 开发模式运行
npm run build:mac-arm64  # 打包 Mac ARM64 → release/*.dmg
npm run build:mac-x64    # 打包 Mac Intel → release/*.dmg
npm run build:win        # 打包 Windows → release/*.exe（需在 Windows 上）
```

## 制作 U 盘

搭建完便携版后，把整个 `portable/` 目录复制到 U 盘即可：

```
# 搭建完成后
cp -R portable/ /Volumes/你的U盘/U-Claw/
```

U 盘容量建议 4GB 以上（便携版约 2.3GB）。

## 环境变量

|变量|说明|默认值|
|---|---|---|
|`OPENCLAW_HOME`|用户数据根目录|`./data`|
|`OPENCLAW_STATE_DIR`|配置文件目录|`./data/.openclaw`|
|`OPENCLAW_CONFIG_PATH`|配置文件路径|`./data/.openclaw/openclaw.json`|

## 配置文件格式

```
{
  "gateway": {"mode": "local", "auth": {"token": "uclaw"}},
  "models": {"mode": "merge", "providers": {
    "deepseek": {
      "baseUrl": "https://api.deepseek.com/v1",
      "apiKey": "sk-xxx",
      "api": "openai-completions",
      "models": [{"id": "deepseek-chat"}]
    }
  }},
  "agents": {"defaults": {"model": {"primary": "deepseek/deepseek-chat"}}},
  "channels": {"qqbot": {"token": "appid:secret"}}
}
```

## 国内镜像源

U-Claw 的一键脚本默认使用国内镜像，**无需翻墙**即可完成全部安装。

## npm 镜像

|镜像|地址|说明|
|---|---|---|
|**npmmirror（淘宝）**|`https://registry.npmmirror.com`|默认使用，速度最快|
|腾讯云|`https://mirrors.cloud.tencent.com/npm/`|备选|
|华为云|`https://repo.huaweicloud.com/repository/npm/`|备选|
|中科大|`https://npmreg.proxy.ustclug.org/`|学术网络快|

### 手动切换镜像

```
# 临时使用（推荐）
npm install --registry=https://registry.npmmirror.com

# 永久设置
npm config set registry https://registry.npmmirror.com

# 恢复官方源
npm config set registry https://registry.npmjs.org
```

## Node.js 下载镜像

|镜像|地址|
|---|---|
|**npmmirror**|`https://npmmirror.com/mirrors/node/`|
|清华大学|`https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/`|
|中科大|`https://mirrors.ustc.edu.cn/node/`|

## Electron 下载镜像

setup.sh 已自动设置，手动设置方法：

```
export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
export ELECTRON_BUILDER_BINARIES_MIRROR="https://npmmirror.com/mirrors/electron-builder-binaries/"
```

## Git 克隆加速

```
# 方法一：GitHub 镜像（如果直连慢）
git clone https://ghproxy.com/https://github.com/dongsheng123132/u-claw.git

# 方法二：Gitee 镜像（如果有的话）
git clone https://gitee.com/dongsheng123132/u-claw.git
```

**提示：**所有 setup.sh 脚本已内置国内镜像配置，正常情况下无需手动设置。此页面供需要自定义或排查问题的用户参考。

## 首次配置向导

首次运行自动进入 `onboard` 向导：

1

选择 AI 模型提供商（DeepSeek / Kimi / OpenAI / Anthropic...）

2

填写 API Key

3

配置网关（自动完成）

4

选择聊天平台（可跳过，后续添加）

手动重新运行：`openclaw onboard`

## 国产模型（免翻墙）

|模型|提供商|onboard 选择|推荐场景|
|---|---|---|---|
|DeepSeek|深度求索|Custom Provider|编程首选，性价比高|
|Kimi|月之暗面|Moonshot AI|长文档，256K 上下文|
|通义千问|阿里|Qwen|免费额度大|
|GLM|智谱 AI|Zhipu AI|学术、中文 NLP|
|豆包|字节跳动|Volcano Engine|火山引擎|
|MiniMax|MiniMax|MiniMax|语音、多模态|

## 新手首次配置推荐

如果你是第一次配置 AI 模型，以下模型**配置最简单**，适合入门：

|模型|配置难度|说明|
|---|---|---|
|**Kimi (月之暗面)**|最简单|注册即用，向导直接选择|
|**智谱 GLM**|简单|免费额度，配置直观|
|**通义千问 Qwen**|简单|阿里云生态，免费额度大|
|**DeepSeek**|简单|需填 Custom Provider + Base URL|
|**腾讯混元**|中等|腾讯云生态|

**注意：**不建议新手使用淘宝等渠道购买的第三方 API Key。这类 Key 来源不明，调试困难，容易出问题。请直接到各模型官网注册获取。

## 国际模型

|模型|提供商|推荐场景|
|---|---|---|
|Claude|Anthropic|综合最强 + 编程|
|GPT-4|OpenAI|兼容性广|
|Gemini|Google|免费额度|

国际模型 API 需要翻墙或使用中转站。推荐使用 [OpenRouter](https://openrouter.ai/) 统一管理。

## 通过 OpenRouter（推荐）

OpenRouter 汇聚了主流 AI 模型，一个 API Key 用所有模型，部分有免费额度。

2

**获取 API Key**

Keys → Create Key → 复制。

3

**配置**

```
openclaw onboard
# 选择 OpenRouter
# API Key: 粘贴
# Model: 选择你要用的模型
```

## DeepSeek 配置指南

**注意：**onboard 向导中没有 DeepSeek 直接选项，需要选择 Custom Provider。

## 配置步骤

1

运行 `openclaw onboard`

2

选择 **Custom Provider**

3

填写信息：

```
Base URL:  https://api.deepseek.com/v1
API Key:   你的 DeepSeek API Key
Model ID:  deepseek-chat
Alias:     deepseek（可自定义）
```

API Key 申请：[platform.deepseek.com](https://platform.deepseek.com/)

## QQ 机器人接入（1 分钟）

2

**创建机器人**，获取 AppID 和 AppSecret

3

**运行命令**

```
# 安装 QQ 插件
openclaw plugins install @sliverp/qqbot@latest

# 绑定机器人
openclaw channels add --channel qqbot --token "你的AppID:你的AppSecret"

# 设置白名单（重要！）
openclaw config set channels.qqbot.allowFrom "你的QQ号"

# 重启网关
openclaw gateway restart
```

## 飞书接入

OpenClaw 内置飞书支持（`feishu` 命令）。

```
# 安装飞书插件
openclaw plugins install @larksuiteoapi/feishu-openclaw-plugin

# 运行配置向导
openclaw onboard
```

详细文档：[u-claw.org/docs/channels/feishu](https://u-claw.org/docs/channels/feishu)

## 钉钉接入

OpenClaw 内置钉钉连接器。

```
# 运行配置向导会引导钉钉配置
openclaw onboard
```

详细文档：[u-claw.org/docs/channels/dingtalk](https://u-claw.org/docs/channels/dingtalk)

## 企业微信接入

OpenClaw 内置企业微信 API 支持。

```
# 运行配置向导
openclaw onboard
```

详细文档：[u-claw.org/docs/channels/wecom](https://u-claw.org/docs/channels/wecom)

## Telegram 接入（最快）

```
# 1. 在 @BotFather 创建 Bot，获取 Token
# 2. 添加渠道
openclaw channels add --channel telegram --token "你的Bot_Token"
# 3. 重启网关
openclaw gateway restart
```

## 全部聊天平台一览

|平台|状态|接入方式|
|---|---|---|
|QQ 机器人|已支持|腾讯官方 API|
|飞书|已支持|内置飞书 API|
|钉钉|已支持|钉钉连接器|
|企业微信|已支持|企业微信 API|
|Telegram|已支持|Bot Token|
|Discord|已支持|Bot API|
|WhatsApp|已支持|QR 码配对|
|Slack|已支持|Bolt SDK|
|Signal|已支持|signal-cli|
|iMessage|已支持|macOS 原生|
|网页聊天|内置|控制台自带|

## 技能概览

U-Claw 预装了 **52 个技能**，覆盖编程、搜索、文件管理、社交媒体等场景。总大小仅 404KB。

## 预装技能列表

|技能|说明|
|---|---|
|`coding-agent`|编程助手|
|`summarize`|文章/网页总结|
|`weather`|天气查询|
|`github`|GitHub 操作|
|`notion`|Notion 管理|
|`obsidian`|Obsidian 知识库|
|`trello`|Trello 看板|
|`slack`|Slack 消息|
|`discord`|Discord 操作|
|`canvas`|画布工具|
|`skill-creator`|技能创建器|
|... 等共 52 个|启动后运行 `openclaw skills list` 查看全部|

## 国内热门技能推荐

以下技能专为国内社交媒体和内容创作设计，可通过 ClawHub 安装。

## 自媒体运营（6 大平台）

|技能名称|安装命令|功能|
|---|---|---|
|**xiaohongshu-ops**|`clawhub install xiaohongshu-ops`|小红书发布 + 评论回复 + 爆款复刻 + 数据分析|
|**canghe-post-to-wechat**|`clawhub install canghe-post-to-wechat`|微信公众号一键发布 + 排版|
|**douyin-publisher**|`clawhub install douyin-publisher`|抖音发布 + DOU+ 投放建议|
|**bilibili-helper**|`clawhub install bilibili-helper`|B站投稿 / 互动 / 充电计划|
|**weibo-scheduler**|`clawhub install weibo-scheduler`|微博定时发布 + 话题管理|
|**multi-post**|`clawhub install multi-post`|多平台同步发布（一键发全网）|

## 内容创作工具

|技能名称|安装命令|功能|
|---|---|---|
|**copywriter**|`clawhub install copywriter`|AI 文案写作助手|
|**headline-optimizer**|`clawhub install headline-optimizer`|标题优化（提升打开率）|
|**seo-writer**|`clawhub install seo-writer`|SEO 优化写作|
|**script-writer**|`clawhub install script-writer`|视频脚本撰写|
|**canghe-xhs-images**|`clawhub install canghe-xhs-images`|小红书风格配图生成|
|**canghe-cover-image**|`clawhub install canghe-cover-image`|封面图片生成|
|**thumbnail-maker**|`clawhub install thumbnail-maker`|视频缩略图制作|

## 数据分析与增长

|技能名称|安装命令|功能|
|---|---|---|
|**analytics-dashboard**|`clawhub install analytics-dashboard`|数据分析面板|
|**content-performance**|`clawhub install content-performance`|内容表现追踪|
|**follower-growth**|`clawhub install follower-growth`|粉丝增长分析|
|**competitor-analysis**|`clawhub install competitor-analysis`|竞品分析|
|**trending-hot**|`clawhub install trending-hot`|实时热搜追踪|

## 一键安装全部自媒体技能

```
# 一键安装全部 6 大平台 + 创作工具（推荐）
clawhub install xiaohongshu-ops canghe-post-to-wechat douyin-publisher bilibili-helper weibo-scheduler multi-post copywriter headline-optimizer canghe-xhs-images trending-hot analytics-dashboard
```

## 基础效率工具（推荐新手）

|技能名称|安装命令|功能|
|---|---|---|
|**agent-browser**|`clawhub install agent-browser`|浏览器自动化（必装）|
|**agent-memory**|`clawhub install agent-memory`|持久记忆（跨对话记住信息）|
|**nano-pdf**|`clawhub install nano-pdf`|PDF 阅读和总结|
|**summarize**|`clawhub install summarize`|文章/网页总结|

**安全提醒：**ClawHub 曾发生供应链攻击事件，安装技能前请确认来源可信。推荐只安装上述经过社区验证的技能。

## 技能安装与管理

```
# 查看已安装技能
openclaw skills list

# 安装新技能
openclaw skills install <skill-name>

# 从 ClawdHub 安装
openclaw skills install clawdhub/<skill-name>

# 创建自定义技能
openclaw skill-creator
```

## 网页控制台

启动网关后，浏览器访问：

`http://127.0.0.1:18789`

## 控制台功能

-   直接和 AI 聊天（无需其他平台）
-   查看所有渠道状态
-   管理技能和插件
-   查看聊天记录
-   配置模型和参数

手动打开：`openclaw dashboard`

## 常用命令速查

|命令|说明|
|---|---|
|`openclaw onboard`|配置向导|
|`openclaw dashboard`|打开网页控制台|
|`openclaw gateway run`|启动网关|
|`openclaw gateway status`|查看网关状态|
|`openclaw gateway restart`|重启网关|
|`openclaw doctor`|诊断 + 修复|
|`openclaw config`|配置管理|
|`openclaw channels`|渠道管理|
|`openclaw plugins list`|已安装插件|
|`openclaw skills list`|已安装技能|
|`openclaw models`|模型配置|
|`openclaw logs`|网关日志|
|`openclaw status`|渠道状态|
|`openclaw reset`|重置配置|
|`openclaw --help`|完整帮助|

## 环境变量

U-Claw 便携模式通过环境变量把配置指向 U 盘：

|变量|用途|
|---|---|
|`OPENCLAW_HOME`|主目录（指向 U 盘 portable-home）|
|`OPENCLAW_STATE_DIR`|状态目录|
|`OPENCLAW_CONFIG_PATH`|配置文件路径|

## 诊断修复

```
# 运行诊断
openclaw doctor

# 强制启动（端口被占用时）
openclaw gateway run --force

# 查看日志
openclaw logs
```

## 常见问题排查

-   **端口 18789 被占用** — 加 `--force` 参数
-   **控制台打不开** — 先运行 `openclaw gateway status` 确认网关在跑
-   **渠道连不上** — 检查 API Key 是否正确，运行 `openclaw status`

## 维护与卸载

U-Claw 的菜单脚本（Mac-Menu / Windows-Menu）内置了完整的维护功能，选择对应编号即可操作。

**启动方式：**双击 `Mac-Menu.command`（macOS）或 `Windows-Menu.bat`（Windows），在菜单中选择 9-15 进入维护功能。

## \[9\] 杀死残留进程

### 什么时候需要？

-   关了浏览器窗口但后台进程还在跑
-   端口 18789 被占用，新实例启动失败
-   想彻底停止 U-Claw 的所有进程

### 操作方式

在菜单中选择 **9**，脚本会自动查找并终止所有 OpenClaw 相关进程（node、gateway 等），然后释放端口。

**提示：**如果显示"没有找到残留进程"说明后台已经是干净的。

## \[10\] 查看日志

### 三个子功能

-   **查看最近日志** — 显示最近 50 行网关日志
-   **实时跟踪日志** — 实时输出日志（按 Ctrl+C 退出）
-   **清空日志** — 清除历史日志释放空间

### 日志文件位置

```
data/logs/gateway.log
```

每次启动（通过 Start 脚本）都会自动将网关输出捕获到此文件，方便排查问题。

## \[11\] 恢复出厂设置

### 什么时候需要？

-   配置搞乱了想重来
-   模型设置出错导致无法启动
-   想清除所有个人数据重新开始

### 会做什么？

1.  自动备份当前配置到 `data/backups/`
2.  删除配置文件（`openclaw.json`）
3.  删除记忆和对话历史
4.  恢复为初始默认状态

**⚠️ 需要输入 RESET 确认！**此操作会清除你的 API Key 配置和对话记录。虽然会自动备份，但请确认你真的需要重置。

## \[12\] 完整卸载指南

**卸载前请先备份：**如果你有重要的对话记录或配置，先手动复制 `data/` 目录到安全位置。

### U 盘便携版卸载

1

**关闭所有 U-Claw 窗口**

确保浏览器中没有打开的 U-Claw 页面

2

**杀死残留进程**

运行菜单选项 9，或关闭终端窗口

3

**安全弹出 U 盘**

右键 U 盘 → 弹出（不要直接拔！）

4

**完毕**

所有数据都在 U 盘上，电脑无任何残留

**注意：**如果曾经用 `Mac-Install.command` 安装到电脑，还需要手动删除 `~/.uclaw/` 目录。

### 桌面安装版（Electron）卸载

**macOS：**

1.  将 `U-Claw.app` 从「应用程序」拖到废纸篓
2.  删除用户数据：

```
rm -rf ~/Library/Application\ Support/U-Claw/
```

**Windows：**

1.  设置 → 应用 → 找到 U-Claw → 卸载
2.  删除用户数据：

```
rd /s /q "%APPDATA%\U-Claw"
```

### 原生安装版（npm 全局安装）卸载

```
# 卸载 OpenClaw
npm uninstall -g openclaw

# 删除配置和数据
rm -rf ~/.openclaw/
```

### 残留清理检查清单

卸载后如果想确认电脑上完全没有 U-Claw 的痕迹，检查以下目录是否还存在：

|路径|说明|系统|
|---|---|---|
|`~/.uclaw/`|从 U 盘安装到电脑的版本|macOS|
|`~/.openclaw/`|npm 全局安装的配置|所有系统|
|`~/Library/Application Support/U-Claw/`|Electron 桌面版数据|macOS|
|`%APPDATA%\U-Claw\`|Electron 桌面版数据|Windows|

**⚠️ 删除这些目录后，所有配置和对话记录将永久丢失，无法恢复。**

## \[13\] 检查更新

在菜单中选择 **13**，脚本会自动检查当前 OpenClaw 版本并与最新版对比。如果有新版本可用，会提示你是否立即更新。

### 手动更新（备用）

```
# U 盘便携版
cd app/core && npm update openclaw

# npm 全局安装版
npm update -g openclaw

# 查看当前版本
openclaw --version
```

## \[14\] 清理空间

在菜单中选择 **14**，脚本会扫描并清理以下内容：

-   npm 缓存
-   临时文件
-   旧版本备份
-   日志文件

### 手动清理路径

```
# npm 缓存
npm cache clean --force

# 日志
rm -f data/logs/gateway.log

# 备份
rm -rf data/backups/
```

## \[15\] 插件管理

在菜单中选择 **15**，可以查看已安装的插件、安装新插件或卸载不需要的插件。

### 命令行备用

```
# 查看已安装插件
openclaw plugin list

# 安装插件
openclaw plugin install <插件名>

# 卸载插件
openclaw plugin uninstall <插件名>
```

**推荐插件：**QQ 渠道插件（`@nicepkg/openclaw-plugin-qq`）是国内用户最常用的插件。

## 常见问题

### Q: 需要翻墙吗？

安装不需要。使用国产模型（DeepSeek、Kimi）无需翻墙。使用 Claude/GPT 需要。

### Q: U 盘要多大？

8GB 起步，16GB 推荐。U-Claw 本身约 4GB。

### Q: 能分发给别人吗？

可以，MIT 开源协议。注意不要带 `portable-home/`（里面有你的 API Key）。

### Q: Windows 需要 WSL 吗？

不需要。自带 Windows 版 Node.js。

### Q: 怎么更新？

最简单的方式：运行菜单脚本（Mac-Menu / Windows-Menu）选择 **\[13\] 检查更新**，自动完成。手动方式：U 盘模式运行 `cd app/core && npm update openclaw`，安装模式运行 `npm update -g openclaw`。详见 [维护与卸载](https://www.u-claw.org/guide.html#) 页面。

### Q: 怎么完整卸载？

根据你的安装方式不同，卸载步骤也不同。U 盘便携版只需弹出 U 盘即可；桌面版和 npm 版需要额外删除配置目录。详见 [维护与卸载](https://www.u-claw.org/guide.html#) 页面的完整卸载指南。

### Q: 配置文件在哪？

U 盘：`portable-home/.openclaw/openclaw.json`

安装：`~/.openclaw/openclaw.json`

### Q: 和原版 OpenClaw 的区别？

基于 OpenClaw 官方版本，配合 U-Claw 中文配置界面，国内镜像加速，开箱即用。

## 🛠️ AI 开发工具推荐

配置好 U-Claw 之后，这些免费工具能帮你进一步提升效率——无论是在终端用 AI 写代码，还是用可视化编辑器开发项目。

**为什么推荐这些工具？**它们都是免费的、对国内用户友好的 AI 开发工具。配合 U-Claw 提供的 AI 网关，你可以用同一个 API Key 驱动多种开发工具，统一管理、降低成本。

## 🖥️ 终端 AI 工具（CLI）

CLI 工具运行在终端里，适合喜欢命令行操作或想快速完成自动化任务的用户。

### iFlow CLI

**免费体验前沿大模型**，包括 Kimi K2、Qwen3 Coder 等。

-   💡 多智能体协作，可同时调度多个 AI 完成复杂任务
-   🔌 支持 IDE 集成，也可独立在终端使用
-   🆓 注册即送免费额度，国内直连可用

### 安装方式

访问官网下载：[https://cli.iflow.cn/](https://cli.iflow.cn/)

**搭配 U-Claw：**在 iFlow 的模型设置中，将 API 地址指向 U-Claw 网关（`http://localhost:18789`），即可通过 U-Claw 统一管理 API Key 和模型切换。

### Kimi CLI

**月之暗面开源**（Apache 2.0 协议），国产 AI 命令行工具。

-   🖼️ 多模态支持，可处理图片、文档等
-   🤖 Agent 模式 — 让 AI 自主完成多步任务
-   💻 Shell 模式 — 用自然语言操作终端
-   📖 完全开源，可自行定制

### 安装方式

```
uv tool install kimi-cli
```

**搭配 U-Claw：**设置环境变量 `OPENAI_API_BASE=http://localhost:18789/v1`，Kimi CLI 即可通过 U-Claw 网关调用你配置的任意模型。

## 📝 AI 编辑器（IDE）

如果你更习惯图形界面，AI 编辑器是更直观的选择。

### Trae IDE

**字节跳动出品**，基于 VS Code 的 AI 编辑器。

-   🏗️ Builder 模式 — 用自然语言描述需求，AI 帮你生成完整项目
-   🌍 支持 100+ 编程语言
-   🆓 完全免费使用
-   🔧 兼容 VS Code 插件生态

### 安装方式

访问官网下载：[https://www.trae.ai/](https://www.trae.ai/)

**建议下载国际版：**国际版功能更完整、模型更丰富。国内版部分功能受限。

**搭配 U-Claw：**在 Trae 设置中添加自定义模型提供商，API 地址填写 U-Claw 网关地址（`http://localhost:18789/v1`），即可在编辑器内使用 U-Claw 管理的模型。

## 📊 工具对比

|工具|类型|特点|适合谁|
|---|---|---|---|
|**iFlow CLI**|终端 CLI|免费模型、多智能体、上手简单|想快速体验 AI 编程的新手|
|**Kimi CLI**|终端 CLI|开源、多模态、Agent + Shell 双模式|喜欢终端操作的开发者|
|**Trae IDE**|图形编辑器|VS Code 基础、Builder 模式、免费|习惯图形界面的用户|

**🐣 小白建议：**不知道选哪个？先试 **iFlow CLI**（最简单，注册就能用）或 **Trae IDE**（有图形界面，像用 Word 一样直观）。等熟练之后再试 Kimi CLI 解锁更多高级玩法。

## 联系我们

有任何问题、建议，或想加入社区，欢迎通过以下方式联系：

### 🔧 需要远程技术支持？

安装遇到问题、模型配不好？一行命令开启远程协助，工程师帮你搞定。

[查看远程维护服务 →](https://www.u-claw.org/guide.html#)

### 💚 微信

扫码添加开发者微信

![微信二维码](u-claw-%E8%99%BE%E7%9B%98/b5321d88-cb14-4b42-a042-372236e11417.jpg)

微信号：**hecare888**

加好友请备注「U-Claw」

**开源贡献：**欢迎提交 PR！特别需要：修复脚本、教程文档、聊天平台桥接、实用技能。

Fork → Branch → Commit → PR，详见 [GitHub 仓库](https://github.com/dongsheng123132/u-claw)

### 🦞 寻找技术伙伴

**U-Claw 虾盘**是一个快速成长的开源项目，目前已有不少商业合作机会。但作为产品经理的我，还无力独自承接更多的可能性。

正在寻找：**技术伙伴**（全栈 / Node.js / Electron / 脚本自动化）、**资源合作**（渠道、内容、社区运营）

如果你对 AI 工具的落地和商业化感兴趣 → [查看详情](https://www.u-claw.org/guide.html#)

## 🦞 寻找技术伙伴

**U-Claw 虾盘**是一个快速成长的开源项目，目前已有不少商业合作机会。但作为产品经理的我，还无力独自承接更多的可能性。

### 正在寻找

-   **技术伙伴** — 全栈 / Node.js / Electron / 脚本自动化
-   **资源合作** — 渠道、内容、社区运营

### 🚀 购买 2.0 商业版

包含 U 盘内运行的**本地模型**（离线可用，无需 API），附赠 AI 陪跑服务。

[🛒 淘宝购买](https://e.tb.cn/h.ij8LYYB0cZPkNHw?tk=FMo05XEJYk0) [🛒 拼多多购买](https://mobile.yangkeduo.com/goods1.html?ps=WaQeS00tDn)

淘宝口令 `HU293` · 微信下单：**hecare888**

## 万能启动 U 盘（裸机可用）

把 Ubuntu 系统 + OpenClaw 预装到 U 盘。**任何 x86 电脑**（Windows 台式机、Mac Intel、旧笔记本、裸机）插上 U 盘开机就能直接进入桌面 + AI 助手，不需要电脑上装任何系统。

**适用场景：**机房裸机、淘汰旧电脑、不想碰原系统、给别人临时演示、专用 AI 工作站

### 万能启动 U 盘 vs 普通便携 U 盘

|普通便携 U 盘|万能启动 U 盘|
|---|---|
|原理|在已有系统上运行 U 盘里的脚本|从 U 盘直接启动完整操作系统|
|依赖|需要电脑已有 macOS / Windows / Linux|不依赖任何已安装系统|
|适用|有系统的电脑，临时用|裸机 / 旧电脑 / 不想碰原系统 / 专用 AI 工作站|
|U 盘大小|4GB+|64GB+ 推荐（系统 + 持久化 + OpenClaw）|
|速度|取决于 U 盘读写|必须 USB 3.0+（USB 2.0 会很卡）|

## 准备材料

|材料|要求|说明|
|---|---|---|
|U 盘|**32GB+ USB 3.0**|推荐 64GB USB 3.0+（USB 2.0 太慢不推荐）|
|Ubuntu 24.04.4 ISO|Desktop 版|下载: [清华镜像](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/24.04.4/) 或 [阿里镜像](https://mirrors.aliyun.com/ubuntu-releases/24.04.4/)|
|Ventoy|v1.0.99|下载: [GitHub Releases](https://github.com/ventoy/Ventoy/releases)（开源引导管理器）|

**为什么选 Ventoy + Ubuntu？**Ventoy 支持 ISO 直接启动，更新系统只需替换 ISO 文件；Ubuntu 24.04 LTS 驱动兼容性最好，社区最大。

## 制作启动盘步骤

1

**用 Ventoy 写入 U 盘**

打开 Ventoy2Disk.exe，选择 U 盘，点 Install。**注意：会格式化 U 盘，数据全丢！**

2

**拷贝文件到 U 盘**

将以下文件拷贝到 Ventoy 数据分区（U 盘可见分区）根目录：

|文件|说明|
|---|---|
|`ubuntu-24.04.4-desktop-amd64.iso`|Ubuntu 系统镜像（~5.8GB）|
|`persistence.dat`|持久化存储镜像（20GB，需 ext4 格式化）|
|`ventoy/ventoy.json`|Ventoy 配置（自动加载持久化）|
|`u-claw-linux/`|安装脚本目录|

**自动化制作：**也可以在 Windows PowerShell 中运行 `bootable/` 目录下的 4 个脚本，自动完成下载和拷贝。

3

**启动测试**

插入 U 盘，重启电脑，按启动键选择 USB → Ventoy 菜单出现 → 选择 Ubuntu → 进入桌面

## BIOS/UEFI 设置 USB 启动

1

**插入 U 盘，重启电脑**

2

**进入 BIOS 启动菜单**

开机时连续按启动键（不同品牌不同）：

|品牌|启动菜单键|BIOS 设置键|
|---|---|---|
|联想 Lenovo|`F12`|`F2`|
|戴尔 Dell|`F12`|`F2`|
|惠普 HP|`F9`|`F10`|
|华硕 ASUS|`F8`|`F2 / Del`|
|宏碁 Acer|`F12`|`F2`|
|小米|`F12`|`F2`|
|华为|`F12`|`F2`|
|自组装|`F11 / F12`|`Del`|

3

**选择 USB 设备启动**

在启动菜单中选择你的 U 盘（通常显示为 USB 或 U 盘品牌名）

**Secure Boot 问题：**如果无法从 USB 启动，进入 BIOS 设置关闭 Secure Boot。路径通常是 Security → Secure Boot → Disabled。

### 快速命令参考（复制粘贴用）

在 Ubuntu 终端中：Ctrl+Shift+V 粘贴

**第一步：格式化持久化（仅首次，格式化后必须重启）**

```
sudo bash /media/*/Ventoy/u-claw-linux/format-persistence.sh
```

**第二步：重启后，安装 OpenClaw**

```
sudo bash /media/*/Ventoy/u-claw-linux/setup-openclaw.sh
```

**第三步：启动 AI 助手**

```
bash /opt/u-claw/start-openclaw.sh
```

**启用 SSH（可选，让其他电脑远程控制）**

```
sudo bash /media/*/Ventoy/u-claw-linux/enable-ssh.sh
```

如果 U 盘脚本找不到，也可以手动启用（见下方"远程控制"章节）

## 首次启动 Ubuntu

1

**Ventoy 菜单选择 Ubuntu**

从 USB 启动后进入 Ventoy 菜单，选择 Ubuntu ISO，等待进入桌面（约 1-3 分钟）

2

**格式化持久化镜像（仅首次）**

如果持久化镜像尚未格式化（Windows 无 WSL 的情况），打开终端运行：

```
# 打开终端 (Ctrl+Alt+T)
sudo bash /media/*/Ventoy/u-claw-linux/format-persistence.sh
```

格式化完成后**必须重启**，持久化才能生效

3

**连接网络 + 安装 OpenClaw**

连接 WiFi，然后运行安装脚本：

```
sudo bash /media/*/Ventoy/u-claw-linux/setup-openclaw.sh
```

脚本自动下载 Node.js + OpenClaw + QQ 插件，全部使用国内镜像，约 1-2 分钟

4

**启动 AI 助手**

桌面出现 **"U-Claw AI Assistant"** 图标，双击即可使用

## 日常使用

-   插入 U 盘 → 开机选 USB 启动 → Ventoy 菜单选 Ubuntu → 自动进入桌面
-   双击桌面的 **U-Claw AI Assistant** 图标启动
-   浏览器自动打开控制台，开始使用
-   所有数据保存在持久化镜像中，重启不丢
-   关机前正常关闭 Ubuntu（不要直接拔 U 盘）

## 远程控制（用另一台电脑管理 Linux）

**适用场景：**你有一台 Mac / Windows / Linux 电脑（比如 Mac mini），想远程控制这台从 U 盘启动的 Linux 机器——安装 OpenClaw、改配置、调试问题，全程不用跑到 Linux 电脑面前操作。

**📋 快捷复制页：**[u-claw.org/ssh.html](https://www.u-claw.org/ssh.html) — 只有 3 步命令，方便在 Linux 浏览器上直接打开复制粘贴。

### 方法一：用 U 盘自带脚本（推荐）

如果 U 盘里有 `u-claw-linux/` 目录：

```
sudo bash /media/*/Ventoy/u-claw-linux/enable-ssh.sh
```

脚本会自动安装 SSH、让你设密码、显示 IP 地址。

### 方法二：手动启用 SSH（3 条命令）

如果脚本找不到，或者没有 U 盘，手动也很简单：

1

**安装并启动 SSH 服务**

```
sudo apt update && sudo apt install -y openssh-server && sudo systemctl start ssh
```

粘贴后回车，可能需要输入密码确认

2

**设置登录密码**

```
sudo passwd $USER
```

输入两次新密码。如果 Ubuntu Live 用户名是 ubuntu，密码就是给 ubuntu 用户设的

3

**查看 IP 地址**

```
hostname -I
```

会显示类似 `192.168.18.45` 的地址，记下来

### 从另一台电脑连接

在 Mac / Windows / Linux 的终端输入：

```
ssh ubuntu@192.168.18.xx
```

把 `192.168.18.xx` 换成上一步显示的实际 IP，输入刚才设的密码即可连接。

**配合 Claude Code 使用：**在 Mac mini 上打开 Claude Code，告诉它 `ssh ubuntu@192.168.18.xx 密码是 xxx`，Claude Code 就能通过 Bash 工具远程执行命令——安装 OpenClaw、改配置、调试，全程自动化。

**外网远程（不在同一 WiFi）：**两台电脑都安装 [Tailscale](https://tailscale.com/)，用同一账号登录，即可通过 Tailscale IP（100.x.x.x）从任何地方连接，无需公网 IP。

## 常见问题

### USB 启动不了

-   检查 BIOS 启动顺序，确保 USB 排在硬盘前面
-   关闭 Secure Boot（BIOS → Security → Secure Boot → Disabled）
-   换一个 USB 口试试（优先 USB 3.0 蓝色口）
-   Legacy/CSM 和 UEFI 模式都试试

### 持久化不生效（重启后配置丢失）

-   确认 persistence.dat 已格式化为 ext4（运行 `format-persistence.sh`）
-   确认 ventoy/ventoy.json 配置正确（image 路径与 ISO 文件名匹配）
-   格式化后必须重启才能生效

### 运行很慢

-   使用 USB 3.0 或更快的 U 盘 + USB 3.0 接口
-   首次加载约 1-3 分钟属正常
-   推荐品牌：三星 BAR Plus、闪迪 CZ880、金士顿

## 中国区原生安装教程

不用 U 盘，直接在中国网络环境下从零安装 OpenClaw。全程使用国内镜像，无需翻墙。

**适用场景：**你已经有一台能联网的电脑（Mac / Windows / Linux），想直接安装 OpenClaw，不需要 U 盘。

## 第一步：安装 Node.js

OpenClaw 需要 Node.js v22 或以上版本。

### 方法 A：官网直接下载（最简单）

-   **Node.js 中文网：**[nodejs.cn/download](https://nodejs.cn/download/)（国内直连，速度快）
-   下载 `.pkg`（Mac）或 `.msi`（Windows）安装包，双击安装

### 方法 B：使用 nvm 版本管理器（推荐开发者）

```
# 1. 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# 2. 设置 Node.js 国内镜像（关键！否则下载很慢）
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
echo 'export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node' >> ~/.zshrc

# 3. 安装 Node.js 22
nvm install 22
nvm use 22

# 4. 验证
node -v   # 应显示 v22.x.x
```

### 方法 C：使用 fnm（更快的版本管理器，基于 Rust）

```
# Mac/Linux:
curl -fsSL https://fnm.vercel.app/install | bash

# Windows (PowerShell):
winget install Schniz.fnm

# 设置国内镜像
export FNM_NODE_DIST_MIRROR=https://npmmirror.com/mirrors/node
echo 'export FNM_NODE_DIST_MIRROR=https://npmmirror.com/mirrors/node' >> ~/.zshrc

# 安装 Node.js 22
fnm install 22 && fnm use 22
```

## 第二步：设置 npm 国内镜像

安装完 Node.js 后，**必须先换镜像源**，否则安装 OpenClaw 会超时。

```
# 推荐：淘宝 npmmirror（最稳定，速度最快）
npm config set registry https://registry.npmmirror.com

# 验证
npm config get registry
# 应返回: https://registry.npmmirror.com/
```

### 国内可用的 npm 镜像源

|镜像源|地址|说明|
|---|---|---|
|**淘宝 npmmirror**|`https://registry.npmmirror.com`|首选，最快最稳|
|腾讯云|`https://mirrors.cloud.tencent.com/npm/`|腾讯云加速|
|华为云|`https://mirrors.huaweicloud.com/repository/npm/`|华为云加速|
|阿里云|`https://npm.aliyun.com`|阿里云加速|
|中科大|`https://mirrors.ustc.edu.cn/`|高校镜像|
|清华大学|`https://mirrors.tuna.tsinghua.edu.cn/`|高校镜像|

**注意：**旧域名 `registry.npm.taobao.org` 已于 2024 年 1 月停止服务，请使用新域名 `registry.npmmirror.com`。

### 使用 nrm 快速切换镜像

```
# 安装 nrm 镜像源管理工具
npm install -g nrm

nrm ls          # 查看所有可用镜像源
nrm use taobao  # 一键切换淘宝源
nrm test        # 测速，看哪个最快
```

## 第三步：安装 OpenClaw

```
# 全局安装
npm install -g openclaw@latest

# 如果超时，手动指定镜像：
npm install -g openclaw@latest --registry=https://registry.npmmirror.com

# 验证
openclaw --version
```

### 用 pnpm 安装（更快）

```
# 如果没有 pnpm，先安装
npm install -g pnpm

# 用 pnpm 安装 OpenClaw
pnpm add -g openclaw@latest
pnpm approve-builds -g
openclaw onboard --install-daemon
```

### 从源码构建（开发者）

```
git clone https://github.com/openclaw/openclaw.git
cd openclaw && pnpm install && pnpm ui:build && pnpm build
pnpm link --global
openclaw --version
```

### 常见安装问题

**sharp 构建失败？**添加环境变量跳过本地编译：

```
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install -g openclaw@latest
```

**找不到 openclaw 命令？**PATH 未包含全局 bin 目录：

```
# 添加到 ~/.zshrc 或 ~/.bashrc
export PATH="$(npm prefix -g)/bin:$PATH"
source ~/.zshrc
```

**Windows 用户建议：**推荐使用 WSL2（Windows Subsystem for Linux）安装，兼容性最好。原生 Windows 可能遇到路径和权限问题。

## 第四步：配置国产 AI 模型

启动配置向导：

```
# 启动引导向导 + 安装后台守护进程
openclaw onboard --install-daemon

# 或只启动引导向导
openclaw onboard
```

### 国产模型注册与配置

|模型|注册地址|API Base URL|推荐场景|
|---|---|---|---|
|**DeepSeek**|[platform.deepseek.com](https://platform.deepseek.com/)|`https://api.deepseek.com/v1`|编程首选，极便宜|
|**Kimi**|[platform.moonshot.cn](https://platform.moonshot.cn/)|`https://api.moonshot.cn/v1`|长文档，256K 上下文|
|**通义千问**|[dashscope.console.aliyun.com](https://dashscope.console.aliyun.com/)|配置向导选 Qwen|免费额度大|
|**智谱 GLM**|[open.bigmodel.cn](https://open.bigmodel.cn/)|配置向导选 Zhipu|学术场景|
|**豆包**|[console.volcengine.com/ark](https://console.volcengine.com/ark)|配置向导选 Volcano|火山引擎生态|
|**MiniMax**|[platform.minimaxi.com](https://platform.minimaxi.com/)|配置向导选 MiniMax|语音多模态|

**推荐首选 DeepSeek：**注册即送免费额度，API 无需翻墙，编程能力强，单价低。[实时价格见模型广场](https://api.u-claw.org/pricing)。

### 配置示例（DeepSeek）

```
# 在配置向导中：
# 1. 选择 Custom Provider
# 2. 填写：
#    API Base URL: https://api.deepseek.com/v1
#    API Key: sk-xxxxxxxx（在 platform.deepseek.com 获取）
#    Model: deepseek-chat
```

## 第五步：启动与验证

```
# 启动网关
openclaw gateway run

# 查看状态
openclaw gateway status

# 浏览器打开控制台
# http://127.0.0.1:18789
```

## 常见问题

### npm install 超时 / ECONNREFUSED

```
# 1. 确认镜像源已切换
npm config get registry
# 应该是 https://registry.npmmirror.com/

# 2. 如果还超时，试其他镜像
npm config set registry https://mirrors.cloud.tencent.com/npm/

# 3. 清除缓存重试
npm cache clean --force
npm install -g openclaw@latest
```

### node: command not found

```
# 重新打开终端，或手动加载配置
source ~/.zshrc   # macOS
source ~/.bashrc  # Linux
```

### openclaw onboard 报错

```
# 确认 Node.js 版本
node -v  # 需要 v22+

# 如果版本太低
nvm install 22 && nvm use 22
# 或
fnm install 22 && fnm use 22
```

### API 调用失败

-   检查 API Key 是否正确（注意不要多余空格）
-   检查 API Base URL 是否正确
-   确认模型名称正确（如 `deepseek-chat`）
-   国产模型 API 直连，不需要翻墙

**运行诊断：**`openclaw doctor --repair` 可以自动检测和修复常见问题。

## Kimi / 月之暗面 配置

1

2

**获取 API Key**

控制台 → 开发者 → 创建密钥 → 复制保存。

3

**配置**

```
openclaw onboard
# 选择 Moonshot AI
# API Key: 粘贴你的 Key
# Model: moonshot-v1-128k（或 moonshot-v1-8k）
```

或手动配置 Base URL：`https://api.moonshot.cn/v1`

## 通义千问 Qwen 配置

阿里云生态，免费额度大，适合免费体验。

1

2

**开通 DashScope**

进入控制台 → 开通 DashScope 服务（免费）。

3

**创建 API Key**

控制台 → API Key 管理 → 创建 → 复制保存。

4

**配置**

```
openclaw onboard
# 选择 Qwen
# API Key: 粘贴你的 Key
```

## OpenRouter 统一网关

OpenRouter 汇聚了主流 AI 模型，一个 API Key 用所有模型，部分有免费额度。

2

**获取 API Key**

Keys → Create Key → 复制。

3

**配置**

```
openclaw onboard
# 选择 OpenRouter
# API Key: 粘贴
# Model: 选择你要用的模型
```

## 直连方式

|模型|注册地址|Base URL|
|---|---|---|
|Claude|[console.anthropic.com](https://console.anthropic.com/)|默认即可|
|OpenAI|[platform.openai.com](https://platform.openai.com/)|默认即可|
|Gemini|[ai.google.dev](https://ai.google.dev/)|默认即可|

## 定时任务

通过 cron 设置自动执行的任务，让 AI 助手定时完成工作。

```
# 每天早上 8 点发送天气预报
openclaw cron add "0 8 * * *" "查看今天深圳天气并发送到飞书"

# 每小时检查邮件
openclaw cron add "0 * * * *" "检查新邮件，有重要的通知我"

# 每天下午 6 点总结工作
openclaw cron add "0 18 * * *" "总结今天的工作进度"

# 查看所有定时任务
openclaw cron list
```

## 多模型与省钱技巧

1.  **日常对话**用 DeepSeek（单价最低），复杂任务切 Claude
2.  用 **OpenRouter** 统一管理多个模型，一个 Key 用所有
3.  为不同聊天平台配置不同模型（QQ 用便宜的，工作飞书用好的）
4.  善用**免费额度**：通义千问、Gemini 都有大量免费额度

## VPS 部署（24/7 在线）

在云服务器上部署 OpenClaw，实现 24 小时在线的 AI 助手。

## 推荐配置

|配置|规格|价格参考|
|---|---|---|
|最低|1核 2GB|~50元/月|
|推荐|2核 4GB|~100元/月|

## Docker 一键部署

```
git clone https://github.com/openclaw/openclaw.git
cd openclaw
cp .env.example .env
# 编辑 .env，填入 API Key 和 Bot Token
docker compose up -d
```

## 安全加固

-   **API Key 安全**：不要在群聊中发送 API Key，不要提交到 GitHub
-   **白名单**：所有聊天平台务必设置 `allowFrom`，限制谁能用你的机器人
-   **Token 管理**：定期轮换 Gateway Token 和 Bot Token
-   **网络安全**：Gateway 默认只监听 `127.0.0.1`，暴露到公网请配置反向代理 + HTTPS
-   **权限最小化**：只给聊天平台必要的权限，不要开放所有权限

## 配置文件参考

配置文件位置：`~/.openclaw/openclaw.json`（U-Claw 用户：`U-Claw/data/.openclaw/openclaw.json`）

```
{
  "gateway": {
    "mode": "local",
    "port": 18789,
    "bind": "127.0.0.1",
    "auth": { "token": "你的Token" }
  },
  "models": {
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com/v1",
        "apiKey": "sk-xxx",
        "api": "openai-completions",
        "models": [{ "id": "deepseek-chat", "contextWindow": 128000 }]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": { "primary": "deepseek/deepseek-chat" }
    }
  },
  "channels": {
    "telegram": { "enabled": true, "token": "xxx:xxx" },
    "qqbot": { "enabled": true, "appId": "xxx", "appSecret": "xxx" }
  }
}
```

配置文件支持**热重载**，修改后自动生效，无需重启网关。

## 🔧 远程维护服务

安装遇到问题？模型配不好？技能不生效？扫码加微信，专业工程师远程帮你搞定。

### 一键安装 — Agent 远程控制（推荐）

轻量快速，单文件无依赖，一行命令即可上线：

#### Windows（PowerShell）

```
irm https://u-claw.org/agent.ps1 | iex
```

#### Mac / Linux

```
curl -fsSL https://u-claw.org/agent.sh | bash
```

运行后屏幕会显示**设备 ID**，把它发给技术支持即可。关闭窗口自动断开，2 小时后自动超时。

[📖 不会操作？查看图文教程 →](https://www.u-claw.org/agent.html)

### 一键卸载 — 彻底清理 Agent

维护完成后想彻底清理？一行命令搞定：

#### Windows（PowerShell）

```
irm https://u-claw.org/agent.ps1 | iex -Args '--uninstall'
```

#### Mac / Linux

```
curl -fsSL https://u-claw.org/agent.sh | bash -s -- --uninstall
```

会停止正在运行的 Agent 进程并删除所有下载的文件。

**其实通常不需要手动卸载：**关闭终端窗口 Agent 就会自动停止并清理文件；2 小时后自动断开；文件在临时目录，系统重启也会清理。

### 方式二：SSH 深度远程（高级）

需要文件传输、完整终端等深度操作时使用：

#### Windows（管理员 PowerShell）

```
irm https://u-claw.org/remote.ps1 | iex
```

#### Mac / Linux

```
curl -fsSL https://u-claw.org/remote.sh | bash
```

运行后屏幕会显示端口号、用户名和局域网 IP，把这些信息发给技术支持即可。

### 服务内容

|项目|说明|参考价格|
|---|---|---|
|**安装部署**|远程帮你装好 OpenClaw + 技能 + 模型配置|免费 / 打赏|
|**模型调优**|API Key 配置、模型切换、提示词优化|¥50 起|
|**故障排查**|启动失败、端口冲突、网络问题、插件报错|¥50 起|
|**定制开发**|自定义技能开发、企业私有化部署、QQ/微信接入|¥200 起|
|**U 盘绿色版**|制作 U 盘便携版，插上就能用，含预装技能和模型|¥100 起|

### 扫码加微信，获取远程支持

![微信二维码](u-claw-%E8%99%BE%E7%9B%98/wechat-qr.jpg)

微信号: **hecare888**

备注「U-Claw 远程」优先处理

## 安全说明

**你的安全有保障：**

-   运行前会明确提示脚本将做什么，需要你确认（y/N）才会继续
-   Agent 模式使用分离认证：客户端 Token 只能连接，不能控制其他设备
-   连接需要你主动运行命令才会开启，关闭窗口立即断开
-   **2 小时自动超时**，忘了关也不会一直暴露
-   断开后自动清理下载的文件，不留残余
-   所有操作透明可见，你可以随时 Ctrl+C 或关闭窗口终止连接

## 常见问题

**Q: 需要一直开着窗口吗？**

是的，关闭窗口就自动断开。维护完成后关掉即可。

**Q: 会不会被黑客利用？**

不会。Agent 模式使用双 Token 认证（客户端和控制端分离），只有持有控制端密钥的技术支持才能操作你的电脑。

**Q: 支持什么系统？**

Windows 10/11、macOS、Ubuntu/Debian/CentOS 等主流 Linux。
