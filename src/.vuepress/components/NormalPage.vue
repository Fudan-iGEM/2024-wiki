<template>
  <main id="main-content" class="vp-page">

    <TOC v-if="tocEnable" :header-depth="headerDepth" class="custom-toc" />

    <MarkdownContent />

    <PageNav />

    <SkipLink />

  </main>
</template>

<script setup>
import { computed } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';
import { useThemeLocaleData } from '@theme-hope/composables/index';
import MarkdownContent from '@theme-hope/components/MarkdownContent';
import PageNav from '@theme-hope/components/PageNav';
import SkipLink from '@theme-hope/components/SkipLink';

// import PageMeta from '@theme-hope/modules/info/components/PageMeta'; // THE META USER IS NOT AN INDICATION OF AUTHORSHIP 2024.9.18
import TOC from '@theme-hope/modules/info/components/TOC';

const frontmatter = usePageFrontmatter();
const themeLocale = useThemeLocaleData();

const tocEnable = computed(() => frontmatter.value.toc ?? themeLocale.value.toc ?? true);
const headerDepth = computed(() => frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2);
</script>

<style scoped>
/* .custom-toc {
  width: 300px; 
} */
 /* 原有样式保持不变 */
.vp-toc-header {
  padding: 0.5rem 1rem;
  font-weight: 600;
}

.vp-toc-wrapper {
  position: relative;
  overflow: hidden auto;
  height: 0;
  max-height: 8rem;
  margin: 0 0.5rem;
  padding-inline-start: 8px;
  /* 移除以下两行，让文本可以换行 */
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  scroll-behavior: smooth;
  transition: height 0.5s;
}

.vp-toc-list {
  position: relative;
  margin: 0;
  padding: 0;
}

.vp-toc-marker {
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  z-index: 2;
  display: none;
  width: 2px;
  height: 1.7rem;
  background: var(--theme-color);
  transition: top var(--transform-transition);
}

/* 针对屏幕宽度大于等于 1440px 的情况 */
@media (min-width: 1440px) {
  .vp-toc-header {
    padding-top: 0;
    font-size: 0.875rem;
  }

  .vp-toc-wrapper {
    /* 调整宽度 */
    width: 400px; /* 根据需要调整 */
    height: auto;
    max-height: 75vh;
    /* 允许文本换行 */
    white-space: normal;
    /* 移除省略号 */
    text-overflow: initial;
  } 

  .vp-toc-wrapper .toc-item {
    white-space: normal;
    overflow: visible;
    text-overflow: initial;
  }

  .vp-toc-wrapper .toc-item a {
    line-height: 1.5;
    padding: 0.25rem 1rem;
  }

  .vp-toc-marker {
    display: block;
  }
}
</style>
