import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
// import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://2024.igem.wiki/fudan/",
  navbarTitle: "Fudan",
  favicon: "https://static.igem.wiki/teams/5115/czh/logo-czh.svg",
  home: "/",
  iconAssets: "fontawesome-with-brands",

  logo: "https://static.igem.wiki/teams/5115/czh/logo-czh.svg",

  repo: "https://gitlab.igem.org/2024/fudan.git",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar: false,
  /* footer : "", */
  displayFooter: false,
  copyright: false,
  breadcrumb: false,

  navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Search", "Outlook"],  // ,"Outlook"
      },
  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      katex: false,
      mathjax: true,
      footnote: true,
      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    /* pwa: true, */
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "https://static.igem.wiki/teams/5115/fonts/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "https://static.igem.wiki/teams/5115/fonts/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "https://static.igem.wiki/teams/5115/fonts/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "https://static.igem.wiki/teams/5115/fonts/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "https://static.igem.wiki/teams/5115/fonts/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "https://static.igem.wiki/teams/5115/fonts/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
},
{
  custom: true,
});
