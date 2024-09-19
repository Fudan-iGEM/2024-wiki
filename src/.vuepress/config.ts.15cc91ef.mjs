// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import * as path from "path";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  {
    text: "Project",
    children: [
      { text: "Contribution", link: "/contribution" },
      { text: "Description", link: "/description" },
      { text: "Design", link: "/design" },
      { text: "Engineering", link: "/engineering" },
      { text: "Experiments", link: "/experiments" },
      { text: "Hardware", link: "/hardware" },
      { text: "Implementation", link: "/implementation" },
      { text: "Measurement", link: "/measurement" },
      { text: "Model", link: "/model" },
      { text: "Notebook", link: "/notebook" },
      { text: "Software", link: "/software" },
      { text: "Results", link: "/results" }
    ],
    icon: "iconfont icon-project"
  },
  {
    text: "Parts",
    children: [
      { text: "Improved Parts", link: "/improve" },
      { text: "Part Collection", link: "/part-collection" },
      { text: "Registry", link: "https://parts.igem.org/cgi/partsdb/pgroup.cgi?pgroup=iGEM2024&group=Fudan" }
    ],
    icon: "iconfont icon-experiment"
  },
  {
    text: "Human Practices",
    children: [
      { text: "Education", link: "/education" },
      { text: "Entrepreneurship", link: "/entrepreneurship" },
      { text: "Inclusivity", link: "/inclusivity" },
      { text: "Integrated HP", link: "/human-practices" },
      { text: "Promotion Video", link: "/promotion-video" },
      { text: "Sustainable", link: "/sustainable" }
    ],
    icon: "iconfont icon-smile"
  },
  {
    text: "Safety",
    icon: "iconfont icon-safetycertificate",
    link: "/safety"
  },
  {
    text: "Team",
    children: [
      { text: "Attributions", link: "/attributions" },
      { text: "Collaborations", link: "/collaborations" },
      { text: "Heritage", link: "/heritage" },
      { text: "Members", link: "/team" }
    ],
    icon: "iconfont icon-team"
  }
]);

// src/.vuepress/theme.ts
var theme_default = hopeTheme(
  {
    hostname: "https://2024.igem.wiki/fudan/",
    navbarTitle: "Fudan",
    favicon: "https://static.igem.wiki/teams/5115/czh/logo-czh.svg",
    iconAssets: "fontawesome-with-brands",
    logo: "https://static.igem.wiki/teams/5115/czh/logo-czh.svg",
    repo: "https://gitlab.igem.org/2024/fudan.git",
    docsDir: "src",
    // navbar
    navbar: navbar_default,
    // sidebar
    sidebar: false,
    /* footer : "", */
    displayFooter: false,
    copyright: false,
    breadcrumb: false,
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Search"]
      // ,"Outlook"
    },
    plugins: {
      // Note: This is for testing ONLY!
      // You MUST generate and use your own comment service in production.
      // All features are enabled for demo, only preserve features you need here
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
                  content: "Recommended"
                };
            }
          }
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,
        katex: false,
        mathjax: true,
        footnote: true
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
      }
      // install @vuepress/plugin-pwa and uncomment these if you want a PWA
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    }
  },
  {
    custom: true
  }
);

