import{_ as d,W as l,X as t,$ as n,a0 as e,Z as a,a1 as i,G as c}from"./framework-0436675f.js";const r={},o=n("p",null,"Slidev 使用一种扩展的 Markdown 格式，在一个纯文本文件中存储和组织你的幻灯片。这让你专注于制作内容。而且由于内容和样式是分开的，这也使得在不同的主题之间切换变得更加容易。",-1),p=n("p",null,"它还拥有很多内置的集成功能，如实时编码、导出 PDF、演讲录制等。由于 Slidev 是由 web 驱动的，因此你可以使用它进行任何操作 —— 具有无限的可能性。",-1),u=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"Slidev 并不一定适合所有人！ 之所以我喜欢用 Slidev 是因为经常开会，设计方案等等，而做 PPT 对我来说，太浪费时间了，因此，我选择了 Slidev，可以让我更重视内容，而非排版。")],-1),v={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"安装-node-js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-node-js","aria-hidden":"true"},"#"),e(" 安装 Node.js")],-1),h=n("p",null,"Slidev 是通过 npm 去安装部署的，所以我们需要提前安装好相关的环境。",-1),g=n("p",null,"即使你不知道什么是 Node.js 或者 npm，也是没关系的，你可以把它们简单的理解为运行 Slidev 的必备环境。",-1),b={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},k=i(`<div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302202228255.png" width="550"></div><p>安装过程比较简单，无脑点击下一步即可。</p><p>安装完成后，我们需要验证一下，打开 CMD 命令行，输入 <code>node -v</code> 和 <code>npm -v</code>，可以正常显示版本号，则说明安装成功。</p><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302202241134.png" width="550"></div><h2 id="安装-slidev" tabindex="-1"><a class="header-anchor" href="#安装-slidev" aria-hidden="true">#</a> 安装 Slidev</h2><p>Slidev 的运行环境已经配置好了，接下来，我们就需要安装 Slidev。</p><p>在命令行中使用输入以下 NPM 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init slidev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后命令行中会出现一系列需要你自己配置项目名称和选择代理包管理器</p><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302211005496.png" width="550"></div><p>配置完成之后，项目会自动启动</p><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302211038240.png" width="550"></div><p>在命令行中按住 <kbd>ctrl</kbd>+<kbd>C</kbd>，中止 Slidev 程序的运行，然后输入 <code>code .</code>，在 VSCode 中打开当前项目。</p><p>然后在 VSCode 中 按住 <kbd>ctrl</kbd>+<kbd>Shift</kbd>+<kbd>\`</kbd>，打开终端(命令行)。</p><p>想要启动该项目，只需要在终端中输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302211100621.png" width="550"></div><p>启动成功之后，我们可以看到其中出现了三个地址：</p><ul><li>public slide show: PPT演示地址</li><li>presenter mode: 演讲者模式</li><li>remote control: 远程控制，方便电脑查阅，需要添加远程指令。部署在公网则可通过公网IP浏览，部署在局域网，则可以在局域网内浏览。</li></ul><h2 id="slidev-简单入门" tabindex="-1"><a class="header-anchor" href="#slidev-简单入门" aria-hidden="true">#</a> Slidev 简单入门</h2>`,20),_={href:"https://cn.sli.dev/",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>如果你没有前端基础的话，项目目录中存在的文件不要乱碰，只修改 <code>slides.md</code> 文件即可。幻灯片通过一个 Markdown 文件编写而成 (默认会使用 ./slides.md)。</p><p>你可以像平时编写 markdown 一样使用 Markdown 的相关特性，同时还支持内联的 HTML 和 Vue 组件。也支持使用 Windi CSS 来编写样式。使用 --- 添加分隔符来分隔你的幻灯片。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 封面</span>

PPT 标题

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">#</span> Page 1</span>

页面 1 内容


<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">#</span> 页面 2 内容</span>

页面 2 内容

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-扉页及布局" tabindex="-1"><a class="header-anchor" href="#_1-扉页及布局" aria-hidden="true">#</a> 1. 扉页及布局</h3><p>你可以通过将分隔符转换为 扉页块 (front matter)，为每张幻灯片指定布局 (layout) 和其他元数据。</p><p>每个扉页信息都以分隔符 --- 开始，以另一个分隔符 --- 结束。两个分隔符之间的文本是 YAML 格式的数据对象。具体示例如下：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> cover</span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> 封面</span>

这是封面布局
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302211538398.png" width="550"></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> center
<span class="token key atrule">background</span><span class="token punctuation">:</span> <span class="token string">&#39;./images/background-1.png&#39;</span></span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Page 1</span>

这是使用 center 布局，并插入背景

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302211538546.png" width="550"></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">#</span> Page 2</span>

如果没有使用任何 layout, 则会使用默认布局。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302211539928.png" width="550"></div>`,12),w={href:"https://cn.sli.dev/guide/",target:"_blank",rel:"noopener noreferrer"},y=i(`<h3 id="_2-代码" tabindex="-1"><a class="header-anchor" href="#_2-代码" aria-hidden="true">#</a> 2. 代码</h3><p>建立 Slidev 一个非常重要的原因就是为了让代码在幻灯片中拥有正确的高亮。比如：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>    \`\`\`python
    class Dog: 
    
<span class="token code keyword">      def __init__(self, name):         
        self.name = name      </span>
    
<span class="token code keyword">      def sleep(self): 
        print(&#39;睡觉&#39;) </span>
    
<span class="token code keyword">      def eat(self, food): 
        print(f&#39;吃{food}&#39;) </span>
    
<span class="token code keyword">      def speak(self): 
        print(f&#39;这条狗的名字是: {self.name}&#39;)
    \`\`\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想让特定行代码高亮，可以在语言类型后面加 <code>{}</code>，里面写上行号</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>    \`\`\`python {5, 6}
    class Dog:
    
<span class="token code keyword">        def __init__(self, name):
            self.name = name</span>
    
<span class="token code keyword">        def sleep(self):
            print(&#39;睡觉&#39;)</span>
    
<span class="token code keyword">        def eat(self, food):
            print(f&#39;吃{food}&#39;)</span>
    
<span class="token code keyword">        def speak(self):
            print(f&#39;这条狗的名字是: {self.name}&#39;)
    \`\`\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302211532113.png" width="750"></div><h3 id="_3-备注" tabindex="-1"><a class="header-anchor" href="#_3-备注" aria-hidden="true">#</a> 3. 备注</h3><p>你也可以为每张幻灯片编写备注。它们将展示在 演讲者模式 中，供你在演示时参考。</p><p>每张幻灯片中的最后一个注释块将被视为备注。</p><p>比如我们在刚才的页面中加入一段注释</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">#</span> Page 2</span>

如果没有使用任何 layout, 则会使用默认布局。

<span class="token comment">&lt;!--这里会显示我们在页面 2 中的注释，方便你在演讲的时候能够给你提示--&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div align="center"><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202302211624217.png" width="550"></div><h3 id="_4-静态资源" tabindex="-1"><a class="header-anchor" href="#_4-静态资源" aria-hidden="true">#</a> 4. 静态资源</h3><p>和编写 Markdown 的方式一样，你可以使用本地或远程的 URL 的图片。</p><p>如果是远程资源，比如图床，则可以直接引入链接。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">图片名称</span>](<span class="token url">URL</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是本地资源，需要将资源放置到 public 文件夹 中并使用 / 开头的 URL 来引用它们。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">public目录下的1.png文件</span>](<span class="token url">/1.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想自定义尺寸或样式的话，可以使用 <code>&lt;img&gt;</code> 标签</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pic.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-40 h-40 rounded shadow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>没有前端基础的小伙伴就不要轻易尝试了，建议可以学习一下前端</p></div><h3 id="_5-更换主题" tabindex="-1"><a class="header-anchor" href="#_5-更换主题" aria-hidden="true">#</a> 5. 更换主题</h3><p>如果你觉得默认主题不够美观，在 Slidev 中更换主题非常简单。在 frontmatter 中添加 theme: 配置即可。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">theme</span><span class="token punctuation">:</span> seriph</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务启动后，它会自动提示你是否安装该主题：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>? The theme <span class="token string">&quot;@slidev/theme-seriph&quot;</span> was not found <span class="token keyword">in</span> your project, <span class="token keyword">do</span> you want to <span class="token function">install</span> it now? › <span class="token punctuation">(</span>Y/n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者你也可以手动安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @slidev/theme-seriph
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),x={href:"https://cn.sli.dev/themes/gallery.html#community-themes",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"_6-slidev-的高级用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-slidev-的高级用法","aria-hidden":"true"},"#"),e(" 6. Slidev 的高级用法")],-1),P=n("p",null,"在 Markdown 中支持的 Latex公式、图表等等，在 Slidev 中依然支持，因此，小伙伴们可以尝试一下。",-1),M=n("p",null,"如果你认为 Slidev 默认的主题与样式，不符合你的需求，你也可以自定义样式，前提是你需要有前端的基础。",-1);function j(q,L){const s=c("ExternalLinkIcon");return l(),t("div",null,[o,p,u,n("p",null,[e("用 Markdown 做 PPT 的工具有很多，比如 Marp、reveal.js、reveal-md 等等。大家可以在 "),n("a",v,[e("GitHub"),a(s)]),e(" 上找适合自己的工具。")]),m,h,g,n("p",null,[e("进入 "),n("a",b,[e("Node.js"),a(s)]),e(" 的官网，选择长期维护版下载。")]),k,n("p",null,[e("如果你想要深入了解 Slidev 的话，可以前往 Slidev 的官网学习更多："),n("a",_,[e("https://cn.sli.dev/"),a(s)])]),f,n("p",null,[e("还有很多其他类型的布局 layout，大家可以在"),n("a",w,[e("官方文档"),a(s)]),e("中查阅")]),y,n("p",null,[e("你可以在 slidev 网站中找更多主题："),n("a",x,[e("https://cn.sli.dev/themes/gallery.html#community-themes"),a(s)])]),S,P,M])}const T=d(r,[["render",j],["__file","04.markdown-slidev.html.vue"]]);export{T as default};
