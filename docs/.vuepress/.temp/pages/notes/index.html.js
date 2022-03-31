export const data = {
  "key": "v-e8b6c472",
  "path": "/notes/",
  "title": "随笔",
  "lang": "zh-CN",
  "frontmatter": {
    "index": 1,
    "icon": "note",
    "title": "随笔",
    "author": "Leslie-D",
    "date": "2022-03-27T00:00:00.000Z",
    "star": true,
    "summary": "\" 自己的读书笔记，希望自己多看书\"",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/my-blog/notes/"
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
          "content": "随笔"
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
      ],
      [
        "meta",
        {
          "property": "article:author",
          "content": "Leslie-D"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-03-27T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.05,
    "words": 14
  },
  "filePathRelative": "notes/README.md"
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
