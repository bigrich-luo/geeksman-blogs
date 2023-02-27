import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro"
import theme from "./theme.js";

export default defineUserConfig({
    // 对应的仓库名路径
    base: "/",
    // 单语言
    lang: "zh-CN",

    title: "极客侠GeeksMan",

    // 多语言(开启后导航栏会出现切换标志)
    // locales: {
    //     "/": {
    //         lang: "zh-CN",
    //         title: "文档演示",
    //         description: "vuepress-theme-hope 的文档演示",
    //     },
    //     "/en/": {
    //         lang: "en-US",
    //         title: "Docs Demo",
    //         description: "A docs demo for vuepress-theme-hope",
    //     },
    //
    // },

    // 插件
    plugins: [
        // 搜索栏
        searchProPlugin({
            // 索引全部内容
            indexContent: true,
            // 为分类和标签添加索引
            customFields: [
                {
                    getter: (page) => page.frontmatter.category,
                    formatter: "分类：$content",
                },
                {
                    getter: (page) => page.frontmatter.tag,
                    formatter: "标签：$content",
                },
            ],
        }),
    ],

    theme,

    shouldPrefetch: false,
});
