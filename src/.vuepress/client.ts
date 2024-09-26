import { defineClientConfig } from "vuepress/client";
import Layout from "./layouts/Layout.vue";
import HomeLayout from "./layouts/HomeLayout.vue";

export default defineClientConfig({
    layouts: { 
        Layout,
        HomeLayout
    }
});
  