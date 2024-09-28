<template>
  <!-- 固定定位的动画容器 -->
  <div class="animation-container">
    <svg
      viewBox="0 0 1920 953"
      width="100%"
      height="100%"
      :preserveAspectRatio="preserveAspectRatio"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="m">
        <g class="cloud1">
          <rect fill="#fff" width="100%" height="1801" y="953" />
        </g>
      </mask>

      <!-- SVG 图片元素 -->
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
        <rect fill="#CDE3EC" width="100%" height="100%" />
        <text x="350" y="200" fill="#162a43" class="title">I saw three ships on sailing in.</text>
      </g>
    </svg>
  </div>

  <!-- 可滚动的主内容区域 -->
  <main>
    <div class="scrollDist"></div>
    <!-- Page 1 -->
    <section class="page-1" id="sky">

      <!-- 背景图 -->
      <div class="background-container">
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section2/rail-mine-and-background.svg"
          alt="Background"
          class="background-image"
        />
        <!-- 左右云朵 -->
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section2/left-cloud.svg"
          alt="Left Cloud"
          class="left-cloud"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section2/right-cloud.svg"
          alt="Right Cloud"
          class="right-cloud"
        />

        <!-- 显示在背景图上的文字 -->
        <div class="overlay-text">
          <h1>Mile</h1>
          <p>Imaging a world</p>
        </div>
      </div>
    </section>
    <!-- Page 2 -->
    <section class="page-2" id="land">
      <div class="background-container">
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section3/background-section3-new.svg"
          alt="Background"
          class="background-image"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section3/building.svg"
          alt="Building"
          class="cbuilding"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section3/new-block.svg"
          alt="Block"
          class="block"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section3/rock.svg"
          alt="Rock"
          class="rock"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section3/vehicle.svg"
          alt="Vehicle"
          class="vehicle"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section3/light.svg"
          alt="Light"
          class="light"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section3/smoke.svg"
          alt="Smoke"
          class="smoke"
        />

        <!-- 显示在背景图上的文字 -->
        <div class="overlay-text">
          <h1>Page2</h1>
          <h2>This will be water</h2>
          <p>Static model will be presented here.</p>
        </div>
      </div>
    </section>
    <!-- 其他页面 -->
    <section class="page-3" id="shallow-water">
      <h1>Page3</h1>
    </section>
    <section class="page-4" id="deep-water">
      <h1>Page4</h1>
    </section>
    <section class="page-5" id="summary">
      <!-- 更多内容 -->
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      preserveAspectRatio: 'xMinYMin meet' // 初始值，屏幕宽度小于1180像素时使用
    };
  },
  methods: {
    updatePreserveAspectRatio() {
      if (window.innerWidth >= 1180) {
        this.preserveAspectRatio = 'xMidYMid slice';
      } else {
        this.preserveAspectRatio = 'xMinYMin meet';
      }
    },
    initPage1Animations(gsap) {
      // 检查屏幕宽度，小于900px时不执行动画
      if (window.innerWidth >= 900) {
        // 创建时间轴
        const page1Tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-1',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        });

        // 初始化云朵位置在屏幕外
        gsap.set('.left-cloud', { x: '10%' });
          gsap.set('.right-cloud', { x: '-25%' });
  
          page1Tl.to('.left-cloud', { x: '0%', duration: 2.5, ease: 'power2.out' }, 0);
          page1Tl.to('.right-cloud', { x: '0%', duration: 2.5, ease: 'power2.out' }, 0);
      } else {
        // 屏幕宽度小于900px，重置样式
        gsap.set('.left-cloud', { clearProps: 'all' });
        gsap.set('.right-cloud', { clearProps: 'all' });
      }
    },
    initPage2Animations(gsap) {
      // 检查屏幕宽度，小于900px时不执行动画
      if (window.innerWidth >= 900) {
        const page2Tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-2',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        });

        // .cbuilding 左右晃动后向下平移
        page2Tl.from('.cbuilding', { y: 0, duration: 2, ease: 'power1.out' })
          .to('.cbuilding', { rotation: 10, duration: 0.1, yoyo: true, repeat: 5, ease: 'power1.inOut' }, '-=1.5')
          .to('.cbuilding', { y: 200, duration: 1, yoyo: true, ease: 'power1.inOut' }, '-=1');
/*         page2Tl.from('.block', { y: 0, duration: 2, ease: 'power1.out' })
          .to('.block', { y: -100, duration: 1, yoyo: true, ease: 'power1.inOut' }, '-=2'); */
        // .light 和 .vehicle 一起从页面右上方移动到现在的位置
        page2Tl.from(['.light', '.vehicle'], { x: 300, y: -200, duration: 2, ease: 'power2.out' }, '0');

        // .light 的透明度快速从100%到0%两次
        page2Tl.to('.light', { opacity: 0, duration: 0.1, repeat: 3,  ease: 'power1.inOut' }, '>-0.5');

        // .smoke 从下到上渐变显现
        page2Tl.from('.smoke', { y: 100, opacity: 0, duration: 2, ease: 'power2.out' }, '-=1');
      } else {
        // 屏幕宽度小于900px，重置样式
        gsap.set('.cbuilding, .light, .vehicle, .smoke', { clearProps: 'all' });
      }
    }
  },
  async mounted() {
    // 初始检查屏幕宽度
    this.updatePreserveAspectRatio();
    // 监听窗口大小变化
    window.addEventListener('resize', this.updatePreserveAspectRatio);

    // 动态导入 GSAP 和插件
    const gsapModule = await import('gsap');
    const ScrollTriggerModule = await import('gsap/ScrollTrigger');

    const gsap = gsapModule.default;
    const ScrollTrigger = ScrollTriggerModule.default;

    gsap.registerPlugin(ScrollTrigger);

    // 初始化 Page 1 的动画
    this.initPage1Animations(gsap);

    // 初始化 Page 2 的动画
    this.initPage2Animations(gsap);

    // 创建浮动动画时间轴
    if (window.innerWidth >= 900) {
      const floatingTl = gsap.timeline({ repeat: -1, yoyo: true });
      floatingTl.to('.carbo1', { y: -20, duration: 3.6, ease: 'power1.inOut' }, 0);
      floatingTl.to('.carbo2', { y: -30, duration: 1.2, ease: 'power1.inOut' }, 0.2);
      floatingTl.to('.carbo3', { y: -30, duration: 0.6, ease: 'power1.inOut' }, 0.1);
      floatingTl.to('.carbo4', { y: -40, duration: 1.8, ease: 'power1.inOut' }, 0);
      floatingTl.to('.carbo5', { y: -50, duration: 0.3, ease: 'power1.inOut' }, 0);
      floatingTl.to('.title', { y: -20, duration: 3.6, ease: 'power1.inOut' }, 0);

      // 主滚动动画时间轴
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.scrollDist',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            if (self.progress > 0) {
              // 当滚动开始，暂停浮动动画
              floatingTl.pause();
            } else {
              // 当滚动返回顶部，恢复浮动动画
              floatingTl.resume();
            }
          }
        }
      });

      tl.fromTo(
        ['.frame0'],
        { scale: 1, transformOrigin: 'center center' },
        { scale: 18, duration: 4, ease: 'power2.inOut' },
        0
      );
      tl.fromTo(
        ['.frame1'],
        { scale: 1, transformOrigin: 'center center' },
        { scale: 15, duration: 5, ease: 'power2.inOut' },
        0
      );
      tl.fromTo(
        ['.frame2'],
        { scale: 1, transformOrigin: 'center center' },
        { scale: 11, duration: 6, ease: 'power2.inOut' },
        0
      );
      tl.fromTo(
        ['.carbo2', '.carbo3', '.carbo4', '.carbo5'],
        { scale: 1, transformOrigin: 'center center' },
        { scale: 1.4, duration: 5, ease: 'power2.inOut' },
        0
      );
      tl.fromTo(
        ['.title'],
        { scale: 0.6, transformOrigin: 'center center' },
        { scale: 1, duration: 5, ease: 'power2.inOut' },
        0
      );
      tl.fromTo(
        ['.carbo1'],
        { scale: 0.6, transformOrigin: 'center center' },
        { scale: 0.8, duration: 5, ease: 'power2.inOut' },
        0
      );
      tl.fromTo(
        ['.wave1', '.wave2', '.wave3', '.wave4', '.frame4'],
        { scale: 1, transformOrigin: 'center center' },
        { scale: 1.6, duration: 5, ease: 'power2.inOut' },
        0
      )
        .addLabel('afterScaling')
        .fromTo('.frame7', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
        .fromTo('.frame6', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
        .fromTo('.frame4', { y: 0 }, { y: -200, duration: 5 }, 'afterScaling')
        .fromTo('.wave1', { y: 0 }, { y: -600, duration: 5 }, 'afterScaling')
        .fromTo('.wave2', { y: 0 }, { y: -600, duration: 5 }, 'afterScaling')
        .fromTo('.wave3', { y: 0 }, { y: -600, duration: 5 }, 'afterScaling')
        .fromTo('.wave4', { y: 0 }, { y: -600, duration: 5 }, 'afterScaling')
        .fromTo('.cloud1', { y: 100 }, { y: -950, duration: 5 }, 'afterScaling')
        .fromTo('.carbo1', { y: 0 }, { y: -500, duration: 5 }, 'afterScaling')
        .fromTo('.carbo2', { y: 0 }, { y: -500, duration: 5 }, 'afterScaling')
        .fromTo('.carbo3', { y: 0 }, { y: -1000, duration: 5 }, 'afterScaling')
        .fromTo('.carbo4', { y: -30 }, { y: -250, duration: 5 }, 'afterScaling')
        .fromTo('.carbo5', { y: -50 }, { y: -600, duration: 5 }, 'afterScaling')
        .fromTo('.title', { y: -50 }, { y: -600, duration: 5 }, 'afterScaling');
    }
  },
  beforeDestroy() {
    // 移除事件监听器
    window.removeEventListener('resize', this.updatePreserveAspectRatio);
  }
};
</script>


