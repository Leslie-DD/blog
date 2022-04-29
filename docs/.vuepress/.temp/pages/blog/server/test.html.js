export const data = {
  "key": "v-cc773da2",
  "path": "/blog/server/test.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "<!-- @Author: your name; @Date: 2022-03-31 22:53:17; @LastEditTime: 2022-03-31 22:53:18; @LastEditors: Please set LastEditors; @Description: 打开koroFileHeader查看配置 进行设置: https://gith",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/my-blog/blog/server/test.html"
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
    "minutes": 0.17,
    "words": 50
  },
  "filePathRelative": "blog/server/test.md"
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
