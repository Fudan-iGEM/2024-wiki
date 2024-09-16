import { defineClientConfig } from "vuepress/client";
import Layout from "./layouts/Layout.vue";
import PageFooter from "./components/PageFooter.vue";

export default defineClientConfig({
      layouts: {
      // EngineeringLayout,
      Layout,
    },  
    
  });
  