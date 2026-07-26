# EAHub · HoloSophy Knowledge Base

<p align="center">
  <img src="https://img.shields.io/github/v/release/vfvincentwong2026/eahub?include_prereleases" alt="GitHub release">
  <img src="https://img.shields.io/github/stars/vfvincentwong2026/eahub?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/vfvincentwong2026/eahub?style=social" alt="GitHub forks">
  <img src="https://img.shields.io/github/license/vfvincentwong2026/eahub" alt="License">
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fhub.eastastar.com" alt="Website">
  <img src="https://img.shields.io/github/last-commit/vfvincentwong2026/eahub" alt="Last commit">
  <img src="https://img.shields.io/github/contributors/vfvincentwong2026/eahub" alt="Contributors">
</p>

<p align="center">
  <strong>Current stable release: <a href="https://github.com/vfvincentwong2026/eahub/releases/tag/v1.0.0">v1.0.0</a></strong>
</p>

<p align="center">
  <strong>A minimalist frontend for the HoloSophy open‑source knowledge base</strong><br>
  Pure static SPA · vanilla HTML/CSS/JS · no framework · no build · instant loading
</p>

<p align="center">
  <a href="https://hub.eastastar.com">🌐 Live Demo</a> ·
  <a href="#-quick-start">🚀 Quick Start</a> ·
  <a href="#-contributing">🤝 Contribute</a>
</p>

---

## 📖 The Story

The HoloSophy knowledge base holds a large volume of structured information, but it has long lacked a **lightweight, elegant, and easy‑to‑use** frontend.

Traditional wiki engines are too heavy; static site generators demand complex build pipelines. **EAHub was born to solve this** – just drop your Markdown files in, and you get a knowledge site with search, filtering, and reading capabilities, all in milliseconds.

> **Core belief**: Knowledge should be easy to see, not trapped by tools.

---

## 🧩 Three‑Layer Architecture
┌───────────────────┐ ┌────────────────────────┐ ┌────────────────────┐
│ holosophy │ ───> │ holosophy-mcp │ ───> │ eahub │
│ Obsidian Vault │ │ Cloudflare Worker API │ │ Minimal Frontend │
│ (Markdown source) │ │ mcp.eastastar.com │ │ hub.eastastar.com │
└───────────────────┘ └────────────────────────┘ └────────────────────┘
Knowledge Production Data Service Layer Presentation Layer (this repo)

text

- **holosophy** – The Obsidian Markdown vault; the single source of truth.
- **holosophy-mcp** – A Cloudflare Worker that exposes the knowledge base as a REST API (CORS‑enabled).
- **eahub** (this repo) – A read‑only frontend that calls the API directly from the browser – no backend, no database.

---

## ✨ What It Does

A read‑only, deliberately minimal frontend:

- 🔍 **Search** – real‑time fuzzy search with 300ms debounce, calling the API live.
- 🏷️ **Category chips** – client‑side filtering with counts for each category.
- 📇 **Card grid** – each card shows name, category badge, summary, and tags.
- 📖 **Detail modal** – full Markdown rendering for the entry content:
  - `[[wikilink]]` becomes a clickable term that triggers a search for that term.
  - `$$LaTeX$$` is displayed as a code block (no rendering).
  - Rendering uses `marked` + `DOMPurify` from CDN; falls back to `<pre>` plaintext if they are unavailable.

---

## 🚀 Quick Start

### 1️⃣ Live Demo
Visit the live instance: **[https://hub.eastastar.com](https://hub.eastastar.com)**

### 2️⃣ Run Locally

```bash
git clone https://github.com/vfvincentwong2026/eahub.git
cd eahub

# Serve with any static server
npx serve .
# or
python -m http.server 8080
3️⃣ Deploy Your Own
Because EAHub is fully static, you can deploy it instantly to:

Vercel / Netlify / Cloudflare Pages

📦 Data API
Base URL: https://mcp.eastastar.com

text
GET /api/knowledge/search?q=<keyword>&limit=500
→ { "success": true, "data": [ ... ], "total": N }
q empty returns all entries.

Fields: id, name, chinese_name, category, summary, content, tags, links, created_at

category values: 概念 (Concept), 量子力学相关 (Quantum), 历史地理相关 (History/Geography), 天文新玄学 (Astro/New Metaphysics)

tags and links are comma‑separated strings; content is full Markdown (including [[wikilink]], $$LaTeX$$, blockquotes, frontmatter).

The frontend always uses absolute URLs – no local proxy needed.

🛠 Deploy to Cloudflare Workers
bash
npx wrangler deploy
Custom domain hub.eastastar.com is configured in wrangler.jsonc.

🤝 Contributing
EAHub is community‑driven – we welcome every kind of contribution!

Where You Can Help
Type	Examples
🐛 Bug reports	Found an issue? Open an issue with clear steps.
💡 Feature ideas	Suggest new features or improvements.
📝 Documentation	Improve README, add usage examples, translate docs.
🎨 Theming	Dark mode, custom colour schemes, UI polish.
🌐 Localisation	Add support for Japanese, Korean, etc.
⚡ Performance	Speed up search for large datasets, optimise rendering.
🧪 Testing & feedback	Test new features and provide feedback.
Contribution Workflow
Fork this repo.

Create a new branch: git checkout -b feat/your-feature

Make your changes – follow the code style guidelines.

Commit using Conventional Commits:

bash
git commit -m "feat: add dark theme"
git commit -m "fix: resolve mobile search overlap"
git commit -m "docs: update deployment links"
Push and open a Pull Request against the main branch.

Code Style
HTML: semantic tags, 2‑space indentation.

CSS: avoid !important, keep selectors simple.

JavaScript: ES6, camelCase, single‑responsibility functions.

Comments: add clear comments (English or Chinese) for non‑obvious logic.

🌟 Community & Recognition
⭐ Star the project – it helps others discover it.

🍴 Fork and submit PRs – your name will appear in the contributor list.

📢 Share and recommend – spread the word.

✨ Contributors
<a href="https://github.com/vfvincentwong2026/eahub/graphs/contributors"> <img src="https://contrib.rocks/image?repo=vfvincentwong2026/eahub" /> </a>
📂 Related Repositories
holosophy – Knowledge base (Obsidian vault)

holosophy-mcp – Worker API

eahub – This frontend

📄 License
MIT © vfvincentwong2026

<p align="center"> <strong>Knowledge deserves to be seen – EAHub makes it simple.</strong><br> <sub>Made with ❤️ by Vincent Wong &amp; Contributors</sub> </p>
🇨🇳 中文摘要
EAHub 是 HoloSophy 开源知识库的极简展示前端，纯静态、零依赖、秒开即用。它通过调用 holosophy-mcp 提供的 API 获取知识内容，并提供了搜索、分类筛选、卡片浏览和详情弹窗等核心功能。项目采用 MIT 许可证，欢迎任何形式的贡献（报告问题、提交代码、完善文档、翻译等）。

当前稳定版本：v1.0.0
