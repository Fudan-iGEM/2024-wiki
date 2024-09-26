<template>
    <!-- 仅在桌面设备上显示动画 -->

      <!-- 这是 Unfold 的视差场景的重现 -->
      <div class="scrollDist"></div>
      <main>
        <svg
          viewBox="0 0 1920 953"
          width="100%"
          height="100%"
          preserveAspectRatio="xMinYMin meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="m">
            <g class="cloud1">
              <rect fill="#fff" width="100%" height="1801" y="953" />  
            </g>
          </mask>
  
          <image
            class="frame7"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/7.png"
          />
          <image
            class="carbo5"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/carbo5.png"
          />
          <image
            class="frame6"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/6.png"
          />
          <image
            class="carbo4"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/carbo4.png"
          />
          <image
            class="wave4"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/5-wave4.png"
          />
          <image
            class="carbo3"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/carbo3.png"
          />
          <image
            class="wave3"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/5-wave3.png"
          />
          <image
            class="frame4"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/4.png"
          />
          <image
            class="carbo2"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/carbo2.png"
          />
          <image
            class="wave2"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/3-wave2.png"
          />
          <image
            class="carbo1"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/carbo1.png"
          />
          <image
            class="wave1"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/3-wave1.png"
          />
          <image
            class="frame2"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/2.png"
          />
          <image
            class="frame1"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/1.png"
          />
          <image
            class="frame0"
            xlink:href="https://static.igem.wiki/teams/5115/homepage-section1/0.png"
          />
          <image
            class="title"
            xlink:href="https://static.igem.wiki/teams/5115/homepage/title.svg"
          />
  
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text x="350" y="200" fill="#162a43" class="title">Please wait.</text>
          </g>
        </svg>
        <section class="page-1" id="sky">
          <p>
            <strong>B</strong>iofilm <strong>H</strong>arnessing for
            <strong>O</strong>ffworld <strong>M</strong>ankind
            <strong>E</strong>stablishment
          </p>
        </section>
        <section class="page-2" id="land"></section>
        <section class="page-3" id="shallow-water"></section>
        <section class="page-4" id="deep-water"></section>
        <section class="page-5" id="summary"></section>
      </main>

  
    <!-- 在移动设备上显示替代内容 -->

  </template>
  

  <script>
  export default {
    data() {
      return {
        isDesktop: true
      };
    },
    async mounted() {
      this.checkDevice();
      window.addEventListener('resize', this.checkDevice);
  
      if (this.isDesktop) {
        // 动态导入 GSAP 和插件
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
  
        const gsap = gsapModule.default;
        const ScrollTrigger = ScrollTriggerModule.default;
  
        gsap.registerPlugin(ScrollTrigger);
        this.initAnimations(gsap);
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkDevice);
    },
    methods: {
      checkDevice() {
        this.isDesktop = window.innerWidth >= 1024;
      },
      initAnimations(gsap) {
        // 使用传入的 gsap 对象初始化动画
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.scrollDist',
            start: '0 0',
            end: '100% 100%',
            scrub: 1
          }
        });
  
        // 您的动画代码...
        tl.fromTo(
          ['.frame0', '.frame1', '.frame2'],
          { scale: 1, transformOrigin: 'center center' },
          { scale: 12, duration: 5, ease: 'power2.inOut' },
          0
        )
          .addLabel('afterScaling')
          .fromTo('.frame7', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
          // 继续添加其他动画
      }
    }
  };
  </script>
  
  
  

<style scoped>
.title {
  max-width: 70vw;
  max-height: 50vh;
  object-fit: contain;
  position: relative;
  z-index: 100;
}

body,
html {
  width: 100%;
  height: 100%;
  background: #111b29;
  font-family: 'Montserrat', sans-serif;
  font-size: 99px;
  text-align: center;
  margin: 0;
  padding: 0;
}

div {
  position: absolute;
}

main {
  position: fixed;
  background: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

svg {
  display: block;
  width: 100%;
  height: 100%;
}

svg image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.scrollDist {
  width: 100%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
}

/* 针对移动设备的样式调整 */
@media (max-width: 1367px) {
    .frame0{
        display: none;
    }
    .frame1{
        display: none;
    } 
    .frame2{
        display: none;
    }
  .carbo1{
    animation: float 6s ease-in-out infinite;
  }
  .carbo2{
    animation: float 4s ease-in-out infinite;
  }
  .carbo3{
    animation: float 5s ease-in-out infinite;
  }
  .carbo4{
    animation: float 5s ease-in-out infinite;
  }
  .carbo5{
    animation: float 3s ease-in-out infinite;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
}
}
</style>

