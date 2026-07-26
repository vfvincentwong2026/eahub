# 🦄 Hey there, future contributor!

Welcome to the **EAHub** party! We're super glad you're here.  
Whether you're a coding wizard, a documentation ninja, or just someone who spotted a typo and wants to fix it – **you belong here**.

**EAHub** is a **universal, minimalist frontend** for knowledge bases. It can display **any** knowledge content – philosophy, tech docs, mythology, personal notes, team wikis – you name it.  
This doc is your friendly guide to making your first (or fiftieth) contribution as smooth and enjoyable as possible.

Let's dive in! 🏊

---

## 🧭 Table of Contents
- [What can I do?](#-what-can-i-do)
- [How to report a bug or suggest a feature](#-how-to-report-a-bug-or-suggest-a-feature)
- [The magical Pull Request process](#-the-magical-pull-request-process)
- [Code style? We got this](#-code-style-we-got-this)
- [Development tips for the brave](#-development-tips-for-the-brave)
- [Communication & vibe](#-communication--vibe)

---

## 🎯 What can I do?

We accept all kinds of contributions – no contribution is too small!  
Here are some ideas to get you started:

- 🐛 **Squash bugs** – find an issue, fix it, and become a hero.
- ✨ **Add features** – got a cool idea? Let's hear it!
- 📝 **Improve docs** – clarify confusing parts, fix typos, add examples.
- 🌍 **Translate** – help us speak more languages (Japanese, Korean, Spanish, Indonesian, etc.).
- 🎨 **Design stuff** – themes, icons, or even a new logo.
- 💬 **Give feedback** – tell us what works and what doesn't.

**Not sure where to start?** Check the [Issues](https://github.com/vfvincentwong2026/eahub/issues) tab and look for labels like `good first issue` or `help wanted`. They're perfect for beginners.

---

## 🕵️ How to report a bug or suggest a feature

Found a glitch? Have a brilliant idea? Here's how to let us know:

1. **Search first** – maybe someone already reported it. Use the [Issues](https://github.com/vfvincentwong2026/eahub/issues) search bar.
2. If no one has, **open a new issue** and use the template (if available). If there's no template, just be clear:
   - For bugs: tell us what happened, what you expected, and steps to reproduce. Include your browser and OS if relevant.
   - For features: describe the problem you're solving and how your idea helps.
3. Add screenshots or GIFs – they're worth a thousand words.

Remember: we're all humans (mostly). Be kind and constructive. 💖

---

## 🚀 The magical Pull Request process

Ready to send us your code? Awesome! Follow these steps and you'll be a contributor in no time.

1. **Fork** the repository (click the fork button at the top right).
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/your-username/eahub.git
   cd eahub
Create a new branch – give it a descriptive name:

bash
git checkout -b feat/your-awesome-feature
# or fix/bug-description
Make your changes – have fun, but stay within the code style (see below).

Test it – run the project locally and play with it to make sure nothing breaks.

Commit using Conventional Commits.
Examples:

text
feat: add dark theme toggle
fix: prevent search crash on empty query
docs: update installation instructions
Push to your fork:

bash
git push origin feat/your-awesome-feature
Open a Pull Request – go to the original repo and click "New Pull Request".
Choose your branch and fill in the PR template (if any). Describe what you did, why, and link any related issues.

We'll review it as soon as possible. We might ask for tweaks – that's normal and friendly!

🧹 Code style? We got this
We're not super strict, but we appreciate consistency. Here's our loose style guide:

HTML – semantic tags, indent with 2 spaces.

CSS – keep selectors simple; BEM naming is nice but not required. Avoid !important unless you have a really good reason.

JavaScript – use ES6 syntax, camelCase for variables, keep functions small and focused.

Comments – add comments for non-obvious logic (English or Chinese – both are fine).

No new dependencies – we're proudly dependency‑free. If you think we need a library, open an issue first to discuss.

Pro tip: Run python3 -m http.server and test your changes in the browser. It's easy and effective.

🧪 Development tips for the brave
Always test on at least two browsers (Chrome and Firefox are good).

Check mobile responsiveness – resize your browser or use DevTools.

Keep an eye on performance – we want EAHub to be snappy even with hundreds of entries.

If you're adding a new feature, think about how it might affect existing ones.

💬 Communication & vibe
We're a friendly bunch. Here's how we roll:

Issues and PRs are our main communication channels.

Be respectful, patient, and open to feedback.

We follow the Contributor Covenant Code of Conduct – so no bullying, harassment, or toxic behaviour.

If you're unsure about anything, just ask! We'd rather answer a "silly" question than have you struggle in silence.

📦 Release process (for maintainers)
If you're a maintainer and ready to cut a new release:

Make sure all changes for the release are merged into the main branch.

Update the version number in js/config.js (if applicable) and any other files that reference it.

Create a new tag following Semantic Versioning, e.g. v1.0.0:

bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
(Optional) Draft a release on GitHub – include a changelog and link to the tag.

Deploy the new version to production (if applicable).

🎉 Thank you!
Every contribution, no matter how small, makes EAHub better. We truly appreciate your time and effort.

And hey – once your PR is merged, you'll be listed as a contributor. You'll also earn our eternal gratitude (and maybe a virtual high‑five ✋).

Now go forth and make EAHub even more awesome!

Happy coding! 🚀

🇨🇳 中文摘要 · 辅助阅读
EAHub 是一个通用的知识库展示前端框架，可以用来展示任何知识内容（哲学、技术文档、神话、个人笔记、团队维基……）。

我们欢迎所有形式的贡献：

🐛 报告 Bug

✨ 提出新功能

📝 改进文档

🌍 翻译界面

🎨 设计主题/图标

💬 提供反馈

贡献流程：Fork → 创建分支 → 修改 → 提交（遵循 Conventional Commits）→ Push → 发起 Pull Request。

代码风格宽松：HTML 缩进 2 空格、CSS 避免 !important、JavaScript 使用 ES6 + camelCase、零依赖原则。

沟通上我们友善、尊重，遵循贡献者公约。如有疑问，随时提问！

维护者发布流程：合并变更 → 更新版本号 → 打 tag（如 v1.0.0）→ 推送 tag → 发布 GitHub Release。

感谢你的贡献！🎉
