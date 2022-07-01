import { sidebar } from "vuepress-theme-hope";

export default sidebar({
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
        {
          text: "简介",
          link: "/about/README.md",
        }
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
          text: "💻 Linux",
          link: '/tools/linux',
          prefix: 'linux/',
          collapsable: true,
          children: [
            "配置JDK和Tomcat.md",
            "安装MySQL8.md",
            {
              text: "💽 Ubuntu",
              // link: '/tools/linux/ubuntu', // 写了link标签就要在该路径下新建README.md文件，不然点击这一栏会404
              prefix: 'ubuntu/',
              collapsable: true,
              children: [
                "主题美化和键盘Mac化.md",
                "刷机报错.md",
                "MTK刷机工具MT8167版本打不开，缺少libpng12-0的解决方法.md",
                "开机自动执行python脚本发送本机ip地址到指定邮箱.md",
              ]
            }
          ],
        },
        {
          text: " Vuepress",
          link: '/tools/Vuepress2',
          prefix: 'linux/',
          collapsable: true,
        }
      ],
    },
  ],
  '/blog/': [
    {
      text: '技术博客',
      link: '/blog/',
      // collapsable: true,
      children: [
        {
          text: '📱 Android',
          // link: '/blog/android',
          collapsable: true,
          prefix: 'android/',
          children: [
            'drawtext解析.md',
          ]
        },
        {
          text: '💻 计算机基础',
          link: '/blog/computer',
          collapsable: true,
          prefix: 'computer/',
          children: [
            '计算机中的Float是怎么存储的.md',
          ]
        },
        {
          text: '🖨 后端',
          link: '/blog/server',
          collapsable: true,
          children: [
            {
              text: 'Mybatis事务管理',
              link: '/blog/server/Mybatis事务管理.md'
            }
          ],
        },
        {
          text: '💾 数据库',
          link: '/blog/databases',
          collapsable: true,
          children: [
            {
              text: '关系型数据，非关系型数据库，文档型数据库',
              link: '/blog/databases/关系型数据，非关系型数据库，文档型数据库.md'
            }
          ]
        },
        {
          text: '🔧 Python',
          link: '/blog/python',
          collapsable: true,
          children: [
            {
              text: '操作excel数据',
              link: '/blog/python/python操作excel数据.md'
            },
            {
              text: '批量执行命令',
              link: '/blog/python/批量执行命令.md'
            }
          ]
        },
      ],
    },
  ],

  '/projects/': [
    {
      text: '📙 Reading',
      link: '/projects/reading/',
      children: [
        {
          text: '模块解析',
          link: '/projects/reading/模块解析.md'
        },
        {
          text: '脚本工具',
          link: '/projects/reading/脚本工具.md'
        },
        {
          text: '数据字典',
          link: '/projects/reading/数据字典.md'
        },
      ]
    }
  ],

  '/notes/': [
    {
      text: '🖋 随笔',
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