<style scoped>
/* 通用样式 */
body,
html {
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-align: center;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* 防止横向滚动条 */
}

.animation-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  pointer-events: none; /* 防止动画层阻挡下面的内容交互 */
  z-index: 1;
  overflow: hidden;
}


main {
  position: relative;
  z-index: 2;
}

.scrollDist {
  width: 100%;
  height: 300vh; /* 根据需要调整滚动距离 */
}

svg {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

svg image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* section 样式 */
section {
  position: relative;
  padding: 0; /* 移除默认内边距 */
  margin: 0;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
}

/* 背景容器样式 */
.background-container {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: auto;
  display: block;
}

/* 云朵和其他元素的样式 */
.left-cloud,
.right-cloud,
.light,
.vehicle,
.block,
.cbuilding,
.rock,
.smoke {
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  left: 0;
}

/* 云朵位置 */
.left-cloud {
  left: 0;
}

.right-cloud {
  right: 0;
}

/* overlay-text 样式 */
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.overlay-text h1 {
  font-size: 3rem;
}

.overlay-text p {
  font-size: 1.5rem;
}

/* 移除 page-1 和 page-2 之间的间隙 */
.page-1,
.page-2 {
  margin: 0;
  padding: 0;
}

/* 针对移动设备的样式调整 */
@media (max-width: 900px) {
  .frame0,
  .frame1,
  .frame2 {
    display: none;
  }
  .left-cloud,
  .right-cloud,
  .light,
  .vehicle,
  .block,
  .cbuilding,
  .rock,
  .smoke {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
