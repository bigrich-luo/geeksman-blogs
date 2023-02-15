import{_ as n,W as s,X as a,$ as e}from"./framework-337b4f40.js";const p={},t=e(`<h2 id="_1-缩进分层" tabindex="-1"><a class="header-anchor" href="#_1-缩进分层" aria-hidden="true">#</a> 1. 缩进分层</h2><p>每种语言都有自己的语法，不管是人类语言还是计算机编程语言。</p><p>Python 也不例外，它呢，也有自己的语法规则，然后编辑器或者解释器根据符合语法的程序代码转换成 CPU 能够执行的机器码，然后执行。</p><p>Python 的语法比较简单，采用缩进方式，即 4 个空格，PyCharm已经定义过了，按一次 Tab 键产生 4 个空格的缩进，这也就是为什么我推荐大家使用集成开发环境的原因。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 判断 a 与 b 的大小关系</span>
<span class="token keyword">if</span> a <span class="token operator">&gt;</span> b<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上面的代码，以 # 开头的语句是注释，其他每一行都是一个语句，当语句以冒号 : 结尾时，缩进的语句视为代码块。</p><p>要注意的是 Python 程序是大小写敏感的，如果写错了大小写，程序会报错。</p><h2 id="_2-控制语句的执行流程" tabindex="-1"><a class="header-anchor" href="#_2-控制语句的执行流程" aria-hidden="true">#</a> 2. 控制语句的执行流程</h2><p>在你的日常生活中，肯定发现过这样的现象，有的工作就是一个动作序列从头到尾执行完就行了，比如每天上班打卡；有些工作需要根据不同的情况进行不同的处理，比如垃圾分类；有的工作则是简单机械地重复，比如你刷抖音。</p><p>而计算机程序在解决某个具体的问题时，也包括以上三种情形。即顺序执行所有的语句，选择执行部分语句和循环执行部分语句，正好对应着程序设计中的三种程序执行结构流程：顺序结构，选择结构以及循环结构。</p><p>事实证明，任何一个能用计算机解决的问题，只要应用这三种基本结构来写出的程序都能解决。</p><h2 id="_3-if-选择执行语句" tabindex="-1"><a class="header-anchor" href="#_3-if-选择执行语句" aria-hidden="true">#</a> 3. if 选择执行语句</h2><p>之前教程中的代码，全部都是按照语句书写的顺序一次执行，当每条语句执行完一次之后，程序就自然结束了。而为了解决实际问题的程序，还需要依据程序执行过程中的某个条件来选择是否执行某一部分语句，亦或是选择执行多部分语句的其中一部分，这就需要用到if。</p><h6 id="_3-1-if-基础" tabindex="-1"><a class="header-anchor" href="#_3-1-if-基础" aria-hidden="true">#</a> 3.1. if 基础</h6><p>if 语句的作用是选择执行语句，其最简单的形式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if &#39;条件&#39;：
	&#39;语句&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其基本语义是当条件为真时，执行其后缩进的语句；当执行条件为假时，跳过其后缩进的语句；</p><p>其中的条件可以是任意类型的表达式。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 要求用户输入一个数</span>
num <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入一个数：&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 转换为 int 数据类型</span>
num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token comment"># 如果 num &gt; 0 则输出正数</span>
<span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;正数&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-elif" tabindex="-1"><a class="header-anchor" href="#_3-2-elif" aria-hidden="true">#</a> 3.2. elif</h3><p><code>elif</code> 关键字是 python 对“如果之前的条件不正确，那么试试这个条件”的表达方式。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 要求用户输入一个数</span>
num <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入一个数：&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 转换为 int 数据类型</span>
num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token comment"># 如果 num &gt; 0 则输出正数</span>
<span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;正数&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;负数&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-else" tabindex="-1"><a class="header-anchor" href="#_3-3-else" aria-hidden="true">#</a> 3.3. else</h3><p><code>else</code> 关键字捕获未被之前的条件捕获的任何内容。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 要求用户输入一个数</span>
num <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入一个数：&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 转换为 int 数据类型</span>
num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token comment"># 如果 num &gt; 0 则输出正数</span>
<span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;正数&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 如果 num &lt; 0, 则输出负数</span>
<span class="token keyword">elif</span> num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;负数&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 如果 num 即不大于 0 又不小于 0，则返回 0</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-if-语句的嵌套" tabindex="-1"><a class="header-anchor" href="#_3-4-if-语句的嵌套" aria-hidden="true">#</a> 3.4. if 语句的嵌套</h3><p>在程序设计中，各种结构的语句嵌套的出现在所难免的，当然 <code>if</code> 语句自身也存在着嵌套情况。对于嵌套的 <code>if</code> 语句写法上和不嵌套的 <code>if</code> 语句在形式上的区别就是缩进不同而已。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if &#39;条件&#39;：
	if &#39;条件&#39;：
		&#39;语句&#39;
	elif &#39;条件&#39;：
		&#39;语句&#39;
else:
	&#39;语句&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入一个数：&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">1000</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;无法表示&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;可以表示&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;这是一个正数&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;无法表示&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;可以表示&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;这是一个负数&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),i=[t];function l(c,o){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","04.python-basis-if.html.vue"]]);export{d as default};
