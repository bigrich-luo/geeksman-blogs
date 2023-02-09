---
title: 7 天入门 Python
author: Jonathan Luo / 罗大富 BigRich
description: 7 天入门 Python
date: 2023-02-08 20:43:11
permalink: /pages/947fcd/
categories: 
  - Python
tags: 
  - 
---

# 1. Python 简介

Python 在诞生之初，因为其功能不好，运转功率低，不支持多核，根本没有并发性可言，在计算功能不那么好的年代，一直没有火爆起来，甚至很多人根本不知道有这门语言。

随着时代的发展，物理硬件功能不断提高，而软件的复杂性也不断增大，开发效率越来越被企业重视。因此就有了不一样的声音，在软件开发的初始阶段，性能并没有开发效率重要，没必然为了节省不到 1ms 的时间却让开发量增加好几倍，这样划不过来。也就是开发效率比机器效率更为重要，那么 Python 就逐渐得到越来越多开发者的亲睐了。

在前些年，云计算升温，大量创业公司和互联网巨头挤进云计算领域，而最著名的云核算开源渠道 OpenStack 就是基于 Python 开发的。

随后几年的备受关注的人工智能，机器学习首选开发语言也是 Python。

至此，Python 已经成为互联网开发的焦点。 对于Python来说，时代从未如此美好。TIOBE 指数的数据显示，**Python是目前世界上最受欢迎的编程语言**，过去二十年也一直处于增长趋势。 


### 1.1 你学习 Python 的目的是什么？

在你学习该教程之前，你需要明确以下几个问题：

如果你是出于兴趣，或者只是想拓展下技能，学个乐呵，比如做个 2048 小游戏，处理数据，做个爬虫爬一下公司附近租房子哪里便宜，玩玩 MicroPython 与树莓派硬件编程，那你可以快乐入局~

如果你是想入行当程序员，以后靠编程这门手艺吃饭，那建议你先看看自己的年龄，再看看自己的学历，再多想想吧。

还有很多培训机构会告诉你学 Python 可以做兼职，增加自己的额外收入，前提是你要报名我们的 VIP 精品课程班。。。你开心就好。毕竟科班出身到程序员从 18 岁到 25 岁硕士都毕业了，而你 25 岁才开始学习零基础入门 Python，竞争力真的太弱了。

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209151251202.jpg" style="zoom:33%;" />

如果你有一定的编程语言基础，学习 Python 也是不错的选择，因为 Python 很可能就是未来开发的主流方向，多学一门语言，多一个防身技能。而且 Python 有强大的功能库，能非常快速的开发工具，为你的本职开发工作提供护航。 

### 1.2 Python 的用途

- **Web开发**

Python的诞生历史比Web还要早，由于Python是一种解释型的脚本语言，开发效率高，所以非常适合用来做Web开发。

Python有上百种Web开发框架，有很多成熟的模板技术，选择Python开发Web应用，不但开发效率高，而且运行速度快。

常用的web开发框架有：Django、Flask、FastAPI 等。

许多知名的互联网企业将python作为主要开发语言：豆瓣、知乎、Google、NASA、Youtube、FaceBook……

由于后台服务器的通用性，除了狭义的网站之外，很多 App 和游戏的服务器端也同样用 Python实现。

提供丰富的模块支持sockets编程，能方便快速地开发分布式应用程序。很多大规模软件开发计划例如 Zope，Mnet 及 BitTorrent，Google 都在广泛地使用它。

- **网络爬虫**

许多人对编程的热情始于好奇，终于停滞。

距离真枪实干做开发有技术差距，也无人指点提带，也不知当下水平能干嘛？就在这样的疑惑循环中，编程技能止步不前，而爬虫是最好的进阶方向之一。

网络爬虫是Python比较常用的一个场景，国际上，Google在早期大量地使用Python语言作为网络爬虫的基础，带动了整个Python语言的应用发展。以前国内很多人用采集器搜刮网上的内容，现在用Python收集网上的信息比以前容易很多了，如：

从各大网站爬取商品折扣信息，比较获取最优选择；

对社交网络上发言进行收集分类，生成情绪地图，分析语言习惯；

爬取网易云音乐某一类歌曲的所有评论，生成词云；

按条件筛选获得豆瓣的电影书籍信息并生成表格……

应用实在太多，几乎每个人学习爬虫之后都能够通过爬虫去做一些好玩有趣有用的事。

- **人工智能**

人工智能是现在非常火的一个方向，AI热潮让Python语言的未来充满了无限的潜力。现在释放出来的几个非常有影响力的AI框架，大多是Python的实现，为什么呢？

因为Python有很多库很方便做人工智能，比如 numpy, scipy 做数值计算的，sklearn 做机器学习的，pybrain 做神经网络的，matplotlib 将数据可视化的。在人工智能大范畴领域内的数据挖掘、机器学习、神经网络、深度学习等方面都是主流的编程语言，得到广泛的支持和应用。

人工智能的核心算法大部分还是依赖于C/C++的，因为是计算密集型，需要非常精细的优化，还需要GPU、专用硬件之类的接口，这些都只有C/C++能做到。

而Python是这些库的API binding，使用Python是因为CPython的胶水语言特性，要开发一个其他语言到C/C++的跨语言接口，Python是最容易的，比其他语言的门槛要低不少，尤其是使用Cython的时候。

- **数据分析**

数据分析处理方面，Python有很完备的生态环境。“大数据”分析中涉及到的分布式计算、数据可视化、数据库操作等，Python中都有成熟的模块可以选择完成其功能。对于Hadoop-MapReduce和Spark，都可以直接使用Python完成计算逻辑，这无论对于数据科学家还是对于数据工程师而言都是十分便利的。

- **自动化运维**

Python对于服务器运维而言也有十分重要的用途。由于目前几乎所有Linux发行版中都自带了Python解释器，使用Python脚本进行批量化的文件部署和运行调整都成了Linux服务器上很不错的选择。Python中也包含许多方便的工具，从调控ssh/sftp用的paramiko，到监控服务用的supervisor，再到bazel等构建工具，甚至conan等用于C++的包管理工具，Python提供了全方位的工具集合，而在这基础上，结合Web，开发方便运维的工具会变得十分简单。

- **Python的其他应用举例**

桌面应用开发：有 PyQt5、Tkinter 等支持，能方便进行桌面应用程序开发。

数学处理：NumPy 扩展提供大量与许多标准数学库的接口。

文本处理：Python提供的re模块能支持正则表达式，还提供SGML，XML分析模块，许多程序员利用Python进行XML程序的开发。

多媒体应用：Python的 PyOpenGL 模块封装了「OpenGL应用程序编程接口」，能进行二维和三维图像处理。PyGame 模块可用于编写游戏软件。

黑客编程：Python有一个hack的库，内置了你熟悉的或不熟悉的函数，但是缺少成就感。

# 2.Python 与 PyCharm 的安装 #

因为 Python 是跨平台的，它可以运行在 Windows、Mac 和各种 Linux/Unix 系统上。目前，Python 有两个版本，一个是 2.x 版，一个是 3.x 版。

官方推荐使用 Python 3.x 系列版本（不向下兼容 Python 2.x 版本），并且 Python 官网从 2020-01-01 就停止维护 Python2.7 版本。

该教程安装的是 Python 3.8 版本（3.6 ~ 3.8 都是没问题的），因为 3.9 及之后的版本不再支持 Windows 7 以及之前的系统。

至于在哪里下载，我建议大家最好直接官网下载，随时下载下来的都是最新版本。官网地址：[https://www.python.org/](https://www.python.org/)

或者,我已经为大家准备好了软件安装包，

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160118052.PNG" style="zoom:67%;" />

### 2.1 Windows 系统下安装 Python 解释器

找到下载好的 PyCharm 安装包，以管理员身份运行 Python 安装包。

<img src="C:\Users\Administrator\Pictures\Screenshots\202209152143085.PNG" style="zoom: 67%;" />

下载完后，直接安装，不过这里记得勾上Add Python 3.8 to PATH，然后点「Install Now」即可完成安装。

这里要注意了! 记得把「Add Python 3.8 to Path」勾上，勾上之后就不需要自己配置环境变量了，如果没勾上，就要自己手动配置。

如果你一时手快，忘记了勾上 「Add Python 3.8 to Path」，那也不要紧，只需要手动配置一下环境变量就好了。

在命令提示框中 cmd  上输入 ：

```
path=%path%;C:\Python 
```

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209152243704.PNG" style="zoom:90%;" />

这里默认全选，点击 Next 即可

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209162219612.PNG" style="zoom:80%;" />

这里勾选前五个，并且更改安装路径

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209152305053.PNG" style="zoom:80%;" />

看到如下图就是安装成功了

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161614651.PNG)

验证是否成功，按win+R，输入cmd ，输入Python回车后，出现下面的情况，证明 Python 安装成功了。

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161620136.PNG)

### 2.2 安装集成开发环境 (IDE): PyCharm

PyCharm 是由 JetBrains 打造的一款 Python IDE，支持 macOS、 Windows、 Linux 系统。

Jetbrains 开发了许多好用的编辑器，包括 Java 编辑器（IntelliJ IDEA）、JavaScript编辑器（WebStorm）、PHP编辑器（PHPStorm）、Ruby编辑器（RubyMine）、C和C++编辑器（CLion）、.Net编辑器（Rider）、iOS/macOS编辑器（AppCode）等。

PyCharm 是我用过的python编辑器中，比较顺手的一个。而且可以跨平台，在macos和windows下面都可以用，这点比较好。是python现在最好用的编辑器，没有之一。

PyCharm 官网下载地址：[https://www.jetbrains.com/pycharm/download/#section=windows](https://www.jetbrains.com/pycharm/download/#section=windows)

PyCharm分为两个版本，第一个版本是 Professional(专业版本)，这个版本功能更加强大，主要是为数据处理和 Web 开发者而准备，是需要付费的。第二个版本是社区版，一个专业版的阉割版，比较轻量级，主要用于纯 Python 开发。小伙伴们可以根据自己的需求选择下载。

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209152316466.PNG" style="zoom:50%;" />

找到下载好的 PyCharm 安装包，并以管理员身份运行 Python 安装包。

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160115468.PNG" style="zoom:67%;" />

双击已下载的 PyCharm 安装包，出现如下图所示的界面，点击「Next」

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160120790.PNG)

选择安装目录，Pycharm 需要的内存较多，建议将其安装在D盘或者E盘，不建议放在系统盘C盘

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160124931.PNG)



 点击 Next，进入下图的界面，全选就OK了, 其实都挺有用的。

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160130588.PNG)

这一步无脑点击安装即可。

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202209160135734.PNG)之后就会得到下面的安装完成的界面，点击 Finish，Pycharm 安装完成。 

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161638984.PNG)

接下来对 Pycharm 进行配置，双击运行桌面上的 Pycharm 图标，进入下图用户协议界面： 

勾选 I confirm that.......，点击 Continue

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161644248.PNG" style="zoom:80%;" />

数据分享，这个相当于一个问卷调查吧，看自己愿不愿将信息发送 JetBrains 来提升他们产品的质量，这个看个人意愿，无所谓。

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161657911.PNG" style="zoom:80%;" />

之后，就进入了创建新项目阶段

<img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161659059.PNG" style="zoom:80%;" />

### 2.3 PyCharm 创建新项目

点击 New Project

 

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210161739717.PNG)

点击右上角“**文件夹图标**”并选择项目目录，在这里，我选择了 python-base 作为项目目录 / 项目名

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162100251.PNG) 随后点开顶部“**小箭头**”，并选择自己安装的 Python 解释器。

注：第一个的意思是创建新的虚拟环境，因为目前，我们还没有学习什么是虚拟环境，所以，在这里，一定要选择 「Previously configured interpreter （已配置好的解释器）」。

至于虚拟环境，我们后期也会学习的。

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162122807.PNG)

点击 「Add Interpreter」 添加解释器，

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162132382.PNG)

在 System Interpreter 中 找到自己的 Python 解释器位置，点击OK

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162134452.PNG)

点击 Create, 即创建成功

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162136806.PNG)

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162138597.PNG)

最后，我们做一下验证，右击项目目录，创建一个新的 .py 文件，并取名为 test1.py

在 test1.py 中输入 

```python
print('Hello, PyCharm')
```

注：注意大小写！

右击空白处，Run 'test1'

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210162150799.PNG)

现在，你就可以自由的在 PyCharm 中敲代码了！

# 3. Python 的基础语法

### 3.1 代码注释

代码注释是程序中不可少的部分，但注释不是程序，**不能被执行**，只是对程序代码进行解释说明，既可以作为程序员之间交流的主要途径，也能方便作者自己以后阅读代码与维护代码，大大增强程序的可读性。

Python 中的注释有两种形式：

