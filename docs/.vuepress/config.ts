import packageJson from "../../package.json" assert { type: "json" }

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  title: packageJson.name,
  description: packageJson.description,
})
