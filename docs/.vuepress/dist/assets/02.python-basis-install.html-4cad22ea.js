import{_ as s,W as n,X as o,a0 as e,a1 as t,Z as a,$ as r,G as p}from"./framework-337b4f40.js";const c={},g=e("p",null,"因为 Python 是跨平台的，它可以运行在 Windows、Mac 和各种 Linux/Unix 系统上。目前，Python 有两个版本，一个是 2.x 版，一个是 3.x 版。",-1),h=e("p",null,"官方推荐使用 Python 3.x 系列版本（不向下兼容 Python 2.x 版本），并且 Python 官网从 2020-01-01 就停止维护 Python2.7 版本。",-1),m=e("p",null,"该教程安装的是 Python 3.8 版本（3.6 ~ 3.8 都是没问题的），因为 3.9 及之后的版本不再支持 Windows 7 以及之前的系统。",-1),d={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},l=r(`<p>或者,我已经为大家准备好了软件安装包，</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160118052.PNG" width="550"></div><h2 id="_1-windows-系统下安装-python-解释器" tabindex="-1"><a class="header-anchor" href="#_1-windows-系统下安装-python-解释器" aria-hidden="true">#</a> 1. Windows 系统下安装 Python 解释器</h2><p>找到下载好的 PyCharm 安装包，以管理员身份运行 Python 安装包。</p><p>下载完后，直接安装，不过这里记得勾上Add Python 3.8 to PATH，然后点「Install Now」即可完成安装。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209152243704.PNG" width="550"></div><p>这里要注意了! 记得把「Add Python 3.8 to Path」勾上，勾上之后就不需要自己配置环境变量了，如果没勾上，就要自己手动配置。</p><p>如果你一时手快，忘记了勾上 「Add Python 3.8 to Path」，那也不要紧，只需要手动配置一下环境变量就好了。</p><p>在命令提示框中 cmd 上输入 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>path=%path%;C:\\Python 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里默认全选，点击 Next 即可</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209162219612.PNG" width="550"></div><p>这里勾选前五个，并且更改安装路径</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209152305053.PNG" width="550"></div><p>看到如下图就是安装成功了</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161614651.PNG" width="550"></div><p>验证是否成功，按win+R，输入cmd ，输入Python回车后，出现下面的情况，证明 Python 安装成功了。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161620136.PNG" width="550"></div><h2 id="_2-安装集成开发环境-ide-pycharm" tabindex="-1"><a class="header-anchor" href="#_2-安装集成开发环境-ide-pycharm" aria-hidden="true">#</a> 2. 安装集成开发环境 (IDE): PyCharm</h2><p>PyCharm 是由 JetBrains 打造的一款 Python IDE，支持 macOS、 Windows、 Linux 系统。</p><p>Jetbrains 开发了许多好用的编辑器，包括 Java 编辑器（IntelliJ IDEA）、JavaScript编辑器（WebStorm）、PHP编辑器（PHPStorm）、Ruby编辑器（RubyMine）、C和C++编辑器（CLion）、.Net编辑器（Rider）、iOS/macOS编辑器（AppCode）等。</p><p>PyCharm 是我用过的python编辑器中，比较顺手的一个。而且可以跨平台，在macos和windows下面都可以用，这点比较好。是python现在最好用的编辑器，没有之一。</p>`,22),y={href:"https://www.jetbrains.com/pycharm/download/#section=windows",target:"_blank",rel:"noopener noreferrer"},w=r('<p>PyCharm分为两个版本，第一个版本是 Professional(专业版本)，这个版本功能更加强大，主要是为数据处理和 Web 开发者而准备，是需要付费的。第二个版本是社区版，一个专业版的阉割版，比较轻量级，主要用于纯 Python 开发。小伙伴们可以根据自己的需求选择下载。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209152316466.PNG" width="550"></div><p>找到下载好的 PyCharm 安装包，并以管理员身份运行 Python 安装包。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160115468.PNG" width="550"></div><p>双击已下载的 PyCharm 安装包，出现如下图所示的界面，点击「Next」</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160120790.PNG" width="550"></div><p>选择安装目录，Pycharm 需要的内存较多，建议将其安装在D盘或者E盘，不建议放在系统盘C盘</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160124931.PNG" width="550"></div><p>点击 Next，进入下图的界面，全选就OK了, 其实都挺有用的。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160130588.PNG" width="550"></div><p>这一步无脑点击安装即可。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160135734.PNG" width="550"></div><p>之后就会得到下面的安装完成的界面，点击 Finish，Pycharm 安装完成。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161638984.PNG" width="550"></div><p>接下来对 Pycharm 进行配置，双击运行桌面上的 Pycharm 图标，进入下图用户协议界面：</p><p>勾选 I confirm that.......，点击 Continue</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161644248.PNG" width="550"></div><p>数据分享，这个相当于一个问卷调查吧，看自己愿不愿将信息发送 JetBrains 来提升他们产品的质量，这个看个人意愿，无所谓。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161657911.PNG" width="550"></div><p>之后，就进入了创建新项目阶段</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161659059.PNG" width="550"></div><h2 id="_3-pycharm-创建新项目" tabindex="-1"><a class="header-anchor" href="#_3-pycharm-创建新项目" aria-hidden="true">#</a> 3. PyCharm 创建新项目</h2><p>点击 New Project</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161739717.PNG" width="550"></div><p>点击右上角“<strong>文件夹图标</strong>”并选择项目目录，在这里，我选择了 python-base 作为项目目录 / 项目名</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162100251.PNG" width="550"></div><p>随后点开顶部“<strong>小箭头</strong>”，并选择自己安装的 Python 解释器。</p><p>注：第一个的意思是创建新的虚拟环境，因为目前，我们还没有学习什么是虚拟环境，所以，在这里，一定要选择 「Previously configured interpreter （已配置好的解释器）」。</p><p>至于虚拟环境，我们后期也会学习的。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162122807.PNG" width="550"></div><p>点击 「Add Interpreter」 添加解释器，</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162132382.PNG" width="550"></div><p>在 System Interpreter 中 找到自己的 Python 解释器位置，点击OK</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162134452.PNG" width="550"></div><p>点击 Create, 即创建成功</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162136806.PNG" width="550"></div><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162138597.PNG" width="550"></div>',37),P={href:"http://test1.py",target:"_blank",rel:"noopener noreferrer"},v={href:"http://test1.py",target:"_blank",rel:"noopener noreferrer"},_=r(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, PyCharm&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注：注意大小写！</p><p>右击空白处，Run &#39;test1&#39;</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162150799.PNG" width="550"></div><p>现在，你就可以自由的在 PyCharm 中敲代码了！</p>`,5);function u(k,N){const i=p("ExternalLinkIcon");return n(),o("div",null,[g,h,m,e("p",null,[t("至于在哪里下载，我建议大家最好直接官网下载，随时下载下来的都是最新版本。官网地址："),e("a",d,[t("https://www.python.org/"),a(i)])]),l,e("p",null,[t("PyCharm 官网下载地址："),e("a",y,[t("https://www.jetbrains.com/pycharm/download/#section=windows"),a(i)])]),w,e("p",null,[t("最后，我们做一下验证，右击项目目录，创建一个新的 .py 文件，并取名为 "),e("a",P,[t("test1.py"),a(i)])]),e("p",null,[t("在 "),e("a",v,[t("test1.py"),a(i)]),t(" 中输入")]),_])}const x=s(c,[["render",u],["__file","02.python-basis-install.html.vue"]]);export{x as default};
