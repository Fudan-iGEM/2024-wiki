<template>
    <div class="normal-page">
      <BreadCrumb />
      <MarkdownContent />
      <PageNav />
      <SkipLink />
    </div>
  </template>
  
  <script setup>
  import BreadCrumb from '@theme-hope/components/BreadCrumb';
  import MarkdownContent from '@theme-hope/components/MarkdownContent';
  import PageNav from '@theme-hope/components/PageNav';
  import SkipLink from '@theme-hope/components/SkipLink';
  import PageFooter from '@theme-hope/components/PageFooter';
  </script>
  
  <style scoped>
  /* Add any custom styles for NormalPage here */
  .normal-page {
    /* Add custom styles if necessary */
  }
  </style>
  