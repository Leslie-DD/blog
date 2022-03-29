import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },

  {
    text: "About",
    prefix: "/about/",
    children: [
      {
        text: "About Me",
        link: "README.md",
      },
      {
        text: "⛏️ Technology Stack",
        link: 'techstack.md',
      },
      {
        text: "🔗 Links",
        link: "links.md",
      },
      {
        text: "🗒️ About Blog",
        link: "blog.md",
      },
    ],
  },

  {
    text: '常用技术',
    prefix: '/tools/',
    children: [
      { 
        text: 'Git & GitHub', 
        link: 'git_github_tips.md' 
      },
      {
        text: 'Linux',
        link: 'linux',
      },
    ],
  },

  {
    text: '技术博客',
    prefix: '/blog/',
    children: [
      {
        text: '后端',
        link: 'server',
      },
      { 
        text: '数据库',
        link: 'databases' 
      },
      { 
        text: 'Python',
        link: 'python' 
      },
    ],
  },

  {
    text: '项目',
    prefix: '/projects/',
    children: [
      {
        text: 'Reading',
        link: 'reading/'
      },
    ]
  },

  {
    text: '读书笔记',
    link: '/notes/',
    // children: [
    //   {
    //     text: 'Reading',
    //     link: '/notes/reading/'
    //   },
    // ]
  }
  
]);
