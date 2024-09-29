<template>
  <!-- Fixed animation container -->
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

      <!-- SVG image elements -->
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

  <!-- Scrollable main content area -->
  <main>
    <div class="scrollDist"></div>
    <!-- Page 1 -->
    <section class="page-1" id="sky">
      <!-- Background image -->
      <div class="background-container">
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section2/rail-mine-and-background.svg"
          alt="Background"
          class="background-image"
        />
        <!-- Left and right clouds -->
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

        <!-- Text over background image -->
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

        <!-- Text over background image -->
        <div class="overlay-text">
          <h1>Page2</h1>
          <p>Static model will be presented here.</p>
        </div>
      </div>
    </section>
    <!-- Page 3 -->
    <section class="page-3" id="shallow-water">
      <div class="background-container">
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section-water/short-dead-fish-and-city.svg"
          alt="Background"
          class="background-image"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section-water/new-new-dead-fish-and-city.svg"
          alt="Fish"
          class="fish"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section-water/short-gray-water-block.svg"
          alt="Greyblock"
          class="greyblock"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section-water/short-water-tube.svg"
          alt="Tube"
          class="tube"
        />
        <!-- Tear animation SVG -->
        <svg
          viewBox="0 0 1920 2000"
          xmlns="http://www.w3.org/2000/svg"
          class="tear-svg"
        >
          <circle
            id="blueDot"
            cx="681.7"
            cy="226.4"
            r="10"
            fill="#e2f5f8"
            opacity="0.9"
          />
          <path
            id="path"
            fill="none"
            stroke="transparent"
            d="
            M 681.7 226.4
            Q 660 292 605.3 357.9
            L 632.2 440.7
            L 632.2 652.7"
          />
        </svg>
      </div>
    </section>
    <!-- Other pages -->
    <section class="page-4" id="deep-water">
      
      <h1>Page4</h1>
    </section>
    <section class="page-5" id="summary">
      <!-- More content -->
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      preserveAspectRatio: 'xMinYMin meet', // Initial value for screens narrower than 1180px
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
      if (window.innerWidth >= 900) {
        const page1Tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-1',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });

        // Initialize cloud positions
        gsap.set('.left-cloud', { x: '10%' });
        gsap.set('.right-cloud', { x: '-25%' });

        page1Tl.to('.left-cloud', { x: '0%', duration: 2.5, ease: 'power2.out' }, 0);
        page1Tl.to('.right-cloud', { x: '0%', duration: 2.5, ease: 'power2.out' }, 0);
      } else {
        gsap.set('.left-cloud', { clearProps: 'all' });
        gsap.set('.right-cloud', { clearProps: 'all' });
      }
    },
    initPage2Animations(gsap) {
      if (window.innerWidth >= 900) {
        const page2Tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-2',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });

        // .cbuilding sway and move down
        page2Tl.from('.cbuilding', { y: 0, duration: 2, ease: 'power1.out' })
          .to('.cbuilding', { rotation: 10, duration: 0.1, yoyo: true, repeat: 5, ease: 'power1.inOut' }, '-=1.5')
          .to('.cbuilding', { y: 200, duration: 1, yoyo: true, ease: 'power1.inOut' }, '-=1');

        // .light and .vehicle move in together
        page2Tl.from(['.light', '.vehicle'], { x: 300, y: -200, duration: 2, ease: 'power2.out' }, '0');

        // .light flashes
        page2Tl.to('.light', { opacity: 0, duration: 0.1, repeat: 3, ease: 'power1.inOut' }, '>-0.5');

        // .smoke appears from bottom to top
        page2Tl.from('.smoke', { y: 100, opacity: 0, duration: 2, ease: 'power2.out' }, '-=1');
      } else {
        gsap.set('.cbuilding, .light, .vehicle, .smoke', { clearProps: 'all' });
      }
    },
    initPage3Animations(gsap) {
      if (window.innerWidth >= 900) {
        const page3Tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-3',
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
        });

        // Animate the 'tear' along the path
        page3Tl.to('#blueDot', {
          duration: 1,
          ease: 'power1.inOut',
          motionPath: {
            path: '#path',
            align: '#path',
            autoRotate: false,
          },
          onUpdate: function () {
            const progress = this.progress();
            const color = gsap.utils.interpolate(['#e2f5f8', '#e4e9d5', '#7d8e95'], progress);
            gsap.set('#blueDot', { fill: color, opacity: 0.9 });
          },
        });
      } else {
        // Hide the 'tear' SVG on mobile devices
        gsap.set('.tear-svg', { display: 'none' });
      }
    },
  },
  async mounted() {
    // Initial screen width check
    this.updatePreserveAspectRatio();
    // Listen for window resize events
    window.addEventListener('resize', this.updatePreserveAspectRatio);

    // Dynamically import GSAP and plugins
    const gsapModule = await import('gsap');
    const ScrollTriggerModule = await import('gsap/ScrollTrigger');
    const MotionPathPluginModule = await import('gsap/MotionPathPlugin');

    const gsap = gsapModule.default;
    const ScrollTrigger = ScrollTriggerModule.default;
    const MotionPathPlugin = MotionPathPluginModule.default;

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Initialize animations
    this.initPage1Animations(gsap);
    this.initPage2Animations(gsap);
    this.initPage3Animations(gsap);

    // Create floating animation timeline
    if (window.innerWidth >= 900) {
      const floatingTl = gsap.timeline({ repeat: -1, yoyo: true });
      floatingTl.to('.carbo1', { y: -20, duration: 3.6, ease: 'power1.inOut' }, 0);
      floatingTl.to('.carbo2', { y: -30, duration: 1.2, ease: 'power1.inOut' }, 0.2);
      floatingTl.to('.carbo3', { y: -30, duration: 0.6, ease: 'power1.inOut' }, 0.1);
      floatingTl.to('.carbo4', { y: -40, duration: 1.8, ease: 'power1.inOut' }, 0);
      floatingTl.to('.carbo5', { y: -50, duration: 0.3, ease: 'power1.inOut' }, 0);
      floatingTl.to('.title', { y: -20, duration: 3.6, ease: 'power1.inOut' }, 0);

      // Main scroll animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.scrollDist',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            if (self.progress > 0) {
              // Pause floating animation when scrolling
              floatingTl.pause();
            } else {
              // Resume floating animation when scrolling back to top
              floatingTl.resume();
            }
          },
        },
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
    // Remove event listener
    window.removeEventListener('resize', this.updatePreserveAspectRatio);
  },
};
</script>

