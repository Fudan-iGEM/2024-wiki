<template>
  <main id="main-content" class="vp-page">
    <BreadCrumb />

    <TOC v-if="tocEnable" :header-depth="headerDepth" class="custom-toc" />

    <MarkdownContent />

    <PageNav />

    <SkipLink />

    <!-- THE FOLLOWING USER ID IS NOT AN INDICATION OF CREDIT OR AUTHORSHIP <PageMeta /> 2024.9.18 -->

  </main>
</template>

<script setup>
import { computed } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';
import { useThemeLocaleData } from '@theme-hope/composables/index';

import BreadCrumb from '@theme-hope/components/BreadCrumb';
import MarkdownContent from '@theme-hope/components/MarkdownContent';
import PageNav from '@theme-hope/components/PageNav';
import SkipLink from '@theme-hope/components/SkipLink';
import PageFooter from '@theme-hope/components/PageFooter';
import PageMeta from '@theme-hope/modules/info/components/PageMeta';
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
</style>
