import{_ as r,W as d,X as n,$ as e,a0 as o,Z as i,a1 as a,G as c}from"./framework-0436675f.js";const p={},s=a('<p>如果你经常使用笔记软件，或者喜欢写博客，那么你或多或少会听说个这么一个东西 -- Markdown。</p><p>Markdown 是一种用于写作的轻量级标记语言。它允许人们使用易读易写的纯文本格式编写文档。</p><p>看到语言两个字，可能大多数人脑海里会飞过几个诸如 C 语言、Python、编程等词汇。但是标记语言和编程语言是完全不同的两个概念，大可不必被吓到。</p><p>Markdown的设计理念是<code>将内容和样式分离</code>，实现<code>易读易写</code>的目的。</p><p>Markdown 适用于追求快捷书写，需要简单的一些排版功能的人群。在排版功能性上 Markdown 可能不如 Word 等软件丰富，但胜在快捷方便。作者只需要使用一些简单的符号在文本中进行标注，就能给文字带来丰富多彩的样式。</p><p>在用键盘把文字打出来之后，整篇文章就已经排版好了。从头到尾甚至不需要使用鼠标，从而避免了在工具栏来回寻找按钮调整样式的麻烦。并且读者阅读这篇使用 Markdown 书写的文章时也不会感到吃力，因为每个符号所起的作用都是一目了然的。</p><p>由于 Markdown 拥有诸多优点，目前已有越来越多的平台支持 Markdown，比如全球最大开源社区 GitHub、知名笔记应用印象笔记、Notion、语雀等等。甚至你可以使用 Markdown + 少量的编程能力，做一个博客网站或者 PPT。</p><p>市面上有许多优秀的markdown编辑器，它们能够实时地把markdown文本进行排版，做到真正的「所见即所得」。</p><p>如果你是专注于内容创作，对编程没有任何兴趣的话，推荐你使用 Typora。这是一款简洁而强大的markdown编辑器，支持Windows、macOS、Linux系统。它提供了许多便捷的的编辑功能，不管是从未接触过markdown的新手还是能熟练运用 Markdown 的老司机都能获得舒适的使用体验。另外还支持导出为PDF、HTML、 DOCX、EPUB等多种常见文档格式。</p><p>如果你打算尝试使用 Markdown 制作博客网站、PPT的话，推荐你使用 VSCode + Markdown 插件，或者 WebStorm + Markdown 插件。本篇文章将全程使用 VSCode + Markdown 插件演示。</p><h2 id="vscode-安装" tabindex="-1"><a class="header-anchor" href="#vscode-安装" aria-hidden="true">#</a> VSCode 安装</h2>',11),g={href:"https://code.visualstudio.com/Download",target:"_blank",rel:"noopener noreferrer"},m=a('<div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302181620126.png" width="550"></div><p>VSCode 的安装非常简单，直接无脑安装即可，只需要注意一点。 在选择附加任务时，勾选以下所有选项，接下来等待安装完成即可。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302181714239.png" width="550"></div><h2 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装" aria-hidden="true">#</a> 插件安装</h2><p>安装完成之后，首先我们需要安装<em>中文插件</em>。</p><p>打开 VSCode，点击安装扩展，在搜索框输入 <code>Chinese</code>，然后点 Install 就可以：</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302181921388.png" width="550"></div><p>安装完成之后重启 VSCode，界面就编程中文显示了。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302182320790.png" width="550"></div><p>之后，安装 Markdown 相关插件 - <code>Markdown All in One</code>。这个插件可以让你在 VSCode 中使用 Markdown 的基础语法。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302182319058.png" width="550"></div><p>现在，我们已经可以使用 VSCode 来敲一些 Markdown 命令了，效果如下：</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302182328699.png" width="550"></div><p>最后，我们再安装一个插件 - <code>Markdown Preview Enhanced</code>。这个插件可以让你拥有更好的 Markdown 写作体验，比如切换主题、导出 PDF 等等。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302182332397.png" width="550"></div><p>接下来，我们就可以学习 Markdown 的基础语法了。</p>',16);function w(h,k){const t=c("ExternalLinkIcon");return d(),n("div",null,[s,e("p",null,[o("我们可以在 VScode 官网首页下载对应系统（支持Windows、Linux、macOS）的软件。选择自己电脑系统的版本下载即可。 官网地址："),e("a",g,[o("https://code.visualstudio.com/Download"),i(t)])]),m])}const _=r(p,[["render",w],["__file","01.markdown-intro.html.vue"]]);export{_ as default};
