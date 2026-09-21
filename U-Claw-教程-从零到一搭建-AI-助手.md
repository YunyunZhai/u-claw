---
created: 2026-09-18T13:19:42 (UTC +08:00)
tags: []
source: https://www.u-claw.org/tutorial.html
author: 
---

# U-Claw 教程 - 从零到一搭建 AI 助手

> ## Excerpt
> U-Claw 完整教程：手工安装 OpenClaw、配置 AI 模型、接入聊天平台，小白也能看懂。

---
从零开始，搭建你的私人 AI 助手 —— 小白也能看懂

## 什么是 OpenClaw？

OpenClaw 是一个**开源 AI 助手框架**，可以理解为：

🤖 AI 机器人

接入 QQ、飞书、Telegram 等 20+ 聊天平台

🧠 智能网关

调用 DeepSeek、Kimi、Claude 等 50+ AI 模型

🔧 全能助手

52+ 技能：发邮件、管日程、操作笔记、搜索

⏰ 自动化

设定时任务、自动执行工作流

### 核心架构

```
你的聊天平台 ←→ OpenClaw Gateway ←→ AI 模型
  (QQ/飞书/TG)      (你的电脑)        (DeepSeek/Kimi/Claude)
                         ↕
                    技能 & 工具
              (邮件/笔记/日程/搜索...)
```

**U-Claw** 是 OpenClaw 的便携版 —— 把整套系统做成 U 盘，插上就能用，还能安装到电脑。所有依赖走国内镜像，无需翻墙。

## 选择安装方式

|方式|适合谁|需要联网|难度|耗时|
|---|---|---|---|---|
|**A. U 盘安装**|完全小白|不需要|简单|2 分钟|
|**B. 一键脚本**|会用终端的用户|需要|简单|5 分钟|
|**C. 手工安装**|想深入理解的开发者|需要|中等|15 分钟|

## 方式 A：U 盘安装 推荐小白

最简单的方式，不需要联网，不需要终端知识。

#### 插入 U-Claw U 盘

把 U-Claw U 盘插入电脑的 USB 口。

#### 运行启动脚本

-   **Mac：**双击 `Mac-Start.command`
-   **Windows：**双击 `Windows-Start.bat`

Mac 提示「未验证的开发者」？右键脚本 → 打开。

#### 首次配置

浏览器自动打开配置页面，选择 AI 模型、填入 API Key，完成！

### 安装到电脑（可选）

如果不想每次都插 U 盘：

-   **Mac：**双击 `Mac-Install.command`，安装到 `~/.uclaw/`
-   **Windows：**双击 `Windows-Install.bat`，安装到 `%USERPROFILE%\.uclaw\`

## 方式 B：一键脚本安装

需要联网，通过终端一行命令完成安装。

### Mac / Linux / WSL2

```
curl -fsSL https://openclaw.ai/install.sh | bash
```

### Windows (PowerShell 管理员)

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
iwr -useb https://openclaw.ai/install.ps1 | iex
```

### 验证安装

```
openclaw --version    # 查看版本
openclaw onboard      # 启动配置向导
```

国内用户如果下载慢，脚本会自动检测并使用国内镜像。

## 方式 C：完全手工安装 开发者推荐

一步一步手动安装，理解每个组件。适合想深入学习、或网络环境特殊的用户。

### 第一步：安装 Node.js 22+

OpenClaw 运行在 Node.js 上，需要 v22 或更高版本。

**什么是 Node.js？**Node.js 是一个 JavaScript 运行环境。你不需要会写 JavaScript，只需要安装它作为 OpenClaw 的运行基础。类似于「Java 程序需要 JDK」。

#### 方法 A：官网下载（最简单）

