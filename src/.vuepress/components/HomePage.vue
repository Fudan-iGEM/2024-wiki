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
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
  
  export default {
    data() {
      return {
        isDesktop: true
      };
    },
    mounted() {
      this.checkDevice();
      window.addEventListener('resize', this.checkDevice);
  
      if (this.isDesktop) {
        // 初始化 GSAP 动画
        this.initAnimations();
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkDevice);
    },
    methods: {
      checkDevice() {
        this.isDesktop = window.innerWidth >= 1367;
      },
      initAnimations() {
        // 初始化 GSAP 时间轴，并添加缩放和滑动动画
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.scrollDist',
            start: '0 0',
            end: '100% 100%',
            scrub: 1
          }
        });
  
        // 增加缩放动画的持续时间到5秒
        tl.fromTo(
          ['.frame0', '.frame1', '.frame2'],
          { scale: 1, transformOrigin: 'center center' },
          { scale: 12, duration: 5, ease: 'power2.inOut' },
          0
        )
          .addLabel('afterScaling')
          .fromTo('.frame7', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
          .fromTo('.frame6', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
          .fromTo('.frame4', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
          .fromTo('.wave1', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
          .fromTo('.wave2', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
          .fromTo('.wave3', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
          .fromTo('.wave4', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
          .fromTo('.cloud1', { y: 100 }, { y: -800, duration: 5 }, 'afterScaling')
          .fromTo('.carbo1', { y: 0 }, { y: -500, duration: 5 }, 'afterScaling')
          .fromTo('.carbo2', { y: 0 }, { y: -500, duration: 5 }, 'afterScaling')
          .fromTo('.carbo3', { y: -100 }, { y: -100, duration: 5 }, 'afterScaling')
          .fromTo('.carbo4', { y: -30 }, { y: -250, duration: 5 }, 'afterScaling')
          .fromTo('.carbo5', { y: -50 }, { y: -600, duration: 5 }, 'afterScaling');
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

