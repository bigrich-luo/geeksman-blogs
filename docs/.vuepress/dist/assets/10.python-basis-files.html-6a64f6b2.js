import{_ as n,W as t,X as s,a1 as a}from"./framework-0436675f.js";const e={},l=a(`<p>编写程序来解决实际项目时，很多时候都离不开文件和文件系统的操作。程序本身就是保存在文件系统的文件中的。文件既可以保存程序代码，也可以保存各种输入与输出数据。</p><p>除了提供文件操作基本的函数之外，Python 还提供了很多模块，例如 fileinput 模块、pathlib 模块等，通过引入这些模块，我们可以获得大量实现文件操作可用的函数和方法（类属性和类方法），大大提供编写代码的效率。</p><h2 id="_1-文件操作基础" tabindex="-1"><a class="header-anchor" href="#_1-文件操作基础" aria-hidden="true">#</a> 1. 文件操作基础</h2><p>Python 中可以通过内建的文件打开函数 open() 来打开文件，并用相关的方法读写文件的内容，供程序处理和使用，而文件也可以看作是 Python 中的一种数据类型。当使用 Python 的内置函数 open 打开一个文件后，就返回一个文件对象。其原型如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>open(file, mode=&#39;r&#39;, buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中参数所代表的作用：</p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">filename</td><td style="text-align:center;">要打开的文件名</td></tr><tr><td style="text-align:center;">mode</td><td style="text-align:center;">可选参数，文件打开模式</td></tr><tr><td style="text-align:center;">bufsize</td><td style="text-align:center;">可选参数，缓冲区大小</td></tr><tr><td style="text-align:center;">encoding</td><td style="text-align:center;">文件编码类型，如&#39;gbk&#39;, &#39;utf-8&#39;等，以避免读取文件内容出现乱码</td></tr><tr><td style="text-align:center;">errors</td><td style="text-align:center;">编码错误处理方法</td></tr><tr><td style="text-align:center;">newline</td><td style="text-align:center;">换行符模式，例如&#39;\\n&#39;, &#39;\\r&#39;</td></tr><tr><td style="text-align:center;">closefd</td><td style="text-align:center;">控制在关闭文件时是否彻底关闭文件</td></tr></tbody></table><p><code>mode</code> 是打开文件的操作模式字符串，常用的模式字符如下：</p><table><thead><tr><th style="text-align:center;">模式字符</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">r</td><td style="text-align:center;">只读模式</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">文本写入，并先清空文件（慎用），文件不存在则创建</td></tr><tr><td style="text-align:center;">a</td><td style="text-align:center;">文本写，如果文件存在则在末尾追加，不存在则创建</td></tr><tr><td style="text-align:center;">b</td><td style="text-align:center;">组合字符，二进制模式，例如：&#39;rb&#39;表示二进制读</td></tr><tr><td style="text-align:center;">x</td><td style="text-align:center;">文本写，排它性创建，如果文件已存在则失败</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">组合字符，读取与写入，例如：&#39;r+&#39; 表示同时读写</td></tr><tr><td style="text-align:center;">t</td><td style="text-align:center;">组合字符，文本模式（默认），例如：rt 一般省略 t</td></tr></tbody></table><p>组合字符是指可以与模式字符组合使用：</p><table><thead><tr><th style="text-align:center;">组合模式</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">rb</td><td style="text-align:center;">二进制只读，通常用于打开图片</td></tr><tr><td style="text-align:center;">wb</td><td style="text-align:center;">二进制写，通常用于打开图片</td></tr><tr><td style="text-align:center;">ab</td><td style="text-align:center;">二进制追加写，</td></tr><tr><td style="text-align:center;">r+/a+</td><td style="text-align:center;">读与追加写</td></tr><tr><td style="text-align:center;">w+</td><td style="text-align:center;">读与覆盖写</td></tr></tbody></table><p>常用的文件操作及其作用</p><table><thead><tr><th style="text-align:center;">文件操作函数</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">file.read(n)</td><td style="text-align:center;">将整个文件读入到字符串中，或指定前 n 字节</td></tr><tr><td style="text-align:center;">file.readline([n])</td><td style="text-align:center;">读入文件的第一行到字符串中，或该行的前 n 字节</td></tr><tr><td style="text-align:center;">file.readlines()</td><td style="text-align:center;">将整个文件按行读入到列表</td></tr><tr><td style="text-align:center;">file.write(s)</td><td style="text-align:center;">向文件中写入字符串</td></tr><tr><td style="text-align:center;">file.writelines(lines)</td><td style="text-align:center;">向文件中写入一行数据列表</td></tr><tr><td style="text-align:center;">file.close()</td><td style="text-align:center;">关闭打开的文件</td></tr></tbody></table><h3 id="_1-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-1-基本使用" aria-hidden="true">#</a> 1.1. 基本使用</h3><p>在当前目录下手动创建一个文件命名为 &#39;a.txt&#39;, 并写入以下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>测试语句1
测试语句2
测试语句3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># open打开文件</span>
fb <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 读取文件</span>
ct <span class="token operator">=</span> fb<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 打印文件内容</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ct<span class="token punctuation">)</span>
<span class="token comment"># 手动关闭文件</span>
fb<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 使用file.readline()</span>
<span class="token comment"># open打开文件</span>
fb <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 读取文件</span>
<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    line <span class="token operator">=</span> fb<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> line<span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
<span class="token comment"># 手动关闭文件</span>
fb<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 写入内容</span>
<span class="token comment"># open打开文件</span>
fb <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
fb<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;覆盖写入新内容&#39;</span><span class="token punctuation">)</span>
fb<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 追加写入新内容</span>
fb <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
fb<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;追加写入新内容&#39;</span><span class="token punctuation">)</span>
fb<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：进行文件处理时经常会碰到相对路径和绝对路径的问题。</p><p>打开文件，读取数据数据时，文件的完整路径必须存在，不然就会报错。</p><p><strong>绝对路径（absolute path）</strong>：它指定了文件在电脑中的具体位置，以 windows 电脑为例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\PythonBasisTutorial\\a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>相对路径（）</strong>:一般是指相对当前脚本的路径，比如上面的案例中的 a.txt，因为与当前程序在同一个文件夹下，所以可以直接使用 a.txt 作为文件名来操作。</p><h3 id="_1-2-with-上下文管理" tabindex="-1"><a class="header-anchor" href="#_1-2-with-上下文管理" aria-hidden="true">#</a> 1.2. with 上下文管理</h3><p>解决经常会忘记关闭文件句柄，造成资源浪费，所以处理文件时往往使用 with 语句进行上下文管理。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with + open(文件地址）as 函数名：
	pass
不需要你手动调用fs.close()
自动帮你关闭文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token string">r&quot;a.txt&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fb<span class="token punctuation">:</span>
    content <span class="token operator">=</span> fb<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token string">r&quot;a.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fb<span class="token punctuation">:</span>
    fb<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;使用 with 覆盖写入新内容&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token string">r&quot;a.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fb<span class="token punctuation">:</span>
    fb<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;使用 with 追加写入新内容&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-常用文件和目录操作" tabindex="-1"><a class="header-anchor" href="#_2-常用文件和目录操作" aria-hidden="true">#</a> 2. 常用文件和目录操作</h2><p>在计算机系统中操作时，就免不了要与文件和目录打交道。对一些比较繁琐的文件和目录操作，可以使用 Python 提供的 OS 模块来进行。OS 模块中包含很多操作文件和目录的函数，可以方便地进行重命名文件，添加/删除目录，复制目录/文件等操作。</p><p>以下几个 OS 模块中常用的函数需要学习一下：</p><table><thead><tr><th style="text-align:center;">函数名</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">os.getcwd()</td><td style="text-align:center;">获取当前的路径，当前路径指的是所运行程序的目录</td></tr><tr><td style="text-align:center;">os.listdir(path)</td><td style="text-align:center;">获取指定目录中的内容</td></tr><tr><td style="text-align:center;">os.mkdir(path)</td><td style="text-align:center;">创建目录</td></tr><tr><td style="text-align:center;">os.rmdir(path)</td><td style="text-align:center;">删除目录</td></tr><tr><td style="text-align:center;">os.path.isdir(path)</td><td style="text-align:center;">判断是否是目录</td></tr><tr><td style="text-align:center;">os.path.isfile(path)</td><td style="text-align:center;">判断是否是文件</td></tr><tr><td style="text-align:center;">os.walk(path)</td><td style="text-align:center;">遍历指定目录下的所有文件和子目录</td></tr></tbody></table><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token comment"># 获取当前目录</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 获取当前目录下的所有内容</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),p=[l];function i(o,c){return t(),s("div",null,p)}const d=n(e,[["render",i],["__file","10.python-basis-files.html.vue"]]);export{d as default};