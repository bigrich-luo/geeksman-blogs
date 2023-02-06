module.exports = {
    title: '极客侠GeeksMan',
    description: '快速入门 Python、C、C++、Arduino、ESP32、树莓派、Altium Designer、电子电路设计、SolidWorks、Fusion 360、非标设计，做一名真全栈工程师！',
    keywords: 'Python，编程，硬件',
    head: [
        ['link', {rel: 'icon', href: '/images/logo.png'}],
        // ['link', {rel: 'icon', href: '/logo.png'}],
    ],
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: '了解我们', link: 'https://google.com'},
            {text: 'External', link: 'https://baidu.com', target: '_self', rel: ''},
            {
                text: '语言下拉列表',
                // ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            },
            {
                text: '下拉列表分组',
                ariaLabel: 'Language Menu',
                items:
                    [
                        {
                            text: 'Group1', items:
                                [
                                    {text: 'Chinese', link: '/language/chinese/'},
                                    {text: 'Japanese', link: '/language/japanese/'}
                                ]
                        },
                        {
                            text: 'Group2', items:
                                [
                                    {text: 'Chinese', link: '/language/chinese/'},
                                    {text: 'Japanese', link: '/language/japanese/'}
                                ]
                        }
                    ]
            }
        ],
        sidebar: 'auto',
        lastUpdated: '最近更新'
    }
}