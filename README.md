<!-- markdownlint-disable MD033 -->
<p align="center">
  <img src="https://img.shields.io/github/stars/vfvincentwong2026/eahub?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/vfvincentwong2026/eahub?style=social" alt="GitHub forks">
  <img src="https://img.shields.io/github/license/vfvincentwong2026/eahub" alt="License">
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fhub.eastastar.com" alt="Website">
  <img src="https://img.shields.io/github/last-commit/vfvincentwong2026/eahub" alt="Last commit">
</p>

# EAHub · Minimalist Knowledge Base Browser

> **EAHub** – A lightweight, high‑performance static frontend for the HoloSophy knowledge base.  
> Built with pure HTML, CSS, and JavaScript – zero dependencies, instant loading.

---

## 📖 Background

The HoloSophy knowledge base contains a wealth of structured information, but previously lacked a lightweight, attractive, and easy‑to‑use frontend. Traditional wiki engines are often too heavy, while static site generators require complex build pipelines.  

**EAHub** solves this: it is a **pure static, zero‑build** knowledge browser. Just drop your Markdown files into a directory, and you get an elegant site with search, navigation, and reading capabilities. Whether for personal notes, team documentation, or open‑source project manuals, EAHub adapts quickly.

---

## ✨ Features

- 🚀 **Extremely lightweight & fast** – No frameworks, no build tools, loads in milliseconds.
- 🔍 **Smart search** – Real‑time fuzzy search with debounce, plus `[[wikilink]]` auto‑jump.
- 📖 **Immersive reading** – Card‑based list with detail popups for focused content.
- 🎨 **Responsive design** – Adapts to all screen sizes, from desktop to mobile.
- ⚙️ **Highly configurable** – Modify site title, logo, theme color, and more via a simple config file.
- 📦 **Data‑driven** – All content from Markdown files with support for metadata (title, tags, summary).
- 🌐 **Internationalisation‑ready** – Interface language can be switched (currently supports English and Chinese).
- 🔗 **One‑click deploy** – Host on any static service (GitHub Pages, Vercel, Netlify, etc.).

---

## 🎮 Quick Start (Playground)

Get your own knowledge base site up in **only three steps**.

### 1. Live Demo

