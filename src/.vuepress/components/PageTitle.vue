<template>
  <div class="page-title-container">
    <h1 class="responsive-page-title">{{ title }}</h1>
    <AuthorInfo />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePageData } from 'vuepress/client';
import AuthorInfo from './AuthorInfo.vue';

const pageData = usePageData();

// Compute the page title
const title = computed(() => pageData.value.title);
</script>

<style scoped>
.page-title-container {
  position: absolute;
  bottom: calc(3vw); /* Adjusted default for general alignment */
  left: 24%; /* Approximately 1/6th of the page */
  transform: translateX(-30%); /* Center the text and author info */
  text-align: center;
  color: #57a0fe;
  z-index: 10;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 800;
}

.responsive-page-title {
  font-size: 8vw; /* Default font size for larger screens */
  margin-bottom: 0.4em; /* Space between the title and the author info */
  /* -webkit-text-stroke: 0.4vw #f2ecdb;  */
}

/* iPad Air: 820x1180 */
@media (max-width: 820px) and (min-height: 1180px) {
  .page-title-container {
    bottom: calc(2vw); /* Adjusted for iPad Air */
  }

  .responsive-page-title {
    font-size: 11vw; /* Scaled to 70% */
  }

  .author-info .author-capsule {
    font-size: 3.2vw; /* Adjust font size */
  }
}

/* iPad Mini: 768x1024 */
@media (max-width: 768px) and (min-height: 1024px) {
  .page-title-container {
    bottom: calc(2.1vw); /* Adjusted for iPad Mini */
  }

  .responsive-page-title {
    font-size: 11vw; /* Scaled to 75% */
  }

  .author-info .author-capsule {
    font-size: 3.4vw; /* Adjust font size */
  }
}

/* iPhone 14 Pro Max: 430x932 */
@media (max-width: 430px) {
  .page-title-container {
    bottom: calc(2vw); /* Adjusted for iPhone 14 Pro Max */
  }

  .responsive-page-title {
    font-size: 10vw; /* Scaled to 92% */
  }

  .author-info .author-capsule {
    font-size: 5vw !important;  /* Adjust font size */
  }
}

/* Additional adjustments for very small screens */
@media (max-width: 375px) {
  .page-title-container {
    bottom: calc(3vw); /* Adjusted for iPhone 14 Pro Max */
  }
  .responsive-page-title {
    font-size: 10vw;
  }

  .author-info .author-capsule {
    font-size: 4vw; /* Adjust font size for very small screens */
  }
}
</style>
