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
});