<style scoped>
/* Common styles */
body,
html {
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-align: center;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
}

.animation-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  pointer-events: none; /* Prevent the animation layer from blocking interactions */
  z-index: 1;
  overflow: hidden;
}

main {
  position: relative;
  z-index: 2;
}

.scrollDist {
  width: 100%;
  height: 300vh; /* Adjust scroll distance as needed */
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

/* Section styles */
section {
  position: relative;
  padding: 0; /* Remove default padding */
  margin: 0;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
}

/* Background container styles */
.background-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  display: block;
}

/* Elements positioning */
.left-cloud,
.right-cloud,
.light,
.vehicle,
.block,
.cbuilding,
.rock,
.smoke,
.fish,
.tube,
.greyblock,
.tear-svg {
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  left: 0;
}

/* Cloud positions */
.left-cloud {
  left: 0;
}

.right-cloud {
  right: 0;
}

/* Overlay text styles */
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

/* Remove gaps between pages */
.page-1,
.page-2 {
  margin: 0;
  padding: 0;
  display: flex;
  min-height: auto;
}

/* Tear SVG */
.tear-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

/* Hide the tear on mobile devices */
@media (max-width: 900px) {
  .tear-svg {
    display: none;
  }
}

/* Mobile devices */
@media (max-width: 1025px) {
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
  .smoke,
  .fish,
  .tube,
  .greyblock {
    opacity: 1 !important;
    transform: none !important;
  }
  .scrollDist {
    width: 100%;
    height: 33.3vh;
  }
}

@media (max-width: 525px) {
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
  .smoke,
  .fish,
  .tube,
  .greyblock {
    opacity: 1 !important;
    transform: none !important;
  }
  .scrollDist {
    width: 100%;
    height: 18vh;
  }
}
</style>
