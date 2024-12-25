import packageJson from "../../package.json" assert { type: "json" }

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  }),
  title: packageJson.name,
  description: packageJson.description,
  lang: 'en-US',
  locales: {
    '/': {
      lang: 'en-US',
      title: packageJson.name,
      description: packageJson.description,
    },
    '/zh/': {
      lang: 'zh-CN',
      title: packageJson.name,
      description: packageJson.description,
    },
  },
})
