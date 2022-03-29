export const themeData = {
  "blog": {
    "description": "一个前端开发者",
    "intro": "/intro.html",
    "medias": {
      "Baidu": "https://example.com",
      "Bitbucket": "https://example.com",
      "Dingding": "https://example.com",
      "Discord": "https://example.com",
      "Dribbble": "https://example.com",
      "Email": "https://example.com",
      "Evernote": "https://example.com",
      "Facebook": "https://example.com",
      "Flipboard": "https://example.com",
      "Gitee": "https://example.com",
      "GitHub": "https://example.com",
      "Gitlab": "https://example.com",
      "Gmail": "https://example.com",
      "Instagram": "https://example.com",
      "Lines": "https://example.com",
      "Linkedin": "https://example.com",
      "Pinterest": "https://example.com",
      "Pocket": "https://example.com",
      "QQ": "https://example.com",
      "Qzone": "https://example.com",
      "Reddit": "https://example.com",
      "Rss": "https://example.com",
      "Steam": "https://example.com",
      "Twitter": "https://example.com",
      "Wechat": "https://example.com",
      "Weibo": "https://example.com",
      "Whatsapp": "https://example.com",
      "Youtube": "https://example.com",
      "Zhihu": "https://example.com"
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$S8jy9MWZlk4L4BywJLjPKutMBf10wuwznvuNc/GQU5Tl9z9HulH8C"
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
        "description": "一个前端开发者",
        "intro": "/intro.html",
        "medias": {
          "Baidu": "https://example.com",
          "Bitbucket": "https://example.com",
          "Dingding": "https://example.com",
          "Discord": "https://example.com",
          "Dribbble": "https://example.com",
          "Email": "https://example.com",
          "Evernote": "https://example.com",
          "Facebook": "https://example.com",
          "Flipboard": "https://example.com",
          "Gitee": "https://example.com",
          "GitHub": "https://example.com",
          "Gitlab": "https://example.com",
          "Gmail": "https://example.com",
          "Instagram": "https://example.com",
          "Lines": "https://example.com",
          "Linkedin": "https://example.com",
          "Pinterest": "https://example.com",
          "Pocket": "https://example.com",
          "QQ": "https://example.com",
          "Qzone": "https://example.com",
          "Reddit": "https://example.com",
          "Rss": "https://example.com",
          "Steam": "https://example.com",
          "Twitter": "https://example.com",
          "Wechat": "https://example.com",
          "Weibo": "https://example.com",
          "Whatsapp": "https://example.com",
          "Youtube": "https://example.com",
          "Zhihu": "https://example.com"
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
        "/posts/": [
          {
            "text": "文章",
            "icon": "note",
            "children": [
              {
                "text": "文章 1-4",
                "icon": "note",
                "collapsable": true,
                "prefix": "article/",
                "children": [
                  "article1",
                  "article2",
                  "article3",
                  "article4"
                ]
              },
              {
                "text": "文章 5-12",
                "icon": "note",
                "children": [
                  {
                    "text": "文章 5-8",
                    "icon": "note",
                    "collapsable": true,
                    "prefix": "article/",
                    "children": [
                      "article5",
                      "article6",
                      "article7",
                      "article8"
                    ]
                  },
                  {
                    "text": "文章 9-12",
                    "icon": "note",
                    "children": [
                      "article9",
                      "article10",
                      "article11",
                      "article12"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "/about/": [
          {
            "text": "About",
            "children": [
              "/about/README.md",
              "/about/techstack.md",
              "/about/links.md",
              "/about/blog.md"
            ]
          }
        ],
        "/tools/": [
          {
            "text": "常用技术",
            "children": [
              "/tools/git_github_tips.md",
              {
                "text": "Linux",
                "prefix": "Linux/",
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
            "text": "技术博客",
            "link": "/blog/",
            "children": [
              {
                "text": "后端",
                "link": "/blog/server",
                "children": [
                  {
                    "text": "Mybatis事务管理",
                    "link": "/blog/server/Mybatis事务管理.md"
                  }
                ]
              },
              {
                "text": "数据库",
                "link": "/blog/databases",
                "children": [
                  {
                    "text": "关系型数据，非关系型数据库，文档型数据库",
                    "link": "/blog/databases/关系型数据，非关系型数据库，文档型数据库.md"
                  }
                ]
              },
              {
                "text": "Python",
                "link": "/blog/python",
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
            "text": "随笔",
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
        "name": "Mr.Hope",
        "url": "https://mrhope.site"
      },
      "logo": "/logo.svg",
      "repo": "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "navbar": [
        "/",
        "/home",
        {
          "text": "使用指南",
          "icon": "creative",
          "link": "/guide/"
        },
        {
          "text": "主题文档",
          "icon": "note",
          "link": "https://vuepress-theme-hope.github.io/v2/zh/"
        },
        {
          "text": "About",
          "prefix": "/about/",
          "children": [
            {
              "text": "About Me",
              "link": "README.md"
            },
            {
              "text": "⛏️ Technology Stack",
              "link": "techstack.md"
            },
            {
              "text": "🔗 Links",
              "link": "links.md"
            },
            {
              "text": "🗒️ About Blog",
              "link": "blog.md"
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
      "footer": "默认页脚",
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
