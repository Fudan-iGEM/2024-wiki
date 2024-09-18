<template>
    <div class="author-info">
      <template v-if="authorData.length > 0">
        <img
          class="personal-img"
          alt="Written by: "
        >
        <span
          v-for="(author, index) in authorData"
          :key="index"
          class="author-capsule"
        >
          <a
            v-if="author.url"
            :href="author.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ author.name }}
          </a>
          <span v-else>{{ author.name }}</span>
        </span>
      </template>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { usePageFrontmatter } from 'vuepress/client';
  
  const frontmatter = usePageFrontmatter();
  
  // Process the author data from frontmatter
  const authorData = computed(() => {
    const author = frontmatter.value.author;
  
    // Normalize author data to an array of objects with 'name' and 'url'
    if (!author) return [];
  
    if (typeof author === 'string') {
      return [{ name: author }];
    }
  
    if (Array.isArray(author)) {
      return author.map((item) =>
        typeof item === 'string' ? { name: item } : item
      );
    }
  
    if (typeof author === 'object') {
      return [author];
    }
  
    return [];
  });
  </script>
  
  <style scoped>
  .author-info {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  
  .author-capsule {
    background-color: #746a66; /* Gray background */
    color: #f2ecdb; /* White text */
    padding: 0.2em 0.8em;
    border-radius: 9999px; /* Rounded capsule shape */
    font-size: 2.5vw; /* Responsive font size */
    text-align: center;
  }
  
  .author-capsule a {
    color: inherit;
    text-decoration: none;
  }
  </style>
  