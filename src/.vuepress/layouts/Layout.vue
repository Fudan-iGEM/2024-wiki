<template>
  <Navbar />
  <CommonWrapper>
    <!-- 动态 GIF 头图 -->
    <div v-if="gifSrc" class="gif-header" :key="gifSrc">
      <!-- 显示 GIF 头图 -->
      <img :src="gifSrc" alt="Header GIF" />

      <!-- 页面标题 -->
      <PageTitle />

      <!-- 波浪分隔符 -->
      <div class="wave-divider">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,160 Q360,0 720,160 T1440,160 V320 H0 Z"
            class="wave-path"
          />
        </svg>
      </div>
    </div>
    <!-- 页面内容 -->
    <NormalPage />
 

  </CommonWrapper>
</template>
<script setup>
import { computed } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';
import CommonWrapper from '@theme-hope/components/CommonWrapper';

const frontmatter = usePageFrontmatter();

const gifSrc = computed(() => frontmatter.value.headergif || null);

</script>

<style scoped>
.gif-header {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.gif-header img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.wave-divider {
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 0;
}

.wave-divider svg {
  display: block;
  width: 100%;
  height: auto;
}
.wave-path {
  fill: #A9DEE8; /* light 模式下的颜色 */
}

/* dark 模式下的波浪颜色 */
html[data-theme="dark"] .wave-path {
  fill: #443c70; /* dark 模式下的颜色 */
}

</style>