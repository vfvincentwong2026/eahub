# EAHub · HoloSophy 知识库

HoloSophy 开源知识库的**极简展示层**：纯静态单页应用，原生 HTML/CSS/JS，无框架、无构建步骤。

线上地址：<https://hub.eastastar.com>

## HoloSophy 三层架构

```
┌───────────────────┐      ┌────────────────────────┐      ┌────────────────────┐
│     holosophy     │ ───> │      holosophy-mcp     │ ───> │       eahub        │
│  Obsidian 知识库   │      │  Cloudflare Worker API │      │   极简展示前端      │
│  (Markdown 源数据) │      │  mcp.eastastar.com     │      │  hub.eastastar.com │
└───────────────────┘      └────────────────────────┘      └────────────────────┘
     知识生产层                   数据服务层                        展示层（本仓库）
```

- **holosophy**：Obsidian Markdown 知识库，全部内容的源头。
- **holosophy-mcp**：Cloudflare Worker，将知识库以 REST API 形式开放（CORS 全开）。
- **eahub**（本仓库）：纯展示层，浏览器端直接调用 API 渲染，自身无后端、无数据库。

## 本站角色

只读的纯展示前端，功能刻意保持极简：

- 顶部搜索框（防抖 300ms，实时调用 API）
- 四个分类的筛选 chips（客户端过滤，显示条数）
- 知识卡片网格（名称 / 分类徽章 / 摘要 / 标签）
- 点击卡片弹出详情层，Markdown 渲染完整内容
  - `[[wikilink]]` 转为可点击词条，点击即以该词条搜索
  - `$$LaTeX$$` 以代码块样式展示（不渲染公式）
  - 渲染依赖 CDN 的 marked + DOMPurify；CDN 不可用时自动降级为 `<pre>` 纯文本

## 数据源 API

Base URL：`https://mcp.eastastar.com`

```
GET /api/knowledge/search?q=<关键词>&limit=500
→ { "success": true, "data": [ ... ], "total": N }
```

- `q` 为空时返回全部条目
- 条目字段：`id, name, chinese_name, category, summary, content, tags, links, created_at`
- `category` 取值：`概念` / `量子力学相关` / `历史地理相关` / `天文新玄学`
- `tags`、`links` 为逗号分隔字符串；`content` 为完整 Markdown（含 `[[wikilink]]`、`$$LaTeX$$`、引用块、frontmatter）
- 前端一律使用绝对 URL 请求，无需本地代理

## 本地开发

任意静态服务器指向本目录即可，例如：

```bash
npx serve .
# 或
python -m http.server 8080
```

## 部署

Cloudflare Workers 静态资源托管，自定义域 `hub.eastastar.com`（配置见 `wrangler.jsonc`）：

```bash
npx wrangler deploy
```

## 相关仓库

- [holosophy](https://github.com/vfvincentwong2026/holosophy) — 知识库（Obsidian）
- [holosophy-mcp](https://github.com/vfvincentwong2026/holosophy-mcp) — Worker API
- [eahub](https://github.com/vfvincentwong2026/eahub) — 本前端

## License

MIT
