import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar/index.js";
import {enSidebar, zhSidebar} from "./sidebar/index.js";

export default hopeTheme({
    // hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

    author: {
        name: "罗大富 BigRich",
        url: "https://github.com/bigrich-luo",
        email: "943215317@qq.com"
    },

    iconAssets: "iconfont",

    logo: "/logo.png",

    repo: "bigrich-luo/geeksman-blogs",

    docsDir: "docs/",
    // 全屏按钮
    // fullscreen: true,
    // 切换颜色
    darkmode: "toggle",

    // 页脚支持
    footer: '<img src="/assets/beian.png" height="15px" width="15px" style="vertical-align: bottom; margin-right: 3px"  alt=""/>' + '<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2022007338号-1</a>',
    displayFooter: true,

    locales: {
        "/": {
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,

            // footer: "默认页脚",
            //
            // displayFooter: true,

            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },

        // English locale config
        // "/en/": {
        //   // navbar
        //   navbar: enNavbar,
        //
        //   // sidebar
        //   sidebar: enSidebar,
        //
        //   footer: "Footer",
        //
        //   displayFooter: true,
        //
        //   // page meta
        //   metaLocales: {
        //     editLink: "Edit this in GitHub",
        //   },
        // },
    },

    // // 加密文章
    // encrypt: {
    //     config: {
    //         //
    //         "/demo/encrypt.html": ["1234"],
    //         "/en/demo/encrypt.html": ["1234"],
    //     },
    //     // 提示文字
    //     encryptLocales: {
    //         placeholder: "微信搜索公众号‘极客侠’回复‘密码’获取口令",
    //
    //         /**
    //          * Passwrod error hint
    //          */
    //         errorHint: "哈哈，别调戏人家啦，按规则来嘛",
    //     },
    // },

    plugins: {
        // 评论组件
        // If you don’t need comment feature, you can remove following option
        // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
        // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
        // comment: {
        //   /**
        //    * Using Giscus
        //    */
        //   // provider: "Giscus",
        //   // repo: "vuepress-theme-hope/giscus-discussions",
        //   // repoId: "R_kgDOG_Pt2A",
        //   // category: "Announcements",
        //   // categoryId: "DIC_kwDOG_Pt2M4COD69",
        //
        //   /**
        //    * Using Twikoo
        //    */
        //   // provider: "Twikoo",
        //   // envId: "https://twikoo.ccknbc.vercel.app",
        //
        //   /**
        //    * Using Waline
        //    */
        //   provider: "Waline",
        //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        //
        //   /**
        //    * Using artalk
        //    */
        //   // provider: "Artalk",
        //   // site: "artalk-demo",
        //   // server: "https://demo-artalk.jjdxb.top/",
        // },

        // 博客组件
        // blog: true,

        // Disable features you don’t want here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            // playground: {
            //     presets: ["ts", "vue"],
            // },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            // vPre: true,
            // vuePlayground: true,
        },

        // PWA
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