// src/.vuepress/config.ts
var __vite_injected_original_dirname = "C:/Users/Hanoi/Desktop/Saomei/as/fudan/src/.vuepress";
var footerPath = path.resolve(__vite_injected_original_dirname, "./components/PageFooter.vue");
console.log("Resolved footer path:", footerPath);
var config_default = defineUserConfig({
  base: "/fudan/",
  lang: "en-US",
  title: "Fudan",
  description: "for vuepress-theme-hope",
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__vite_injected_original_dirname, "./components")
    }),
    searchProPlugin({
      // index all contents
      indexContent: true
    })
  ],
  theme: theme_default,
  alias: {
    // 指定 @theme-hope 组件的别名
    "@theme-hope/components/PageFooter": path.resolve(__vite_injected_original_dirname, "./components/PageFooter.vue"),
    "@theme-hope/components/Navbar": path.resolve(__vite_injected_original_dirname, "./components/Navbar.vue"),
    "@theme": path.resolve("node_modules/@vuepress/theme-default/lib/client/components"),
    "@theme-hope/components/PageTitle": path.resolve(__vite_injected_original_dirname, "./components/PageTitle.vue"),
    "@theme-hope/components/NormalPage": path.resolve(__vite_injected_original_dirname, "./components/NormalPage.vue"),
    "@theme-hope/modules/info/components/AuthorInfo": path.resolve(__vite_injected_original_dirname, "./components/AuthorInfo.vue")
  },
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Pacifico&display=swap",
        rel: "stylesheet"
      }
    ]
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL0hhbm9pL0Rlc2t0b3AvU2FvbWVpL2FzL2Z1ZGFuL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhhbm9pXFxcXERlc2t0b3BcXFxcU2FvbWVpXFxcXGFzXFxcXGZ1ZGFuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9IYW5vaS9EZXNrdG9wL1Nhb21laS9hcy9mdWRhbi9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB3ZWJwYWNrQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXdlYnBhY2snO1xuaW1wb3J0IHsgc2VhcmNoUHJvUGx1Z2luIH0gZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1zZWFyY2gtcHJvXCI7XG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1yZWdpc3Rlci1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5cbmNvbnN0IGZvb3RlclBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzL1BhZ2VGb290ZXIudnVlJyk7XG5jb25zb2xlLmxvZygnUmVzb2x2ZWQgZm9vdGVyIHBhdGg6JywgZm9vdGVyUGF0aCk7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvZnVkYW4vXCIsXG4gIGxhbmc6IFwiZW4tVVNcIixcbiAgdGl0bGU6IFwiRnVkYW5cIixcbiAgZGVzY3JpcHRpb246IFwiZm9yIHZ1ZXByZXNzLXRoZW1lLWhvcGVcIixcbiAgcGx1Z2luczogW1xuICAgIHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbih7XG4gICAgICBjb21wb25lbnRzRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vY29tcG9uZW50c1wiKSxcbiAgICB9KSxcbiAgICBzZWFyY2hQcm9QbHVnaW4oe1xuICAgICAgLy8gaW5kZXggYWxsIGNvbnRlbnRzXG4gICAgICBpbmRleENvbnRlbnQ6IHRydWVcbiAgICB9KSxcbiAgXSxcbiAgXG4gIHRoZW1lLFxuICBhbGlhczoge1xuICAgICAgICAgIC8vIFx1NjMwN1x1NUI5QSBAdGhlbWUtaG9wZSBcdTdFQzRcdTRFRjZcdTc2ODRcdTUyMkJcdTU0MERcbiAgICAgICAgICAnQHRoZW1lLWhvcGUvY29tcG9uZW50cy9QYWdlRm9vdGVyJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cy9QYWdlRm9vdGVyLnZ1ZScpLFxuICAgICAgICAgIFwiQHRoZW1lLWhvcGUvY29tcG9uZW50cy9OYXZiYXJcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4vY29tcG9uZW50cy9OYXZiYXIudnVlXCIpLFxuICAgICAgICAgICdAdGhlbWUnOiBwYXRoLnJlc29sdmUoJ25vZGVfbW9kdWxlcy9AdnVlcHJlc3MvdGhlbWUtZGVmYXVsdC9saWIvY2xpZW50L2NvbXBvbmVudHMnKSxcbiAgICAgICAgICBcIkB0aGVtZS1ob3BlL2NvbXBvbmVudHMvUGFnZVRpdGxlXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsXCIuL2NvbXBvbmVudHMvUGFnZVRpdGxlLnZ1ZVwiKSxcbiAgICAgICAgICAnQHRoZW1lLWhvcGUvY29tcG9uZW50cy9Ob3JtYWxQYWdlJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cy9Ob3JtYWxQYWdlLnZ1ZScpLFxuICAgICAgICAgICdAdGhlbWUtaG9wZS9tb2R1bGVzL2luZm8vY29tcG9uZW50cy9BdXRob3JJbmZvJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cy9BdXRob3JJbmZvLnZ1ZScpXG4gICAgICAgIH0sXG4gIGhlYWQ6IFtcbiAgICBbXCJsaW5rXCIsIHsgcmVsOiBcInByZWNvbm5lY3RcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgfV0sXG4gICAgW1xuICAgICAgXCJsaW5rXCIsXG4gICAgICB7IHJlbDogXCJwcmVjb25uZWN0XCIsIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiLCBjcm9zc29yaWdpbjogXCJcIiB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgXCJsaW5rXCIsXG4gICAgICB7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaW5vczppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIsXG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgXCJsaW5rXCIsXG4gICAgICB7XG4gICAgICAgIGhyZWY6XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZhcmVsYStSb3VuZCZkaXNwbGF5PXN3YXBcIixcbiAgICAgICAgcmVsOlwic3R5bGVzaGVldFwiLFxuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgXCJsaW5rXCIsXG4gICAgICB7XG4gICAgICAgIGhyZWY6XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcFwiLFxuICAgICAgICByZWw6XCJzdHlsZXNoZWV0XCIsXG4gICAgICB9XG4gICAgXSxcbiAgICBbXG4gICAgICBcImxpbmtcIixcbiAgICAgIHtcbiAgICAgICAgaHJlZjpcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA0MDAuLjcwMCZmYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwXCIsXG4gICAgICAgIHJlbDpcInN0eWxlc2hlZXRcIixcbiAgICAgIH1cbiAgICBdLFxuICBdLFxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcbiAgLy8gc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL0hhbm9pL0Rlc2t0b3AvU2FvbWVpL2FzL2Z1ZGFuL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhhbm9pXFxcXERlc2t0b3BcXFxcU2FvbWVpXFxcXGFzXFxcXGZ1ZGFuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hhbm9pL0Rlc2t0b3AvU2FvbWVpL2FzL2Z1ZGFuL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xuLy8gaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogXCJodHRwczovLzIwMjQuaWdlbS53aWtpL2Z1ZGFuL1wiLFxuICBuYXZiYXJUaXRsZTogXCJGdWRhblwiLFxuICBmYXZpY29uOiBcImh0dHBzOi8vc3RhdGljLmlnZW0ud2lraS90ZWFtcy81MTE1L2N6aC9sb2dvLWN6aC5zdmdcIixcblxuICBpY29uQXNzZXRzOiBcImZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzXCIsXG5cbiAgbG9nbzogXCJodHRwczovL3N0YXRpYy5pZ2VtLndpa2kvdGVhbXMvNTExNS9jemgvbG9nby1jemguc3ZnXCIsXG5cbiAgcmVwbzogXCJodHRwczovL2dpdGxhYi5pZ2VtLm9yZy8yMDI0L2Z1ZGFuLmdpdFwiLFxuXG4gIGRvY3NEaXI6IFwic3JjXCIsXG5cbiAgLy8gbmF2YmFyXG4gIG5hdmJhcixcblxuICAvLyBzaWRlYmFyXG4gIHNpZGViYXI6IGZhbHNlLFxuICAvKiBmb290ZXIgOiBcIlwiLCAqL1xuICBkaXNwbGF5Rm9vdGVyOiBmYWxzZSxcbiAgY29weXJpZ2h0OiBmYWxzZSxcbiAgYnJlYWRjcnVtYjogZmFsc2UsXG5cbiAgbmF2YmFyTGF5b3V0OiB7XG4gICAgICAgIHN0YXJ0OiBbXCJCcmFuZFwiXSxcbiAgICAgICAgY2VudGVyOiBbXCJMaW5rc1wiXSxcbiAgICAgICAgZW5kOiBbXCJTZWFyY2hcIl0sICAvLyAsXCJPdXRsb29rXCJcbiAgICAgIH0sXG4gIHBsdWdpbnM6IHtcbiAgICAvLyBOb3RlOiBUaGlzIGlzIGZvciB0ZXN0aW5nIE9OTFkhXG4gICAgLy8gWW91IE1VU1QgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2UgaW4gcHJvZHVjdGlvbi5cbiAgXG4gICAgLy8gQWxsIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudDogdHJ1ZSxcbiAgICAgIGRlbW86IHRydWUsXG4gICAgICBmaWd1cmU6IHRydWUsXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIGltZ1NpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAgbWFyazogdHJ1ZSxcbiAgICAgIHBsYW50dW1sOiB0cnVlLFxuICAgICAgc3BvaWxlcjogdHJ1ZSxcbiAgICAgIHN0eWxpemU6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoZXI6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc3ViOiB0cnVlLFxuICAgICAgc3VwOiB0cnVlLFxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIHRhc2tsaXN0OiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcbiAgICAgIGthdGV4OiBmYWxzZSxcbiAgICAgIG1hdGhqYXg6IHRydWUsXG4gICAgICBmb290bm90ZTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBjaGFydC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGNoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxuXG4gICAgICAvLyBpbnN0YWxsIGVjaGFydHMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIGZsb3djaGFydC50cyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcblxuICAgICAgLy8gZ2ZtIHJlcXVpcmVzIG1hdGhqYXgtZnVsbCB0byBwcm92aWRlIHRleCBzdXBwb3J0XG4gICAgICAvLyBnZm06IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwga2F0ZXggYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBrYXRleDogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBtYXRoamF4LWZ1bGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtYXRoamF4OiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIG1lcm1haWQgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtZXJtYWlkOiB0cnVlLFxuXG4gICAgICAvLyBwbGF5Z3JvdW5kOiB7XG4gICAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCByZXZlYWwuanMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyByZXZlYWxKczoge1xuICAgICAgLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCBAdnVlL3JlcGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIHNhbmRwYWNrLXZ1ZTMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBzYW5kcGFjazogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLy8gaW5zdGFsbCBAdnVlcHJlc3MvcGx1Z2luLXB3YSBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVJbWFnZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSxcbntcbiAgY3VzdG9tOiB0cnVlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL0hhbm9pL0Rlc2t0b3AvU2FvbWVpL2FzL2Z1ZGFuL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhhbm9pXFxcXERlc2t0b3BcXFxcU2FvbWVpXFxcXGFzXFxcXGZ1ZGFuXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9IYW5vaS9EZXNrdG9wL1Nhb21laS9hcy9mdWRhbi9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIHtcbiAgICB0ZXh0OiAnUHJvamVjdCcsY2hpbGRyZW46W1xuICAgICAgeyB0ZXh0OiAnQ29udHJpYnV0aW9uJywgbGluazogJy9jb250cmlidXRpb24nIH0sXG4gICAgICB7IHRleHQ6ICdEZXNjcmlwdGlvbicsIGxpbms6ICcvZGVzY3JpcHRpb24nIH0sXG4gICAgICB7IHRleHQ6ICdEZXNpZ24nLCBsaW5rOiAnL2Rlc2lnbicgfSxcbiAgICAgIHsgdGV4dDogJ0VuZ2luZWVyaW5nJywgbGluazogJy9lbmdpbmVlcmluZycgfSxcbiAgICAgIHsgdGV4dDogJ0V4cGVyaW1lbnRzJywgbGluazogJy9leHBlcmltZW50cycgfSxcbiAgICAgIHsgdGV4dDogJ0hhcmR3YXJlJywgbGluazogJy9oYXJkd2FyZScgfSxcbiAgICAgIHsgdGV4dDogJ0ltcGxlbWVudGF0aW9uJywgbGluazogJy9pbXBsZW1lbnRhdGlvbicgfSxcbiAgICAgIHsgdGV4dDogJ01lYXN1cmVtZW50JywgbGluazogJy9tZWFzdXJlbWVudCcgfSxcbiAgICAgIHsgdGV4dDogJ01vZGVsJywgbGluazogJy9tb2RlbCcgfSxcbiAgICAgIHsgdGV4dDogJ05vdGVib29rJywgbGluazogJy9ub3RlYm9vaycgfSxcbiAgICAgIHsgdGV4dDogJ1NvZnR3YXJlJywgbGluazogJy9zb2Z0d2FyZScgfSxcbiAgICAgIHsgdGV4dDogJ1Jlc3VsdHMnLCBsaW5rOiAnL3Jlc3VsdHMnIH0sXG4gICAgXSxcbiAgICBpY29uOiAnaWNvbmZvbnQgaWNvbi1wcm9qZWN0JyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdQYXJ0cycsY2hpbGRyZW46W1xuICAgICAgeyB0ZXh0OiAnSW1wcm92ZWQgUGFydHMnLCBsaW5rOiAnL2ltcHJvdmUnIH0sXG4gICAgICB7IHRleHQ6ICdQYXJ0IENvbGxlY3Rpb24nLCBsaW5rOiAnL3BhcnQtY29sbGVjdGlvbicgfSxcbiAgICAgIHsgdGV4dDogJ1JlZ2lzdHJ5JywgbGluazogJ2h0dHBzOi8vcGFydHMuaWdlbS5vcmcvY2dpL3BhcnRzZGIvcGdyb3VwLmNnaT9wZ3JvdXA9aUdFTTIwMjQmZ3JvdXA9RnVkYW4nIH0sXG4gICAgXSxcbiAgICBpY29uOiAnaWNvbmZvbnQgaWNvbi1leHBlcmltZW50JyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdIdW1hbiBQcmFjdGljZXMnLGNoaWxkcmVuOltcbiAgICAgIHsgdGV4dDogJ0VkdWNhdGlvbicsIGxpbms6ICcvZWR1Y2F0aW9uJyB9LFxuICAgICAgeyB0ZXh0OiAnRW50cmVwcmVuZXVyc2hpcCcsIGxpbms6ICcvZW50cmVwcmVuZXVyc2hpcCcgfSxcbiAgICAgIHsgdGV4dDogJ0luY2x1c2l2aXR5JywgbGluazogJy9pbmNsdXNpdml0eScgfSxcbiAgICAgIHsgdGV4dDogJ0ludGVncmF0ZWQgSFAnLCBsaW5rOiAnL2h1bWFuLXByYWN0aWNlcycgfSxcbiAgICAgIHsgdGV4dDogJ1Byb21vdGlvbiBWaWRlbycsIGxpbms6ICcvcHJvbW90aW9uLXZpZGVvJyB9LFxuICAgICAgeyB0ZXh0OiAnU3VzdGFpbmFibGUnLCBsaW5rOiAnL3N1c3RhaW5hYmxlJyB9LFxuICAgIF0sXG4gICAgaWNvbjogJ2ljb25mb250IGljb24tc21pbGUnLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1NhZmV0eScsXG4gICAgaWNvbjogJ2ljb25mb250IGljb24tc2FmZXR5Y2VydGlmaWNhdGUnLFxuICAgIGxpbms6ICcvc2FmZXR5JyxcbiAgfSxcbiAgeyB0ZXh0OiAnVGVhbScsIGNoaWxkcmVuOltcbiAgICAgIHsgdGV4dDogJ0F0dHJpYnV0aW9ucycsIGxpbms6ICcvYXR0cmlidXRpb25zJyB9LFxuICAgICAgeyB0ZXh0OiAnQ29sbGFib3JhdGlvbnMnLCBsaW5rOiAnL2NvbGxhYm9yYXRpb25zJyB9LFxuICAgICAgeyB0ZXh0OiAnSGVyaXRhZ2UnLCBsaW5rOiAnL2hlcml0YWdlJyB9LFxuICAgICAgeyB0ZXh0OiAnTWVtYmVycycsIGxpbms6ICcvdGVhbScgfSxcbiAgICBdLFxuICAgIGljb246ICdpY29uZm9udCBpY29uLXRlYW0nXG4gIH1cbl0sKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFUsU0FBUyx3QkFBd0I7QUFDL1csWUFBWSxVQUFVO0FBRXRCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsZ0NBQWdDOzs7QUNKbVMsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFclcsSUFBTyxpQkFBUSxPQUFPO0FBQUEsRUFDcEI7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUFVLFVBQVM7QUFBQSxNQUN2QixFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sZ0JBQWdCO0FBQUEsTUFDOUMsRUFBRSxNQUFNLGVBQWUsTUFBTSxlQUFlO0FBQUEsTUFDNUMsRUFBRSxNQUFNLFVBQVUsTUFBTSxVQUFVO0FBQUEsTUFDbEMsRUFBRSxNQUFNLGVBQWUsTUFBTSxlQUFlO0FBQUEsTUFDNUMsRUFBRSxNQUFNLGVBQWUsTUFBTSxlQUFlO0FBQUEsTUFDNUMsRUFBRSxNQUFNLFlBQVksTUFBTSxZQUFZO0FBQUEsTUFDdEMsRUFBRSxNQUFNLGtCQUFrQixNQUFNLGtCQUFrQjtBQUFBLE1BQ2xELEVBQUUsTUFBTSxlQUFlLE1BQU0sZUFBZTtBQUFBLE1BQzVDLEVBQUUsTUFBTSxTQUFTLE1BQU0sU0FBUztBQUFBLE1BQ2hDLEVBQUUsTUFBTSxZQUFZLE1BQU0sWUFBWTtBQUFBLE1BQ3RDLEVBQUUsTUFBTSxZQUFZLE1BQU0sWUFBWTtBQUFBLE1BQ3RDLEVBQUUsTUFBTSxXQUFXLE1BQU0sV0FBVztBQUFBLElBQ3RD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
