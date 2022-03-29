export const data = {
  "key": "v-5a468348",
  "path": "/about/blog.html",
  "title": "🗒️ About Blog",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "🗒️ About Blog Page Author 🦆 Mr Dk. @mrdrivingduck Version 🛠️ Build version: 1.2022.03 Branch Status Branch Status ----------------- ---------------------------------------------",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/about/blog.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "主题演示"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "🗒️ About Blog"
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
      "title": "Page Author",
      "slug": "page-author",
      "children": []
    },
    {
      "level": 2,
      "title": "Version",
      "slug": "version",
      "children": []
    },
    {
      "level": 2,
      "title": "Branch Status",
      "slug": "branch-status",
      "children": []
    },
    {
      "level": 2,
      "title": "Supported By",
      "slug": "supported-by",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.48,
    "words": 145
  },
  "filePathRelative": "about/blog.md"
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
