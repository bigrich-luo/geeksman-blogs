import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    // { text: "案例", icon: "discover", link: "/demo/" },
    // {
    //   text: "指南",
    //   icon: "creative",
    //   prefix: "guide/",
    //   children: [
    //     {
    //       text: "Bar",
    //       icon: "creative",
    //       prefix: "bar/",
    //       children: ["baz", { text: "...", icon: "more", link: "" }],
    //     },
    //     {
    //       text: "Foo",
    //       icon: "config",
    //       prefix: "foo/",
    //       children: ["ray", { text: "...", icon: "more", link: "" }],
    //     },
    //   ],
    // },
    // {
    //   text: "V2 文档",
    //   icon: "note",
    //   link: "https://theme-hope.vuejs.press/zh/",
    // },
    {text: "Python", icon: "python", link: "/python/"},
    {text: "Markdown 神仙用法", icon: "markdown", link: "/markdown"},

]);
