export const data = {
  "key": "v-53a3c72e",
  "path": "/blog/computer/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B8%AD%E7%9A%84Float%E6%98%AF%E6%80%8E%E4%B9%88%E5%AD%98%E5%82%A8%E7%9A%84.html",
  "title": "计算机中的Float是怎么存储的",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "Leslie-D",
    "editLink": false,
    "comment": false,
    "date": "2022-03-31T00:00:00.000Z",
    "summary": "计算机中的Float是怎么存储的 组成 单精度float占32位，这32位分成三部分： 符号位S占1位; 指数E占8位; 尾数M占23位; 举个🌰 这里不写表达式，直接举个🌰来理解 1、 十进制转二进制 比如25.125，转化成二进制为11001.001 2. 取尾数 这里用到了移位处理 将11001.001左移四位变为x.xxxxxxx的格式，即1.1",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/my-blog/blog/computer/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B8%AD%E7%9A%84Float%E6%98%AF%E6%80%8E%E4%B9%88%E5%AD%98%E5%82%A8%E7%9A%84.html"
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
          "content": "计算机中的Float是怎么存储的"
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
          "content": "2022-03-31T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "组成",
      "slug": "组成",
      "children": []
    },
    {
      "level": 2,
      "title": "举个🌰",
      "slug": "举个🌰",
      "children": [
        {
          "level": 3,
          "title": "1、 十进制转二进制",
          "slug": "_1、-十进制转二进制",
          "children": []
        },
        {
          "level": 3,
          "title": "2. 取尾数",
          "slug": "_2-取尾数",
          "children": []
        },
        {
          "level": 3,
          "title": "3. 求指数",
          "slug": "_3-求指数",
          "children": []
        },
        {
          "level": 3,
          "title": "4. 拼凑",
          "slug": "_4-拼凑",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "单精度 & 双精度",
      "slug": "单精度-双精度",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.33,
    "words": 398
  },
  "filePathRelative": "blog/computer/计算机中的Float是怎么存储的.md"
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
