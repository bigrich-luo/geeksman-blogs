import{_ as c,W as p,X as o,$ as i,a0 as e,Z as r,a1 as t,G as g}from"./framework-0436675f.js";const n={},s=t('<p>咱们写博客的时候，总是需要插入图片的，图片存在本地的话上传到博客网站去就没法显示了，就算一个图一个图的复制粘贴上去，想移植到其他的博客网站，图就会失效，我们就需要图床。</p><p>图床是干什么的？ 图床就是一个便于在博文中插入在线图片连接的个人图片仓库。</p><p>设置图床之后，在自己博客中插入的图片链接就可以随时随地在线预览了，并且不会因为任何意外原因无法查看，除非自己亲自删除。</p><p>PicGo 的出现就是为了解决这个问题，它可以将图片上传到指定的图床上，然后返回 Markdown 链接，直接粘贴到你的文档中，就 OK 了。</p><p>现在可以用的图床太多了，比如七牛云，各大云服务器厂商的 OSS等等。或多或少打着免费的旗号，实际体验要么很差，要么收费。</p><p>如果只是用来写博客，搭建博客网站的话，GitHub / Gitee / Coding 实际上已经够用了。</p><p>这三个平台该如何选择呢？</p><ol><li>如果你的用户群体主要在海外，或者是程序员等熟练使用 GitHub，建议使用 <strong>GitHub</strong>；</li><li>如果你的用户集中在国内，且你能够熟练使用 GitHub等代码托管平台，或者你的博客没有配置在代码托管平台的 Pages 中，建议使用 Coding；</li><li>如果你是第一次使用 GitHub / Gitee / Coding 等代码托管平台，或者打算将静态网站部署在 Gitee 上，选择 Gitee 图床即可。</li></ol><h2 id="安装-picgo" tabindex="-1"><a class="header-anchor" href="#安装-picgo" aria-hidden="true">#</a> 安装 PicGo</h2><p>首先，我们需要安装 PicGo 软件与 Gitee-uploader 插件。</p>',10),d={href:"https://molunerfinn.com/PicGo/",target:"_blank",rel:"noopener noreferrer"},h=t('<div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201517454.png" width="550"></div><p>安装之后打开软件，选择插件设置，搜索 Gitee。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201524786.png" width="550"></div><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201526832.png" width="550"></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这三个其实没什么区别，安装哪个都一样。</p></div><h2 id="在-gitee-中新建图床" tabindex="-1"><a class="header-anchor" href="#在-gitee-中新建图床" aria-hidden="true">#</a> 在 Gitee 中新建图床</h2>',6),m={href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"},l=t('<p>点击右上角的 <code>+</code>，选择新建仓库</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201534530.png" width="550"></div><p>新建仓库的要点如下：</p><ul><li><p>输入一个仓库名称；</p></li><li><p>勾选使用Readme文件初始化这个仓库；</p></li><li><p>选择单分支模型；</p></li><li><p>进入仓库管理页面，将仓库设置为开源。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这个选项勾上，这样码云会自动给你的仓库建立master分支，这点很重要!!! 我因为这点折腾了很久，因为使用github做图床picgo好像会自动帮你生成master分支，而picgo里的gitee插件不会帮你自动生成分支。</p></div></li></ul><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201556298.png" width="550"></div><p>进入该仓库，点击管理，将仓库开源。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201559268.png" width="550"></div><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201601365.png" width="550"></div><h2 id="配置-picgo" tabindex="-1"><a class="header-anchor" href="#配置-picgo" aria-hidden="true">#</a> 配置 PicGo</h2><p>我们在图床设置中选择 <code>gitee</code>，</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201549098.png" width="550"></div><ul><li>repo: 用户名/仓库名，比如我的 repo名为 <code>jonathanluo0604/typorapicgoimages1</code>，也可以直接复制仓库的url；</li></ul><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201548919.png" width="550"></div><ul><li>branch：分支，由于我们选择的是单分支结构，所以这里写上 master；</li><li>token: 填入 Gitee 的私人令牌，允许 PicGo 直接上传图片到 Gitee 中；</li><li>path：路径，一般写上 images;</li></ul><h4 id="如何获取-gitee-token" tabindex="-1"><a class="header-anchor" href="#如何获取-gitee-token" aria-hidden="true">#</a> 如何获取 Gitee token？</h4><p>点击头像，进入设置</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201602319.png" width="150"></div><p>找到右边安全设置里面的私人令牌</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201607758.png" width="200"></div><p>点击生成新令牌，把projects这一项勾上，其他的不用勾，然后提交</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201609442.png" width="550"></div><p>这里需要验证一下密码，验证密码之后会出来一串数字，这一串数字就是你的token，将这串数字复制到刚才的配置里面去。</p><div align="center"><img src="https://gitee.com/geek-tech/typorapicgoimages1/raw/master/images/202302201609048.png" width="550"></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这个令牌只会明文显示一次，建议在配置插件的时候再来生成令牌，直接复制进去，搞丢了又要重新生成一个。</p></div><p>现在保存你刚才的配置，然后将它设置为默认图床，就可以上传图片测试一下了。</p>',25);function v(w,_){const a=g("ExternalLinkIcon");return p(),o("div",null,[s,i("p",null,[e("打开 "),i("a",d,[e("PicGo 官网下载地址"),r(a)]),e(" ，下载安装包。下载完成直接安装即可。")]),h,i("p",null,[e("在 "),i("a",m,[e("Gitee"),r(a)]),e(" 中新建图床之前，你需要有一个 Gitee 账号。")]),l])}const u=c(n,[["render",v],["__file","03.markdown-picgo-gitee.html.vue"]]);export{u as default};
