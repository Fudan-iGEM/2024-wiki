<template>
    <div class="homepage-section">
        <img v-for="(bg, index) in backgroundImages" 
         :key="index"
         :src="bg.url"
         :class="`bg-layer layer-${index}`"
         alt="Background Image" />
         <img
      v-if="showImage"
      :src="imageUrl"
      alt="Title Image"
      class="hero-image"
    />
    </div>

    <section class="page-1" id="sky">
        <img
        v-if="showImage"
        :src="imageUrl"
        alt="Title Image"
        class="hero-image"
      />
    </section>
    <section class="page-2" id="land">

    </section>
    <section class="page-3" id="shallow-water">

    </section>
    <section class="page-4" id="deep-water">

    </section>
    <section class="page-5" id="summary">

    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showImage: true,
        imageUrl: "https://static.igem.wiki/teams/5115/homepage/title.svg",
        backgroundImages: [
        /* { url: "https://static.igem.wiki/teams/5115/homepage/7.svg" }, */
        { url: "https://static.igem.wiki/teams/5115/homepage/6.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/5-wave4.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/5-wave3.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/carbo1.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/4.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/carbo2.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/2.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/3-wave2.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/3-wave1.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/carbo3.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/1.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/carbo4.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/0.svg" },
        { url: "https://static.igem.wiki/teams/5115/homepage/carbo5.svg" },
      ],
      };
    },
  };
  </script>
  
  <style scoped>
.hero-image {
  max-height: 850px;
  margin: 6rem auto 1.5rem;
  display: block;
  position: relative;
  z-index: 100; /* 确保主图像在所有背景图层之上 */
}

  .homepage-section {
  position: relative;
  width: 100%;
  height: 100vh; /* 使 section 占据整个屏幕高度 */
  overflow: hidden;
  background-color: #FAECDC;
}
.bg-layer {
  position: absolute;
  width: 100%; /* 或根据需要调整宽度 */
  height: auto; /* 保持图像比例 */
  top: 0;
  left: 0;
  z-index: -1; /* 确保背景图像位于主内容后面 */
}
.layer-0 {
  z-index: 1;
}
.layer-1 {
  z-index: 2;
}
.layer-2 {
  z-index: 3;
}
  </style>
  