export const data = {
  "key": "v-5678923c",
  "path": "/tools/Linux/Linux%E9%85%8D%E7%BD%AEJDK%E5%92%8CTomcat.html",
  "title": "Linux配置JDK和Tomcat",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false,
    "comment": false,
    "summary": "Linux配置JDK和Tomcat 一、安装JDK 1. 下载JDK 根据自己ubuntu系统选择jdk-8u271-linux-x64.tar.gz 我电脑Windows 64位系统，我下载到了本地 2. 用scp命令在cmd中上传到linux服务器的新建的/usr/java/文件夹 xxxxx是登录服务器的用户名，xx.xx.xx.xx是服务器地址 3.",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/my-blog/tools/Linux/Linux%E9%85%8D%E7%BD%AEJDK%E5%92%8CTomcat.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "Leslie's Blog"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Linux配置JDK和Tomcat"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、安装JDK",
      "slug": "一、安装jdk",
      "children": [
        {
          "level": 3,
          "title": "1. 下载JDK",
          "slug": "_1-下载jdk",
          "children": []
        },
        {
          "level": 3,
          "title": "2. 用scp命令在cmd中上传到linux服务器的新建的/usr/java/文件夹",
          "slug": "_2-用scp命令在cmd中上传到linux服务器的新建的-usr-java-文件夹",
          "children": []
        },
        {
          "level": 3,
          "title": "3. 进到服务器/usr/java/文件夹下解压",
          "slug": "_3-进到服务器-usr-java-文件夹下解压",
          "children": []
        },
        {
          "level": 3,
          "title": "4. 配置环境",
          "slug": "_4-配置环境",
          "children": []
        },
        {
          "level": 3,
          "title": "5. 查看java版本信息",
          "slug": "_5-查看java版本信息",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、安装tomcat7",
      "slug": "二、安装tomcat7",
      "children": [
        {
          "level": 3,
          "title": "1. 下载tomcat7",
          "slug": "_1-下载tomcat7",
          "children": []
        },
        {
          "level": 3,
          "title": "2. 到linux服务器usr/java文件夹下解压",
          "slug": "_2-到linux服务器usr-java文件夹下解压",
          "children": []
        },
        {
          "level": 3,
          "title": "3. 重命名个简单的文件夹名",
          "slug": "_3-重命名个简单的文件夹名",
          "children": []
        },
        {
          "level": 3,
          "title": "4. 赋权限",
          "slug": "_4-赋权限",
          "children": []
        },
        {
          "level": 3,
          "title": "5. 修改启动脚本",
          "slug": "_5-修改启动脚本",
          "children": []
        },
        {
          "level": 3,
          "title": "6. 启动服务",
          "slug": "_6-启动服务",
          "children": []
        },
        {
          "level": 3,
          "title": "7. 在浏览器输入你的（服务器ip地址:端口号）（xx.xx.xx.xx:8080)显示Tomcat信息说明启动成功",
          "slug": "_7-在浏览器输入你的-服务器ip地址-端口号-xx-xx-xx-xx-8080-显示tomcat信息说明启动成功",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 1.48,
    "words": 443
  },
  "filePathRelative": "tools/Linux/Linux配置JDK和Tomcat.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
