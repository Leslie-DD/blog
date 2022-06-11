import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Leslie's Blog",
  description: "Leslie's Blog by Vuepress & Vuepress-theme-hope",

  base: "/blog/",

  dest: "./dist",

  theme,
  
});
