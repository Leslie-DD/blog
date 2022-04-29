export const themeData = {
  "blog": {
    "description": "一个软件工程师",
    "intro": "/intro.html",
    "medias": {
      "Baidu": "https://example.com",
      "Email": "https://example.com",
      "Gitee": "https://gitee.com",
      "GitHub": "https://github.com",
      "Weibo": "https://weibo.com/newlogin?tabtype=weibo&gid=102803&url=https%3A%2F%2Fweibo.com%2F",
      "Zhihu": "https://www.zhihu.com"
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$RsiD3cB7VWDyiYafFwzNGuYEP5sINw.EVt/f7kYyi6PfIdpoAVpbS"
      ]
    }
  },
  "pure": false,
  "iconPrefix": "iconfont icon-",
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {
        "description": "一个软件工程师",
        "intro": "/intro.html",
        "medias": {
          "Baidu": "https://example.com",
          "Email": "https://example.com",
          "Gitee": "https://gitee.com",
          "GitHub": "https://github.com",
          "Weibo": "https://weibo.com/newlogin?tabtype=weibo&gid=102803&url=https%3A%2F%2Fweibo.com%2F",
          "Zhihu": "https://www.zhihu.com"
        }
      },
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": {
        "": [],
        "home": [],
        "slide": [],
        "/guide/": [
          {
            "text": "如何使用",
            "icon": "creative",
            "children": [
              "disable.md",
              "encrypt.md"
            ]
          }
        ],
        "/about/": [
          {
            "text": "About",
            "children": [
              "/about/README.md"
            ]
          }
        ],
        "/tools/": [
          {
            "text": "🔖 常用技术",
            "link": "/tools/",
            "children": [
              "/tools/git_github_tips.md",
              {
                "text": "💻 Linux",
                "link": "/tools/linux",
                "prefix": "linux/",
                "collapsable": true,
                "children": [
                  "Linux配置JDK和Tomcat.md",
                  "Ubuntu和Centos8安装MySQL8.md",
                  "Ubuntu刷机报错.md"
                ]
              }
            ]
          }
        ],
        "/blog/": [
          {
            "text": "🛠 技术博客",
            "link": "/blog/",
            "children": [
              {
                "text": "💻 计算机基础",
                "link": "/blog/computer",
                "collapsable": true,
                "prefix": "computer/",
                "children": [
                  "计算机中的Float是怎么存储的.md"
                ]
              },
              {
                "text": "🖨 后端",
                "link": "/blog/server",
                "collapsable": true,
                "children": [
                  {
                    "text": "Mybatis事务管理",
                    "link": "/blog/server/Mybatis事务管理.md"
                  }
                ]
              },
              {
                "text": "💾 数据库",
                "link": "/blog/databases",
                "collapsable": true,
                "children": [
                  {
                    "text": "关系型数据，非关系型数据库，文档型数据库",
                    "link": "/blog/databases/关系型数据，非关系型数据库，文档型数据库.md"
                  }
                ]
              },
              {
                "text": "🔧 Python",
                "link": "/blog/python",
                "collapsable": true,
                "children": [
                  {
                    "text": "python操作excel数据",
                    "link": "/blog/python/python操作excel数据.md"
                  }
                ]
              }
            ]
          }
        ],
        "/projects/": [
          {
            "text": "Reading",
            "link": "/projects/reading/",
            "children": [
              {
                "text": "模块解析",
                "link": "/projects/reading/模块解析.md"
              },
              {
                "text": "项目脚本、工具",
                "link": "/projects/reading/项目脚本、工具.md"
              }
            ]
          }
        ],
        "/notes/": [
          {
            "text": "📝 随笔",
            "link": "/notes/",
            "children": [
              {
                "text": "三国随笔",
                "link": "/notes/三国随笔.md"
              },
              {
                "text": "张国荣与程蝶衣",
                "link": "/notes/张国荣与程蝶衣.md"
              }
            ]
          }
        ]
      },
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "Leslie",
        "url": "https://github.com/Leslie-DD?tab=repositories"
      },
      "logo": "/images/avatar.jpg",
      "repo": "https://github.com/Leslie-DD?tab=repositories",
      "docsDir": "demo/src",
      "navbar": [
        "/",
        {
          "text": "使用指南",
          "icon": "creative",
          "link": "/guide/"
        },
        {
          "text": "关于",
          "prefix": "/about/",
          "children": [
            {
              "text": "🏃About Me",
              "link": "README.md"
            }
          ]
        },
        {
          "text": "常用技术",
          "prefix": "/tools/",
          "children": [
            {
              "text": "Git & GitHub",
              "link": "git_github_tips.md"
            },
            {
              "text": "Linux",
              "link": "linux"
            }
          ]
        },
        {
          "text": "技术博客",
          "prefix": "/blog/",
          "children": [
            {
              "text": "计算机基础",
              "link": "computer"
            },
            {
              "text": "后端",
              "link": "server"
            },
            {
              "text": "数据库",
              "link": "databases"
            },
            {
              "text": "Python",
              "link": "python"
            }
          ]
        },
        {
          "text": "项目",
          "prefix": "/projects/",
          "children": [
            {
              "text": "Reading",
              "link": "reading/"
            }
          ]
        },
        {
          "text": "读书笔记",
          "link": "/notes/"
        }
      ],
      "footer": "北京｜Leslie",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "请输入密码",
        "errorHint": "请输入正确密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家"
      }
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
