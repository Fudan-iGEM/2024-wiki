<template>
  <div class="author-info-wrapper"> <!-- 添加包裹容器 -->
    <div class="author-info">
      <template v-if="authorData.length > 0">
        <!-- Container for icon, "Written by", and authors -->
        <div class="author-container">
          <!-- Icon and "Written by" label -->
          <span class="label" >
            <!-- 将 $attrs 传递给 AuthorIcon -->
            <AuthorIcon class="icon" v-bind="$attrs" />
            Written by:
          </span>
          <!-- Authors capsules -->
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
              <!-- Add comma except for the last author -->
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
import { AuthorIcon } from "@theme-hope/modules/info/components/icons"; // 导入 AuthorIcon

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
.author-info-wrapper {
  display: flex;
  flex-direction: column; /* Arrange items in a column */
  align-items: center; /* Center the content horizontally */
}

.author-info {
  display: flex;
  flex-direction: column; /* Arrange items in a column */
  align-items: center; /* Center the content horizontally */
}

.label {
  font-family: "Lucida Handwriting", "Noto Serif SC", "Microsoft Yahei", "WenQuanYi Micro Hei", "ST Heiti", sans-serif;
  font-size: 1.8vw; /* Increase the font size */
  margin-bottom: 0.5em; /* Add space below the label */
  text-align: center; /* Center align the label text */
  display: flex; /* Use flex to align icon and text */
  align-items: center; /* Center the items vertically */
  color: #0790B8;
  font-weight: 400;
}

.icon {
  width: 1em; /* Set the width of the icon */
  height: 1em; /* Set the height of the icon */
  margin-right: 0.3em; /* Add some space between the icon and text */
  color: #0790B8;
}

.author-capsule {
  font-family: "Brush Script MT", "Segoe Script", "Lucida Handwriting", "Apple Chancery", "Comic Sans MS", cursive;
  background-color: #0790B8 ; /* Gray background */
  color: #ffffff; /* White text */
  padding: 0.2em 0.8em;
  border-radius: 9999px; /* Rounded capsule shape */
  font-size: 2vw; /* Responsive font size */
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
html[data-theme="dark"] .author-capsule{
  background-color:#8a9dcd;
  color: #372a79;
}
</style>
