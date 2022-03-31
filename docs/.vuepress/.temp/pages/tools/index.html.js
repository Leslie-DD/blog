export const data = {
  "key": "v-d440f426",
  "path": "/tools/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "\" 环境配置等文档\"",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/my-blog/tools/"
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
  "headers": [],
  "readingTime": {
    "minutes": 0.02,
    "words": 7
  },
  "filePathRelative": "tools/README.md"
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
