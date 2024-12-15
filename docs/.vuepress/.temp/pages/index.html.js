import comp from "/home/ety001/workspace/test-publish/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"typescript-sdk-starter\",\"tagline\":\"从零开始搭建规范的 TypeScript SDK 项目\",\"actions\":[{\"text\":\"开始学习 Go\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"Github地址\",\"link\":\"https://github.com/nekobc1998923/typescript-sdk-starter\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Webpack构建\",\"details\":\"使用Webpack 做打包构建\"},{\"title\":\"代码风格规范\",\"details\":\"ESLint、Prettier、EditorConifg 做代码规范约束\"},{\"title\":\"提交规范\",\"details\":\"husky、Commitlint、lint-staged 做提交规范约束\"},{\"title\":\"单元测试\",\"details\":\"Jest 做单元测试\"},{\"title\":\"CI/CD\",\"details\":\"Github Actions 做自动化部署发布\"}],\"footer\":\"MIT Licensed | Copyright © 2021 菜猫子neko\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

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
