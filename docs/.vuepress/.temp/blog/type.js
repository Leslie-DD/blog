export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4eaf9f84","v-53a3c72e","v-e8b6c472","v-5b1e857f","v-434f8f34","v-ae080bf2","v-0e503981","v-fffb8e28","v-4c863446","v-bf720700","v-0978b044","v-74bc627b","v-145ac574","v-43c7d01c","v-32634b15","v-d440f426","v-13208180","v-74979d6a","v-426b45c1","v-cff3b8f4","v-0239a958","v-f4844a42","v-5a8198ab","v-1fe2733f","v-5678923c","v-df8f4bf0","v-27eab426","v-3ffeb8ec","v-563bdebe"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-bf720700"]}},"slide":{"/":{"path":"/slides/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":["v-4eaf9f84","v-e8b6c472","v-5b1e857f"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-53a3c72e","v-e8b6c472","v-5b1e857f","v-434f8f34","v-ae080bf2","v-4eaf9f84"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
