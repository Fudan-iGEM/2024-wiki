<template>
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
            fill="#f2ecdb"
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
import SkipLink from '@theme-hope/components/SkipLink';
import CommonWrapper from '@theme-hope/components/CommonWrapper';
import NormalPage from '../components/NormalPage';
import PageTitle from '../components/PageTitle';
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


</style>
