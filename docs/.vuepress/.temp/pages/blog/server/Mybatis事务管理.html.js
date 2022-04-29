export const data = {
  "key": "v-cff3b8f4",
  "path": "/blog/server/Mybatis%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86.html",
  "title": "Mybatis 事务",
  "lang": "zh-CN",
  "frontmatter": {
    "editLink": false,
    "comment": false,
    "summary": "Mybatis 事务 一个使用 MyBatis-Spring 的其中一个主要原因是它允许 MyBatis 参与到 Spring 的事务管理中。而不是给 MyBatis 创建一个新的专用事务管理器，MyBatis-Spring 借助了 Spring 中的 DataSourceTransactionManager 来实现事务管理。 一旦配置好了 Spring 的",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/my-blog/blog/server/Mybatis%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86.html"
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
          "content": "Mybatis 事务"
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
      "title": "标准配置",
      "slug": "标准配置",
      "children": []
    },
    {
      "level": 2,
      "title": "交由容器管理事务",
      "slug": "交由容器管理事务",
      "children": []
    },
    {
      "level": 2,
      "title": "编程式事务管理",
      "slug": "编程式事务管理",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.15,
    "words": 946
  },
  "filePathRelative": "blog/server/Mybatis事务管理.md"
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
