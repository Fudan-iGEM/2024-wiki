<template>
  <div class="author-info-wrapper">
    <div class="author-info">
      <template v-if="authorData.length > 0">
        <div class="author-container">
          <span class="label">
            <AuthorIcon class="icon" v-bind="$attrs" />
            Written by:
          </span>
          <span class="author-capsule">
            <template v-for="(author, index) in authorData" :key="index">
              <a
                v-if="author.url"
                :href="author.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ author.name }}
              </a>
              <span v-else>{{ author.name }}</span>
              <span v-if="index < authorData.length - 1">, </span>
            </template>
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';
import { AuthorIcon } from "@theme-hope/modules/info/components/icons";

const frontmatter = usePageFrontmatter();

// Function to convert URL if needed
function convertUrl(url) {
  if (url && url.includes('/fudan/team/#')) {
    return url.replace('/fudan/team/#', '/fudan/team.html#');
  }
  return url;
}

// Process the author data from frontmatter
const authorData = computed(() => {
  const author = frontmatter.value.author;

  if (!author) return [];

  if (typeof author === 'string') {
    return [{ name: author }];
  }

  if (Array.isArray(author)) {
    return author.map((item) =>
      typeof item === 'string'
        ? { name: item }
        : { name: item.name, url: convertUrl(item.url) }
    );
  }

  if (typeof author === 'object') {
    return [{ name: author.name, url: convertUrl(author.url) }];
  }

  return [];
});
</script>

<style scoped>
.author-info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.author-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  font-family: "Dancing Script", "Lucida Handwriting", "Noto Serif SC", "Microsoft Yahei", "WenQuanYi Micro Hei", "ST Heiti", sans-serif;
  font-size: 1.8vw;
  margin-bottom: 0.5em;
  text-align: center;
  display: flex;
  align-items: center;
  color: #0790B8;
  font-weight: 400;
}

.icon {
  width: 1em;
  height: 1em;
  margin-right: 0.3em;
  color: #0790B8;
}

.author-capsule {
  font-family: "Courgette", "Brush Script MT", "Segoe Script", "Lucida Handwriting", "Apple Chancery", "Comic Sans MS", cursive;
  background-color: #0790B8;
  color: #ffffff;
  padding: 0em 0.8em;
  border-radius: 9999px;
  font-size: 2vw;
  text-align: center;
  font-style: italic;
}

.author-capsule a {
  color: inherit;
  text-decoration: none;
}

html[data-theme="dark"] .label {
  color: #8a9dcd;
}

html[data-theme="dark"] .icon {
  color: #8a9dcd;
}

html[data-theme="dark"] .author-capsule {
  background-color: #8a9dcd;
  color: #372a79;
}
</style>
