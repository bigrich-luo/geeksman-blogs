import{_ as n,W as s,X as a,a1 as p}from"./framework-0436675f.js";const e={},t=p(`<p>之前章节中介绍的示例，所使用的数据和函数之间是没有任何直接联系的，他们之间的联系就是通过函数调用提供参数的形式将数据传入函数进行处理，这种方式也被称为面向过程编程。这样会有一个问题，经常可能因为错误的传递参数，错误地修改了数据而导致程序出错，甚至崩溃。维护时要从程序提供的一堆数据中去找，要拓展函数的功能，只能重新建立一个函数或修改它，开发效率会相对比较低。于是，面向对象编程的概念就诞生了。</p><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h2><p>面向对象编程是在面向过程编程的基础上发展来的，它比面向过程编程具有更强的灵活性和扩展性。面向对象编程是程序员发展的分水岭，很多初学者会因无法理解面向对象而放弃学习编程。</p><p>面向对象就是实际的事物模型或计算对象的模型，在程序中以类方式进行定义。类从某种意义上来说仍旧是对现实世界的模拟，他模拟的是现实世界中的各种事物，而现实世界中的各种事物都是有类别的，比如猫，狗等名词所指的都是一类事物。在程序中，定义的类就代表着同一类别的模型。</p><p>面向对象编程可以理解为一种封装代码的方法，在前面的章节中，我们已经接触了封装，比如说，将乱七八糟的数据扔进列表中，这就是一种简单的封装，是数据层面的封装；把常用的代码块打包成一个函数，这也是一种封装，是语句层面的封装。面向对象相比于前两种封装更先进，它可以更好地模拟真实世界的事物（将其视为对象），并把描述特征的数据和代码块（函数）封装到一起。</p><p>举个例子，如果想要设计一只狗的对象，你需要首先思考一下，狗具有什么特征？</p><ol><li>从表面特征来看，比如狗的毛发颜色，体重，名字等等。</li><li>从所具有的行为来描述，例如，狗会汪汪叫，会吃饭，会睡觉等等。</li></ol><p>如果把狗的信息用代码来表示，那么，狗的表面特征可以用变量表示，行为特征可以用函数来表示。示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 表面特征</span>
color <span class="token operator">=</span> <span class="token string">&#39;白&#39;</span>
weight <span class="token operator">=</span> <span class="token number">10</span>
name <span class="token operator">=</span> <span class="token string">&#39;旺财&#39;</span>

<span class="token comment"># 行为特征</span>
<span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;狗会吃东西&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;狗会睡觉&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而对象可以把表面特征与行为特征建立起联系，因此，相比于只用变量和函数，类可以更好地模拟现实生活中的事物。</p><h2 id="_2-定义和使用类" tabindex="-1"><a class="header-anchor" href="#_2-定义和使用类" aria-hidden="true">#</a> 2. 定义和使用类</h2><p>在 Python 中定义类的基本形式为：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token string">&#39;类名&#39;</span><span class="token punctuation">(</span><span class="token string">&#39;父类名&#39;</span><span class="token punctuation">)</span>：
	<span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>class 是定义类的关键字;</li><li>类名处使用符合规范的名称;</li><li>父类名是指该类继承的父类名称，如果没有可以连同括号都不写;</li><li>pass 表示空语句，什么也不做，常用来预留语句位置或临时未写等待以后完成。</li></ul><p>我们继续拿小狗举例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 声明一个小狗类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类在定义后必须先实例化才能使用，类的实例化跟函数调用类似，只要使用类名加圆括号的形式就可以实例化一个类。</p><p>类实例化以后会生成该类的一个实例，一个类可以实例化多个实例，实例与实例之间并不相互影响，类实例化以后就可以直接使用了。</p><p>举个例子，我的小狗就是狗这个大类的一个实例，因此我们需要先用 Dog 类来实例化一个实例来代表我的小狗：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 声明一个小狗类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>

<span class="token comment"># 将自定义类 Dog 实例化，命名该实例为 my_dog</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-类的方法与属性" tabindex="-1"><a class="header-anchor" href="#_3-类的方法与属性" aria-hidden="true">#</a> 3. 类的方法与属性</h2><p>上一节中，我们学习了如何声明和实例化一个类，但是，单纯这么做是没有什么实际价值的。要用类来解决实际问题，就要定义一个具有一些属性和方法的类，因为这样才符合真实世界中的事物特征。</p><h3 id="_3-1-属性" tabindex="-1"><a class="header-anchor" href="#_3-1-属性" aria-hidden="true">#</a> 3.1. 属性</h3><p>为了区分类中的变量与全局变量，将类中的变量称为<strong>属性</strong>。</p><p>Python 中的类的属性有两种：</p><ul><li>实例属性，即同一个类的不同实例的属性，他们的值是不会互相影响的，定义时使用 <code>实例名.属性名</code>。</li><li>类属性，是所有同一个类的实例共有的，直接在类中独立定义，引用时要使用 <code>类名.属性名</code> 的形式。</li></ul><p>为了方便理解，我们继续拿之前的狗类的表象特征来演示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 声明一个小狗类，此处声明的属性，为所有小狗实例对象共有的属性</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># 所有狗都具有的特征</span>
    legs <span class="token operator">=</span> <span class="token number">4</span>  <span class="token comment"># 四条腿</span>
    eyes <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># 两只眼睛</span>


<span class="token comment"># 实例化两个对象</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
your_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;===========获取狗类的公共属性============&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>legs<span class="token punctuation">,</span> my_dog<span class="token punctuation">.</span>eyes<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>your_dog<span class="token punctuation">.</span>legs<span class="token punctuation">,</span> your_dog<span class="token punctuation">.</span>eyes<span class="token punctuation">)</span>

<span class="token comment"># 添加实例属性</span>
<span class="token comment"># my_dog 与 your_doy 虽然都属于狗类，但是他们都有自己的特征</span>
my_dog<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token number">10</span>  <span class="token comment"># 我的狗重 10kg</span>
my_dog<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;白色&#39;</span> <span class="token comment"># 我的狗是白色</span>
my_dog<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;旺财&#39;</span>  <span class="token comment"># 我的狗叫旺财</span>

your_dog<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment"># 你的狗重 5kg</span>
your_dog<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;黑色&#39;</span>   <span class="token comment"># 你的狗是黑色</span>
your_dog<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">4</span>    <span class="token comment"># 你的狗今年四岁</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;=======打印不同实例的实例属性=========&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>weight<span class="token punctuation">,</span> my_dog<span class="token punctuation">.</span>color<span class="token punctuation">,</span> my_dog<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>your_dog<span class="token punctuation">.</span>weight<span class="token punctuation">,</span> your_dog<span class="token punctuation">.</span>color<span class="token punctuation">,</span> your_dog<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token comment"># 这里如果你想要打印 my_dog.age 或者 your_dog.name 都会报错</span>

<span class="token comment"># 修改类属性</span>
<span class="token comment"># 所有的狗突然一夜之间进化了，前肢进化为了手臂，以后只靠双腿走路</span>
Dog<span class="token punctuation">.</span>legs <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;==========打印修改后的类的公共属性===========&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>your_dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>

<span class="token comment"># 但是我的狗腿瘸了，只剩一条腿, 我的狗腿瘸了，不代表所有的狗腿都瘸了，因此，我在修改实例时，不会影响其他实例的属性</span>
my_dog<span class="token punctuation">.</span>legs <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;========在实例中用实例属性替代类属性，不影响其他实例========&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>your_dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-类的方法" tabindex="-1"><a class="header-anchor" href="#_3-2-类的方法" aria-hidden="true">#</a> 3.2. 类的方法</h3><p>为了区分在类中定义的函数和类外定义的全局函数，将类中定义的函数称为<strong>方法</strong>。</p><p>类中的方法定义与函数基本相同，区别有：</p><ul><li>方法中的第一个参数必须是 self, 而且不能省略;</li><li>方法的调用需要实例化类，并以<code>实例名.方法名</code>形式调用;</li><li>整体进行一个单位的缩进，表示其属于类中的内容。</li></ul><p>我们继续用狗举例，定义狗的吃饭和睡觉方法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 给小狗上了基因锁，从此狗再也不可能直立行走，必须靠 4 条腿走路，这样，legs 就是不可修改的。</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;睡觉&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> food<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;吃</span><span class="token interpolation"><span class="token punctuation">{</span>food<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 实例化</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 调用 sleep 方法</span>
my_dog<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 调用 eat 方法并传参</span>
my_dog<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token string">&#39;骨头&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：定义方法时，也可以像定义函数一样声明各种形式的参数；方法调用时，不用提供 self 参数。</p><p>在 Python 中的类定义中，可以定义一个特殊的构造方法，即 <code>__init__()</code> 方法，用于类实例化时，初始化相关数据，如果在这个方法中有相关参数，则实例化时就必须提供。</p><p>我们拿小狗来举例，我们要求每一条小狗都要有自己的名字，然后我们创建一个方法去调用名字属性。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 给小狗上了基因锁，从此狗再也不可能直立行走，必须靠 4 条腿走路，这样，legs 就是不可修改的。</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;睡觉&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> food<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;吃</span><span class="token interpolation"><span class="token punctuation">{</span>food<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token comment"># 这条狗叫什么名字</span>
    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;这条狗的名字叫</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 用关键字传参</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;旺财&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 位置传参</span>
your_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&#39;小黑&#39;</span><span class="token punctuation">)</span>

my_dog<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span>
your_dog<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们在实例化的时候没有填写参数，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>his_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TypeError: __init__() missing 1 required positional argument: &#39;name&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还有要注意的一点，属性名和方法名不能重复。</p><h2 id="_4-面向对象的三大特征" tabindex="-1"><a class="header-anchor" href="#_4-面向对象的三大特征" aria-hidden="true">#</a> 4. 面向对象的三大特征</h2><p>面向对象编程的三大特性：继承、封装、多态。</p><ol><li>多态 多态是指同一个方法调用由于对象不同会产生不同的行为。生活中这样的例子比比皆是：同样是狗，但是我家养的是哈士奇，你家养的柴犬，他家养的萨摩耶。</li><li>封装 隐藏对象的属性和实现细节，只对外提供必要的方法。 通过私有属性、私有方法的方式，实现封装。Python 追求简洁的语法</li><li>继承 继承可以让子类具有父类的特性，提高了代码的重用性。从设计上是一种增量进化，原有父类设计不变的情况下，可以增加新的功能，或者改进已有的算法。</li></ol><h3 id="_4-1-多态" tabindex="-1"><a class="header-anchor" href="#_4-1-多态" aria-hidden="true">#</a> 4.1. 多态</h3><p>在我们前面几节的内容里，我们已经接触过多态的概念了，比如在我们学习类的属性的时候，我们实例化我的小狗和你的小狗，他俩有不同的名字，体重，名字和年龄。这些都是不同的实例的属性，包括方法也一样。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 声明一个小狗类，此处声明的属性，为所有小狗实例对象共有的属性</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># 所有狗都具有的特征</span>
    legs <span class="token operator">=</span> <span class="token number">4</span>  <span class="token comment"># 四条腿</span>
    eyes <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># 两只眼睛</span>


<span class="token comment"># 实例化两个对象</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
your_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;===========获取狗类的公共属性============&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>legs<span class="token punctuation">,</span> my_dog<span class="token punctuation">.</span>eyes<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>your_dog<span class="token punctuation">.</span>legs<span class="token punctuation">,</span> your_dog<span class="token punctuation">.</span>eyes<span class="token punctuation">)</span>

<span class="token comment"># 添加实例属性</span>
<span class="token comment"># my_dog 与 your_doy 虽然都属于狗类，但是他们都有自己的特征</span>
my_dog<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token number">10</span>  <span class="token comment"># 我的狗重 10kg</span>
my_dog<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;白色&#39;</span> <span class="token comment"># 我的狗是白色</span>
my_dog<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;旺财&#39;</span>  <span class="token comment"># 我的狗叫旺财</span>

your_dog<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment"># 你的狗重 5kg</span>
your_dog<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;黑色&#39;</span>   <span class="token comment"># 你的狗是黑色</span>
your_dog<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">4</span>    <span class="token comment"># 你的狗今年四岁</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;=======打印不同实例的实例属性=========&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>weight<span class="token punctuation">,</span> my_dog<span class="token punctuation">.</span>color<span class="token punctuation">,</span> my_dog<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>your_dog<span class="token punctuation">.</span>weight<span class="token punctuation">,</span> your_dog<span class="token punctuation">.</span>color<span class="token punctuation">,</span> your_dog<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token comment"># 这里如果你想要打印 my_dog.age 或者 your_dog.name 都会报错</span>

<span class="token comment"># 修改类属性</span>
<span class="token comment"># 所有的狗突然一夜之间进化了，前肢进化为了手臂，以后只靠双腿走路</span>
Dog<span class="token punctuation">.</span>legs <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;==========打印修改后的类的公共属性===========&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>your_dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>

<span class="token comment"># 但是我的狗腿瘸了，只剩一条腿, 我的狗腿瘸了，不代表所有的狗腿都瘸了，因此，我在修改实例时，不会影响其他实例的属性</span>
my_dog<span class="token punctuation">.</span>legs <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;========在实例中用实例属性替代类属性，不影响其他实例========&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>your_dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Dog<span class="token punctuation">.</span>legs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-封装" tabindex="-1"><a class="header-anchor" href="#_4-2-封装" aria-hidden="true">#</a> 4.2. 封装</h3><p>封装性是面向对象重要的基本特性之一。封装隐藏了对象的内部细节，只保留有限的对外接口，外部调用者不用关心对象的内部细节，使得操作对象变得简单。</p><p>例如：一台计算机内部及其复杂，有主板，CPU，硬盘，内存等，而一般人不需要了解它的内部细节。计算机制造商用机箱把计算机封装起来，对外提供了一些接口，如鼠标，键盘，和显示器等，使用计算机就变得非常简单了。</p><p><strong>私有属性</strong></p><p>为了防止外部调用者随意存取类的内部数据（成员变量），内部数据（成员变量）会被封装成为“私有变量”，外部调用者只能通过方法调用私有变量。</p><p>默认情况下，Python 中的变量是公有的，可以在类的外部访问它们。如果想让它们成为私有变量，则在变量前加上双下划线（__）即可。</p><p>例如，</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 我给狗类上了基因锁，狗永远只能 4 条腿走路</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 设置私有属性</span>
    __legs <span class="token operator">=</span> <span class="token number">4</span>
    
    <span class="token comment"># 内部获取狗腿数量</span>
    <span class="token keyword">def</span> <span class="token function">print_legs_count</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;狗有</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__legs<span class="token punctuation">}</span></span><span class="token string">条腿&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 实例化我的小狗</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_dog<span class="token punctuation">.</span>print_legs_count<span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment"># 在内部可以正常调用</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>__legs<span class="token punctuation">)</span>		<span class="token comment"># 在外部调用时，无法获取该属性，抛出异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： 私有变量可以在类的内部进行访问，不能在类的外部进行访问</p><p><strong>私有方法</strong></p><p>私有方法与私有变量的封装是类似的，在方法前面加上双下划线（__）就是私有方法了。</p><p>例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 为了限制狗的进化，我们给狗类上了基因锁，狗永远只能 4 条腿走路</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 设置私有属性</span>
    __legs <span class="token operator">=</span> <span class="token number">4</span>
    
    <span class="token comment"># 设置私有方法，内部获取狗腿数量</span>
    <span class="token keyword">def</span> <span class="token function">__print_legs_inner</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;狗有</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__legs<span class="token punctuation">}</span></span><span class="token string">条腿&#39;</span></span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">print_legs_out</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__print_legs_inner<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 实例化我的小狗</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_dog<span class="token punctuation">.</span>print_legs_out<span class="token punctuation">(</span><span class="token punctuation">)</span>			<span class="token comment"># 正常运行</span>
my_dog<span class="token punctuation">.</span>__print_legs_inner<span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment"># 抛出异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了实现对象的封装，在一个类中不应该有公有的成员变量，这些成员变量应该都被设计成为私有的，然后通过公有的 set(赋值)和 get(取值)方法来访问。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 设置私有属性</span>
    __legs <span class="token operator">=</span> <span class="token number">4</span>

    <span class="token comment"># get 方法</span>
    <span class="token keyword">def</span> <span class="token function">get_legs</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__legs

    <span class="token comment"># set 方法</span>
    <span class="token keyword">def</span> <span class="token function">set_legs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> legs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__legs <span class="token operator">=</span> legs


<span class="token comment"># 实例化一个对象</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>get_legs<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
my_dog<span class="token punctuation">.</span>set_legs<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dog<span class="token punctuation">.</span>get_legs<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种进阶的方法来访问私有变量， 通过 <code>@property</code> 和 <code>@属性名.setter</code> 装饰器来完成。装饰器是函数中的一个进阶概念，我们在入门阶段，先不详细讲。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 设置私有属性</span>
    __legs <span class="token operator">=</span> <span class="token number">4</span>

    <span class="token comment"># 内部获取狗腿数量</span>
    <span class="token keyword">def</span> <span class="token function">print_legs_count</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;狗有</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>__legs<span class="token punctuation">}</span></span><span class="token string">条腿&#39;</span></span><span class="token punctuation">)</span>

    <span class="token comment"># 替代 get_legs</span>
    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">legs</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__legs

    <span class="token comment"># 替代 set_legs</span>
    <span class="token decorator annotation punctuation">@legs<span class="token punctuation">.</span>setter</span>
    <span class="token keyword">def</span> <span class="token function">legs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> legs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__legs <span class="token operator">=</span> legs


<span class="token comment"># 实例化一个对象</span>
my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_dog<span class="token punctuation">.</span>print_legs_count<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_dog<span class="token punctuation">.</span>legs <span class="token operator">=</span> <span class="token number">2</span>
my_dog<span class="token punctuation">.</span>print_legs_count<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-继承" tabindex="-1"><a class="header-anchor" href="#_4-3-继承" aria-hidden="true">#</a> 4.3. 继承</h3><p>在现实世界中的继承关系无处不在，例如：猫与动物之间的关系：猫是一种特殊动物，具有动物的全部特征和行为，即数据和操作。在面向对象中动物是一般类，被称为<strong>父类</strong>，猫是特殊类，被称为<strong>子类</strong>。特殊类拥有一般类的全部数据和操作，可称子类继承父类。</p><p>在 Python 中声明子类继承父类的语法很简单，定义类时在类的后面使用一对小括号指定它的父类就可以了，在 Python 中一般类都继承 object。</p><p><strong>单继承</strong></p><p>语法格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class &#39;父类名&#39;:
	pass

class &#39;子类名&#39;（&#39;父类名&#39;）：
	pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 定义动物类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">print_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;动物的名字叫：</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>


<span class="token comment"># 定义猫类使其继承动物类</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Animal<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span>  <span class="token comment"># 调用父类的构造方法</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age


cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token string">&#39;汤姆&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
cat<span class="token punctuation">.</span>print_info<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 父类的方法被子类继承，子类对象可调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在调用父类的构造方法时，我们还有一种写法，那就是使用 super() 函数</p><p><code>super()</code> 函数，它会使子类从其父继承所有方法和属性：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>   <span class="token comment"># 调用父类的构造方法</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法与用父类名调用的方法效果是一样的。</p><p><strong>多继承</strong></p><p>一个类继承多个父类。在多继承中 如果多个父类中属性名 或者是方法名相同 那么将按照MRO算法查找</p><p>MRO:</p><ol><li>在自己的类中查找 如果找到 就结束</li><li>在父类元组中按照顺序查找 从左到右</li></ol><p>所有在Python中，当子类继承多个父类时，如果在多个父类有相同的成员方法和成员变量，则子类优先继续左边父类中的成员方法或成员变量，从左到右继承级别从高到低。</p><p>语法格式：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span>Object<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
 
<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
 
<span class="token keyword">class</span> <span class="token class-name">C</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;狗的名字叫</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;狗跑的很快&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Husky</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;哈士奇的名字叫</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;哈士奇跑的很慢&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">sofa</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;咬沙发&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">MyDog</span><span class="token punctuation">(</span>Dog<span class="token punctuation">,</span> Husky<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age


d <span class="token operator">=</span> MyDog<span class="token punctuation">(</span><span class="token string">&#39;二哈&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
d<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 继承父类狗方法</span>
d<span class="token punctuation">.</span>sofa<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 继承父类哈士奇方法</span>
d<span class="token punctuation">.</span>show_info<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 继承父类哈士奇方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>狗跑的很快
咬沙发
狗的名字叫二哈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法重写（重载）</strong></p><p>如果子类的方法名与父类的方法名相同，则在这种情况下，子类的方法会重写父类的同名方法。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;狗的名字叫</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;狗跑的很快&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Husky</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;哈士奇的名字叫</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;哈士奇跑的很慢&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">sofa</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;咬沙发&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># 在 MyDog 类中添加 show_info() 方法</span>
<span class="token keyword">class</span> <span class="token class-name">MyDog</span><span class="token punctuation">(</span>Dog<span class="token punctuation">,</span> Husky<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token comment"># 重写 show_info() 方法</span>
    <span class="token keyword">def</span> <span class="token function">show_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;我家的狗叫</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>


d <span class="token operator">=</span> MyDog<span class="token punctuation">(</span><span class="token string">&#39;二哈&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
d<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 继承父类狗方法</span>
d<span class="token punctuation">.</span>sofa<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 继承父类哈士奇方法</span>
d<span class="token punctuation">.</span>show_info<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 重写父类方法方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,94),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","07.python-basis-oop.html.vue"]]);export{d as default};
