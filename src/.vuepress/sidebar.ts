import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "Promotion Video",
      icon: "laptop-code",
      link: "/promotion-video",
      children: "structure",
    },
    {
      text: "Heritage",
      icon: "book",
      prefix: "/heritage",
      children: "structure",
    },
  ],
});
