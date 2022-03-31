import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  "": [],
  "home": [],
  "slide": [],
  "/guide/": [
    {
      text: "如何使用",
      icon: "creative",
      children: ['disable.md', 'encrypt.md'],
    },
  ],

  "/about/": [
    {
      text: "About",
      children: [
        "/about/README.md",
      ],
    },
  ],

  '/tools/': [
    {
      text: "常用技术",
      link: "/tools/",
      children: [
        "/tools/git_github_tips.md",
        {
          text: "Linux",
          link: '/tools/linux',
          prefix :'linux/',
          collapsable: true,
          children: [
            "Linux配置JDK和Tomcat.md",
            "Ubuntu和Centos8安装MySQL8.md",
            "Ubuntu刷机报错.md",
          ],
        },
      ],
    },
  ],
  '/blog/': [
    {
      text: '技术博客',
      link: '/blog/',
      children: [
        {
          text: '后端',
          link: '/blog/server',
          children: [
            { 
              text: 'Mybatis事务管理',
              link: '/blog/server/Mybatis事务管理.md'
            }
          ],
        },
        { 
          text: '数据库',
          link: '/blog/databases',
          children: [
            { 
              text: '关系型数据，非关系型数据库，文档型数据库', 
              link: '/blog/databases/关系型数据，非关系型数据库，文档型数据库.md'
            }
          ]
        },
        { 
          text: 'Python',
          link: '/blog/python',
          children: [
            { 
              text: 'python操作excel数据', 
              link: '/blog/python/python操作excel数据.md'
            }
          ]
        },
      ],
    },
  ],

  '/projects/' : [
    {
      text: 'Reading',
      link: '/projects/reading/',
      children: [
        {
          text: '模块解析',
          link: '/projects/reading/模块解析.md'
        },
        {
          text: '项目脚本、工具',
          link: '/projects/reading/项目脚本、工具.md'
        },
      ]
    }
  ],

  '/notes/' : [
    {
      text: '随笔',
      link: '/notes/',
      children: [
        // 这么写，目录会展示二级标题
        // '/notes/三国随笔.md',
        // '/notes/张国荣与程蝶衣.md',
        
        // 这么写，目录只会展示题目
        {
          text: '三国随笔',
          link: '/notes/三国随笔.md'
        },
        {
          text: '张国荣与程蝶衣',
          link: '/notes/张国荣与程蝶衣.md'
        },
      ]
    }
  ]
});
