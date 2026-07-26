## 📦 Release process (for maintainers)

If you're a maintainer and ready to cut a new release:

1. Make sure all changes for the release are merged into the `main` branch.
2. Update the version number in `js/config.js` (if applicable) and any other files that reference it.
3. Create a new tag following Semantic Versioning, e.g. `v1.0.0`:
   ```bash
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0


# 🦄 Hey there, future contributor!

Welcome to the **EAHub** party! We're super glad you're here.  
Whether you're a coding wizard, a documentation ninja, or just someone who spotted a typo and wants to fix it – **you belong here**.

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
- 🌍 **Translate** – help us speak more languages (Japanese, Korean, Spanish…).
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

🎉 Thank you!
Every contribution, no matter how small, makes EAHub better. We truly appreciate your time and effort.

And hey – once your PR is merged, you'll be listed as a contributor. You'll also earn our eternal gratitude (and maybe a virtual high‑five ✋).

Now go forth and make EAHub even more awesome!

Happy coding! 🚀

## 📦 Release process (for maintainers)

If you're a maintainer and ready to cut a new release:

1. Make sure all changes for the release are merged into the `main` branch.
2. Update the version number in `js/config.js` (if applicable) and any other files that reference it.
3. Create a new tag following Semantic Versioning, e.g. `v1.0.0`:
   ```bash
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0


🇨🇳 中文版 · Chinese Version
以下为完整中文翻译，供中文开发者参考。
英文原文在上方，中文辅助阅读，请以英文版为准。

🦄 嘿，未来的贡献者！
欢迎来到 EAHub 派对！我们非常高兴你来了。
无论你是一位编程高手、文档忍者，还是只是发现了一个错别字想要修正的人——你都属于这里。

这份文档是为你准备的友好指南，让你的第一次（或第五十次）贡献变得顺畅又愉快。
让我们开始吧！🏊

🧭 目录
我能做什么？

如何报告 Bug 或建议功能

神奇的 Pull Request 流程

代码风格？我们有

给勇敢者的开发小贴士

沟通与氛围

🎯 我能做什么？
我们接受各种类型的贡献——没有太小的贡献！
以下是一些让你入门的想法：

🐛 消灭 Bug – 找到一个 issue，修复它，然后成为英雄。

✨ 添加功能 – 有一个酷炫的点子？说来听听！

📝 改进文档 – 澄清令人困惑的地方，修正错别字，添加示例。

🌍 翻译 – 帮助我们支持更多语言（日语、韩语、西班牙语……）。

🎨 设计类 – 主题、图标，甚至一个新 Logo。

💬 提供反馈 – 告诉我们什么好用，什么不好用。

不确定从哪里开始？ 查看 Issues 页面，寻找标记为 good first issue 或 help wanted 的标签。这些非常适合新手。

🕵️ 如何报告 Bug 或建议功能
发现了一个小故障？有一个绝妙的想法？以下是告知我们的方法：

先搜索 – 也许已经有人报告过了。使用 Issues 搜索栏。

如果没有人报告，新建一个 Issue，并使用提供的模板（如果有）。如果没有模板，请清晰地描述：

对于 Bug：告诉我们发生了什么、你期望什么，以及重现步骤。如果有必要，附上你的浏览器和操作系统。

对于功能：描述你要解决的问题，以及你的想法如何帮助解决。

附上截图或 GIF – 它们胜过千言万语。

请记住：我们大多是人类（至少大部分是）。请保持友善和建设性。💖

🚀 神奇的 Pull Request 流程
准备好把你的代码发给我们了吗？太棒了！按照以下步骤，你很快就能成为贡献者。

Fork 本仓库（点击右上角的 fork 按钮）。

克隆 你的 fork 到本地：

bash
git clone https://github.com/你的用户名/eahub.git
cd eahub
创建新分支 – 给它起一个描述性的名字：

bash
git checkout -b feat/你超棒的功能
# 或者 fix/bug-描述
进行修改 – 尽情发挥，但要遵循代码风格（见下文）。

测试 – 在本地运行项目，确保没有破坏任何东西。

提交，遵循 Conventional Commits 规范。
示例：

feat: 添加暗色主题切换

fix: 防止搜索在空查询时崩溃

docs: 更新安装说明

推送 到你的 fork：

bash
git push origin feat/你超棒的功能
打开 Pull Request – 前往原始仓库，点击 “New Pull Request”。
选择你的分支，并填写 PR 模板（如果有）。描述你做了什么、为什么做，并关联任何相关的 Issue。

我们会尽快审查。我们可能会要求调整——这很正常，而且很友好！

🧹 代码风格？我们有
我们不是非常严格，但我们欣赏一致性。以下是我们宽松的风格指南：

HTML – 语义化标签，缩进 2 个空格。

CSS – 保持选择器简单；BEM 命名不错但不是必须的。避免使用 !important，除非你有非常充分的理由。

JavaScript – 使用 ES6 语法，变量使用 camelCase，保持函数小而专注。

注释 – 为非显而易见的逻辑添加注释（英文或中文都可以）。

不引入新依赖 – 我们骄傲地保持零依赖。如果你认为需要某个库，请先开一个 Issue 讨论。

小贴士：运行 python3 -m http.server 并在浏览器中测试你的更改。这很简单且有效。

🧪 给勇敢者的开发小贴士
始终在至少两个浏览器上测试（Chrome 和 Firefox 都不错）。

检查移动端响应式 – 调整浏览器窗口大小或使用 DevTools。

关注性能 – 我们希望 EAHub 即使有数百个条目也能保持快速。

如果你在添加新功能，请思考它可能如何影响现有功能。

💬 沟通与氛围
我们是一群友好的人。以下是我们行事的风格：

Issues 和 PRs 是我们的主要沟通渠道。

尊重、耐心，并乐于接受反馈。

我们遵循 贡献者公约行为准则 – 因此不允许欺凌、骚扰或不良行为。

如果你对任何事情不确定，尽管问！我们宁愿回答一个“愚蠢”的问题，也不愿看到你默默挣扎。

🎉 感谢你！
每一次贡献，无论多小，都让 EAHub 变得更好。我们真心感谢你的时间和努力。

嘿，一旦你的 PR 被合并，你就会被列为贡献者。你还会获得我们永久的感激（也许还有一个虚拟的高五 ✋）。

现在，去让 EAHub 变得更加出色吧！

快乐编码！ 🚀
