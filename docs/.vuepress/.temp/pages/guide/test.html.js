export const data = {
  "key": "v-5da2181b",
  "path": "/guide/test.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "<!-- @Author: your name; @Date: 2022-03-31 22:55:03; @LastEditTime: 2022-03-31 22:55:03; @LastEditors: Please set LastEditors; @Description: 打开koroFileHeader查看配置 进行设置: https://gith",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/my-blog/guide/test.html"
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
    "minutes": 0.16,
    "words": 49
  },
  "filePathRelative": "guide/test.md"
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