1. 单行注释，以 “#” 字符开始，同一行中其后的所有内容都视为注释，不论是什么都不会执行；
2. 多行注释，用三个单引号'''或三个双引号"""将注释到内容包围起来。

以下代码同时包含有这两种注释：

```python
"""
    该程序段的功能是：
    判断变量a是奇数还是偶数
"""

# 要求用户输入一个整数
a = int(input('输入一个整数：'))

# 对变量 a 进行判断
if a % 2 == 0:
    # 如果 a 对 2 取余值为 0，则输出偶数
    print('偶数')
else:
    print('奇数')  # 如果 a % 2 不等于 0， 则输出偶数
# print('结束')		# 此行为注释语句，不会执行
```

注：为了保证代码的可读性，`#`后面建议先添加一个空格，然后再编写相应的说明文字

### 3.2 变量

变量是存放数据值的容器，简单点说，就是在程序运行时，记录数据用的。

###### 3.2.1 变量的定义方式

> 变量名称 = 变量的值

等号 "=" 在这里的意义，与数学里面的 "=" 不同，在这里是赋值运算符的意思，即将等号右侧的值，赋予左侧的变量名。

从形式上看，每个变量都拥有独一无二的名字，例如

```python
a = 1	# a 为变量名，1为变量值。
```

从底层看，程序中的数据都要放在内存中，变量就是这块内存的名字。

Python 允许您在一行中为多个变量赋值：

```python
# 一行声明多个变量
x, y, z = 'a', 1, '23'
# 打印结果
print('x的值是' + x)
print('y的值是' + y)
print('z的值是' + z)
```

###### 3.2.2 变量命名规则

Python 变量命名规则有以下几种：

- 变量名必须以字母或下划线字符开头
- 变量名称不能以数字开头
- 变量名只能包含字母数字字符和下划线（A-z、0-9 和 _）
- 变量名称区分大小写（age、Age 和 AGE 是三个不同的变量）

Python 有三种常用的命名方法：

1. 下划线命名法

    逻辑断点（单词）用的是下划线隔开，例如：

   ```python
   lihua_name = '梨花'
   ruhua_name = '如花'
   ```

2. 小驼峰命名法

   除第一个单词之外，其他单词首字母大写，例如：

   ```python
   lihuaName = '梨花'
   ruhuaName = '如花'
   ```

3. 大驼峰命名法

    相比小驼峰法，大驼峰法（即帕斯卡命名法）把第一个单词的首字母也大写了。常用于类名, 例如:

   ```python
   class Animal()
   ```

###### 3.2.3 变量名称不可使用关键字

Python中有一系列单词，称之为关键字。关键字在Python中都有特定用途，因此，我们不可以使用它们作为标识符。

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202210272323850.png)

### 3.3 Python 输入/输出

对于所有的程序，输入和输出是用户与程序进行交互的主要途径，也是 Python 中的内置函数（函数的概念，我们等到后面再讲）。通过输入程序能够获取程序运行所需的原始数据，通过输出程序能够将数据的处理结果输出，让用户了解运行结果。 

###### 3.3.1 输出函数 print()

在前面的内容中，我们一直都在使用输出函数 print()，我们也知道，Python 程序如果需要输出，就必须调用 print() 函数，基本形式如下：

```python
print(value, ..., sep='', end='\n')
```

其中参数的意义如下：

- value 是用户要输出的信息，后面的省略号表示可以有多个要输出的信息；
- sep 是多个要输出信息之间的分隔符，其默认值为一个空格；
- end 是一个 print() 函数中所有要输出信息之后添加的符号，默认值为换行符。

还记得我们之前写的第一行代码吗？只有一句 `print('你好，PyCharm')`

我们也可以写成，以下几种形式：

```python
print('你好'，',', 'PyCharm')
print('你好', 'PyCharm', sep=',')
```

###### 3.3.2 输入函数 input()

Python 程序如果需要输入，就必须调用其 input() 函数，基本形式如下：

```python
input([提示语])
```

其中的参数是可选的，即可以使用，也可以不使用。**参数是用来提供用户输入的提示信息字符串**。当用户输入程序所需要的数据时，就会以字符串的形式返回。

但是，我们应该输入存储用户输入的数据呢？这时候就需要用到上一小节学习的**变量**。

我们把 `input()`中的内容赋值给一个变量，然后打印即可，如下：

```python
# 输入名字
name = input('请输入你的名字')
# 打印用户输入的值
print(name)
```

注意：input() 函数获取的数据，都会转换成字符串的格式，因此，当我们输入数字或其他类型数据的时候，需要进行转换。这里你可能有疑问了，什么是字符串？什么是数据类型？请继续往下看。

### 3.4 数值类型

**数据类型**

在编程中，数据类型是一个重要的概念。

变量可以存储不同类型的数据，并且不同类型可以执行不同的操作。

在这些类别中，Python 默认拥有以下内置数据类型：

| 类型     | 说明                                                |
| -------- | --------------------------------------------------- |
| 文本类型 | `str`                                               |
| 数值类型 | `int（整数）`, `float（浮点数）`, `complex（复数）` |
| 序列类型 | `list(列表)`, `tuple(元组)`                         |
| 映射类型 | `dict(字典)`                                        |
| 集合类型 | `set（集合）`                                       |
| 布尔类型 | `bool(布尔)`                                        |

你可以使用 type() 函数获取任何对象的数据类型： 

```python
# 整数型 int
var_int = 10
print(type(var_int))

# 浮点型 float
var_float = 1.1
print(type(var_float))

# 文本类型 str
var_str = '你好'
print(type(var_str))

# 列表 list
var_list = [1, 2, '这是啥']
print(type(var_list))

# 元组 tuple
var_tuple = (1, 2, '这是啥')
print(type(var_tuple))

# 字典 dict
var_dict = {'a': 1, 'b': 2, 'c': 3}
print(type(var_dict))

# 集合 set
var_set = {1, 2, '这是啥'}
print(type(var_set))

# 布尔值 bool
var_bool = True
print(type(var_bool))
```

首先要讲的是数值类型，数值类型包括`int（整数）`, `float（浮点数）`, `complex（复数）`

###### 3.4.1 int(整型)

整数当然包括正整数，负数和零。Python 中整数还可以以几种不同的进制进行书写。

`0`+`进制标志`+`数字`代表不同进制的数。进制标志有以下几种：

|     进制     |              说明              |
| :----------: | :----------------------------: |
|  八进制整数  |  0o[0O]数字, 例如：0o24, 0O24  |
| 十六进制整数 |  0x[0X]数字, 例如：0x3F, 0X3F  |
|  二进制整数  | 0b[0B]数字, 例如：0b101, 0B101 |
|    十进制    |  不带进制标志, 例如：1, 2, 3   |

```python
# 二进制
int_bin = 0b100
print(int_bin, type(int_bin))

# 八进制
int_oct = 0o24
print(int_oct, type(int_oct))

# 十六进制
int_hex = 0x3f
print(int_hex, type(int_hex))
```

注意：Python 默认会转换为十进制打印。

###### 3.4.2 float(浮点型)

浮点数就是常用的带小数的数。浮点数的书写除了一般形式(形如 `1.23`)，还有以下几种表示方法：

|        表示方法        | 示例 |
| :--------------------: | :--: |
| 小数部分为 0，可以不写 | 23.  |
| 整数部分为 0，可以不写 | .098 |

示例：

```python
# 一般形式
float_1 = 1.23
print(float_1, type(float_1))

# 小数部分为零，省略
float_2 = 23.
print(float_2, type(float_2))

# 整数部分为 0，省略
float_3 = .36
print(float_3, type(float_3))
```

###### 3.4.3 算术运算符

讲完数值类型了，接下来就需要了解一下，数值参与的运算符

| 算术运算符 |     描述     |
| :--------: | :----------: |
|     **     |  乘方运算符  |
|     *      |     乘法     |
|     /      |     除法     |
|     //     | 地板除(整除) |
|     %      |     取余     |
|     +      |     加法     |
|     -      |     减法     |
|     \|     |     位或     |
|     ^      |    位异或    |
|     &      |     位与     |
|     <<     |     左移     |
|     >>     |     右移     |

`|`,`^`,`&`,`<<`,`>>`都是位运算符，要依据其二进制形式进行运算。

当同一个算式中含有多个运算符时，Python 会按照优先级进行运算，即先计算优先级高的，后计算优先级低的，同级的运算符则从左向右计算。

运算符优先级从高到低排列如下：

- **
- *，/，%
- +，-
- |，^，&，<<，>>

在同一个算式中，你也可以使用括号`()`来修改运算符的优先级，即括号内的具有高优先级。因此，你不必强记运算符的优先级，在没有把握的情况下可以使用括号`()`。

### 3.5 字符串

在前面的内容中，我们已经不止一次的使用过字符串了。字符串主要用于存储和表示文本。Python 中的字符串通常由单引号，双引号，三个单引号或三个双引号包围的一串字符组成。

注意：单引号和双引号都应当是英文字符中的符号。

字符串中的字符可以包含数字，字母，中文字符，特殊符号，以及一些不可见的控制字符，如换行符，制表符等。例如以下都是字符串：

```python
'abd'
'''abc'''
"2fd3.0+"
"""124"""
```

既然都是字符串，那么这四种表示方法有什么区别与联系呢？

单引号字符串与双引号字符串本质上是相同的。但当字符串内含有单引号时，如果单引号字符串就会导致无法区分字符串内的单引号与字符串标志的单引号，就要使用转移字符串，如果用双引号字符串就可以在字符串中直接书写单引号即可。比如`'abc"124"ef'`。

三引号字符串可以由多行组成，单引号或双引号字符串则不行，当需要使用大段多行的字符串时就可以使用它。比如：

```python
'''
This is a cat.
This is a dog.
'''
```

###### 3.5.1 字符串运算

在 Python 中字符串是可以使用`+`，`*`运算符进行运算的，

`+`的作用是连接字符串；`*`就是单个字符串的多次连接，例如：

```python
# 打印 'aaa' 与 '123' 相加的结果 
print('aaa' + '123')
# 结果为 'aaa123'

# 打印 'hello' * 4 的结果
print('hello' * 4)
# 结果为 'hello hello hello'
```

###### 3.5.2 转义字符串

刚才我们提到了字符串中的字符可以包含数字，字母，中文字符，特殊符号，以及一些不可见的控制字符，如换行符，制表符等。那么什么是转义字符串呢？

Python中\代表转义，在 Python 中如果要在字符串中包含控制字符或特殊含义的符号，就需要使用转义字符。常见的转义字符如下：

| 转义字符 |     说明      |
| :------: | :-----------: |
|    \n    |    换行符     |
|    \t    |  制表符(Tab)  |
|    \r    | 回车（Enter） |
|   `\\`   |    `\`字符    |
|   `\'`   |   `'`单引号   |
|   `\"`   |   `"`双引号   |

例如：

```python
'abc\n124'	# 包含一个换行符的字符串
'abc\'2\'abc'	# 字符串中包含一个被单引号引起来的 2
```

###### 3.5.3 原始字符串

在上一小节中提到字符串中可以包含有一些转义字符，但他们都是以`\`开头，而当字符串中需要`\`字符时就必须写成`\\`的形式，如果需要两个`\\`时，就必须写成`\\\\`的形式。Python 中有一种解决办法，可以不用写这么多个`\`字符，那就要使用原始字符串。原始字符串就是在字符串前以 r 或 R 作为标志，如下：

```python
print(r'c:\windows\system')
```

但是，在原始字符串中存在一个问题，原始字符串的末尾不能以`\`结尾，如下：

```python
print(r'c:\windows\system\')
```

###### 3.5.4 格式化字符串

在 Python 中，所有字符串中的字符顺序是不可变的，但是在某些情况下，比如输出时，可能又要根据不同的需要修改字符串的内容，这时，可使用 Python 的格式化字符串功能。Python 中有 3 种格式化字符串的方法

1. 使用占位符

在 Python 中，可以在字符串中使用以 `%` 开头的字符，在程序中改变字符串中的内容，常用的格式化字符如下：

| 占位符 |                            说明                             |
| :----: | :---------------------------------------------------------: |
|   %c   |                     格式化字符及ASCII码                     |
|   %f   | 格式化浮点数，可以指定小数点后面的精度，默认是小数点后 6 位 |
|   %d   |                   格式化整数，也比较常用                    |
|   %o   |                    格式化无符号八进制数                     |
|   %s   |                字符串的格式化，也是最常用的                 |
|   %x   |           格式化无符号十六进制数，其中的字母小写            |
|   %X   |           格式化无符号十六进制数，其中的字母大写            |
|   %e   |               将整数、浮点数转换成科学计数法                |
|   %%   |    当字符串中存在格式化标志时，需要用 %% 表示一个百分号     |

占位符 `%s %c %%` 的使用:

```python
# 最常用的占位符
name='小明'
print('%s的使用:')
print('我的名字叫%s！'%(name))
print('我的名字叫%4s！'%(name))   #右对齐
print('我的名字叫%-4s！'%(name))  #左对应

# 由于在python中只有字符串这种类型，使用在这里%c只能表示ASCII码，并不能表示字符
character=56
print('c的使用:')
print('%d在ASCII码中表示字母%c'%(character,character))

# %%
schedule=99
print('%%的使用:')
print('当前下载进度为%d%%！'%(character))
```

由于在 Python 中只有字符串这种类型，所以在 Python 中 %c 只能表示 ASCII 码，并不能表示字符.

占位符 `%d %o %x` 的使用：

```python
number=18
print('%d使用十进制为:%d'%(number,number))      #十进制
print('%d使用八进制为:%o'%(number,number))      #八进制
print('%d使用十六进制为:%x'%(number,number))    #十六进制
```

如果在表示八进制或者十六进制时想显示各进制的前缀时，在%后面加一个 `#` 就好：

```python
number=200
print('%d使用八进制为:%#o'%(number,number))
print('%d使用十六进制为:%#x'%(number,number))
```

占位符 `%f %e` 的使用：

```python
height=143.5
print('我的身高有%f米'%(height))                    #默认情况
print('我的身高有%.1f米'%(height))                  #小数点保留1位
print('%f使用科学记数法为：%e'%(height,height))
```

2. 使用 format 方法格式化输出:

   不设置指定位置

   ```python
   name = "{}在{}玩了一天的{}"
   data = name.format("小明", "网吧", "LOL")
   print(data)
   ```

   设置指定名称

   ```python
   name = "{name}在{Location}玩了一天的{game}"
   data = name.format(Location="网吧",game="LOL",name="小明")
   print(data)
   ```

   设置指定位置

   ```python
   name = "{2}在{0}玩了一天的{1}"
   data = name.format("网吧","LOL","小明",)
   print(data)
   ```

   注意: 指定位置是从 0 开始算起,而不是 1!

3. 使用 f-string 格式化

   `f-string`是 python3.6 之后版本添加的，称之为字面量格式化字符串，用起来较前两种简单，形式也更简洁

   ```python
   name = '小明'
   place = '网吧'
   game = 'LOL'
   print(f'{name}在{place}玩了一天的{game}')
   ```

###### 3.5.5 字符串处理函数

除了用运算符对字符串进行运算外，Python还提供了很多对字符串操作的函数，其中常用的字符串操作函数如下：

|     字符串操作      |                       描述                       |
| :-----------------: | :----------------------------------------------: |
| string.capitalize() |      将字符串的第一个字母大写，其余字母小写      |
|   string.count()    |          获得字符串中某一子字符串的数目          |
|    string.find()    |  获得字符串中某一子字符串的起始位置，无则返回-1  |
|  string.isalnum()   |          检测字符串是否仅包含数字与字母          |
|  string.isalpha()   |             检测字符串是否仅包含字母             |
|  string.isdigit()   |             检测字符串是否仅包含数字             |
|  string.islower()   |           检测字符串是否仅包含字母小写           |
|  string.istitle()   |         检测字符串中的单词是否首字母大写         |
|  string.isupper()   |           检测字符串是否仅包含大写字母           |
|    string.join()    |                    拼接字符串                    |
|   string.lower()    |              将字符串全部转换为小写              |
|   string.split()    |                    分割字符串                    |
|  string.swapcase()  | 将字符串中大写字母转换为小写，小写字母转换为大写 |
|   string.title()    |            将字符串中的单词首字母大写            |
|   string.upper()    |           将字符串中全部字母转换为大写           |
|     len(string)     |                  获取字符串长度                  |

示例代码：

```python
# 声明变量 string_a 并赋值为 'python'
string_a = 'hello, worlD!'
print(string_a)

# 获取 string_a 的长度
print(len(string_a))

# 将 string_a 的首字母大写
new_string_a = string_a.capitalize()
print(new_string_a)
print(string_a)

# 获得字符串中 'o' 的数目
print(string_a.count('o'))

# 获得字符串中 'lo' 的起始位置
print(string_a.find('lo'))

# 将字符串中全部字母转换为大写
string_a_upper = string_a.upper()
print(string_a_upper)

# 检测字符串是否仅包含大写字母
print(string_a.isupper())
print(string_a_upper.isupper())

# 用 ',' 分割字符串, 并用两个新变量来接收
string_1, string_2 = string_a_upper.split(',')
print(string_1, string_2)
```

### 3.6 列表

列表是最常见的一种数据形式，它可以把大量的数据放在一起，可以对其进行集中处理。不仅可以方便地进行数据处理，还可以减少声明很多变量。

列表是以 `[]` 包围的数据集合，不同成员间以 `,` (半角符号)分隔。列表中可以包含任何数据类型，也可包含另一个列表。列表也可以通过序号来访问其中的成员。

列表的创建和基本使用如下：

```python
# 创建一个空列表的两种表达方式
list_a = list()		
list_b = []
print(list_a, list_b)

# 创建一个只有一个元素的列表
list_c = [1]
print(list_c)

# 创建一个有三个元素的列表
list_d = [1, 2, 3, 4, 5]
print(list_d)

# 访问列表 list_d 的第三个元素（序号为2）
print(list_d[2])

# 访问列表 list_d 的最后一个元素
print(list_d[-1])
print(list_d(len(list_d)-1))

# 访问列表 list_d 的第 2 到第 4 个元素
print(list_d[1:3])

# 列表支持加法运算
list_ = list_c + list_d	
print(list_e)

# 列表也支持乘法运算
list_f = list_c * 3			
print(list_f)

# 创建一个包含列表元素的列表
list_g = [1, 2, 3, [2,3,4]]
print(list_g)

# 创建一个二维列表
list_h = [[1,4], [2,5], [3,6]]
print(list_h)
```

###### 列表的操作函数

|          列表操作          |                             描述                             |
| :------------------------: | :----------------------------------------------------------: |
|       list.append(x)       |                      列表尾部追加成员 x                      |
|       list.count(x)        |                  返回列表中的参数出现的次数                  |
|       list.extend(L)       |                   向列表中追加另一个列表 L                   |
|       list.index(x)        |         返回参数 x 在列表中的序号（x 不存在则报错）          |
| list.insert(index, object) |          向列表中指定位置(index)插入数据（object）           |
|         list.pop()         |             删除列表中尾部的成员并返回删除的成员             |
|       list.remove(x)       | 删除列表中的指定成员（有多个则只删除第一个），指定成员不存在则报错 |
|       list.reverse()       |                    将列表中成员的顺序颠倒                    |
|        list.sort()         |        将列表中成员排序（要求其成员可排序，否则报错）        |

注意：列表元素的序号从 0 开始计数，即第一个元素的序号为 0。

示例代码：

```python
# 创建一个列表
list_a = [1, 2, 3, 4, 5]
print(list_a)

# 列表尾部追加元素 1
list_a.append(1)
print(list_a)

# 统计 1 在列表中出现的次数
print(list_a.count(1))

# 列表后追加另一个列表所有元素
list_a.extend([3, 'Python'])
print(list_a)

# 元素 2 在列表中首次出现的序号
print(list_a.index(2))

# 在序号 3 处插入元素 0
list_a.insert(3, 0)
print(list_a)

# 返回并删除列表最后一个元素
print(list_a.pop())

# 删除列表中的元素 1（仅删除第一个）
list_a.remove(1)
print(list_a)

# 列表内元素顺序颠倒
list_a.reverse()
print(list_a)

# 对列表元素排序
list_a.sort()
print(list_a)
```

### 3.7 元组

元组可以看成是一种特殊的列表，与列表不同的元组一旦建立就不能改变。既不能改变其中的数据项，也不能添加和删除数据项。因此，想让一组数据不能被改变就把他们放到一个元组中即可，并且任何企图修改元组的操作都会发生错误的。

元组的基本形式是以括号 `()` 括起来的数据元素，他可以通过序号来引用其中的元素。

示例代码：

```python
# 创建一个空元组的两种表达方式
tuple_a = ()
tuple_b = tuple()
print(tuple_a, tuple_b)

# 创建只有一个元素的数组, 一定要加逗号, 否则会被认为是一个数值
tuple_c = (1,)
tuple_d = (1)
print(tuple_c)
print(tuple_d)

# 访问元组中第二个元素
tuple_e = (1, 2, 3, 4, 5)
print(tuple_e[1])

# 获取元组长度
print(len(tuple_e))
```

### 3.8 字典

字典是 Python 中比较特别的一类数据类型, 字典中每个成员是以`键(key) : 值(value)`对的形式存在。

字典用大括号`{}`包围, 以键值对的形式声明和存在的数据集合。与列表最大的不同在于字典是无序的，其成员位置只是象征性的，在字典中通过键来访问成员，而不能通过其位置来访问该成员。

示例代码：

```python
# 建立一个空字典的两种方式
dict_a = {}
dict_b = dict()

# 创建一个正常的字典
dict_c = {'a': 1, 'b': 2, 'c': 3}

# 用键名查询对应的值
print(dict_c['a'])
print(dict_c['b'])
print(dict_c['c'])
```

###### 字典操作函数

|          字典操作           |                             描述                             |
| :-------------------------: | :----------------------------------------------------------: |
|        dict.clear()         |                           清空字典                           |
|         dict.copy()         |                           复制字典                           |
|  dict.get(key, [default])   |          获得键 `key` 对应的值，不存在则返回default          |
|        dict.items()         |                   获得由键和值组成的迭代器                   |
|         dict.keys()         |                        获得键的迭代器                        |
|         dict.pop(k)         |                       删除 `k:v`键值对                       |
|     dict.update(dict_1)     |        从另一个字典更新成员，不存在则创建，存在则覆盖        |
|        dict.values()        |                        获得值的迭代器                        |
| dict.fromkeys(iter, value)  |        以列表或元组中给定的键建立字典，默认值为value         |
|       dict.popitem()        |                从键盘中删除任一键值对并返回它                |
| dict.setdefault(k, default) | 若字典中存在 key 值为 k 的，则返回其对应的值；否则，在字典中建立一个k:default字典成员。 |

示例如下：

```python
# 创建一个字典
dict_d = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
print(dict_d)

# 复制字典
dict_e = dict_d.copy()
print(dict_e)

# 获取 'e' 键对应的值
print(dict_d.get('e', '不存在'))   # 如果不存在则返回默认值
# print(dict_d['e'])  # 如果不存在则报错

# 获取所有的 key
print(dict_d.keys())

# 删除 'a': 1 键值对
dict_d.pop('a')
print(dict_d)
# 使用关键字 del 删除键值对
del dict_e['a']
print(dict_e)

# 更新 'b': 2
dict_d.update({'b': 3})
print(dict_d)
dict_d['b'] = 4
print(dict_d)

# 清空字典
dict_d.clear()
print(dict_d)
```

### 3.9 集合

集合是无序，无索引且不重复的集合。在 Python 中，集合用花括号 `{}` 编写。

| 方法                          | 描述                                         |
| :---------------------------- | :------------------------------------------- |
| add()                         | 向集合添加元素。                             |
| clear()                       | 删除集合中的所有元素。                       |
| copy()                        | 返回集合的副本。                             |
| difference()                  | 返回包含两个或更多集合之间差异的集合。       |
| difference_update()           | 删除此集合中也包含在另一个指定集合中的项目。 |
| discard()                     | 删除指定项目。                               |
| intersection()                | 返回为两个其他集合的交集的集合。             |
| intersection_update()         | 删除此集合中不存在于其他指定集合中的项目。   |
| isdisjoint()                  | 返回两个集合是否有交集。                     |
| issubset()                    | 返回另一个集合是否包含此集合。               |
| issuperset()                  | 返回此集合是否包含另一个集合。               |
| pop()                         | 从集合中删除一个元素。                       |
| remove()                      | 删除指定元素。                               |
| symmetric_difference()        | 返回具有两组集合的对称差集的集合。           |
| symmetric_difference_update() | 插入此集合和另一个集合的对称差集。           |
| union()                       | 返回包含集合并集的集合。                     |
| update()                      | 用此集合和其他集合的并集来更新集合。         |

示例代码：

```python
# 创建一个空集合, 注意：创建空集合时不能使用 {}，会被认为是字典
set_a = set()
print(set_a)

# 访问集合元素, 这里你会发现，集合中的元素不能重复
set_b = {1, 2, 3, 4, 4}
print(set_b)

# 添加元素
set_b.add(5)
print(set_b)

# 将另一个集合中的内容添加, 即合并两个集合
set_c = {6, 7, 8}
set_b.update(set_c)
set_b.union(set_c)
print(set_b)

# 删除集合中的元素, 注释：如果要删除的项目不存在，则 remove() 将引发错误。
set_b.remove(8)
print(set_b)
# 注释：如果要删除的项目不存在，则 discard() 不会引发错误
set_b.discard(8)
print(set_b)

# 获取集合的长度
print(len(set_b))
```

### 3.10 内置常量与运算符

在 Python 中，除了以上介绍的各种数据类型和数值运算符外，还有一些常用的内置常量与逻辑运算符，比较运算符

###### 3.10.1 常用内置常量

`None` 的意义即字面意义 '无'，常用来表示没有值的对象。

True(真) 与 False(假)，是 Python中的布尔数据类型，逻辑型数据

Python 中的逻辑假包括 False, None, 0, "", {}, (), []，其余任何值都视为真

```python
print(None, type(None))
```

###### 3.10.2 逻辑运算符

我们在中学时学习过命题的逻辑运算：与、或、非，在计算机科学中，其运算规则也是类似的（基本原理相同，但操作数与返回结果有所不同），Python也不例外。 

Python 中逻辑运算符包括与 `and`，或 `or`，非 `not`, `is`, `in`。

`not` 的运算对象只有一个，一般也称为一元运算符，其规则是非假即真。例如：

```python
print(not False)
print(not True)
print(not 1)
print(not 0)
```

`or` 或运算符，两个参与运算的对象有一个的逻辑值为真则返回真，两个都为假才返回假。

```python
a = 1
b = 0
print(a or b)

c = False
d = 0
print(c or d)
```

`and` 与运算符，与 `or` 相反，两个参与运算的对象有一个的逻辑值为假则返回假，两个都为真才返回真。

```python
a = 1
b = 0
print(a and b)

c = False
d = 0
print(c and d)
```

`is` 与 `is not`，又称为身份操作符，用于判断左右两侧对象是否为同一对象，相同则返回 True，不同则返回 False。

```python
a = 1
b = 1
print(a is b)
print(a is not b)
```

`in` 与 `not in`，又称为成员操作符，用于判断左侧对象是否存在与右侧对象中。

```python
# 判断字符串中是否存在某个字符
a = 'a'
b = 'abcd'
print(a in b)

# 判断列表，元组，集合中是否存在某个元素
c = 1
d = [1, 3, 5, 3]
print(c in d)

# 判断字典的键中是否存在某个元素
e = 'a'
f = {'a': 1, 'b': 2, 'c': 3}
print(e in f)
```

###### 3.10.3 比较运算符

| 运算符 |   意义   |
| :----: | :------: |
|   ==   |   相等   |
|   >    |   大于   |
|   >=   | 大于等于 |
|   <    |   小于   |
|   <=   | 小于等于 |
|   !=   |  不等于  |

这些运算符的意义与数学上相同，而且，Python 允许连续使用这些比较运算符，表示两个比较运算都成立结果才为真。

```python
print(1 < 2)
print(1 < 2 < 3)

# 字符也是可以比较大小的，比较依据是ascii码
print('a' < 'b' < 'c')
```



# 4 控制语句

### 4.1 缩进分层

每种语言都有自己的语法，不管是人类语言还是计算机编程语言。

Python 也不例外，它呢，也有自己的语法规则，然后编辑器或者解释器根据符合语法的程序代码转换成 CPU 能够执行的机器码，然后执行。

Python 的语法比较简单，采用缩进方式，即 4 个空格，PyCharm已经定义过了，按一次 Tab 键产生 4 个空格的缩进，这也就是为什么我推荐大家使用集成开发环境的原因。

```python
# 判断 a 与 b 的大小关系
if a > b:
    print(a)
else:
    print(b)
```

如上面的代码，以 # 开头的语句是注释，其他每一行都是一个语句，当语句以冒号 : 结尾时，缩进的语句视为代码块。

要注意的是 Python 程序是大小写敏感的，如果写错了大小写，程序会报错。

### 4.2 控制语句的执行流程

在你的日常生活中，肯定发现过这样的现象，有的工作就是一个动作序列从头到尾执行完就行了，比如每天上班打卡；有些工作需要根据不同的情况进行不同的处理，比如垃圾分类；有的工作则是简单机械地重复，比如你刷抖音。

而计算机程序在解决某个具体的问题时，也包括以上三种情形。即顺序执行所有的语句，选择执行部分语句和循环执行部分语句，正好对应着程序设计中的三种程序执行结构流程：顺序结构，选择结构以及循环结构。

事实证明，任何一个能用计算机解决的问题，只要应用这三种基本结构来写出的程序都能解决。

### 4.3 if 选择执行语句

之前教程中的代码，全部都是按照语句书写的顺序一次执行，当每条语句执行完一次之后，程序就自然结束了。而为了解决实际问题的程序，还需要依据程序执行过程中的某个条件来选择是否执行某一部分语句，亦或是选择执行多部分语句的其中一部分，这就需要用到if。

###### 4.3.1. if 基础

if 语句的作用是选择执行语句，其最简单的形式如下：

```
if '条件'：
	'语句'
```

其基本语义是当条件为真时，执行其后缩进的语句；当执行条件为假时，跳过其后缩进的语句；

其中的条件可以是任意类型的表达式。

示例：

```python
# 要求用户输入一个数
num = input('请输入一个数：')
# 转换为 int 数据类型
num = int(num)

# 如果 num > 0 则输出正数
if num > 0:
    print('正数')
```

###### 4.3.2. elif

`elif` 关键字是 python 对“如果之前的条件不正确，那么试试这个条件”的表达方式。

示例：

```python
# 要求用户输入一个数
num = input('请输入一个数：')
# 转换为 int 数据类型
num = int(num)

# 如果 num > 0 则输出正数
if num > 0:
    print('正数')
elif num < 0:
    print('负数')
```

###### 4.3.3. else

`else` 关键字捕获未被之前的条件捕获的任何内容。

示例：

```python
# 要求用户输入一个数
num = input('请输入一个数：')
# 转换为 int 数据类型
num = int(num)

# 如果 num > 0 则输出正数
if num > 0:
    print('正数')
# 如果 num < 0, 则输出负数
elif num < 0:
    print('负数')
# 如果 num 即不大于 0 又不小于 0，则返回 0
else:
    print(0)
```

###### 4.3.4. if 语句的嵌套

在程序设计中，各种结构的语句嵌套的出现在所难免的，当然 `if` 语句自身也存在着嵌套情况。对于嵌套的 `if` 语句写法上和不嵌套的 `if` 语句在形式上的区别就是缩进不同而已。

```
if '条件'：
	if '条件'：
		'语句'
	elif '条件'：
		'语句'
else:
	'语句'
```

示例：

```python
num = int(input('请输入一个数：'))
if num > 0:
    if num > 1000:
        print('无法表示')
    else:
        print('可以表示')
    print('这是一个正数')
elif num < 0:
    if num < -1000:
        print('无法表示')
    else:
        print('可以表示')
    print('这是一个负数')
else:
    print(0)
```

### 4.4 for 循环语句

`for` 语句是 Python 中构造循环结构程序的语句之一，在 Python 语言中，绝大多数的循环结构都是用 `for` 语句来完成的。

###### 4.4.1. 基础

Python 中的 for 语句与其他高级程序语言有很大的不同，其他高级语言 for 语句要用循环控制变量来控制循环。Python 中 for 语句是通过遍历循环某一序列对象（比如列表，元组，字典）来构建循环，循环结束的条件就是对象被遍历完成。

for 语句的形式如下：

```
for '循环变量' in '遍历对象'：
	'语句'
```

示例：

```python
# 打印 1 到 5 的立方

# 创建一个包含 1，2，3，4，5 的列表
list_num = [1, 2, 3, 4, 5]

# 使用 for 循环，依次遍历列表内的所有元素
for num in list_num:  # i 是循环变量，每次循环，i会依次获取列表中的元素
    print(f'{num}的平方是:{num ** 3}')	# 这里用到了之前讲的格式化字符串
```

###### 4.4.2 range() 函数

看到上面的代码，有些同学可能会产生这样的问题，如果我想要计算 1 到 100 的立方，难道我需要把 1~100 输入一遍吗？

当然不需要，这里我们用到了与 for 循环经常搭配使用的 `range()` 函数。for 语句中的对象集合可以是列表，字典以及元组等，也可以通过 `range()` 函数产生一个整数列表，以完成计数循环。

`range()` 函数的原型如下：

```python
range([start,] stop[, step])
```

其中参数含义如下：

- `start`：可选参数，起始值，默认为 0 
- `stop`：终止值，如果 range 只有一个参数 num，则 range 产生一个从 0 到 num-1的整数列表；
- `step`：可选参数，步长，即每次循环序列增长值。

注意：产生的整数序列的最大值为 `stop - 1`。

示例：

```python
# 打印 1 到 100 的立方

# 使用 for 循环与 range() 函数，注意：1~100，应该是range(1, 101)
for num in range(1, 101):
    print(f'{num}的平方是:{num ** 3}')
```

### 4.5 while 循环

for 循环语句是以遍历对象的方式构造循环，的确给我们带来的很大的方便，而有时我们需要构建无限循环的程序控制结构或以某种不确定运行次数的循环，就需要用到 while 语句。

###### 4.5.1. 基础

`while` 也是 Python 中构造循环结构程序的主要语句之一，在 Python 中，虽然绝大多数的循环结构都是用 for 语句来完成的，while 语句也可以完成 for 语句的功能，只不过 for 语句来的简单明了，而 while 语句在 Python 中主要用于构建特别的循环。

while 语句的基本形式如下：

```
while '条件':
	'语句'
```

与 for 循环不同的是，while 语句只有在测试条件为假时，才会停止。在 while 语句的循环体中一定要包含改变测试条件的语句，以保证循环能够结束，避免死循环的出现。

`while` 循环包含与 if 语句相同的条件语句，如果条件为真，就执行循环体；如果条件为假，则终止循环。

示例如下：

```python
# 用 while 循环打印 1 到 5 的立方

# 创建一个包含 1，2，3，4，5 的列表
list_num = [1, 2, 3, 4, 5]

# 获取该列表的长度
length = len(list_num)

# 初始化循环控制变量
i = 0

# 使用 while 循环，依次遍历列表内的所有元素
while i < length:  # i 从 0 至 length - 1
    print(f'{list_num[i]}的平方是:{list_num[i] ** 3}')
    i = i + 1  # 修改循环控制变量
```

###### 4.5.2. 增量赋值运算符

Python 中提供的增量赋值运算符很多，基本的运算符都有对应的增量赋值运算符：`+ - * / // ** %`。

基本写法如下：

```python
x += 1
```

等同于：

```python
x = x + 1
```

在 while 循环中，用增量赋值运算符修改循环控制变量的值非常方便。例如将上一段代码中的 while 语句就可以修改为：

```python
# 使用 while 循环，依次遍历列表内的所有元素
while i < length:  # i 从 0 至 length - 1
    print(f'{list_num[i]}的平方是: {list_num[i] ** 3}')
    i += 1  # 使用增量赋值控制变量
```

之前我们用 for 循环也写过 1~100 的立方，现在我们用 while 写一遍，示例如下：

```python
# 用 while 循环打印 1 到 100 的立方

# 初始化循环控制变量
i = 1

# 使用 while 循环
while i <= 100:
    print(f'{i}的平方是: {i ** 3}')
    i += 1  # 使用增量赋值控制变量
```

### 4.6 循环进阶

###### 4.6.1 break 语句

`break` 语句作用是中断循环的执行，如果在 for 循环中执行了 break 语句，循环语句的遍历就会立即终止，即使还有未遍历完的数据，还是会立即终止循环。

示例如下：

```python
# 从列表 list_num = [1, 3, 5, 2, 7, 9, 10] 中寻找1个偶数并输出

# 声明一个列表变量
list_num = [1, 3, 5, 2, 7, 9, 10]

# 使用 for 循环
for num in list_num:
    # 对 列表内的元素对 2 取余，如果余数为 0 则为偶数，中止循环并打印结果
    if num % 2 == 0:
        print(num)
        break

# 使用 while 循环
# 初始化循环变量
i = 0
# 获取列表长度
length = len(list_num)

while i < length:
    if list_num[i] % 2 == 0:
        print(list_num[i])
        break
    i += 1		# 修改步进值
```

###### 4.6.2 continue 语句

`continue` 语句的作用是跳过本轮循环，执行下一轮。在循环中如果执行了 `continue`, 则`continue` 语句后的循环体语句不会被执行，即提前结束了本次循环，然后进入下一个遍历循环。

示例如下：

```python
# 打印 100 以内的所有奇数和

# 使用 for 循环
# 初始化一个变量，用来存储 for 循环的奇数和
sum_for = 0

for i in range(101):
    if num % 2 == 0:
        continue
    sum_for += 1
print(sum_for)

# 使用 while 循环
# 初始化循环变量
num = 0
# 初始化一个变量，用来存储 while 循环的奇数和
sum_while = 0

while num < 100:	# 这里为什么是 100？请同学们思考一下
    num += 1		# 循环变量为什么放到这里？
    # 如果是偶数，则跳过
    if num % 2 == 0:
        continue
    sum_while += num
print(sum_while)
```

###### 4.6.3 遍历字典

首先，我们遍历字典中的键， 遍历字典中的键有两种方法

```python
# 创建一个字典
dict_a = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# 第一种方法遍历字典中的键
for key in dict_a:
    print(key)

# 第二种方法就是keys()函数获取字典中的键
print(dict_a.keys())
for key in dict_a.keys():
    print(dict_a[key])
```

接下来就是获取字典中的值

```python
# 首先，你可以通过键获取值
for key in dict_a.keys():
    print(dict_a[key])
    
# 使用values()函数，只获取值，不获取键
for value in dict_a.values():
    print(value)
```

同时获取 key 和 value, 使用 items() 函数

```python
for key, value in dict_a.items():
    print(f'key: {key}, value: {value}')
```

###### 4.6.4 嵌套循环

所谓嵌套循环就是一个外循环的主体部分是一个内循环。内循环或外循环可以是任何类型，例如 while 循环或 for 循环。 例如，外部 for 循环可以包含一个 while 循环，反之亦然。外循环可以包含多个内循环。 循环链没有限制。

在嵌套循环中，迭代次数将等于外循环中的迭代次数乘以内循环中的迭代次数。在外循环的每次迭代中，内循环执行其所有迭代。 对于外循环的每次迭代，内循环重新开始并在外循环可以继续下一次迭代之前完成其执行。嵌套循环通常用于处理多维数据结构，例如打印二维数组、迭代包含嵌套列表的列表。嵌套循环是控制流语句的一部分，可帮助您了解 Python 的基础知识。

在此示例中，我们在 for 循环中使用了 for 循环。 在本例中，我们打印 10 次 1-5。

```python
for i in range(10):
    for j in range(1, 6):
        print(j, end=' ')
    print()
```

外部 for 循环使用 range() 函数迭代前 10 个数字。对于每个外部数字，内部 for 循环将执行 5 次。在内循环的主体中，我们将打印内部数字的值。

接下来我们试着在 Python 中打印99乘法表。

```python
# 外层循环，循环9次
for i in range(1, 10):
    # 内部循环 i 次
    for j in range(1, i + 1):
        print(f'{i} * {j} = {i*j}', end='\t')
    print()
```

###### 4.6.5 推导式

推导式是指，在 Python 中，以紧凑的方式对列表，元组，字典等序列或一系列的元素进行处理，处理结果仍然被放到一个列表，字典等序列之中的语法形式。

典型的列表推导基本形式如下：

```
[ <i 的表达式> for i in iterator]
```

iterator 是指一个可遍历的对象，比如列表，元组，也可以是 range() 函数。其语义为：用循环变量 i 去遍历 iterator，并将 i 相关表达式的值放入一个列表中。

每当对列表，元组，字典序列中的元素进行处理时，你都可以尝试使用列表推导式来完成，这样非常有助于降低程序的复杂性，缩短了程序的长度。

示例：

```python
# 获取 1~5 的立方

list_cube = [i ** 3 for i in range(1, 6)]
print(list_cube)
```

字典也可以实现其推导式语法，基本形式如下：

```
{'key 的表达式'：'value 的表达式' for key, value in iterator}
```

示例：

```python
keys = ['name', 'age', 'weight']
values = ['Mike', '20', '75']
# zip 的作用是将多个可迭代对象按顺序对应打包成一个个元组，然后返回有这些元组组成的元素
info_dict = {key, value for key, value in zip(keys, values)}
print(info_dict)
```

列表推导式和字典推导式不仅可以对遍历的元素进行全部处理，还可以使用 if 语句实现有选择地处理遍历序列中的元素。其基本形式如下：

```
[ 'i 相关表达式' for i in iterator if '条件']
['key 相关表达式': 'value 相关表达式' for key, value in iterator if '条件']
```

示例：

```python
# 使用列表推导式获取 10以内所有偶数的立方
list_cube = [i ** 3 for i in range(11) if i % 2 == 0]
print(list_cube)
```

# 5 函数

在编写程序的过程中，可以将完成重复工作的语句提取出来，将其编写为函数。这样，在程序中也可以方便地调用函数来完成这些重复的工作，而不必重复地粘贴复制代码。此外，函数也可以使得程序结构更加清晰，更容易维护。

### 5.1. 函数基础

###### 5.1.1. 函数的声明与调用

在 Python 中，函数必须先声明，然后才能调用它，使用函数时，只要按照函数定义的形式，向函数传递必须的参数，就可以调用函数完成相应的功能或者获得函数返回的处理结果。

在 Python 中，使用 def 可以声明一个函数，完整的函数是有`函数名`，`参数`以及`函数体（语句）`组成。与之前的基本语句一样，在函数生命中，也要使用缩进以表示语句属于函数体。

如果函数有返回值，那么需要在函数中使用 return 语句返回计算结果，声明函数的一般形式如下：

```
def '函数名'([参数列表])：
	'函数语句'
	return '返回值'
```

其中参数列表和返回值不是必须的，return 后也可以不跟返回值，甚至连 return 也没有。对于 return 后没有返回值的和没有 return 语句的函数都会返回 None 值。

有些函数可能既不需要传递参数，也没有返回值。即使没有参数，包裹参数的小括号也不许协商，括号后面也必须有冒号`:`。

首先我们定义一个最简单的函数，示例：

```python
# 定义一个函数，打印'Hello, Python'
def hello():	# 函数名为 hello, 无参数
    print('Hello, Python')	# 缩进的语句表示函数内的语句
```

在第三章中，我们学习过 input()，print()函数，第四章中，我们也学习了len(), range() 函数，这些都是 Python 的内建函数。

而调用自己定义的函数与调用内建函数及标准库中的函数方法都是相同的，要调用指定的函数就在语句中使用函数名，并且在函数名之后用小括号将调用参数括起来（即使没有参数，也必须写圆括号），而多个阐述之间则用逗号隔开。

调用自定义函数与内建函数不同点在于自定义函数调用前，必须声明函数。

因此，我们可以这样调用上面的函数：

```python
hello()
```

再举一个函数参数与返回值的简单例子：

```python
# 对列表内的所有元素求和

def list_sum(list_num):
    result = 0
    for i in list_num:
        result += i
    return result

# 声明一个列表
list_a = [1, 4, 5, 23, 5]

# a. 
print(list_sum(list_num=list_a))
# b. 
print(list_sum(list_a))
```

###### 5.1.2. 函数值传递与引用传递

通常情况下，定义函数时都会选择有参数的函数形式，函数参数的作用是传递数据给函数，令其对接收的数据做具体的操作处理。 

在使用函数时，经常会用到形式参数（简称“形参”）和实际参数（简称“实参”），二者都叫参数，之间的区别是： 

- 形式参数：在定义函数时，函数名后面括号中的参数就是形式参数，例如:

  ```python
  #定义函数时，这里的函数参数 obj 就是形式参数
  def demo(obj):    
      print(obj)
  ```

- 实际参数：在调用函数时，函数名后面括号中的参数称为实际参数，也就是函数的调用者给函数的参数。例如:

  ```python
  a = "C语言中文网"
  #调用已经定义好的 demo 函数，此时传入的函数参数 a 就是实际参数
  demo(a)
  ```

实参和形参的区别，就如同剧本选主角，剧本中的角色相当于形参，而演角色的演员就相当于实参。

明白了什么是形参和实参后，再来想一个问题，那就是实参是如何传递给形参的呢？
Python 值传递引用（地址）传递

1. 值传递：适用于实参类型为不可变类型（字符串、数字、元组）；
2. 引用（地址）传递：适用于实参类型为可变类型（列表，字典）；

值传递和引用传递的区别是，函数参数进行值传递后，若形参的值发生改变，不会影响实参的值；而函数参数继续引用传递后，改变形参的值，实参的值也会一同改变。

例如： 

```python
# 定义一个名为 demo 的函数，分别为传入一个字符串类型的变量（代表值传递）和列表类型的变量（代表引用传递）

def demo(obj) :
    obj += obj
    print("形参值为：",obj)

print("-------值传递-----")
a = "C语言中文网"
print("a的值为：",a)
demo(a)
print("实参值为：",a)
print("-----引用传递-----")
a = [1,2,3]
print("a的值为：",a)
demo(a)
print("实参值为：",a)
```

分析运行结果不难看出，在执行值传递时，改变形式参数的值，实际参数并不会发生改变；而在进行引用传递时，改变形式参数的值，实际参数也会发生同样的改变。 

### 5.2. 参数类型

函数的参数除了上节介绍的一种方式之外，还可以有多种形式。例如，在调用某些函数，既可以向其传递参数，也可以不传递参数，函数依然可以正确调用；还有一些情况，比如函数中的参数数量不确定，可能是 1 个，也可能是多个。对于这种情况，Python 可以定义不同的参数类型。

###### 5.2.1. 位置参数

位置参数，有时也称必备参数，指的是必须按照正确的顺序将实际参数传到函数中，换句话说，调用函数时传入实际参数的数量和位置都必须和定义函数时保持一致。

在调用函数，指定的实际参数的数量，必须和形式参数的数量一致（传多传少都不行），否则 Python 解释器会抛出 TypeError 异常，并提示缺少必要的位置参数。

```python
# 计算矩形的面积
def area(width, length):
    return width * length

# 调用函数时，必须传递两个参数，否则报错
print(area(2, 4, 5))
```

运行结果为：

```
TypeError: area() takes 2 positional arguments but 3 were given
```

可以看到，抛出的异常类型为 TypeError，具体是指 area() 函数需要 2 个位置参数，但是获取了 3 个。

同样，少传参也会抛出异常：

```python
print(area(2))
```

运行结果为：

```
TypeError: area() missing 1 required positional argument: 'height'
```

抛出的异常类型为 TypeError，具体是指 area () 函数缺少一个必要的 height 参数。 

如果我们传入的参数顺序不对应，也会有问题，示例：

```python
# 计算半径为2，高度为4圆柱的体积
def volume(height, radius):
    return 3.14 * radius ** 2 * height


print(f'正确结果：{volume(4, 2)}')
print(f'错误结果：{volume(2, 4)}')
```

###### 5.2.2.关键字参数

目前为止，我们使用函数时所用的参数都是位置参数，即传入函数的实际参数必须与形式参数的数量和位置对应。而本节将介绍的关键字参数，则可以避免牢记参数位置的麻烦，令函数的调用和参数传递更加灵活方便。

关键字参数是指使用形式参数的名字来确定输入的参数值。通过此方式指定函数实参时，不再需要与形参的位置完全一致，只要将参数名写正确即可。

因此，Python 函数的参数名应该具有更好的语义，这样程序可以立刻明确传入函数的每个参数的含义。

示例如下：

```python
# 创建一个函数，用来打印两个字符串

def print_two_string(str_1, str_2):
    print(f'第一个参数是: {str_1}, 第二个参数是: {str_2}')


# 位置传参
print_two_string('a', 'b')
print_two_string('b', 'a')

# 关键字传参
print_two_string(str_1='a', str_2='b')
print_two_string(str_2='a', str_1='b')

# 混合传参
print_two_string('a', str_2='b')
```

可以看到，在调用有参函数时，既可以根据位置参数来调用，也可以使用关键字参数来调用。在使用关键字参数调用时，可以任意调换参数传参的位置。

当然，还可以使用位置参数和关键字参数混合传参的方式。但需要注意，混合传参时关键字参数必须位于所有的位置参数之后。也就是说，如下代码是错误的：

```python
print_two_string(str_1='a', 'b')
```

解释器会抛出异常：

```
SyntaxError: positional argument follows keyword argument
```

###### 5.2.3. 默认值参数

在 Python 中，可以在声明函数的时候，预先为参数设置一个默认值，当调用函数，如果某个参数具有默认值，则可以不向函数传递该参数，这时，函数将使用声明函数时为该参数设置的默认值来运行。

声明一个参数具有默认值的参数形式如下：

```
def '函数名'('参数'='默认值')：
	'语句'
```

示例：

```python
# 声明一个带默认值参数的函数

def hello(name='Python'):  # 设置参数 name 的默认值为 'Python'
    print(f'Hello, {name}')


# 不传参调用该函数
hello()

# 传参调用
hello('Pycharm')
```

代码中声明的默认值参数 name 的函数 hello(), 若调用时不加参数，则 name 值被自动赋予 'Python', 如果添加了参数，则 name 值会被赋予所给参数值。

如果声明函数时，其参数列表中既包含无默认值参数，又包含默认值参数，那么声明函数的参数时，**必须先声明无默认值参数，后声明默认值参数。**

示例如下：

```python
# 计算 a 与 b 的和，a 默认值为 10

def sum(a=10, b):
    return a + b
```

我们执行上述代码时，会得到错误提示 `SyntaxError: non-default argument follows default argument`，意思是语法错误，非默认值参数写在了默认值参数的后面。

正确写法应该是：

```python
# 计算 a 与 b 的和，a 默认值为 10
def sum(b, a=10):
    return a + b
```

###### 5.2.4. 可变数量参数传递

在设计函数的时候，有时候我们能够确认参数的个数，比如一个用来计算矩形面积的函数，它所需要的参数就是长乘以宽，这个函数的参数是确定的。但是，很多时候参数的个数是不确定的，这时就需要用到可变数量参数。

在自定义函数时，如果参数名前加上一个星号 '*', 则表示该参数就是一个可变长参数。

在调用该函数时，如果依次序将所有的其他变量都赋予值之后，剩下的参数将会收集在一个元组中，元组的名称就是前面带星号的参数名。

示例，定义一个只带有一个型号的参数的函数：

```python
def function(*args):
    print(type(args))
    print(args)

function(1, 2, 4)
```

执行以上代码，我们得到输出类型为元组（tuple），并且把所有参数都收集到一个元组中。

当自定义函数的参数中，含有前面所介绍的几种类型的参数时，一般来说，带星号的参数应该放到最后。当带星号的参数放在最前面时，仍然可以正常工作，但调用时后面的参数必须以关键字参数方式提供，否则因其后的位置参数无法获取值而发生错误。

示例如下：

```python
def function_2(*args, param_1, param_2='默认参数'):
    print(f'args的值为：{args}')
    print(f'param_1的值为：{param_1}')
    print(f'param_2的值为：{param_2}')

# 正确示范
function_2(1, 2, 3, param_1=4)
# 错误使用
function_2(1, 2, 3)
```

function_2() 函数中有三种类型的参数， 并且带星号的参数放在最前面。第一次调用时给了 3 个位置参数和 1 个关键字参数，因此，args 变量收集了 1、2、3 作为一个元组，而变量 param_1 则取值为4， 变量 param_2 则使用了默认值；第二次调用，没有提供关键字参数，无默认值的参数 param_1 没有或得到值，因此调用失败。

使用元组来收集参数时，调用时提供的参数不能为关键字参数，如果要收集不定数量的关键字参数可以在自定义函数时的参数前加两颗星即 **kwargs, 这样一来，多余的关键字参数就可以以字典的方式被收集到变量 kwargs 中。

示例：

```python
def function_3(**kwargs):
    print(type(kwargs))
    print(kwargs)

function_3(a=1, b=2)
```

运行结果：

```
<class 'dict'>
{'a': 1, 'b': 2}
```

注意，收集关键字参数时，要放在函数声明的参数列表中的所有参数之后。

示例，声明一个带有大量关键字参数的函数并调用：

```python
def cube(name, **features):
    print(f'======== {name} 方块的特征：=============')
    print(f'体积是{features["length"] * features["width"] * features["height"]}')
    print(f'质量为{features["mass"]}')
    print(f'颜色为{features["color"]}')


cube('a', length=1, width=2, height=3, mass=4, color='green')
cube('b', length=3, width=34, height=12, mass=65, color='red')
```

运行结果为：

```
======== a 方块的特征：=============
体积是6
质量为4
颜色为green
======== b 方块的特征：=============
体积是1224
质量为65
颜色为red
```

代码中定义了一个 cube() 函数，其参数为两个，第一个是普通参数 name, 第二个是可变长关键字参数。

### 5.3. 函数的返回值

所谓返回值，就是程序中函数执行完成后，返回给调用者的值。

例如，定义一个两数相加的函数

```python
def sum(a, b):
	result = a + b
	return result

r = sum(1, 3)
print(r)
```

上述代码中，定义了两数相加的函数。功能完成后，会将相加的结果返回给函数调用者，所以，变量 r 接受了函数的执行结果。

注意：函数体在遇到 return 之后就结束了，因此，return 之后的代码不会执行

如果函数没有使用 return 语句返回数据，那么函数有返回值吗？

答案是有的。Python 中有一个特殊的常量：None.无返回值的函数，实际上就是返回了 None 这个常量。

示例：

```python
def sum(a, b):
	result = a + b

r = sum(1, 3)
print(r, type(r))
```

### 5.4. 变量的作用域

在 Python 中，作用域可以分为：

- 内置作用域：Python 预先定义的；
- 全局作用域：所编写的整个程序；
- 局部作用域：某个函数内部范围。

每次执行函数，都会常见一个新的命名空间，这个新的命名空间就是局部作用域，同一函数不同时间运行，其作用域都是独立的，不同的函数也可以使用相同的参数名，其作用域也是独立的。在函数内已经声明的变量名，在函数以外依然可以使用。并且在程序运行的过程中，其值并不互相影响。

示例：

```python
def demo():
    a = 3  # 在函数内声明变量 a 并赋值为 3
    a += 2
    print('函数内 a：', a)


a = '全局作用域'  # 在全局作用域内 声明变量 a 并赋值为'全局作用域'
print('全局作用域 a：', a)
demo()
print('全局作用域 a：', a)
```

运行结果：

```
全局作用域 a： 全局作用域
函数内 a： 5
全局作用域 a： 全局作用域
```

代码中在函数中声明了变量 a = 3，在函数外也声明了同名变量 a = '全局作用域'。在调用函数前后，函数外声明的变量 a 的值不变。在函数内可以对 a 的值进行任意操作，他们互不影响。

两个变量 a 出于不同的作用域中，所以互不影响。但是，有一种方法可以使函数中引用全局变量并进行操作，即在变量名前加 global 关键字。

 示例：

```python
def demo():
    global a
    a = 3  # 在函数内声明变量 a 并赋值为 3
    a += 2
    print('函数内 a：', a)


a = '全局作用域'  # 在全局作用域内 声明变量 a 并赋值为'全局作用域'
print('全局作用域 a：', a)
demo()
print('全局作用域 a：', a)
```

运行结果：

```
全局作用域 a： 全局作用域
函数内 a： 5
全局作用域 a： 5
```

在局部作用域内可以引用全局作用域内的变量，但不可以修改它。

示例：

```python
# 声明全局变量
a = 3


# 声明函数用来打印全局变量 a
def print_a():
    print(a)


print_a()
```

运行结果：

```
3
```

运行该函数时，会输出全局变量 a 的值 3，此时，如果将其改为 5 则会引发错误：

```python
a = 3


# 声明函数用来打印全局变量 a
def print_a():
    print(a)
    a = 5


print_a()
```

运行会抛出异常：

```
UnboundLocalError: local variable 'a' referenced before assignment
```

### 5.5. 匿名函数 lambda

lambda 可以用来创建匿名函数，也可以将匿名函数赋给一个变量调用，它是 Python 中一类比较特殊的声明函数的方式，lambda来源于 LISP 语言，其语法形式如下：

```
lambda arguments : expression
```

其中 `arguments` 相当于声明函数时的参数（多个参数用逗号分隔），`expression` 是函数要返回值的表达式，而表达式中不能包含其他语句，也可以返回元组（要用括号），还允许在表达式中调用其它函数。

示例：

```python
# 计算两个数的平方和
square_sum = lambda x, y: x ** 2 + y ** 2

print(square_sum(1, 2))
```

lambda适合以下类型的函数：

- 为了代码清晰，有些地方使用它，代码更清晰易懂
- 复用性低，在有些时候需要一个抽象简单的功能，又不想单独定义一个函数；
- 写起来快速简单，省代码。

### 5.6. 函数的注释

之前我们一直在讲，写代码一定要记得写注释，尤其是对函数而言，因为函数是一个代码块，如果我们选择，逐行解释代码的作用，效率比较低。

因此，我们可以给函数添加说明文档，帮助理解函数的作用。

语法如下：

```python
def sum(x, y):
    """
	函数说明
    :param x: 形参 x 的说明
    :param y: 形参 y 的说明
    :return: 返回值的说明
    """
    return x + y
```

# 6. 面向对象

之前章节中介绍的示例，所使用的数据和函数之间是没有任何直接联系的，他们之间的联系就是通过函数调用提供参数的形式将数据传入函数进行处理，这种方式也被称为面向过程编程。这样会有一个问题，经常可能因为错误的传递参数，错误地修改了数据而导致程序出错，甚至崩溃。维护时要从程序提供的一堆数据中去找，要拓展函数的功能，只能重新建立一个函数或修改它，开发效率会相对比较低。于是，面向对象编程的概念就诞生了。

### 6.1. 概述

面向对象编程是在面向过程编程的基础上发展来的，它比面向过程编程具有更强的灵活性和扩展性。面向对象编程是程序员发展的分水岭，很多初学者会因无法理解面向对象而放弃学习编程。 

面向对象就是实际的事物模型或计算对象的模型，在程序中以类方式进行定义。类从某种意义上来说仍旧是对现实世界的模拟，他模拟的是现实世界中的各种事物，而现实世界中的各种事物都是有类别的，比如猫，狗等名词所指的都是一类事物。在程序中，定义的类就代表着同一类别的模型。

面向对象编程可以理解为一种封装代码的方法，在前面的章节中，我们已经接触了封装，比如说，将乱七八糟的数据扔进列表中，这就是一种简单的封装，是数据层面的封装；把常用的代码块打包成一个函数，这也是一种封装，是语句层面的封装。面向对象相比于前两种封装更先进，它可以更好地模拟真实世界的事物（将其视为对象），并把描述特征的数据和代码块（函数）封装到一起。

举个例子，如果想要设计一只狗的对象，你需要首先思考一下，狗具有什么特征？

1. 从表面特征来看，比如狗的毛发颜色，体重，名字等等。
2. 从所具有的行为来描述，例如，狗会汪汪叫，会吃饭，会睡觉等等。

如果把狗的信息用代码来表示，那么，狗的表面特征可以用变量表示，行为特征可以用函数来表示。示例：

```python
# 表面特征
color = '白'
weight = 10
name = '旺财'

# 行为特征
def eat():
    print('狗会吃东西')

def sleep():
    print('狗会睡觉')
```

而对象可以把表面特征与行为特征建立起联系，因此，相比于只用变量和函数，类可以更好地模拟现实生活中的事物。

### 6.2. 定义和使用类

在 Python 中定义类的基本形式为：

```python
class '类名'('父类名')：
	pass
```

- class 是定义类的关键字;
- 类名处使用符合规范的名称;
- 父类名是指该类继承的父类名称，如果没有可以连同括号都不写;
- pass 表示空语句，什么也不做，常用来预留语句位置或临时未写等待以后完成。

我们继续拿小狗举例：

```python
# 声明一个小狗类
class Dog:
	pass
```

类在定义后必须先实例化才能使用，类的实例化跟函数调用类似，只要使用类名加圆括号的形式就可以实例化一个类。

类实例化以后会生成该类的一个实例，一个类可以实例化多个实例，实例与实例之间并不相互影响，类实例化以后就可以直接使用了。

举个例子，我的小狗就是狗这个大类的一个实例，因此我们需要先用 Dog 类来实例化一个实例来代表我的小狗：

```python
# 声明一个小狗类
class Dog:
	pass

# 将自定义类 Dog 实例化，命名该实例为 my_dog
my_dog = Dog()
print(my_dog)
```

### 6.3. 类的方法与属性

上一节中，我们学习了如何声明和实例化一个类，但是，单纯这么做是没有什么实际价值的。要用类来解决实际问题，就要定义一个具有一些属性和方法的类，因为这样才符合真实世界中的事物特征。

###### 6.3.1. 属性

为了区分类中的变量与全局变量，将类中的变量称为**属性**。

Python 中的类的属性有两种：

- 实例属性，即同一个类的不同实例的属性，他们的值是不会互相影响的，定义时使用 `实例名.属性名`。
- 类属性，是所有同一个类的实例共有的，直接在类中独立定义，引用时要使用 `类名.属性名` 的形式。

为了方便理解，我们继续拿之前的狗类的表象特征来演示：

```python
# 声明一个小狗类，此处声明的属性，为所有小狗实例对象共有的属性
class Dog:
    # 所有狗都具有的特征
    legs = 4  # 四条腿
    eyes = 2  # 两只眼睛


# 实例化两个对象
my_dog = Dog()
your_dog = Dog()

print('===========获取狗类的公共属性============')
print(my_dog.legs, my_dog.eyes)
print(your_dog.legs, your_dog.eyes)

# 添加实例属性
# my_dog 与 your_doy 虽然都属于狗类，但是他们都有自己的特征
my_dog.weight = 10  # 我的狗重 10kg
my_dog.color = '白色' # 我的狗是白色
my_dog.name = '旺财'  # 我的狗叫旺财

your_dog.weight = 5 # 你的狗重 5kg
your_dog.color = '黑色'   # 你的狗是黑色
your_dog.age = 4    # 你的狗今年四岁

print('=======打印不同实例的实例属性=========')
print(my_dog.weight, my_dog.color, my_dog.name)
print(your_dog.weight, your_dog.color, your_dog.age)
# 这里如果你想要打印 my_dog.age 或者 your_dog.name 都会报错

# 修改类属性
# 所有的狗突然一夜之间进化了，前肢进化为了手臂，以后只靠双腿走路
Dog.legs = 2

print('==========打印修改后的类的公共属性===========')
print(my_dog.legs)
print(your_dog.legs)

# 但是我的狗腿瘸了，只剩一条腿, 我的狗腿瘸了，不代表所有的狗腿都瘸了，因此，我在修改实例时，不会影响其他实例的属性
my_dog.legs = 1
print('========在实例中用实例属性替代类属性，不影响其他实例========')
print(my_dog.legs)
print(your_dog.legs)
print(Dog.legs)
```

###### 6.3.2. 类的方法

为了区分在类中定义的函数和类外定义的全局函数，将类中定义的函数称为**方法**。

类中的方法定义与函数基本相同，区别有：

- 方法中的第一个参数必须是 self, 而且不能省略;
- 方法的调用需要实例化类，并以`实例名.方法名`形式调用;
- 整体进行一个单位的缩进，表示其属于类中的内容。

我们继续用狗举例，定义狗的吃饭和睡觉方法：

```python
# 给小狗上了基因锁，从此狗再也不可能直立行走，必须靠 4 条腿走路，这样，legs 就是不可修改的。
class Dog:

    def sleep(self):
        print('睡觉')

    def eat(self, food):
        print(f'吃{food}')

# 实例化
my_dog = Dog()

# 调用 sleep 方法
my_dog.sleep()
# 调用 eat 方法并传参
my_dog.eat('骨头')

```

注意：定义方法时，也可以像定义函数一样声明各种形式的参数；方法调用时，不用提供 self 参数。

在 Python 中的类定义中，可以定义一个特殊的构造方法，即 `__init__()` 方法，用于类实例化时，初始化相关数据，如果在这个方法中有相关参数，则实例化时就必须提供。

我们拿小狗来举例，我们要求每一条小狗都要有自己的名字，然后我们创建一个方法去调用名字属性。

```python
# 给小狗上了基因锁，从此狗再也不可能直立行走，必须靠 4 条腿走路，这样，legs 就是不可修改的。
class Dog:

    def __init__(self, name, ):
        self.name = name

    def sleep(self):
        print('睡觉')

    def eat(self, food):
        print(f'吃{food}')

    # 这条狗叫什么名字
    def speak(self):
        print(f'这条狗的名字叫{self.name}')

# 用关键字传参
my_dog = Dog(name='旺财')
# 位置传参
your_dog = Dog('小黑')

my_dog.speak()
your_dog.speak()
```

如果我们在实例化的时候没有填写参数，例如：

```python
his_dog = Dog()
```

运行结果为：

```
TypeError: __init__() missing 1 required positional argument: 'name'
```

还有要注意的一点，属性名和方法名不能重复。

### 6.4. 面向对象的三大特征

面向对象编程的三大特性：继承、封装、多态。

1. 多态
   多态是指同一个方法调用由于对象不同会产生不同的行为。生活中这样的例子比比皆是：同样是狗，但是我家养的是哈士奇，你家养的柴犬，他家养的萨摩耶。
2. 封装
   隐藏对象的属性和实现细节，只对外提供必要的方法。
   通过私有属性、私有方法的方式，实现封装。Python 追求简洁的语法
3. 继承
   继承可以让子类具有父类的特性，提高了代码的重用性。从设计上是一种增量进化，原有父类设计不变的情况下，可以增加新的功能，或者改进已有的算法。

###### 6.4.1. 多态

在我们前面几节的内容里，我们已经接触过多态的概念了，比如在我们学习类的属性的时候，我们实例化我的小狗和你的小狗，他俩有不同的名字，体重，名字和年龄。这些都是不同的实例的属性，包括方法也一样。

```python
# 声明一个小狗类，此处声明的属性，为所有小狗实例对象共有的属性
class Dog:
    # 所有狗都具有的特征
    legs = 4  # 四条腿
    eyes = 2  # 两只眼睛


# 实例化两个对象
my_dog = Dog()
your_dog = Dog()

print('===========获取狗类的公共属性============')
print(my_dog.legs, my_dog.eyes)
print(your_dog.legs, your_dog.eyes)

# 添加实例属性
# my_dog 与 your_doy 虽然都属于狗类，但是他们都有自己的特征
my_dog.weight = 10  # 我的狗重 10kg
my_dog.color = '白色' # 我的狗是白色
my_dog.name = '旺财'  # 我的狗叫旺财

your_dog.weight = 5 # 你的狗重 5kg
your_dog.color = '黑色'   # 你的狗是黑色
your_dog.age = 4    # 你的狗今年四岁

print('=======打印不同实例的实例属性=========')
print(my_dog.weight, my_dog.color, my_dog.name)
print(your_dog.weight, your_dog.color, your_dog.age)
# 这里如果你想要打印 my_dog.age 或者 your_dog.name 都会报错

# 修改类属性
# 所有的狗突然一夜之间进化了，前肢进化为了手臂，以后只靠双腿走路
Dog.legs = 2

print('==========打印修改后的类的公共属性===========')
print(my_dog.legs)
print(your_dog.legs)

# 但是我的狗腿瘸了，只剩一条腿, 我的狗腿瘸了，不代表所有的狗腿都瘸了，因此，我在修改实例时，不会影响其他实例的属性
my_dog.legs = 1
print('========在实例中用实例属性替代类属性，不影响其他实例========')
print(my_dog.legs)
print(your_dog.legs)
print(Dog.legs)
```

###### 6.4.2. 封装

封装性是面向对象重要的基本特性之一。封装隐藏了对象的内部细节，只保留有限的对外接口，外部调用者不用关心对象的内部细节，使得操作对象变得简单。

例如：一台计算机内部及其复杂，有主板，CPU，硬盘，内存等，而一般人不需要了解它的内部细节。计算机制造商用机箱把计算机封装起来，对外提供了一些接口，如鼠标，键盘，和显示器等，使用计算机就变得非常简单了。

**私有属性**

为了防止外部调用者随意存取类的内部数据（成员变量），内部数据（成员变量）会被封装成为“私有变量”，外部调用者只能通过方法调用私有变量。

默认情况下，Python 中的变量是公有的，可以在类的外部访问它们。如果想让它们成为私有变量，则在变量前加上双下划线（__）即可。

例如，

```python
# 我给狗类上了基因锁，狗永远只能 4 条腿走路
class Dog():
    # 设置私有属性
    __legs = 4
    
    # 内部获取狗腿数量
    def print_legs_count(self):
        print(f'狗有{self.__legs}条腿')

# 实例化我的小狗
my_dog = Dog()
my_dog.print_legs_count()	# 在内部可以正常调用
print(my_dog.__legs)		# 在外部调用时，无法获取该属性，抛出异常
```

注意： 私有变量可以在类的内部进行访问，不能在类的外部进行访问 

**私有方法**

私有方法与私有变量的封装是类似的，在方法前面加上双下划线（__）就是私有方法了。

例如：

```python
# 为了限制狗的进化，我们给狗类上了基因锁，狗永远只能 4 条腿走路
class Dog():
    # 设置私有属性
    __legs = 4
    
    # 设置私有方法，内部获取狗腿数量
    def __print_legs_inner(self):
        print(f'狗有{self.__legs}条腿')
    
    def print_legs_out(self):
        self.__print_legs_inner()

# 实例化我的小狗
my_dog = Dog()
my_dog.print_legs_out()			# 正常运行
my_dog.__print_legs_inner()		# 抛出异常
```

为了实现对象的封装，在一个类中不应该有公有的成员变量，这些成员变量应该都被设计成为私有的，然后通过公有的 set(赋值)和 get(取值)方法来访问。

```python
class Dog():
    # 设置私有属性
    __legs = 4

    # get 方法
    def get_legs(self):
        return self.__legs

    # set 方法
    def set_legs(self, legs):
        self.__legs = legs


# 实例化一个对象
my_dog = Dog()
print(my_dog.get_legs())
my_dog.set_legs(2)
print(my_dog.get_legs())        
```

还有一种进阶的方法来访问私有变量， 通过 `@property` 和 `@属性名.setter` 装饰器来完成。装饰器是函数中的一个进阶概念，我们在入门阶段，先不详细讲。

示例：

```python
class Dog():
    # 设置私有属性
    __legs = 4

    # 内部获取狗腿数量
    def print_legs_count(self):
        print(f'狗有{self.__legs}条腿')

    # 替代 get_legs
    @property
    def legs(self):
        return self.__legs

    # 替代 set_legs
    @legs.setter
    def legs(self, legs):
        self.__legs = legs


# 实例化一个对象
my_dog = Dog()
my_dog.print_legs_count()
my_dog.legs = 2
my_dog.print_legs_count()
```

###### 6.4.3. 继承

在现实世界中的继承关系无处不在，例如：猫与动物之间的关系：猫是一种特殊动物，具有动物的全部特征和行为，即数据和操作。在面向对象中动物是一般类，被称为**父类**，猫是特殊类，被称为**子类**。特殊类拥有一般类的全部数据和操作，可称子类继承父类。 

在 Python 中声明子类继承父类的语法很简单，定义类时在类的后面使用一对小括号指定它的父类就可以了，在 Python 中一般类都继承 object。 

**单继承**

语法格式：

```
class '父类名':
	pass

class '子类名'（'父类名'）：
	pass
```

示例：

```python
# 定义动物类
class Animal(object):
    def __init__(self, name):
        self.name = name

    def print_info(self):
        print(f'动物的名字叫：{self.name}')


# 定义猫类使其继承动物类
class Cat(Animal):
    def __init__(self, name, age):
        Animal.__init__(self, name)  # 调用父类的构造方法
        self.age = age


cat = Cat('汤姆', 3)
cat.print_info()  # 父类的方法被子类继承，子类对象可调用
```

在调用父类的构造方法时，我们还有一种写法，那就是使用 super() 函数

`super()` 函数，它会使子类从其父继承所有方法和属性：

```python
class Cat(Animal):
    def __init__(self,name,age):
        super.__init__(name)   # 调用父类的构造方法
        self.age = age
```

 这种方法与用父类名调用的方法效果是一样的。 

**多继承**

一个类继承多个父类。在多继承中 如果多个父类中属性名 或者是方法名相同 那么将按照MRO算法查找

MRO:

1. 在自己的类中查找 如果找到 就结束
2. 在父类元组中按照顺序查找 从左到右

所有在Python中，当子类继承多个父类时，如果在多个父类有相同的成员方法和成员变量，则子类优先继续左边父类中的成员方法或成员变量，从左到右继承级别从高到低。

语法格式：

```python
class A(Object):
	pass
 
class B(object):
	pass
 
class C(A,B):
	pass
```

示例：

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def show_info(self):
        print(f'狗的名字叫{self.name}')

    def run(self):
        print('狗跑的很快')


class Husky:
    def __init__(self, name):
        self.name = name

    def show_info(self):
        print(f'哈士奇的名字叫{self.name}')

    def run(self):
        print('哈士奇跑的很慢')

    def sofa(self):
        print('咬沙发')


class MyDog(Dog, Husky):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age


d = MyDog('二哈', 2)
d.run()  # 继承父类狗方法
d.sofa()  # 继承父类哈士奇方法
d.show_info()  # 继承父类哈士奇方法
```

运行结果为：

```
狗跑的很快
咬沙发
狗的名字叫二哈
```

**方法重写（重载）**

如果子类的方法名与父类的方法名相同，则在这种情况下，子类的方法会重写父类的同名方法。

示例：

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def show_info(self):
        print(f'狗的名字叫{self.name}')

    def run(self):
        print('狗跑的很快')


class Husky:
    def __init__(self, name):
        self.name = name

    def show_info(self):
        print(f'哈士奇的名字叫{self.name}')

    def run(self):
        print('哈士奇跑的很慢')

    def sofa(self):
        print('咬沙发')


# 在 MyDog 类中添加 show_info() 方法
class MyDog(Dog, Husky):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

    # 重写 show_info() 方法
    def show_info(self):
        print(f'我家的狗叫{self.name}')


d = MyDog('二哈', 2)
d.run()  # 继承父类狗方法
d.sofa()  # 继承父类哈士奇方法
d.show_info()  # 重写父类方法方法
```

 

# 7. 异常处理机制

在 Python 中，常见的基本错误有两类，即语法错误和异常。对于语法错误，应该在程序编写过程中尽量予以避免，在程序调试中消除。而异常是 Python 程序在运行过程中引发的错误，如果程序中引发了未进行处理的异常，程序就会由于异常而终止运行，只有为程序添加异常处理，才能使程序更具健壮性。

### 7.1. 语法错误

语法错误是所有编程语言中都存在的一种常见错误，即程序的洗发不符合编程语言的规定。常见的语法错误有：

1. 拼写错误（SyntaxError、NameError），即 Python 语言中的关键字写错，变量名，函数名拼写错误等。
2. 脚本程序不符合 Python 的语法规范，例如少了括号，冒号等，以及表达式书写错误等。
3. 缩进错误，因为 Python 语法规定，以缩进作为程序的语法之一。一般来说，Python 标准的缩进是以 4 个空格或一个 Tab 作为一个缩进，但同一个程序或项目中应该统一使用同一种缩进风格

### 7.2. 异常的处理

异常是 Python 程序在运行过程中引发的错误。如果程序中引发了未进行处理的异常，脚本就会由于异常而终止运行。只有在程序中捕获这些异常，并进行相关的处理，才能使程序不会中断运行。

Python 中使用 try...except 语句来说处理异常，基本形式如下：

```
try:
	'语句'	# 可能产生异常的语句
except	'异常名 1'：	# 要处理的第一类异常
	'语句'	# 异常的处理语句
except	'异常名 1'：	# 要处理的第二类异常
	'语句'	# 异常的处理语句
else:		  # 未触发异常，则执行该语句
	'语句'
finally:	  # 始终执行该语句，一般为了达到释放资源等目的
	'语句'
```

注意：else 语句在未引发异常情况下得到运行。

该语句的执行流程图如下：

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202211021050492.png)

首先，我们先演示一个最简单的案例：

```python
# 函数名错误, print 误写成 printt
printt(1)
print(2)
```

运行结果：

```
NameError: name 'printt' is not defined
```

使用异常捕获

```python
try:
    # 函数名错误, print 误写成 printt
    printt(1)
except:
    print('捕获到了异常')

print(2)
```

注意：

在这里如果你把 `print(2)` 放到 try 里面，依然不执行，因为在 try语句块中，捕获到了异常，直接进入了 except 的异常语句块。

如果没有引发错误，可以使用 `else` 关键字来定义要执行的代码块：

```python
try:
    # 函数名错误, print 误写成 printt
    printt(1)
except:
    print('捕获到了异常')
else:
    print('未发现异常')

print(2)
```

 如果指定了 `finally` 块，则无论 try 块是否引发错误，都会执行 finally 块。 

```python
try:
    # 函数名错误, print 误写成 printt
    printt(1)
except:
    print('捕获到了异常')
else:
    print('未发现异常')
finally:
    print('try内容执行完毕')

print(2)

try:
    # 函数名错误, print 误写成 printt
    print(1)
except:
    print('捕获到了异常')
else:
    print('未发现异常')
finally:
    print('try内容执行完毕')
```

### 7.3. Python 主要的内置异常及其处理

在 Python 中常见的异常都已经预定义好了，

|      异常名       |                 描述                 |
| :---------------: | :----------------------------------: |
|  AttributeError   |      调用不存在的方法引发的异常      |
|     EOFError      |        遇到文件末尾引发的异常        |
|    ImportError    |        导入模块出错引发的异常        |
|    IndexError     |          列表越界引发的异常          |
|      IOErro       | I/O 操作引发的异常，如打开文件出错等 |
|     KeyError      |  使用字典中不存在的关键字引发的异常  |
|     NameError     |     使用不存在的变量名引发的异常     |
|     TabError      |      语句块缩进不正确引发的异常      |
|    ValueError     |    搜索列表中不存在的值引发的异常    |
| ZeroDivisionError |          除数为零引发的异常          |

except 语句主要有以下几种用法：

|                    语法                     |                 说明                 |
| :-----------------------------------------: | :----------------------------------: |
|                   except                    |             捕获所有异常             |
|               except '异常名'               |             捕获指定异常             |
|       except ('异常名 1'，'异常名 2')       |       捕获指定异常名1或异常名2       |
|         except '异常名' as '替代值'         |     捕获指定异常并用'替代值'代替     |
| except ('异常名 1'，'异常名 2') as '替代值' | 捕获异常名1或异常名2并用'替代值'代替 |

### 7.4. 手动抛出异常

###### 7.4.1 raise 语句

上一小节中，所有的异常都是在程序运行中出现了错误而引发的异常，我们还可以在 Python 程序中使用 raise 语句来引发指定的异常，并向异常传递数据。

为了程序的需要，程序员还可以自定义新的异常类型，例如要求用户输入文本的长度有要求，则可以用 raise 引发异常，以确保文本输入的长度符合要求。

raise 的使用方式：

- raise 异常名
- raise 异常名，附加数据
- raise 类名

使用 raise 可以抛出各种预定异常，即使程序在运行时根本不会引发该异常。

示例：

```python
# 要求用户输入名字不超过 10 个字符
name = input('请输入你的名字，不超过 10 个字：')

if len(name) > 10:
    raise NameError
else:
    print(name)
print('程序执行结束')
```

我们使用 raise 抛出异常，同时捕获异常，因此程序运行不会中断。

```python
try:
    # 要求用户输入名字不超过 10 个字符
    name = input('请输入你的名字，不超过 10 个字：')

    if len(name) > 10:
        raise NameError
    else:
        print(name)
except NameError:
    print('捕获了一个NameError')
    
print('程序执行结束')
```

###### 7.4.2. assert 语句

assert 语句的一般形式如下：

```
assert '条件测试'，'异常附加数据'		# 其中异常附加数据是可选的
```

assert 语句是简化的 raise 语句，它引发异常的前提是其后面的条件测试为假。

示例：

```python
# 要求用户输入名字不超过 10 个字符
name = input('请输入你的名字，不超过 10 个字：')

assert len(name) < 10
print('程序执行结束')
```

assert 语句一般用于在程序开发时测试代码的有效性。比如某个变量值必须在一定范围内，而运行时得不到的值不符合要求，则引发该异常，对开发者予以提示。所以一般在程序开发中，不去捕获这个异常，而是让他中断程序。原因是这个程序中已经出现了问题，不应该继续运行。

### 7.5. 自定义异常类

在 Python 中定义异常类不用从基础完全自己定义，只要通过继承 Exception 类来创建自己的异常类。异常类的定义和其他类没有区别，最简单的自定义异常类甚至可以只继承 Exception 类，类体为 pass 如：

```python
class MyError(Exception):	# 继承Exception类
    pass
```

如果需要异常类带有一定的提示信息，也可以重载 `__str__` 和 `__init__` 这两个方法。

示例：

```python
class LengthError(Exception):

    def __init__(self):
        self.value = '名字过长'

    def __str__(self):
        return self.value


try:
    # 要求用户输入名字不超过 10 个字符
    name = input('请输入你的名字，不超过 10 个字：')

    if len(name) > 10:
        raise LengthError
    else:
        print(name)
except LengthError:
    print('捕获了一个LengthError')

print('程序执行结束')
```

# 8. 模块和包

Python 提供了强大的模块支持，主要体现在，不仅 Python 标准库中包含了大量的模块（称为标准模块），还有大量的第三方模块，开发者自己也可以开发自定义模块。通过这些强大的模块可以极大地提高开发者的开发效率。

那么，模块到底指的是什么呢？Python 模块(Module)，是一个 Python 文件，以 .py 结尾，也就是 Python 程序的后缀名。 模块能定义函数，类和变量，模块里也能包含可执行的代码。用作模块的程序与其他的程序并没有什么区别。

**模块的作用**: python中有很多各种不同的模块, 每一个模块都可以帮助我们快速的实现一些功能, 比如实现与数学相关的功能就可以使用 math 模块，我们可以这样理解，每个变量，函数，类都是一个工具，而模块则是一个工具箱，里面可以放很多工具。当我们想要使用某个工具的时候，我们不需要现场制造（写新的代码），只需要拿出来含有相对应工具的工具箱即可（导入相对应的模块）。

### 8.1. 模块的导入方式

在 Python 中，模块使用前需要先导入，导入语法如下：

```python
# 将整个模块导入
import 模块名
# 将整个模块导入，并且在程序中用别名代替模块名
import 模块名 as 别名
# 导入模块名中的某个类，变量，方法
from 模块名 import 类，变量，方法等
# 导入整个模块
from 模块名 import *
# 导入模块的某个功能，并用别名替代功能名
from 模块名 import 功能名 as 别名
```

注意：`import 模块名/import 模块名 as 别名` 与 `from 模块名 import *` 使用区别的。使用 import 的导入模块，在使用模块中的功能时，必须以`模块名.功能名`的形式调用。

使用 `as 别名` 来导入时，给模块重新命名一个名字，可能是因为防止名称重复，也可能是为了方便书写。

以导入并使用 math 模块为例：

```python
# 使用 import 语句导入 math 模块
import math

# 使用 math 模块中的π的值，
print(math.pi)
# 使用 math 函数中的 三角函数
print(math.sin(math.pi / 2))


# 使用 mport 模块名 as 别名,导入 math 模块
import math as m

print(m.pi)
print(m.sin(m.pi / 2))


# 使用 from 模块名 import * 导入 math 模块
from math import *

print(pi)
print(sin(pi / 2))


# 使用 from 模块名 import 类，变量，方法等
from math import pi, sin

print(pi)
print(sin(pi / 2))

# 使用 from 模块名 import 功能名 as 别名
from math import pi as pai
from math import sin as sine

print(pai)
print(sine(pai / 2))
```

### 8.2. 自定义模块

Python 中已经帮我们实现了很多模块，但是有些时候，我们还需要一些个性化的模块，这时就可以通过自定义模块实现。

自己编写的模块其实和平常写 Python 程序是相同的，他既可以是一个解决某个问题的独立程序，也可以是几个函数构成。而模块名就是代码保存的文件名。

示例

```python
# 创建一个 .py 文件，命名为 my_module

# 定义一个变量 
test_name = '自定义模块测试变量名'

# 定义一个函数
def test_function():
    print('自定义模块测试函数')
```

然后，在同一路径下的另一个文件中导入该模块

```python
import my_module

print(my_module.test_name)
my_module.test_function()
```

注意：当导入多个模块的时候，且模块内有同名功能，当调用这个同名功能的时候，调用到的是后面导入的模块的功能。

示例：

```python
# 模块1
def test_a():
    print('module_1中的test_a函数')
```

```python
# 模块2
def test_a():
    print('module_2中的test_a函数')
```

```python
from module_1 import test_a

test_a()

from module_2 import test_a

test_a()
```

###### 8.2.1. 模块位置

编写好的模块只有被 Python 找到才能导入。上面的示例因为编写的模块与调用模块的程序位于同一目录中，因此不需要进行设置就能被 Python 找到并导入。如果在该目录下新建一个 module 目录，并且把 my_module.py 剪切至 module 中，继续使用上述代码就会报错 ImportError，找不到要导入的模块。

ImportError 表示：Python解释器没有找到 my_module 模块。在导入模块时，Python 解释器首先在当前目录中查找要导入的模块。如果没有找到，会从 sys 模块中的 path 变量指定的目录查找导入模块。如果依然没有找到，则会引发 ImportError 错误。

一般来说，Python 解释器在运行程序前将当前目录添加到 sys.path 路径列表中，所以导入模块时首先查找的路径是当前目录下的模块。

因此，你可以将自定义模块的路径添加到 sys.path 中，然后使用 import。

用法：

```python
import sys	# 导入 sys 模块

print(sys.path)		# 输出当前模块查找路径
sys.path.append('自定义模块路径')	# 添加自定义模块路径为模块查找路径
```

示例：

```python
import sys	# 导入 sys 模块

print(sys.path)		# 输出当前模块查找路径
sys.path.append(r"D:\PythonBasisTutorial\module")

import my_module

print(my_module.test_name)
my_module.test_function()
```

实际上这种方法并不常用，因为不符合 Python 的代码规范，在 Python 代码规范中，import 语句要求放在程序开始，但是如果你不添加到 sys.path，你就无法引入 my_module 模块。而且，如果有多个文件需要引入时，你无法确定你是否已经将自定义模块添加到 sys.path 中。

因此，还有一种更简单通用的写法，`同级目录名.模块名`：

```python
from module import my_module

print(my_module.test_name)
my_module.test_function()

# 或者
import module.my_module

print(module.my_module.test_name)
module.my_module.test_function()
```

此时的目录名，我们也称之为**包**。

###### 8.2.2. `__all__`

如果一个模块文件中有 `__all__` 变量时，导入时，只能导入这个列表中的元素。

示例：

```python
# my_module 模块
__all__ = ['test_function', 'test_name', 'test_a']

# 定义一个变量
test_name = '自定义模块测试变量名'


# 定义一个函数
def test_function():
    print('自定义模块测试函数')


def test_a():
    print('my_module中的test_a函数')


def test_b():
    print('my_module中的test_b函数')
```

```python
from my_module import *

test_a()
test_b()
```

运行结果

```
my_module中的test_a函数
Traceback (most recent call last):
  File "D:/PythonBasisTutorial/Chapter1.py", line 4, in <module>
    test_b()
NameError: name 'test_b' is not defined
```

###### 8.2.3. 具有独立运行能力的模块

每个 Python 程序在运行时都有一个 `__name__` 属性。在程序中通过对 `__name__` 属性值的判断，可以让程序在作为导入模块和独立运行时都可以正确运行。

在 Python 中，如果程序作为模块导入，则其 `__name__` 属性被设置为模块名。如果程序独立运行，则其 `__name__` 属性被设置为 `__main__`。因此，可以通过 `__name__` 属性来判断程序的运行状态。

对上段代码进行修改，使它既可以独立运行，又可以作为模块被其他程序导入使用，修改后代码如下：

```python
__all__ = ['test_function', 'test_name', 'test_a']

# 定义一个变量
test_name = '自定义模块测试变量名'


# 定义一个函数
def test_function():
    print('自定义模块测试函数')


def test_a():
    print('my_module中的test_a函数')


def test_b():
    print('my_module中的test_b函数')


if __name__ == '__main__':
    test_a()
```

一般来说，将模块的主要功能以实例的形式放在这个 if 语句中，可以方便测试模块是否正常运行，或者发现模块的错误。这是一个好习惯。

### 8.3. 包

当应用程序或项目具有较多的功能模块时，如果把他们都放在同一个文件夹下，就显得不合理了，这时，可以使用 Python 中提供的包来管理较多的功能模块。使用包的好处在于可以有效避免名字冲突，便于包的维护管理。

###### 8.3.1. 自定义包

包其实就是一个文件夹或目录，但其中必须包含一个名为 `__init__.py`(init 的前后均是两条下划线)的文件。`__init__.py` 可以是一个空文件，仅用于表示该目录是一个包。此外，包还可以嵌套，即把子包放在某个包中。包可以看做处于同一目录中的模块。在 Python 中 首先使用目录名，然后使用模块名导入需要的模块。

使用如下：

- 新建包 `my_package`
- 新建包内模块：`my_module_1` 和 `my_module_2`，并添加功能

示例：

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202211031136639.png)

```python
from my_packages import my_module_1, my_module_2

my_module_1.print_info_1()
my_module_2.print_info_2()
```

如果我们想要控制允许用户导入的模块列表，就需要在 `__init__.py` 文件中添加 `__all__ = []`。

示例，如果我们在 my_packages 的 `__init__.py` 中添加

```python
__all__ = ['my_module_1']
```

我们再调用

```python
from my_packages import *

my_module_1.print_info_1()
my_module_2.print_info_2()
```

运行结果：

```
NameError: name 'my_module_2' is not define
```

注意：__all__针对的是 `from ... import *` 这种方式对 `import xxx` 这种方式无效。例如：

```
from my_packages import my_module_2, my_module_1

my_module_1.print_info_1()
my_module_2.print_info_2()
```

依然可以正常使用。

###### 8.3.2. 第三方包

在Python程序的生态中，有许多非常多的第三方包（非Python官方），可以极大的帮助我们提高开发效率，  

- 科学计算中常用的：numpy包
- 数据分析中常用的：pandas包
- Web开发常用的包：Django, Flask, Fast-API
- 游戏开发常用的包：PyGame
- 人工智能包：TensorFlow

这些第三方的包，极大的丰富了Python的生态，提高了开发效率。

但是由于是第三方，所以Python没有内置，所以我们需要安装它们才可以导入使用哦。

第三方包的安装非常简单，我们只需要使用Python内置的pip程序即可。

打开我们许久未见的：命令提示符程序，在里面输入：

```
pip install '包名称==版本号'
```

注意：版本号与双等号可以省略不写，默认安装最新版

由于pip是连接的国外的网站进行包的下载，所以有的时候会速度很慢。

我们可以通过如下命令，让其连接国内的网站进行包的安装：

```
pip install -i https://pypi.douban.com/simple/ `包名称==版本号`
```

PyCharm 也提供了安装第三方包的功能。

点击左上角 `File`，选择 `Settings`

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202211031205568.png)

选择 `Python Interpreter`

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202211031205726.png)

点击 install

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202211031203728.png)

![](https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202211031207474.png)

# 9. 文件操作

编写程序来解决实际项目时，很多时候都离不开文件和文件系统的操作。程序本身就是保存在文件系统的文件中的。文件既可以保存程序代码，也可以保存各种输入与输出数据。

除了提供文件操作基本的函数之外，Python 还提供了很多模块，例如 fileinput 模块、pathlib 模块等，通过引入这些模块，我们可以获得大量实现文件操作可用的函数和方法（类属性和类方法），大大提供编写代码的效率。

### 9.1. 文件操作基础

Python 中可以通过内建的文件打开函数 open() 来打开文件，并用相关的方法读写文件的内容，供程序处理和使用，而文件也可以看作是 Python 中的一种数据类型。当使用 Python 的内置函数 open 打开一个文件后，就返回一个文件对象。其原型如下：

```
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

其中参数所代表的作用：

|  参数名  |                             说明                             |
| :------: | :----------------------------------------------------------: |
| filename |                        要打开的文件名                        |
|   mode   |                    可选参数，文件打开模式                    |
| bufsize  |                     可选参数，缓冲区大小                     |
| encoding | 文件编码类型，如'gbk', 'utf-8'等，以避免读取文件内容出现乱码 |
|  errors  |                       编码错误处理方法                       |
| newline  |                  换行符模式，例如'\n', '\r'                  |
| closefd  |               控制在关闭文件时是否彻底关闭文件               |

`mode` 是打开文件的操作模式字符串，常用的模式字符如下：

| 模式字符 |                       说明                       |
| :------: | :----------------------------------------------: |
|    r     |                     只读模式                     |
|    w     | 文本写入，并先清空文件（慎用），文件不存在则创建 |
|    a     |  文本写，如果文件存在则在末尾追加，不存在则创建  |
|    b     |   组合字符，二进制模式，例如：'rb'表示二进制读   |
|    x     |     文本写，排它性创建，如果文件已存在则失败     |
|    +     |  组合字符，读取与写入，例如：'r+' 表示同时读写   |
|    t     | 组合字符，文本模式（默认），例如：rt 一般省略 t  |

组合字符是指可以与模式字符组合使用：

| 组合模式 |             含义             |
| :------: | :--------------------------: |
|    rb    | 二进制只读，通常用于打开图片 |
|    wb    |  二进制写，通常用于打开图片  |
|    ab    |        二进制追加写，        |
|  r+/a+   |          读与追加写          |
|    w+    |          读与覆盖写          |

常用的文件操作及其作用

|      文件操作函数      |                     说明                      |
| :--------------------: | :-------------------------------------------: |
|      file.read(n)      |   将整个文件读入到字符串中，或指定前 n 字节   |
|   file.readline([n])   | 读入文件的第一行到字符串中，或该行的前 n 字节 |
|    file.readlines()    |           将整个文件按行读入到列表            |
|     file.write(s)      |              向文件中写入字符串               |
| file.writelines(lines) |           向文件中写入一行数据列表            |
|      file.close()      |                关闭打开的文件                 |

###### 9.1.1. 基本使用

在当前目录下手动创建一个文件命名为 'a.txt', 并写入以下内容

```
测试语句1
测试语句2
测试语句3
```

```python
# open打开文件
fb = open(file="a.txt", encoding='utf-8')
# 读取文件
ct = fb.read()
# 打印文件内容
print(ct)
# 手动关闭文件
fb.close()

# 使用file.readline()
# open打开文件
fb = open(file="a.txt", encoding='utf-8')
# 读取文件
while 1:
    line = fb.readline()
    if not line:
        break
    else:
        print(line)
# 手动关闭文件
fb.close()

# 写入内容
# open打开文件
fb = open(file="a.txt", mode='w', encoding='utf-8')
fb.write('覆盖写入新内容')
fb.close()

# 追加写入新内容
fb = open(file="a.txt", mode='a', encoding='utf-8')
fb.write('追加写入新内容')
fb.close()
```

注意：进行文件处理时经常会碰到相对路径和绝对路径的问题。

打开文件，读取数据数据时，文件的完整路径必须存在，不然就会报错。

**绝对路径（absolute path）**：它指定了文件在电脑中的具体位置，以 windows 电脑为例：

```
D:\PythonBasisTutorial\a.txt
```

**相对路径（）**:一般是指相对当前脚本的路径，比如上面的案例中的 a.txt，因为与当前程序在同一个文件夹下，所以可以直接使用 a.txt 作为文件名来操作。

###### 9.1.2 with 上下文管理

解决经常会忘记关闭文件句柄，造成资源浪费，所以处理文件时往往使用 with 语句进行上下文管理。

```
with + open(文件地址）as 函数名：
	pass
不需要你手动调用fs.close()
自动帮你关闭文件
```

示例

```python
with open(file=r"a.txt", encoding="utf-8") as fb:
    content = fb.read()
    print(content)

with open(file=r"a.txt", mode='w', encoding="utf-8") as fb:
    fb.write('使用 with 覆盖写入新内容')

with open(file=r"a.txt", mode='a', encoding="utf-8") as fb:
    fb.write('使用 with 追加写入新内容')
```

### 9.2. 常用文件和目录操作

在计算机系统中操作时，就免不了要与文件和目录打交道。对一些比较繁琐的文件和目录操作，可以使用 Python 提供的 OS 模块来进行。OS 模块中包含很多操作文件和目录的函数，可以方便地进行重命名文件，添加/删除目录，复制目录/文件等操作。

以下几个 OS 模块中常用的函数需要学习一下：

|        函数名        |                      说明                      |
| :------------------: | :--------------------------------------------: |
|     os.getcwd()      | 获取当前的路径，当前路径指的是所运行程序的目录 |
|   os.listdir(path)   |              获取指定目录中的内容              |
|    os.mkdir(path)    |                    创建目录                    |
|    os.rmdir(path)    |                    删除目录                    |
| os.path.isdir(path)  |                 判断是否是目录                 |
| os.path.isfile(path) |                 判断是否是文件                 |
|    os.walk(path)     |        遍历指定目录下的所有文件和子目录        |

示例：

```python
import os

# 获取当前目录
print(os.getcwd())

# 获取当前目录下的所有内容
print(os.listdir(os.getcwd()))
```

# 10 Python 进阶

### 10.1. 类的魔术方法