import { defineUserConfig } from "vuepress";
import * as path from 'path';
import { viteBundler } from '@vuepress/bundler-vite';
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

import theme from "./theme.js";

const footerPath = path.resolve(__dirname, './components/PageFooter.vue');
console.log('Resolved footer path:', footerPath);

export default defineUserConfig({
  base: "/fudan/",
  lang: "en-US",
  title: "Fudan",
  description: "Docs for vuepress-theme-hope",
  permalinkPattern:"/:slug/",
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    searchProPlugin({
      // index all contents
      indexContent: true
    }),
  ],
  theme,

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          // 指定 @theme-hope 组件的别名
          '@theme': path.resolve('node_modules/@vuepress/theme-default/lib/client/components'),
          "@theme-hope/components/Navbar": path.resolve(__dirname,"./components/Navbar.vue"),
          "@theme-hope/components/PageTitle": path.resolve(__dirname,"./components/PageTitle.vue"),
// 已经js引入 不需要重复 '@theme-hope/components/NormalPage': path.resolve(__dirname, './components/NormalPage.vue'),
// 已经js引入 不需要重复 '@theme-hope/components/PageFooter': path.resolve(__dirname, './components/PageFooter.vue'),
          '@theme-hope/modules/info/components/AuthorInfo': path.resolve(__dirname, './components/AuthorInfo.vue')
        },
      },
    },
    vuePluginOptions: {},
  }),
  // Enable it with pwa
  shouldPrefetch: false,
});
