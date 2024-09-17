import { defineUserConfig } from "vuepress";
import * as path from 'path';
import { webpackBundler } from '@vuepress/bundler-webpack';

import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

import theme from "./theme.js";


const footerPath = path.resolve(__dirname, './components/PageFooter.vue');
console.log('Resolved footer path:', footerPath);
export default defineUserConfig({
  base: "/fudan/",
  lang: "en-US",
  title: "Fudan",
  description: "for vuepress-theme-hope",
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    /*     searchProPlugin({
      // index all contents
      indexContent: true
    }), */
  ],
  
  theme,
  alias: {
          // 指定 @theme-hope 组件的别名
          '@theme-hope/components/PageFooter': path.resolve(__dirname, './components/PageFooter.vue'),
          "@theme-hope/components/Navbar": path.resolve(__dirname,"./components/Navbar.vue"),
          '@theme': path.resolve('node_modules/@vuepress/theme-default/lib/client/components'),
          "@theme-hope/components/PageTitle": path.resolve(__dirname,"./components/PageTitle.vue"),
          '@theme-hope/components/NormalPage': path.resolve(__dirname, './components/NormalPage.vue'),
          '@theme-hope/modules/info/components/AuthorInfo': path.resolve(__dirname, './components/AuthorInfo.vue')
        },
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