-   国内直连：[nodejs.cn/download](https://nodejs.cn/download/)（速度快）
-   官网：[nodejs.org/download](https://nodejs.org/en/download)

下载 `.pkg`（Mac）或 `.msi`（Windows）安装包，双击安装。

#### 方法 B：nvm 版本管理器（开发者推荐）

```
# 1. 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# 2. 设置国内镜像（关键！否则下载很慢）
echo 'export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node' >> ~/.zshrc
source ~/.zshrc

# 3. 安装 Node.js 22
nvm install 22
nvm use 22

# 4. 验证
node -v   # 应显示 v22.x.x
```

#### 方法 C：fnm（更快，基于 Rust）

```
# Mac/Linux
curl -fsSL https://fnm.vercel.app/install | bash
echo 'export FNM_NODE_DIST_MIRROR=https://npmmirror.com/mirrors/node' >> ~/.zshrc
source ~/.zshrc
fnm install 22

# Windows (PowerShell)
winget install Schniz.fnm
fnm install 22
```

### 第二步：设置 npm 国内镜像

**必须做！**不换镜像的话，后续安装 OpenClaw 会超时失败。

```
# 设置淘宝 npmmirror（首选，最快最稳）
npm config set registry https://registry.npmmirror.com

# 验证
npm config get registry
# 应返回: https://registry.npmmirror.com/
```

|镜像源|地址|说明|
|---|---|---|
|**淘宝 npmmirror**|`registry.npmmirror.com`|⭐ 首选|
|腾讯云|`mirrors.cloud.tencent.com/npm/`|腾讯加速|
|华为云|`mirrors.huaweicloud.com/repository/npm/`|华为加速|

### 第三步：安装 OpenClaw

#### 方式 A：npm 安装（通用）

```
# 全局安装
npm install -g openclaw@latest

# 如果超时，手动指定镜像
npm install -g openclaw@latest --registry=https://registry.npmmirror.com

# 验证
openclaw --version
```

#### 方式 B：pnpm 安装（更快）

```
# 如果没有 pnpm，先安装
npm install -g pnpm

# 用 pnpm 安装 OpenClaw
pnpm add -g openclaw@latest
pnpm approve-builds -g
openclaw onboard --install-daemon
```

#### 方式 C：从源码构建（开发者）

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

### 第四步：启动配置向导

```
# 推荐：启动向导 + 安装后台服务
openclaw onboard --install-daemon

# 或只启动向导
openclaw onboard
```

向导会引导你完成：模型选择 → API Key → 聊天平台 → 后台服务。详见下方[模型配置](https://www.u-claw.org/tutorial.html#model-overview)章节。

### 第五步：验证一切正常

```
openclaw status          # 查看运行状态
openclaw doctor --repair # 诊断并修复问题
openclaw dashboard       # 打开网页控制台
```

**安装完成！**配置文件位于 `~/.openclaw/openclaw.json`，支持热重载（修改后自动生效）。

## 模型选择指南

|模型|特长|价格|需翻墙|推荐场景|
|---|---|---|---|---|
|**DeepSeek**|编程、逻辑|~1元/百万token|不需要|⭐ 日常首选|
|**Kimi**|长文档 256K|中等|不需要|长文分析|
|**通义千问**|中文理解好|大量免费额度|不需要|免费体验|
|**智谱 GLM**|学术 NLP|有免费额度|不需要|学术场景|
|**Claude**|最强综合|较贵|需要|复杂推理|
|**GPT-4**|广泛兼容|较贵|需要|通用|

**推荐：**国内用户先选 DeepSeek，注册即送免费额度，API 直连无需翻墙。

### 新手首次配置推荐

如果你是第一次配置 AI 模型，以下模型**配置最简单**，适合入门：

|模型|配置难度|说明|
|---|---|---|
|**Kimi (月之暗面)**|⭐ 最简单|注册即用，向导直接选择|
|**智谱 GLM**|⭐ 简单|免费额度，配置直观|
|**通义千问 Qwen**|⭐ 简单|阿里云生态，免费额度大|
|**DeepSeek**|⭐⭐ 简单|需填 Custom Provider + Base URL|
|**腾讯混元**|⭐⭐ 中等|腾讯云生态|

**注意：**不建议新手使用淘宝等渠道购买的第三方 API Key。这类 Key 来源不明，调试困难，容易出问题。请直接到各模型官网注册获取。

## DeepSeek 配置 国内首选

#### 创建 API Key

登录后进入控制台 → 左侧菜单「API Keys」→ 点击「创建 API Key」→ 复制保存。

**注意：**API Key 只显示一次！请立即复制保存到安全的地方。

#### 在 OpenClaw 中配置

**方式 A：通过向导（推荐）**

```
openclaw onboard
# 选择 Custom Provider
# Base URL: https://api.deepseek.com/v1
# API Key: 粘贴你的 Key
# Model: deepseek-chat
```

**方式 B：直接编辑配置文件**

```
# 编辑 ~/.openclaw/openclaw.json
{
  "models": {
    "providers": {
      "deepseek": {
        "baseUrl": "https://api.deepseek.com/v1",
        "apiKey": "sk-你的Key",
        "api": "openai-completions",
        "models": [{
          "id": "deepseek-chat",
          "name": "DeepSeek Chat",
          "contextWindow": 128000
        }]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": { "primary": "deepseek/deepseek-chat" }
    }
  }
}
```

#### 测试

```
openclaw gateway restart
openclaw tui
# 在终端中对话测试
```

## Kimi / 月之暗面 配置

#### 获取 API Key

控制台 → 开发者 → 创建密钥 → 复制保存。

#### 配置

```
openclaw onboard
# 选择 Moonshot AI
# API Key: 粘贴你的 Key
# Model: moonshot-v1-128k（或 moonshot-v1-8k）
```

或手动配置 Base URL：`https://api.moonshot.cn/v1`

## 通义千问 Qwen 配置 免费额度大

#### 开通 DashScope

进入控制台 → 开通 DashScope 服务（免费）。

#### 创建 API Key

控制台 → API Key 管理 → 创建 → 复制保存。

#### 配置

```
openclaw onboard
# 选择 Qwen
# API Key: 粘贴你的 Key
```

## 国际模型（Claude / GPT / Gemini）

国际模型 API 需要翻墙或使用中转站。推荐使用 [OpenRouter](https://openrouter.ai/) 统一管理。

### 通过 OpenRouter（推荐）

OpenRouter 汇聚了主流 AI 模型，一个 API Key 用所有模型，部分有免费额度。

#### 获取 API Key

Keys → Create Key → 复制。

#### 配置

```
openclaw onboard
# 选择 OpenRouter
# API Key: 粘贴
# Model: 选择你要用的模型
```

### 直连方式

|模型|注册地址|Base URL|
|---|---|---|
|Claude|[console.anthropic.com](https://console.anthropic.com/)|默认即可|
|OpenAI|[platform.openai.com](https://platform.openai.com/)|默认即可|
|Gemini|[ai.google.dev](https://ai.google.dev/)|默认即可|

## QQ 机器人 国内首选 · 1 分钟搞定

腾讯官方已为 OpenClaw 开放 QQ 机器人能力。**完全免费，无需翻墙。**

#### 创建机器人

点击「创建机器人」→ 填写基本信息 → 获得 **AppID** 和 **AppSecret**。

#### 安装 QQ 插件并配置

```
# 安装 QQ 插件（U-Claw 用户已预装，跳过此步）
openclaw plugins install @sliverp/qqbot@latest

# 绑定 QQ 机器人
openclaw channels add --channel qqbot --token "你的AppID:你的AppSecret"

# 设置白名单（重要！否则任何人都能用你的机器人）
openclaw config set channels.qqbot.allowFrom "你的QQ号"

# 重启生效
openclaw gateway restart
```

#### 测试

在 QQ 中搜索你的机器人，私聊或 @机器人 发消息，AI 就会回复。

**安全提醒：**一定要设置 `allowFrom` 白名单！默认是 `*`（任何人都能用），会消耗你的 API 额度。

## Telegram 机器人

#### 找到 BotFather

在 Telegram 中搜索 `@BotFather`，点击开始对话。

#### 创建机器人

发送 `/newbot` → 按提示输入机器人名称和用户名 → 获得 **Bot Token**（格式：`123456:ABC-DEF...`）。

#### 在 OpenClaw 中配置

```
# 方式 A：通过向导
openclaw onboard    # 选择 Telegram，输入 Token

# 方式 B：命令行
openclaw channels add --channel telegram --token "你的BotToken"
openclaw gateway restart
```

#### 配对你的账号

首次对机器人发消息时，会收到一个配对码。在终端运行：

```
openclaw pairing approve telegram 配对码
```

#### 测试

再次给机器人发消息，应该收到 AI 回复。

## 飞书机器人 企业推荐

#### 获取凭证

在应用的「凭证与基础信息」页面，复制 **App ID** 和 **App Secret**。

#### 配置权限

进入「权限管理」，开启消息相关权限（接收消息、发送消息、获取用户信息等）。

飞书支持批量导入权限 JSON，在 OpenClaw 文档中可找到完整权限列表。

#### 配置事件订阅

进入「事件订阅」→ 选择 WebSocket 模式（推荐，无需公网 IP）。

#### 绑定到 OpenClaw

```
openclaw channels add --channel feishu --token "你的AppID:你的AppSecret"
openclaw gateway restart
```

#### 发布应用

在飞书管理后台审核通过后，即可在飞书中使用。

## 微信机器人 社区插件

```
# 安装微信插件（基于 iPad 协议）
openclaw plugins install @icesword760/openclaw-wechat

# 重启网关
openclaw gateway restart

# 按提示扫码登录微信
```

**注意：**微信机器人基于社区开发的 iPad 协议，可能不稳定。建议用于个人测试，不要用于重要业务。

## Discord 机器人

#### 创建 Bot

左侧菜单 Bot → Add Bot → 复制 **Bot Token**。

#### 邀请到服务器

OAuth2 → URL Generator → 选择 `bot` 权限 → 生成链接 → 打开链接邀请到你的服务器。

#### 配置

```
openclaw channels add --channel discord --token "你的BotToken"
openclaw gateway restart
```

## 使用场景

💻 编程助手

「帮我写一个 Python 爬虫」「这段代码有 bug 帮我看看」

✍️ 内容创作

「写一篇 AI 趋势文章」「总结这个链接的内容」

📧 办公自动化

「发邮件给 xxx」「提醒我明天 3 点开会」

🔍 信息查询

「今天深圳天气」「搜索 GitHub 上最新 AI 项目」

## 技能系统

U-Claw 已预装 52 个技能，开箱即用。

|技能|用途|示例|
|---|---|---|
|`github`|GitHub 操作|「帮我看 #123 这个 Issue」|
|`summarize`|内容总结|「总结这个网页」|
|`weather`|天气查询|「今天北京天气」|
|`himalaya`|邮件管理|「帮我发邮件」|
|`obsidian`|笔记操作|「在 Obsidian 创建笔记」|
|`coding-agent`|编程委派|「帮我重构这个函数」|

```
# 搜索更多技能
openclaw skills search 翻译

# 安装新技能
openclaw skills install @xxx/skill-name
```

## 定时任务

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

## 命令速查

|命令|用途|
|---|---|
|`openclaw status`|查看运行状态|
|`openclaw dashboard`|打开网页控制台|
|`openclaw tui`|终端对话模式|
|`openclaw gateway restart`|重启网关|
|`openclaw gateway stop`|停止网关|
|`openclaw doctor --repair`|诊断并修复|
|`openclaw configure`|重新配置|
|`openclaw logs --follow`|实时查看日志|
|`openclaw plugins list`|列出已安装插件|
|`openclaw cron list`|查看定时任务|

## 故障排除

### "Node.js v22+ is required"

```
# 检查当前版本
node -v

# 如果低于 v22，升级
nvm install 22    # 如果用 nvm
fnm install 22    # 如果用 fnm
# 或从 nodejs.cn 下载最新版
```

### npm install 超时

```
# 设置淘宝镜像
npm config set registry https://registry.npmmirror.com

# 清除缓存重试
npm cache clean --force
npm install -g openclaw@latest
```

### AI 不回复消息

1.  检查 API Key 是否正确：`openclaw configure`
2.  检查网关是否在运行：`openclaw status`
3.  查看错误日志：`openclaw logs --follow`
4.  运行诊断：`openclaw doctor --repair`

### 端口被占用

```
# 查看谁占用了端口
# Mac/Linux:
lsof -i :18789
# Windows:
netstat -ano | findstr ":18789"

# 杀死进程后重启
openclaw gateway restart
```

### sharp 构建失败

```
# 跳过 sharp 本地编译
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install -g openclaw@latest
```

`sharp` 是图片处理库，某些系统缺少编译工具会报错。上面的环境变量可跳过本地编译。

### 找不到 openclaw 命令（PATH 问题）

```
# 查看全局 bin 目录
npm prefix -g

# 添加到 PATH（写入 ~/.zshrc 或 ~/.bashrc）
export PATH="$(npm prefix -g)/bin:$PATH"
source ~/.zshrc
```

### Windows：原生 vs WSL2

原生 Windows 安装可能遇到路径、权限、编译工具问题。**推荐使用 WSL2**：

```
# 安装 WSL2（管理员 PowerShell）
wsl --install

# 然后在 WSL2 Ubuntu 中按 Mac/Linux 步骤安装
```

### 完全重置

```
# 重置所有配置
openclaw reset --scope full

# 或手动删除
rm -rf ~/.openclaw    # Mac/Linux
rd /s /q %USERPROFILE%\.openclaw    # Windows
```

## 多模型与省钱技巧

1.  **日常对话**用 DeepSeek（~1元/百万 token），复杂任务切 Claude
2.  用 **OpenRouter** 统一管理多个模型，一个 Key 用所有
3.  为不同聊天平台配置不同模型（QQ 用便宜的，工作飞书用好的）
4.  善用**免费额度**：通义千问、Gemini 都有大量免费额度

## VPS 部署（24/7 在线）

### 推荐配置

|配置|规格|价格参考|
|---|---|---|
|最低|1核 2GB|~50元/月|
|推荐|2核 4GB|~100元/月|

### Docker 一键部署

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

## 社区资源

|分类|项目|说明|
|---|---|---|
|**U-Claw**|[U-Claw 官网](https://u-claw.org/)|下载、文档、技能市场|
|[GitHub](https://github.com/dongsheng123132/u-claw)|源码、Issue、Release|
|**上游**|[OpenClaw 官方](https://github.com/openclaw/openclaw)|上游仓库|
|[ClawHub](https://github.com/openclaw/clawhub)|官方技能市场|
|**教程**|[hello-claw](https://github.com/datawhalechina/hello-claw)|Datawhale 体系化入门教程|
|[openclaw-docs](https://github.com/yeuxuan/openclaw-docs)|276 篇源码级深度文档|
|[awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)|社区精选技能合集|
|**社区教程**|[官方安装手册（中文）](https://docs.openclaw.ai/zh-CN/install)|OpenClaw 官方中文安装文档，含 pnpm、源码构建等|
|**工具**|[NapCatQQ](https://github.com/NapNeko/NapCatQQ)|QQ 机器人框架（备选）|
|[openclaw-wechat](https://github.com/icesword0760/openclaw-wechat)|微信接入插件|
