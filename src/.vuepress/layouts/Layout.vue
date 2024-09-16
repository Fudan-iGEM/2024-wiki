<template>
  <SkipLink />
  <CommonWrapper>
    <!-- Dynamic MP4 Header Video -->
    <div v-if="videoSrc" class="video-header" :key="videoSrc"> <!-- Added :key here -->
      <video autoplay muted loop playsinline :poster="videoPoster">
        <source :src="videoSrc" type="video/mp4" />
        您的浏览器不支持 HTML5 视频标签。
      </video>
      
      <!-- New Responsive Page Title -->
      <PageTitle />
      
      <div class="wave-divider">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,160 Q360,0 720,160 T1440,160 V320 H0 Z"
            fill="#f2ecdb"
          />
        </svg>
      </div>
    </div>
    <!-- Page Content -->
    <!--<AuthorInfo /> -->
    <NormalPage />
  </CommonWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';
import SkipLink from '@theme-hope/components/SkipLink';
import CommonWrapper from '@theme-hope/components/CommonWrapper';
import NormalPage from '@theme-hope/components/NormalPage'; // Import your new NormalPage component
import PageTitle from '@theme-hope/components/PageTitle'; // Use the newly created PageTitle component
// import AuthorInfo from '../components/AuthorInfo.vue';
const frontmatter = usePageFrontmatter();

// Get video source from frontmatter
const videoSrc = computed(() => frontmatter.value.headerVideo || null);

// Get video poster from frontmatter (optional)
const videoPoster = computed(() => frontmatter.value.headerVideoPoster || '');

// Watch for changes in videoSrc and reload video

</script>

<style scoped>
.video-header {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.video-header video {
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
