<template>
  <!-- 固定定位的动画容器 -->
  <div class="animation-container">
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
        <rect fill="#CDE3EC" width="100%" height="100%" />
        <text x="350" y="200" fill="#162a43" class="title">123457</text>
      </g>
    </svg>
  </div>

  <!-- 可滚动的主内容区域 -->
  <main>
    <div class="scrollDist"></div>
    <section class="page-1" id="sky">
      <div class = "skypng"> </div>
      <p>
        <strong>B</strong>iofilm <strong>H</strong>arnessing for
        <strong>O</strong>ffworld <strong>M</strong>ankind
        <strong>E</strong>stablishment
      </p>
    </section>
    <section class="page-2" id="land">
      <!-- 您可以在这里添加更多内容 -->
      <h2>我们的项目</h2>
      <br><br><br><br><br><br><br><br><br><br><br>
      <p>这里是一些介绍文字。</p>
    </section>
    <section class="page-3" id="shallow-water">
      <!-- 更多内容 -->
       <h1>Page3</h1>
       <br><br><br><br>
    </section>
    <section class="page-4" id="deep-water">
      <!-- 更多内容 -->
       <h1>Page4</h1>
       <br><br><br><br><br><br><br><br><br><br><br>
    </section>
    <section class="page-5" id="summary">
      <!-- 更多内容 -->
    </section>
  </main>
</template>

<script>
export default {
  async mounted() {
    // 动态导入 GSAP 和插件
    const gsapModule = await import('gsap');
    const ScrollTriggerModule = await import('gsap/ScrollTrigger');

    const gsap = gsapModule.default;
    const ScrollTrigger = ScrollTriggerModule.default;

    gsap.registerPlugin(ScrollTrigger);

    // 创建浮动动画时间轴
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
      { scale: 18, duration: 5, ease: 'power2.inOut' },
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
      { scale: 11, duration: 5, ease: 'power2.inOut' },
      0
    );
    tl.fromTo(
      ['.title', '.carbo2', '.carbo3', '.carbo4'],
      { scale: 0.5, transformOrigin: 'center center' },
      { scale: 1, duration: 5, ease: 'power2.inOut' },
      0
    );
    tl.fromTo(
      ['.carbo2', '.carbo3', '.carbo4', '.carbo5'],
      { scale: 0.75, transformOrigin: 'center center' },
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
      { scale: 1.33, duration: 5, ease: 'power2.inOut' },
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
      .fromTo('.carbo3', { y: 0 }, { y: 0, duration: 5 }, 'afterScaling')
      .fromTo('.carbo4', { y: -30 }, { y: -250, duration: 5 }, 'afterScaling')
      .fromTo('.carbo5', { y: -50 }, { y: -600, duration: 5 }, 'afterScaling')
      .fromTo('.title', { y: -50 }, { y: -600, duration: 5 }, 'afterScaling');
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
overflow-x: hidden; /* 防止横向滚动条 */
}

.animation-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none; /* 防止动画层阻挡下面的内容交互 */
z-index: 1; /* 确保动画层在内容层之上 */
}

main {
position: relative;
z-index: 2; /* 确保内容层在动画层之下 */
}

.scrollDist {
width: 100%;
height: 500vh; /* 根据需要调整滚动距离 */
}

svg {
width: 100%;
height: 100%;
}

svg image {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

/* 您的其他样式 */
.section {
padding: 100px 20px;
min-height: 100vh;
}

/* 针对移动设备的样式调整 */
@media (max-width: 900px) {
.frame0 {
  display: none;
}
.frame1 {
  display: none;
}
.frame2 {
  display: none;
}
/* .carbo1 {
  animation: float 6s ease-in-out infinite;
}
.carbo2 {
  animation: float 4s ease-in-out infinite;
}
.carbo3 {
  animation: float 5s ease-in-out infinite;
}
.carbo4 {
  animation: float 5s ease-in-out infinite;
}
.carbo5 {
  animation: float 3s ease-in-out infinite;
} */
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
/* section2 */


</style>