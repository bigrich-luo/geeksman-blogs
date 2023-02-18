import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({

    "/python/": [
        {
            // icon: "discover",
            text: "Python",
            collapsible: true,
            children: "structure",
        },
    ],
    "/markdown/": [
        {
            // icon: "discover",
            text: "Markdown 的神仙用法",
            collapsible: true,
            children: "structure",
        },
    ],
});
