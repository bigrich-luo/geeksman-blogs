import{_ as n,W as s,X as a,a1 as e}from"./framework-0436675f.js";const t={},p=e(`<p>Python 提供了强大的模块支持，主要体现在，不仅 Python 标准库中包含了大量的模块（称为标准模块），还有大量的第三方模块，开发者自己也可以开发自定义模块。通过这些强大的模块可以极大地提高开发者的开发效率。</p><p>那么，模块到底指的是什么呢？Python 模块(Module)，是一个 Python 文件，以 .py 结尾，也就是 Python 程序的后缀名。 模块能定义函数，类和变量，模块里也能包含可执行的代码。用作模块的程序与其他的程序并没有什么区别。</p><p><strong>模块的作用</strong>: python中有很多各种不同的模块, 每一个模块都可以帮助我们快速的实现一些功能, 比如实现与数学相关的功能就可以使用 math 模块，我们可以这样理解，每个变量，函数，类都是一个工具，而模块则是一个工具箱，里面可以放很多工具。当我们想要使用某个工具的时候，我们不需要现场制造（写新的代码），只需要拿出来含有相对应工具的工具箱即可（导入相对应的模块）。</p><h2 id="_1-模块的导入方式" tabindex="-1"><a class="header-anchor" href="#_1-模块的导入方式" aria-hidden="true">#</a> 1. 模块的导入方式</h2><p>在 Python 中，模块使用前需要先导入，导入语法如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 将整个模块导入</span>
<span class="token keyword">import</span> 模块名
<span class="token comment"># 将整个模块导入，并且在程序中用别名代替模块名</span>
<span class="token keyword">import</span> 模块名 <span class="token keyword">as</span> 别名
<span class="token comment"># 导入模块名中的某个类，变量，方法</span>
<span class="token keyword">from</span> 模块名 <span class="token keyword">import</span> 类，变量，方法等
<span class="token comment"># 导入整个模块</span>
<span class="token keyword">from</span> 模块名 <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token comment"># 导入模块的某个功能，并用别名替代功能名</span>
<span class="token keyword">from</span> 模块名 <span class="token keyword">import</span> 功能名 <span class="token keyword">as</span> 别名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>import 模块名/import 模块名 as 别名</code> 与 <code>from 模块名 import *</code> 使用区别的。使用 import 的导入模块，在使用模块中的功能时，必须以<code>模块名.功能名</code>的形式调用。</p><p>使用 <code>as 别名</code> 来导入时，给模块重新命名一个名字，可能是因为防止名称重复，也可能是为了方便书写。</p><p>以导入并使用 math 模块为例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用 import 语句导入 math 模块</span>
<span class="token keyword">import</span> math

<span class="token comment"># 使用 math 模块中的π的值，</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>pi<span class="token punctuation">)</span>
<span class="token comment"># 使用 math 函数中的 三角函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>math<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 使用 mport 模块名 as 别名,导入 math 模块</span>
<span class="token keyword">import</span> math <span class="token keyword">as</span> m

<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>pi<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>m<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 使用 from 模块名 import * 导入 math 模块</span>
<span class="token keyword">from</span> math <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sin<span class="token punctuation">(</span>pi <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 使用 from 模块名 import 类，变量，方法等</span>
<span class="token keyword">from</span> math <span class="token keyword">import</span> pi<span class="token punctuation">,</span> sin

<span class="token keyword">print</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sin<span class="token punctuation">(</span>pi <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 使用 from 模块名 import 功能名 as 别名</span>
<span class="token keyword">from</span> math <span class="token keyword">import</span> pi <span class="token keyword">as</span> pai
<span class="token keyword">from</span> math <span class="token keyword">import</span> sin <span class="token keyword">as</span> sine

<span class="token keyword">print</span><span class="token punctuation">(</span>pai<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sine<span class="token punctuation">(</span>pai <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-自定义模块" tabindex="-1"><a class="header-anchor" href="#_2-自定义模块" aria-hidden="true">#</a> 2. 自定义模块</h2><p>Python 中已经帮我们实现了很多模块，但是有些时候，我们还需要一些个性化的模块，这时就可以通过自定义模块实现。</p><p>自己编写的模块其实和平常写 Python 程序是相同的，他既可以是一个解决某个问题的独立程序，也可以是几个函数构成。而模块名就是代码保存的文件名。</p><p>示例</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建一个 .py 文件，命名为 my_module</span>

<span class="token comment"># 定义一个变量 </span>
test_name <span class="token operator">=</span> <span class="token string">&#39;自定义模块测试变量名&#39;</span>

<span class="token comment"># 定义一个函数</span>
<span class="token keyword">def</span> <span class="token function">test_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;自定义模块测试函数&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在同一路径下的另一个文件中导入该模块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> my_module

<span class="token keyword">print</span><span class="token punctuation">(</span>my_module<span class="token punctuation">.</span>test_name<span class="token punctuation">)</span>
my_module<span class="token punctuation">.</span>test_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当导入多个模块的时候，且模块内有同名功能，当调用这个同名功能的时候，调用到的是后面导入的模块的功能。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 模块1</span>
<span class="token keyword">def</span> <span class="token function">test_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;module_1中的test_a函数&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 模块2</span>
<span class="token keyword">def</span> <span class="token function">test_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;module_2中的test_a函数&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> module_1 <span class="token keyword">import</span> test_a

test_a<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">from</span> module_2 <span class="token keyword">import</span> test_a

test_a<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-模块位置" tabindex="-1"><a class="header-anchor" href="#_2-1-模块位置" aria-hidden="true">#</a> 2.1. 模块位置</h3><p>编写好的模块只有被 Python 找到才能导入。上面的示例因为编写的模块与调用模块的程序位于同一目录中，因此不需要进行设置就能被 Python 找到并导入。如果在该目录下新建一个 module 目录，并且把 my_module.py 剪切至 module 中，继续使用上述代码就会报错 ImportError，找不到要导入的模块。</p><p>ImportError 表示：Python解释器没有找到 my_module 模块。在导入模块时，Python 解释器首先在当前目录中查找要导入的模块。如果没有找到，会从 sys 模块中的 path 变量指定的目录查找导入模块。如果依然没有找到，则会引发 ImportError 错误。</p><p>一般来说，Python 解释器在运行程序前将当前目录添加到 sys.path 路径列表中，所以导入模块时首先查找的路径是当前目录下的模块。</p><p>因此，你可以将自定义模块的路径添加到 sys.path 中，然后使用 import。</p><p>用法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys	<span class="token comment"># 导入 sys 模块</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">)</span>		<span class="token comment"># 输出当前模块查找路径</span>
sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;自定义模块路径&#39;</span><span class="token punctuation">)</span>	<span class="token comment"># 添加自定义模块路径为模块查找路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys	<span class="token comment"># 导入 sys 模块</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">)</span>		<span class="token comment"># 输出当前模块查找路径</span>
sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">r&quot;D:\\PythonBasisTutorial\\module&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> my_module

<span class="token keyword">print</span><span class="token punctuation">(</span>my_module<span class="token punctuation">.</span>test_name<span class="token punctuation">)</span>
my_module<span class="token punctuation">.</span>test_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上这种方法并不常用，因为不符合 Python 的代码规范，在 Python 代码规范中，import 语句要求放在程序开始，但是如果你不添加到 sys.path，你就无法引入 my_module 模块。而且，如果有多个文件需要引入时，你无法确定你是否已经将自定义模块添加到 sys.path 中。</p><p>因此，还有一种更简单通用的写法，<code>同级目录名.模块名</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> module <span class="token keyword">import</span> my_module

<span class="token keyword">print</span><span class="token punctuation">(</span>my_module<span class="token punctuation">.</span>test_name<span class="token punctuation">)</span>
my_module<span class="token punctuation">.</span>test_function<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 或者</span>
<span class="token keyword">import</span> module<span class="token punctuation">.</span>my_module

<span class="token keyword">print</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>my_module<span class="token punctuation">.</span>test_name<span class="token punctuation">)</span>
module<span class="token punctuation">.</span>my_module<span class="token punctuation">.</span>test_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时的目录名，我们也称之为<strong>包</strong>。</p><h3 id="_2-2-all" tabindex="-1"><a class="header-anchor" href="#_2-2-all" aria-hidden="true">#</a> 2.2. <strong>all</strong></h3><p>如果一个模块文件中有 <code>__all__</code> 变量时，导入时，只能导入这个列表中的元素。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># my_module 模块</span>
__all__ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;test_function&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test_a&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 定义一个变量</span>
test_name <span class="token operator">=</span> <span class="token string">&#39;自定义模块测试变量名&#39;</span>


<span class="token comment"># 定义一个函数</span>
<span class="token keyword">def</span> <span class="token function">test_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;自定义模块测试函数&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;my_module中的test_a函数&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;my_module中的test_b函数&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> my_module <span class="token keyword">import</span> <span class="token operator">*</span>

test_a<span class="token punctuation">(</span><span class="token punctuation">)</span>
test_b<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>my_module中的test_a函数
Traceback (most recent call last):
  File &quot;D:/PythonBasisTutorial/Chapter1.py&quot;, line 4, in &lt;module&gt;
    test_b()
NameError: name &#39;test_b&#39; is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-具有独立运行能力的模块" tabindex="-1"><a class="header-anchor" href="#_2-3-具有独立运行能力的模块" aria-hidden="true">#</a> .2.3. 具有独立运行能力的模块</h3><p>每个 Python 程序在运行时都有一个 <code>__name__</code> 属性。在程序中通过对 <code>__name__</code> 属性值的判断，可以让程序在作为导入模块和独立运行时都可以正确运行。</p><p>在 Python 中，如果程序作为模块导入，则其 <code>__name__</code> 属性被设置为模块名。如果程序独立运行，则其 <code>__name__</code> 属性被设置为 <code>__main__</code>。因此，可以通过 <code>__name__</code> 属性来判断程序的运行状态。</p><p>对上段代码进行修改，使它既可以独立运行，又可以作为模块被其他程序导入使用，修改后代码如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>__all__ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;test_function&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test_a&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 定义一个变量</span>
test_name <span class="token operator">=</span> <span class="token string">&#39;自定义模块测试变量名&#39;</span>


<span class="token comment"># 定义一个函数</span>
<span class="token keyword">def</span> <span class="token function">test_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;自定义模块测试函数&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;my_module中的test_a函数&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;my_module中的test_b函数&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    test_a<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般来说，将模块的主要功能以实例的形式放在这个 if 语句中，可以方便测试模块是否正常运行，或者发现模块的错误。这是一个好习惯。</p><h2 id="_3-包" tabindex="-1"><a class="header-anchor" href="#_3-包" aria-hidden="true">#</a> 3. 包</h2><p>当应用程序或项目具有较多的功能模块时，如果把他们都放在同一个文件夹下，就显得不合理了，这时，可以使用 Python 中提供的包来管理较多的功能模块。使用包的好处在于可以有效避免名字冲突，便于包的维护管理。</p><h3 id="_3-1-自定义包" tabindex="-1"><a class="header-anchor" href="#_3-1-自定义包" aria-hidden="true">#</a> 3.1. 自定义包</h3><p>包其实就是一个文件夹或目录，但其中必须包含一个名为 <code>__init__.py</code>(init 的前后均是两条下划线)的文件。<code>__init__.py</code> 可以是一个空文件，仅用于表示该目录是一个包。此外，包还可以嵌套，即把子包放在某个包中。包可以看做处于同一目录中的模块。在 Python 中 首先使用目录名，然后使用模块名导入需要的模块。</p><p>使用如下：</p><ul><li>新建包 <code>my_package</code></li><li>新建包内模块：<code>my_module_1</code> 和 <code>my_module_2</code>，并添加功能</li></ul><p>示例：</p><figure><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202211031136639.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> my_packages <span class="token keyword">import</span> my_module_1<span class="token punctuation">,</span> my_module_2

my_module_1<span class="token punctuation">.</span>print_info_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_module_2<span class="token punctuation">.</span>print_info_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想要控制允许用户导入的模块列表，就需要在 <code>__init__.py</code> 文件中添加 <code>__all__ = []</code>。</p><p>示例，如果我们在 my_packages 的 <code>__init__.py</code> 中添加</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>__all__ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;my_module_1&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们再调用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> my_packages <span class="token keyword">import</span> <span class="token operator">*</span>

my_module_1<span class="token punctuation">.</span>print_info_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_module_2<span class="token punctuation">.</span>print_info_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NameError: name &#39;my_module_2&#39; is not define
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：__all__针对的是 <code>from ... import *</code> 这种方式对 <code>import xxx</code> 这种方式无效。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from my_packages import my_module_2, my_module_1

my_module_1.print_info_1()
my_module_2.print_info_2()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依然可以正常使用。</p><h3 id="_3-2-第三方包" tabindex="-1"><a class="header-anchor" href="#_3-2-第三方包" aria-hidden="true">#</a> 3.2. 第三方包</h3><p>在Python程序的生态中，有许多非常多的第三方包（非Python官方），可以极大的帮助我们提高开发效率，</p><ul><li>科学计算中常用的：numpy包</li><li>数据分析中常用的：pandas包</li><li>Web开发常用的包：Django, Flask, Fast-API</li><li>游戏开发常用的包：PyGame</li><li>人工智能包：TensorFlow</li></ul><p>这些第三方的包，极大的丰富了Python的生态，提高了开发效率。</p><p>但是由于是第三方，所以Python没有内置，所以我们需要安装它们才可以导入使用哦。</p><p>第三方包的安装非常简单，我们只需要使用Python内置的pip程序即可。</p><p>打开我们许久未见的：命令提示符程序，在里面输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install &#39;包名称==版本号&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：版本号与双等号可以省略不写，默认安装最新版</p><p>由于pip是连接的国外的网站进行包的下载，所以有的时候会速度很慢。</p><p>我们可以通过如下命令，让其连接国内的网站进行包的安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install -i https://pypi.douban.com/simple/ \`包名称==版本号\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PyCharm 也提供了安装第三方包的功能。</p><p>点击左上角 <code>File</code>，选择 <code>Settings</code></p><figure><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202211031205568.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择 <code>Python Interpreter</code></p><figure><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202211031205726.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击 install</p><figure><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202211031203728.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.staticaly.com/gh/bigrich-luo/typora-picgo-images-1@master/images/202211031207474.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,87),i=[p];function o(l,c){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","09.python-basis-packages.html.vue"]]);export{u as default};
