module.exports = {
    title: 'GeeksHub',
    description: '软硬件真全栈一条龙',
    // vuepress-theme-vdoing 主题
    theme: 'vdoing',

    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '01.Python', link: '/python/'},
        ]
    },
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',
    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', {rel: 'icon', href: '/images/favicon.ico'}], //favicons，资源放在public文件夹
        [
            'meta',
            {
                name: 'keywords',
                content: '个人技术博客,后端,后端开发,硬件开发,PCB设计,前端,电子电路，机械设计，3D打印，技术文档,极客，DIY，学习,教程,Python,Django,ROS,Ubuntu,Vue,Arduino,ESP32,Linux,Github,Markdown',
            },
        ],
        // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
        // ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
        // [
        //   'script',
        //   {
        //     'data-ad-client': 'ca-pub-7828333725993554',
        //     async: 'async',
        //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        //   },
        // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    ],
    // 页脚信息
    footer: {
        createYear: 2023, // 博客创建年份
        copyrightInfo:
            '罗大富 | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank"> GPL 3.0 License</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },
}