No installation required – try it right now: [**https://hub.eastastar.com**](https://hub.eastastar.com)  
Explore the search, navigation, and reading experience.

### 2. Run Locally (Development)

Clone and serve the project locally:

```bash
git clone https://github.com/vfvincentwong2026/eahub.git
cd eahub

# Start a simple static server (Python 3 recommended)
python3 -m http.server 8000

# Or with Node.js serve package
npx serve .
Then open http://localhost:8000 in your browser.

3. Deploy Your Own Instance
Since EAHub is fully static, you can deploy it to free platforms with one click:

https://vercel.com/button
https://www.netlify.com/img/deploy/button.svg

After deployment, simply replace the Markdown files in the data/ directory with your own content.

📁 Data Directory Structure
All knowledge base content is stored in the data/ folder. Each .md file represents one entry.
A recommended structure:

text
data/
├── Concepts/
│   ├── Consciousness.md
│   └── Energy.md
├── Technology/
│   ├── Blockchain.md
│   └── AI.md
└── Index.md          (optional, used as homepage introduction)
Each Markdown file can include Front Matter (YAML) for metadata, e.g.:

markdown
---
title: Consciousness
tags: [philosophy, cognitive science]
summary: Exploring the nature and definition of consciousness
---
# Consciousness

The main content goes here…
Note: [[wikilink]] syntax will be automatically resolved as internal links to entries with matching titles.

⚙️ Configuration
Adjust site behaviour by editing js/config.js (located at the project root):

javascript
const CONFIG = {
  siteTitle: 'EAHub',          // Browser tab title
  siteLogo: '📚',              // Navigation bar icon (emoji or image URL)
  themeColor: '#4A90D9',       // Primary colour (buttons, highlights, etc.)
  searchDebounce: 300,         // Search debounce delay (milliseconds)
  defaultLang: 'en',           // Default language ('en' or 'zh')
  dataDir: 'data/',            // Data directory path
};
Save and refresh the page to apply changes.

🛠 Project Structure
text
eahub/
├── index.html          # Main entry page
├── css/
│   └── style.css       # All styles (including responsive)
├── js/
│   ├── main.js         # Core logic (load, render, search)
│   └── config.js       # User configuration
├── data/               # Your knowledge base Markdown files
├── assets/             # Images, icons, etc. (optional)
├── LICENSE
└── README.md
All code is dependency‑free, making maintenance simple.

❓ FAQ
Q: Can I use sub‑directories for categories?
A: Yes – any folder hierarchy under data/ will be automatically recognised as categories.

Q: How do I change the favicon?
A: Replace the favicon link in the <head> section of index.html.

Q: Does it support images and attachments?
A: Yes – standard Markdown image syntax ![alt](url) works. Place images in assets/ or use external CDN links.

Q: Does search support Chinese word segmentation?
A: Currently it uses simple string matching. A more intelligent index will be added in future releases.

Q: Can I host multiple knowledge bases in one site?
A: Yes – either change dataDir in config, or use URL parameters to switch directories (customisation required).

🤝 Contributing
Contributions of all kinds are warmly welcomed – issue reports, feature suggestions, documentation improvements, or code patches.

📌 Reporting Issues
Please search existing Issues first.

If none match, create a new Issue using the provided template (if available).

Clearly describe steps to reproduce, expected behaviour, and actual behaviour; include screenshots or browser console errors if helpful.

🚀 Pull Request Process
Fork this repository to your own account.

Clone your fork locally: git clone https://github.com/your-username/eahub.git

Create a new branch: git checkout -b feat/your-feature-name or fix/issue-description

Make your changes, ensuring code style consistency (see guidelines below).

Commit using Conventional Commits, e.g.:

feat: add dark theme

fix: resolve search box overlap on mobile

docs: update deployment links in README

Push to your fork: git push origin feat/your-feature-name

Open a Pull Request against the main branch of this repository.

Describe your changes and link related Issues (if any).

🧹 Code Style Guidelines
HTML: Use semantic tags, indent with 2 spaces.

CSS: Follow BEM naming (optional), avoid !important, keep selectors simple.

JavaScript: Use ES6 syntax, camelCase for variable names, single‑responsibility functions.

Comments: Add clear comments (English or Chinese) for non‑obvious logic.

Testing: No automated tests yet; manually verify your changes do not break existing functionality.

🧪 Development Tips
Always preview locally with python3 -m http.server before committing.

Use browser developer tools (F12) for debugging.

Maintain the zero‑dependency principle – avoid introducing external libraries unless absolutely necessary and discussed.

📋 Areas We Need Help With
🌐 Localisation – Add interface translations for Japanese, Korean, etc.

🎨 Theme system – Dark mode, custom colour schemes.

📚 Documentation – More detailed user guides and API explanations.

🐛 Performance – Speed up search for very large datasets.

🗺 Roadmap
□ Dark mode (planned for v1.1)
□ Search index improvements (support Chinese word segmentation)
□ Tag filtering – filter entries by tags
□ Reading progress – save position locally
□ Export as PDF or EPUB (optional)
📜 License
This project is licensed under the MIT License – see the LICENSE file for details.

🙏 Acknowledgements
Thanks to the HoloSophy community for the knowledge content and inspiration.

Thanks to all early adopters, contributors, and everyone who starred the project.

Thanks to the open‑source community for the excellent tools that inspired this work.

⭐ If this project helps you, please give it a star – it means a lot to us!

中文版 · Chinese Version
以下为完整中文翻译，供参考。

EAHub · 极简知识库浏览器
EAHub – 为 HoloSophy 知识库打造的轻量、高性能纯静态前端展示层。
原生 HTML/CSS/JS，零依赖，秒开即用。

📖 项目背景
HoloSophy 知识库承载了大量结构化知识内容，但早期缺乏一个轻量、美观、易用的前端展示界面。传统的 Wiki 引擎往往过于笨重，而静态站点生成器又需要复杂的构建流程。
EAHub 旨在解决这一痛点：它是一款 纯静态、零构建 的知识浏览器，只需将 Markdown 文件放入指定目录，即可生成一个具备搜索、导航、阅读核心功能的优雅站点。无论是个人笔记、团队文档，还是开源项目手册，EAHub 都能快速适配。

✨ 功能亮点
🚀 极致轻量与快速 – 无框架、无构建工具，打开即用，首屏加载毫秒级。

🔍 智能搜索 – 实时模糊搜索，支持防抖优化，并可识别 [[wikilink]] 格式自动跳转。

📖 沉浸阅读体验 – 知识卡片列表 + 详情弹窗，内容清晰聚焦。

🎨 响应式设计 – 从桌面到手机，自动适配各种屏幕尺寸。

⚙️ 高度可定制 – 通过简单配置即可修改站点标题、Logo、主题色等。

📦 数据驱动 – 所有内容基于 Markdown 文件，支持元数据（标题、标签、摘要）。

🌐 国际化友好 – 界面语言可轻松切换（目前支持中英文）。

🔗 一键部署 – 可托管于任意静态服务（GitHub Pages、Vercel、Netlify 等）。

🎮 快速上手（玩法）
只需要 三步，你就能拥有自己的知识库站点。

1. 在线体验
不需要任何安装，直接访问我们的线上示例：https://hub.eastastar.com
你可以先感受一下搜索、阅读和交互方式。

2. 本地运行（开发者模式）
bash
git clone https://github.com/vfvincentwong2026/eahub.git
cd eahub

# 启动一个简单的静态服务器（推荐 Python3）
python3 -m http.server 8000

# 或者使用 Node.js 的 serve 包
npx serve .
然后在浏览器打开 http://localhost:8000。

3. 一键部署你自己的实例
EAHub 是纯静态的，你可以一键部署到以下平台（免费）：

https://vercel.com/button
https://www.netlify.com/img/deploy/button.svg

部署后，只需替换 data/ 目录下的 Markdown 文件即可替换全部内容。

📁 数据目录结构
所有知识库内容存放在 data/ 文件夹下，每个 .md 文件代表一个词条。
建议结构：

text
data/
├── 概念/
│   ├── 意识.md
│   └── 能量.md
├── 技术/
│   ├── 区块链.md
│   └── 人工智能.md
└── 索引.md           (可选，作为首页介绍)
每个 Markdown 文件支持 Front Matter（YAML 格式）定义元数据，例如：

markdown
---
title: 意识
tags: [哲学, 认知科学]
summary: 意识的本质与定义探讨
---
# 意识

正文内容……
注意：[[wikilink]] 语法会被自动解析为内部跳转链接，指向对应标题的文件。

⚙️ 自定义配置
编辑 js/config.js 调整站点行为：

javascript
const CONFIG = {
  siteTitle: 'EAHub',          // 浏览器标签标题
  siteLogo: '📚',              // 导航栏图标（可以是 emoji 或图片 URL）
  themeColor: '#4A90D9',       // 主题色（影响按钮、高亮等）
  searchDebounce: 300,         // 搜索防抖延迟（毫秒）
  defaultLang: 'zh',           // 默认语言（'zh' 或 'en'）
  dataDir: 'data/',            // 数据目录路径
};
修改后刷新页面即可生效。

🛠 文件结构概览
text
eahub/
├── index.html          # 主页面
├── css/
│   └── style.css       # 全部样式（含响应式）
├── js/
│   ├── main.js         # 核心逻辑（加载数据、渲染、搜索）
│   └── config.js       # 用户配置文件
├── data/               # 你的知识库 Markdown 文件
├── assets/             # 图片、图标等静态资源（可选）
├── LICENSE
└── README.md
所有代码均无外部依赖，维护简单。

❓ 常见问题
Q: 我可以使用子目录分类吗？
A: 可以，data/ 下的任意层级文件夹都会被自动识别为分类标签。

Q: 如何修改站点图标（favicon）？
A: 在 index.html 的 <head> 中替换 favicon 链接即可。

Q: 支持图片和附件吗？
A: 支持 Markdown 标准的 ![alt](url) 图片语法，请将图片放在 assets/ 或外部 CDN。

Q: 搜索是否支持中文分词？
A: 当前为简单字符串匹配，后续版本会引入更智能的索引。

Q: 我可以在同一站点托管多个知识库吗？
A: 可以，但需要修改 config.js 中的 dataDir 指向不同目录，或通过 URL 参数切换。

🤝 贡献指南
我们非常欢迎任何形式的贡献。

📌 如何报告问题
请先搜索 Issues 是否已有相同问题。

若无，请新建一个 Issue，并使用提供的模板（如有）。

描述清楚复现步骤、预期行为和实际表现，附上截图或浏览器控制台错误信息更佳。

🚀 提交代码（Pull Request）流程
Fork 本仓库到你的账号下。

克隆 你的 Fork 到本地：git clone https://github.com/你的用户名/eahub.git

创建新分支：git checkout -b feat/你的功能名 或 fix/修复的问题

进行修改，并确保代码风格统一（详见下方规范）。

提交：使用 Conventional Commits 规范，例如：

feat: 添加暗色主题

fix: 修复搜索框在移动端重叠问题

docs: 更新 README 中的部署链接

推送 到你的 Fork：git push origin feat/你的功能名

在本仓库中 新建 Pull Request，目标分支为 main。

描述你的改动，关联相关 Issue（如果有）。

🧹 代码规范
HTML：语义化标签，缩进 2 空格。

CSS：使用 BEM 命名法（可选），避免 !important，保持选择器简洁。

JavaScript：使用 ES6 语法，变量命名采用 camelCase，函数尽量单一职责。

注释：关键逻辑必须添加英文/中文注释，方便他人理解。

测试：目前项目未集成自动化测试，但请手动验证你的改动不影响现有功能。

🧪 开发建议
修改前先运行 python3 -m http.server 在本地预览。

使用浏览器开发者工具（F12）调试。

尽量保持零依赖原则，不要引入外部库（除非绝对必要并经过讨论）。

📋 当前需要帮助的方向
🌐 多语言支持（添加日语、韩语等界面翻译）

🎨 主题系统（暗色模式、自定义配色方案）

📚 文档完善（更详细的用户指南和 API 说明）

🐛 性能优化（大数据量下的搜索提速）

🗺 路线图
□ 暗色模式（计划 v1.1）
□ 搜索索引优化（支持中文分词）
□ 标签筛选（按标签过滤词条）
□ 阅读进度记忆（本地存储）
□ 导出为 PDF 或 EPUB（可选）
📜 许可证
本项目采用 MIT 许可证，详见 LICENSE 文件。

🙏 致谢
感谢 HoloSophy 社区提供的知识内容与灵感。

感谢所有早期试用者、贡献者和星星支持者。

感谢开源社区提供的优秀工具。

⭐ 如果这个项目对你有帮助，请点个 Star 支持我们！

Made with ❤️ by Vincent Wong & Contributors
