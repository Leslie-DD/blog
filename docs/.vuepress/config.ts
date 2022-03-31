import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/my-blog/",

  // dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Leslie's Blog",
      description: "Leslie's Blog by Vuepress & Vuepress-theme-hope",
    },
  },

  themeConfig,
  
});
