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
        class="mineral"
        xlink:href="https://static.igem.wiki/teams/5115/homepage/new-mineral.svg"
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
        <rect fill="#CDE3EC" width="100%" height="100%" class="gan"/>
          <image
            class="mineral2"
            xlink:href="https://static.igem.wiki/teams/5115/homepage/new-mineral.svg"
          />
          <g id="scroll-arrow">
            <polygon class="down-arrow" points="960,910 940,880 980,880" fill="#000" />
          </g>
      </g>
      
    </svg>
  </div>

  <!-- Scrollable main content area -->
  <main>
    <div class="scrollDist" ></div>
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
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section2/section2-mine-text-imagine.svg"
          alt="Image World"
          class="track-word"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section2/new-mine-car.svg"
          alt="Mine Car"
          class="tramcar"
        />
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
          src="https://static.igem.wiki/teams/5115/text/section3-text1-steel.svg"
          alt="Text2"
          class="text2"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage-section3/smoke.svg"
          alt="Smoke"
          class="smoke"
        />

        <!-- Text over background image -->
        <img
          src="https://static.igem.wiki/teams/5115/text/section3-text2-battery.svg"
          alt="Text3"
          class="text3"
        />
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
        <img
          src="https://static.igem.wiki/teams/5115/text/new-section4-text1-instead.svg"
          alt="Text4"
          class="text4"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/section4-text4-jungles.svg"
          alt="Text4-5"
          class="text4-5"
        />
        <img
          src="https://static.igem.wiki/teams/5115/text/section4-text2-killer.svg"
          alt="Text5"
          class="text5"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/new-section4-text3-wrong.svg"
          alt="Text6"
          class="text6"
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
            r="15"
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
            L 628.2 440.7
            L 628.2 652.7"
          />
        </svg>
      </div>
    </section>
    <section class="page-4" id="deep-water">
      <div class="background-container">
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/color-background.svg"
          alt="Color Background"
          class="background-image"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/data1-gray-block.svg"
          alt="Color Background"
          class="gray-block"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/noncolor-bubble-1.svg"
          alt="Non-Color Bubble 1"
          class="noncolor-bubble-1"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/noncolor-bubble-2.svg"
          alt="Non-Color Bubble 2"
          class="noncolor-bubble-2"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/noncolor-bubble-3.svg"
          alt="Non-Color Bubble 3"
          class="noncolor-bubble-3"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/noncolor-pie-1.svg"
          alt="Non-Color Pie 1"
          class="noncolor-pie-1"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/noncolor-pie-2.svg"
          alt="Non-Color Pie 2"
          class="noncolor-pie-2"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/noncolor-pie-3.svg"
          alt="Non-Color Pie 3"
          class="noncolor-pie-3"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/data1-new-noncolor-text.svg"
          alt="Non-Color Text"
          class="noncolor-text"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/color-bubble-1.svg"
          alt="Color Bubble 1"
          class="color-bubble-1"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/color-bubble-2.svg"
          alt="Color Bubble 2"
          class="color-bubble-2"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/color-bubble-3.svg"
          alt="Color Bubble 3"
          class="color-bubble-3"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/color-pie-1.svg"
          alt="Color Pie 1"
          class="color-pie-1"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/color-pie-2.svg"
          alt="Color Pie 2"
          class="color-pie-2"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/color-pie-3.svg"
          alt="Color Pie 3"
          class="color-pie-3"
        />
        <img 
          src="https://static.igem.wiki/teams/5115/homepage-page4/data1-mew-color-text.svg"
          alt="Color Text"
          class="color-text"
        />
      </div>
    </section>
    <section class="page-5" id="summary">
      <div class="background-container">
        <img 
            src="https://static.igem.wiki/teams/5115/homepage-page5/data2-background.svg"
            alt="Background"
            class="background-image"
        />
        <img 
            src="https://static.igem.wiki/teams/5115/homepage-page4/data2-gray-block.svg"
            alt="Gray Block"
            class="gray-block2"
        />
        <img 
            src="https://static.igem.wiki/teams/5115/homepage-page4/data2-new-noncolor-text.svg"
            alt="Non-Color Text"
            class="noncolor-text2"
        />
        <img
          src="https://static.igem.wiki/teams/5115/data2/data2-graph-xy-and-name.svg"
          alt="Data2 Graph XY and Name"
          class="data2-graph-xy-and-name"
        />
        <img
          src="https://static.igem.wiki/teams/5115/data2/noncolor-data2-graph-1.svg"
          alt="Noncolor Data2 Graph 1"
          class="noncolor-data2-graph-1"
        />
        <img
          src="https://static.igem.wiki/teams/5115/data2/noncolor-data2-graph-2.svg"
          alt="Noncolor Data2 Graph 2"
          class="noncolor-data2-graph-2"
        />
        <img
          src="https://static.igem.wiki/teams/5115/data2/noncolor-data2-graph-3.svg"
          alt="Noncolor Data2 Graph 3"
          class="noncolor-data2-graph-3"
        />
        <img
          src="https://static.igem.wiki/teams/5115/data2/data2-graph-1.svg"
          alt="Data2 Graph 1"
          class="data2-graph-1"
        />
        <img
          src="https://static.igem.wiki/teams/5115/data2/data2-graph-2.svg"
          alt="Data2 Graph 2"
          class="data2-graph-2"
        />
        <img
          src="https://static.igem.wiki/teams/5115/data2/data2-graph-3.svg"
          alt="Data2 Graph 3"
          class="data2-graph-3"
        />
        <img 
            src="https://static.igem.wiki/teams/5115/homepage-page4/data2-new-color-text.svg"
            alt="Color Text"
            class="color-text2"
        />

      </div>
    </section>

    <section class="page-6" id="lls-love">
      <div class="background-container">
        <img 
            src="https://static.igem.wiki/teams/5115/homepage7/page6.png"
            alt="Background"
            class="background-image"
        />
      </div>
    </section>
    
    <section class="page-7" id="ecoli">
      <div class="background-container">
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/page789-background-new.png"
          alt="Background7"
          class="background-image"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/page7-plasmid-left.svg"
          alt="Plasmid Left"
          class="plasmid-left"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/page7-plasmid-right.svg"
          alt="Plasmid Right"
          class="plasmid-right"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/page7-word1.svg"
          alt="Word1"
          class="word1"
        />
        <img
          src="https://static.igem.wiki/teams/5115/text/new-page7-word2.svg"
          alt="Word2"
          class="word2"
        />

      </div>
    </section>

    <section class="page-8" id="carbo-cl">
      <div class="background-container">
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/page789-background-new.png"
          alt="Background New"
          class="background-image"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage8/page8-bacteria1.svg"
          alt="Bacteria 1"
          class="bacteria1"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage8/page8-bacteria2.svg"
          alt="Bacteria 2"
          class="bacteria2"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage8/page8-bacteria3.svg"
          alt="Bacteria 3"
          class="bacteria3"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage8/page8-nickel1.svg"
          alt="Nickel 1"
          class="nickel1"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage8/page8-nickel2.svg"
          alt="Nickel 2"
          class="nickel2"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/page8-nickel3.svg"
          alt="Nickel 3"
          class="nickel3"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage8/page8-nickel4.svg"
          alt="Nickel 4"
          class="nickel4"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/page8-nickel5.svg"
          alt="Nickel 5"
          class="nickel5"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage8/page8-word.svg"
          alt="Word"
          class="word8"
        />
      </div>
    </section>
    <section class="page-9" id="time-cannel">
      <div class="background-container">
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/page789-background-new.png"
          alt="Background New"
          class="background-image"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage9/page9-bacteria.svg"
          alt="Bacteria"
          class="bacteria"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage9/page9-carbo3.svg"
          alt="Carbo3"
          class="carbo9-3"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage9/page9-carbo2.svg"
          alt="Carbo2"
          class="carbo9-2"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage9/page9-carbo1.svg"
          alt="Carbo1"
          class="carbo9-1"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage9/page9-nickel.svg"
          alt="Nickel"
          class="nickel-son"
        />
        <img
          src="https://static.igem.wiki/teams/5115/text/new-page9-word.svg"
          alt="Word"
          class="word9"
        />

      </div>
    </section>
    <section class="page-10" id="time-tunnel">
      <div class="background-container">
        <img
          src="https://static.igem.wiki/teams/5115/homepage7/new1-page10-background.png"
          alt="background10"
          class="background-image"
        />
        <svg
          viewBox="0 0 1920 2500"
          xmlns="http://www.w3.org/2000/svg"
          class="time-svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: pink; stop-opacity: 1" />
              <stop offset="100%" style="stop-color: lightblue; stop-opacity: 1" />
            </linearGradient>
          </defs>

          <rect x="1500" y="400" width="50" height="250" rx="30" ry="30" fill="url(#gradient)" class="rect-original-1" />
          <rect x="1700" y="600" width="50" height="100" rx="30" ry="30" fill="url(#gradient)" class="rect-original-2" />
          <rect x="150" y="500" width="50" height="250" rx="30" ry="30" fill="url(#gradient)" class="rect-original-3" />
          <rect x="450" y="800" width="50" height="150" rx="30" ry="30" fill="url(#gradient)" class="rect-original-4" />
          <rect x="50" y="1050" width="50" height="300" rx="30" ry="30" fill="url(#gradient)" class="rect-original-5" />

          <rect x="300" y="200" width="50" height="180" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-1" />
          <rect x="700" y="250" width="50" height="220" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-2" />
          <rect x="1200" y="350" width="50" height="170" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-3" />
          <rect x="900" y="450" width="50" height="260" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-4" />
          <rect x="1500" y="1250" width="50" height="140" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-5" />
          <rect x="1600" y="750" width="50" height="190" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-6" />
          <rect x="1350" y="900" width="50" height="220" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-7" />
          <rect x="600" y="1150" width="50" height="150" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-8" />
          <rect x="400" y="1300" width="50" height="180" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-9" />
          <rect x="1100" y="1450" width="50" height="210" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-10" />
          <rect x="750" y="1600" width="50" height="130" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-11" />
          <rect x="500" y="1750" width="50" height="160" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-12" />
          <rect x="1400" y="1900" width="50" height="200" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-13" />
          <rect x="1800" y="2050" width="50" height="170" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-14" />
          <rect x="100" y="2200" width="50" height="240" rx="30" ry="30" fill="url(#gradient)" class="rect-extra-15" />
        </svg>
        <img
          src="https://static.igem.wiki/teams/5115/homepage10/new2-page10-cube.svg"
          alt="Cube"
          class="cube"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage10/new2-page10-word1.svg"
          alt="Word10"
          class="word10"
        />
        <img
          src="https://static.igem.wiki/teams/5115/homepage10/new2-page10-word2.svg"
          alt="word11"
          class="word11"
        />
      </div>
    </section>

<!--     <section class="page-12" id="lls-love-2">
      <div class="background-container">
        <img 
            src="https://static.igem.wiki/teams/5115/data2/new-page11-background.png"
            alt="Background"
            class="background-image"
        />
        <img 
            src="https://static.igem.wiki/teams/5115/homepage11/page11-nickel.svg"
            alt="NickelNickel"
            class="nick"
        />
        <img 
            src="https://static.igem.wiki/teams/5115/homepage11/page11-word.svg"
            alt="Word14"
            class="word14"
        />
      </div>
    </section> -->

    <section class="page-11" id="gift">
      <div class="background-container">
        <lottie :options="earthOptions"  class="lottie-animation"></lottie>
        <img 
            src="https://static.igem.wiki/teams/5115/homepage11/new1-page11-cube.svg"
            alt="NickelNickel"
            class="nick"
        />
        <img 
            src="https://static.igem.wiki/teams/5115/homepage11/new1-page11-word.svg"
            alt="Word14"
            class="word14"
        />
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
      </div>
    </section>
    
    
    <!-- footer -->
    <footer>
      <!-- Wave Section -->  
      <div class="footer-wrapper" >
        <div class="logos">
          <a href="https://www.yfc.cn/" target="_blank">
            <img class="logo" src="https://static.igem.wiki/teams/5115/czh/yf-lyh.svg" alt="yfc.cn" />
          </a>
          <!-- a href="#" target="_blank">
            <img class="logo" src="https://static.igem.wiki/teams/5115/test/additional-sponsor-1.png" alt="additional sponsor #1" />
          </a>
          <a href="#" target="_blank">
            <img class="logo" src="https://static.igem.wiki/teams/5115/test/additional-sponsor-2.png" alt="additional sponsor #2" />
          </a -->
          <a href="https://www.fudan.edu.cn/en/" target="_blank">
            <img class="logo" src="https://static.igem.wiki/teams/5115/czh/fudan-lyh.svg" alt="www.fudan.edu.cn" />
          </a>
          <a href="https://life.fudan.edu.cn/main.htm" target="_blank">
            <img class="logo" src="https://static.igem.wiki/teams/5115/czh/life-lyh.svg" alt="life.fudan.edu.cn" />
          </a>
          <a href="https://2024.igem.wiki/fudan/">
            <img class="logo home-logo" src="https://static.igem.wiki/teams/5115/czh/logo-trans.svg" alt="Team Fudan #iGEM2024" />
          </a>
        </div>
        <hr />
  
        <!-- Contact and Copyright Section -->
        <div class="footer-contact">
          <p><small>&copy; 2024 - Content on this site is licensed under a
              <a class="custom-link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International license</a>.
          </small>
          <br><small>The repository used to create this website is available at
              <a class="custom-link" href="https://gitlab.igem.org/2024/fudan" target="_blank">gitlab.igem.org/2024/fudan</a>.
          </small></p>
        </div>
  
        <!-- Social Media Icons Section -->
        <div class="social-links">
          Contact&nbsp;us:&nbsp;<a class="custom-link" href="mailto:igem@fudan.edu.cn" target="_blank">igem@fudan.edu.cn</a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
/* import PageFooter from '@theme-hope/components/PageFooter'; */
import Lottie from '../components/Lottie.vue';
export default {
  components: {
    Lottie
  },
  data() {
    return {
      preserveAspectRatio: 'xMinYMin meet', // Initial value for screens narrower than 1180px
      earthOptions: {
              path: 'https://static.igem.wiki/teams/5115/homepage-tail/cold-play.json',
              autoplay:true,
          },
      plasmidLeftPercent: { x: 15.52, y: 68.47 },
      plasmidRightPercent: { x: 84.77, y: 68.47 },
      carboPercent: {x: 7.8, y: 22.8 },
    };
  },
  mounted() {
    // Add event listener for the arrow click to scroll down by 200vw
    document.getElementById('scroll-arrow').addEventListener('click', () => {
      window.scrollBy({
        top: window.innerWidth * 2, // Scrolling 200vw equivalent
        left: 0,
        behavior: 'smooth',
      });
    });
  },
  methods: {
    updatePreserveAspectRatio() {
      if (window.innerWidth >= 1025) {
        this.preserveAspectRatio = 'xMidYMid slice';
      } else {
        this.preserveAspectRatio = 'xMinYMin meet';
      }
    },
    
    initPage1Animations(gsap) {
      if (window.innerWidth >= 300) {
        const page1Tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-1',
            start: 'top center',
            end: '70% center',
            scrub: 1,
          },
        });

        // Initialize cloud positions
        gsap.set('.left-cloud', { x: '10%' });
        gsap.set('.right-cloud', { x: '-25%' });
        page1Tl.to('.left-cloud', { x: '0%', duration: 2.5, ease: 'power2.out' }, 0);
        page1Tl.to('.right-cloud', { x: '0%', duration: 2.5, ease: 'power2.out' }, 0);
        gsap.set('.tramcar',{ x: 920.4, y: -153.7 });
        page1Tl.to(".tramcar", {
            duration: 3, 
            motionPath: {
              path: [
                { x: 0, y: 0 }           
              ],
              align: ".tramcar", 
              alignOrigin: [0, 0], 
            },
            ease: "power2.out",
            yoyo: true
        });

        page1Tl.to('.track-word', {
          duration: 4,
          ease: 'none',
          onUpdate: function() {
            // Calculate progress from 0 to 1
            const progress = this.progress();
            // Update the mask-image property
            const trackWordElement = document.querySelector('.track-word');
            trackWordElement.style.maskImage = `linear-gradient(to bottom, rgba(0, 0, 0, ${progress}) 0%, rgba(0, 0, 0, 1) 100%)`;
            trackWordElement.style.webkitMaskImage = `linear-gradient(to bottom, rgba(0, 0, 0, ${progress}) 0%, rgba(0, 0, 0, 1) 100%)`;
          }
        }, 0);

      } else {
        gsap.set('.left-cloud', { clearProps: 'all' });
        gsap.set('.right-cloud', { clearProps: 'all' });
      }
    },
    initPage2Animations(gsap) {
      if (window.innerWidth >= 300) {
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
      if (window.innerWidth >= 300) {
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
    initPage4Animations(gsap) {
    if (window.innerWidth >= 300) {
      // Set initial positions for fly-in elements
      gsap.set(['.color-pie-1', '.noncolor-pie-1'], { xPercent: -100, yPercent: -100 });
      gsap.set(['.color-pie-2', '.noncolor-pie-2'], { xPercent: -100, yPercent: 100 });
      gsap.set(['.color-pie-3', '.noncolor-pie-3'], { xPercent: 100, yPercent: 100 });

      const page4Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.page-4',
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
      });

      // Fly-in animations
      page4Tl.to(['.color-pie-1', '.noncolor-pie-1'], { xPercent: 0, yPercent: 0, duration: 0.1, ease: 'power2.out' }, 0);
      page4Tl.to(['.color-pie-2', '.noncolor-pie-2'], { xPercent: 0, yPercent: 0, duration: 0.1, ease: 'power2.out' }, 0);
      page4Tl.to(['.color-pie-3', '.noncolor-pie-3'], { xPercent: 0, yPercent: 0, duration: 0.1, ease: 'power2.out' }, 0);

      // Floating animations
      gsap.to(['.noncolor-bubble-1', '.color-bubble-1'], {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(['.noncolor-bubble-2', '.color-bubble-2'], {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      });

      gsap.to(['.noncolor-bubble-3', '.color-bubble-3'], {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1,
      });


      // Opacity animations
      gsap.to(
        ['.color-bubble-1', '.color-bubble-2', '.color-bubble-3', '.color-pie-1', 
        '.color-pie-2', '.color-pie-3', '.color-text', '.color-text2','.background-image-water',
        '.data2-graph-1','.data2-graph-2','.data2-graph-3'],
        {
          opacity: 0,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: '.page-4',
            start: 'center 70%',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );
    } else {
      // Reset styles on mobile devices
      gsap.set(
        [
          '.color-pie-1',
          '.noncolor-bubble-1',
          '.color-pie-2',
          '.noncolor-bubble-2',
          '.color-pie-3',
          '.noncolor-bubble-3',
          '.color-bubble-1',
          '.color-bubble-2',
          '.color-bubble-3',
          '.color-pie-1',
          '.color-pie-2',
          '.color-pie-3',
          '.color-text','.data2-graph-1','.data2-graph-2','.data2-graph-3'
        ],
        { clearProps: 'all' }
      );
    }
    },
    initPage5Animations(gsap) {
    if (window.innerWidth >= 300) {

      const page5Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.page-5',
          start: 'center bottom',
          end: '70% bottom',
          scrub: 1,
        },
      });
     
      gsap.set(['.color-bubble-1', '.color-bubble-2', '.color-bubble-3', 
                '.color-pie-1', '.color-pie-2', '.color-pie-3', '.color-text', 
                '.color-text2','.background-image-water',
                '.data2-graph-1','.data2-graph-2','.data2-graph-3'],
              { opacity: 0 });
      gsap.set(['.data2-graph-1', '.noncolor-data2-graph-1'], { xPercent: -100, yPercent: 0 });
      gsap.set(['.data2-graph-2', '.noncolor-data2-graph-2'], { xPercent: -100, yPercent: 0 });
      gsap.set(['.data2-graph-3', '.noncolor-data2-graph-3'], { xPercent: -100, yPercent: 0 });

      page5Tl.to(['.data2-graph-1', '.noncolor-data2-graph-1'], { xPercent: 0, yPercent: 0, duration: 0.1, ease: 'power2.out' }, 0);
      page5Tl.to(['.data2-graph-2', '.noncolor-data2-graph-2'], { xPercent: 0, yPercent: 0, duration: 0.1, ease: 'power2.out' }, 0.2);
      page5Tl.to(['.data2-graph-3', '.noncolor-data2-graph-3'], { xPercent: 0, yPercent: 0, duration: 0.1, ease: 'power2.out' }, 0.4);
      // Opacity animations
      gsap.to(
        ['.color-bubble-1', '.color-bubble-2', '.color-bubble-3', '.color-pie-1', 
         '.color-pie-2', '.color-pie-3', '.color-text', '.color-text2','.background-image-water',
         '.data2-graph-1','.data2-graph-2','.data2-graph-3'],
        {
          opacity: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: '.page-5',
            start: 'top 80%',
            end: 'bottom 20%',   /*  */
            scrub: true,
          },
        }
      );
    } else {
      // Reset styles on mobile devices
      gsap.set(
        [
          '.color-pie-1',
          '.noncolor-bubble-1',
          '.color-pie-2',
          '.noncolor-bubble-2',
          '.color-pie-3',
          '.noncolor-bubble-3',
          '.color-bubble-1',
          '.color-bubble-2',
          '.color-bubble-3',
          '.color-pie-1',
          '.color-pie-2',
          '.color-pie-3',
          '.color-text',
          '.color-text2','.data2-graph-1','.data2-graph-2','.data2-graph-3'
        ],
        { clearProps: 'all' }
      );
    }
    },
    setPlasmidPositions(gsap) {
      /* const sizePercent = (window.innerWidth / 1920) * 100; // ≈26.666% */
      gsap.set('.plasmid-left', {
        width:  '50%',
        height: '50%',
      });
      gsap.set('.plasmid-right', {
        width: '50%',
        height:'50%',
      });
    },
    initPlasmidRotation(gsap) {
      gsap.to(['.plasmid-left', '.plasmid-right'], {
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: '.page-7',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
    },
    initPage7Animations(gsap) {
      if (window.innerWidth >= 300) { 
        const nickels = [
          { class: '.nickel1', duration: 10, delay: 2 },
          { class: '.nickel2', duration: 20, delay: 0 },
          { class: '.nickel3', duration: 14, delay: 4 },
          { class: '.nickel4', duration: 18, delay: 6 },
          { class: '.nickel5', duration: 10, delay: 8 },
          { class: '.nickel-son', duration: 12, delay: 7 },
        ];

        nickels.forEach(nickel => {
          gsap.fromTo(
            nickel.class,
            { x: '8.25%', opacity: 1 }, 
            { 
              x: '-82.9%', 
              opacity: 0, 
              duration: nickel.duration, 
              delay: nickel.delay, 
              ease: 'none', 
              repeat: -1, 
              modifiers: {

                x: gsap.utils.unitize(x => parseFloat(x) <= '-82.9%' ? '8.25%' : x)
              },
              onRepeat: function() {

                gsap.set(this.targets(), { opacity: 1 });
              }
            }
          );
        });
      } else {

        gsap.set(['.nickel1', '.nickel2', '.nickel3', '.nickel4', '.nickel5','.nickel-son'], { clearProps: 'all' });
      }
    },
    initPage8Animations(gsap) {
      if (window.innerWidth >= 300) { 
        gsap.set('.bacteria1', { y: '0', opacity: 0});
        gsap.set('.bacteria2', { y: '-32.06%', opacity: 0});
        gsap.set('.bacteria3', { y: '-32.06%', opacity: 0});
        const page8Tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-8',
            start: 'top 90%', 
            end: 'bottom bottom',   
            scrub: true,     
            // markers: true,  
          },
        });
        page8Tl.to('.bacteria1', {
          opacity: 1,
          duration: 2,
          ease: 'power1.out',
        }, 0); 

        page8Tl.to('.bacteria2', {
          y: '0', 
          opacity: 1,
          duration: 2,
          ease: 'power1.out',
        }, 0.3); 

        page8Tl.to('.bacteria3', {
          y: '0',
          opacity: 1,
          duration: 2,
          ease: 'power1.out',
        }, 0.6); 
      } else {
        gsap.set(['.bacteria1', '.bacteria2', '.bacteria3'], { clearProps: 'all' });
      }
    },
    initPageBAnimations(gsap) {
      if (window.innerWidth >= 300) { 
        gsap.set('.bacteria', { y: '0', opacity: 0});
        gsap.set(['.carbo9-1', '.carbo9-2', '.carbo9-3'], { y: '0', opacity: 0});
        const pageBTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-9',
            start: 'top 90%', 
            end: 'top 50%',   
            scrub: true,     
            // markers: true,  
          },
        });
        pageBTl.to(['.carbo9-1', '.carbo9-2', '.carbo9-3','.bacteria'], {
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
        }, 0); 
      } else {
        gsap.set(['.bacteria'], { clearProps: 'all' });
      }
    },
    initPage9Animations(gsap) {
      if (window.innerWidth >= 300) { 
        const page9Tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-9',
            start: 'top 60%', 
            end: 'top 30%',   
            scrub: true,     
            // markers: true,  
          },
        });

        gsap.set(['.carbo9-1', '.carbo9-2', '.carbo9-3'], {
          left: '7.8%',
          top: '22.8%',
          scale: 0.186,
          transform: 'translate(-50%, -50%)', 
        });

        page9Tl.to(['.carbo9-1', '.carbo9-2', '.carbo9-3'], {
          left: '50%',
          top: '50%',
          scale: 1,
          ease: 'power1.out',
          duration: 1, 
        });
        page9Tl.to(['.carbo9-1', '.carbo9-2', '.carbo9-3'], {
          rotation: 5, 
          yoyo: true,
          repeat: 5, 
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: '.page-9',
            start: 'top 20%',
            end: 'top top',
            scrub: true,
          },
          duration: 0.1, 
        }, '+=0.2');
        page9Tl.to('.carbo9-2', {
          y: '17%',
          yoyo: true,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: '.page-9',
            start: 'top top',
            end: '20% top',
            scrub: true,
          },
          duration: 0.1, 
        }, '+=0.2');

      } else {
        gsap.set(['.carbo9-1', '.carbo9-2', '.carbo9-3'], { clearProps: 'all' });
      }
    },
    initPage10Animations(gsap) {
      if (window.innerWidth >= 300) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".page-10",
            start: "75% bottom",
            end: "95% bottom",
            pin: ".cube",
            pinSpacing: false,
            scrub: true, 
          }
        });
        gsap.timeline({
          scrollTrigger: {
            trigger: ".page-10",
            start: "75% bottom",
            end: "95% bottom",
            pin: ".word10",
            pinSpacing: false,
            scrub: true, 
          }
        });
        gsap.timeline({
          scrollTrigger: {
            trigger: ".page-10",
            start: "75% bottom",
            end: "95% bottom",
            pin: ".word11",
            pinSpacing: false,
            scrub: true, 
          }
        });
        gsap.to(".gan", {
          attr: { fill: "#FEBC5B" },
          scrollTrigger: {
            trigger: ".page-10",
            start: "75% bottom",
            end: "75% bottom", 
            scrub: false, 
            onLeaveBack: () => gsap.to(".gan", { attr: { fill: "#CDE3EC" }, duration: 0 }) // Revert to original color
          }
        });
      } else {
        // Clear GSAP properties for mobile
        gsap.set(['.cube', '.word10', '.word11'], { clearProps: 'all' });
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
    this.initPage4Animations(gsap);
    this.initPage5Animations(gsap);
    this.setPlasmidPositions(gsap);
    this.initPlasmidRotation(gsap);
    this.initPage7Animations(gsap);
    this.initPage8Animations(gsap);
    this.initPageBAnimations(gsap);
    this.initPage9Animations(gsap);
    this.initPage10Animations(gsap);
    gsap.to('.nick', {
      y: '+=50', // Move 20px down
      duration: 2, // Duration of the float down
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation
      ease: 'power1.inOut' // Smooth easing
    });
    // Create floating animation timeline
    if (window.innerWidth >= 900) {
      gsap.set(['.mineral','.down-arrow'], {
          y: '5%',
        });
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
        .fromTo('.title', { y: -50 }, { y: -600, duration: 5 }, 'afterScaling')
        .fromTo('.mineral2',{ y: 200 },  { y: -350, duration: 5 }, 'afterScaling')
        .fromTo('.down-arrow',{ y: 200 },  { y: -350, duration: 5 }, 'afterScaling')
        .addLabel('afterframe')
        .fromTo('.mineral2',{ y: -350 },  { y: -953, duration: 2 }, 'afterframe')
        .fromTo('.down-arrow',{ y: -350 },  { y: -953, duration: 2 }, 'afterframe');
    }
  },
/*   beforeDestroy() {
    // Remove event listener
    window.removeEventListener('resize', this.updatePreserveAspectRatio);
  }, */
};
</script>

<style scoped>
/* Common styles */
.title{
  top: 0%;
  z-index: 100;
}
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
  background-color: black !important;
}
footer{
  margin: 0;
  padding: 0;
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
  background: linear-gradient(to bottom, #CDE3EC 90%, #FEBC5B 90%);
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
/*   min-height: 100vh; */
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
.down-arrow {
  pointer-events: auto; 
  cursor: pointer;      
}

.background-image {
  width: 100%;
  height: 100%;
  display: block;
}
.background-image-water {
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
.tear-svg,
.noncolor-bubble-1,
.noncolor-bubble-2,
.noncolor-bubble-3,
.noncolor-pie-1,
.noncolor-pie-2,
.noncolor-pie-3,
.noncolor-text,
.color-bubble-1,
.color-bubble-2,
.color-bubble-3,
.color-pie-1,
.color-pie-2,
.color-pie-3,
.color-text,
.gray-block,
.gray-block2,
.color-text2,
.noncolor-text2,
.track-word,
.tramcar,
.bacteria1,
.bacteria2,
.bacteria3,
.nickel1,
.nickel2,
.nickel3,
.nickel4,
.nickel5,
.bacteria,
.carbo9-1,
.carbo9-2,
.carbo9-3,
.nickel-son,
.cube,
.time-svg,
.noncolor-data2-graph-1,
.noncolor-data2-graph-2,
.noncolor-data2-graph-3,
.data2-graph-1,
.data2-graph-2,
.data2-graph-3,
.data2-graph-xy-and-name,
.mineral {
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  left: 0;
}
.nick{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  left: 0;
}
/* .mineral{
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: auto;
  z-index: 999;
} */
.frame7,
.frame6,
.frame5{
  z-index: 301;
}
.text2,
.text3,
.text4,
.text4-5,
.text5,
.text6,
.word1,
.word2,
.word8,
.word9,
.word11,
.word10{
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  left: 0;
}

.word14 {
  position: absolute;
  top: 10%;
  width: 100%;
  height: auto;
  left: 0;
}

.plasmid-left,
.plasmid-right {
  position: absolute;
/*   width: 26.67%; 
  height: 26.67%; */
  transform: translate(-50%, -50%); 
}

.plasmid-left {
  left: 15.49%; /* (297.5 / 1920) * 100 ≈ 15.49% */
  top: 68.45%;  /* (653.4 / 953) * 100 ≈ 68.45% */
}

.plasmid-right {
  left: 84.54%; /* (1622.8 / 1920) * 100 ≈ 84.54% */
  top: 68.45%;  /* Same as plasmid-left */
}
/* .plasmid-left {
  left: 11.6%;
  top: 46%;
}

.plasmid-right {
  left: 51.6%;
  top: 46%;
} */
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
.page-2,
.page-3,
.page-4,
.page-5,
.page-6,
.page-7,
.page-8,
.page-9,
.page-10,
.page-11 {
  margin: 0;
  padding: 0;
  display: flex;
  min-height: auto;
}
.page-7 .background-container {
  position: relative;
  width: 100%;
  /* height: 100%; */
  overflow: hidden;
}
/* Tear SVG */
.tear-svg,
.time-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}
/* Text */
.track-word {
  opacity: 1; 

  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
/*   mask-size: 0% 0%;
  -webkit-mask-size: 0% 0%;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat; */
}

@media (min-width: 1023px){
  .scrollDist {
    width: 100%;
    height: 300vh;
  }
}

/* Hide the tear on mobile devices */
@media (max-width: 900px) {
/*   .tear-svg {
    display: none;
  } */
}

/* Mobile devices */
@media (max-width: 1025px) and (min-height: 1365px) {
  /* .frame0,
  .frame1,
  .frame2 {
    display: none;
  } */
/*   .left-cloud,
  .right-cloud,
  .light,
  .vehicle,
  .block,
  .cbuilding, */
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
@media (max-width: 1025px) and (max-height: 1365px){
  .frame0,
  .frame1,
  .frame2 {
    display: none;
  }
  .scrollDist {
    width: 100%;
    height: 50vh;
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
    height: 22vh;
  }
}

.page10-lottie {
  width: 1920px;
  max-width: 100%; /* Ensures responsiveness on smaller screens */
  height: auto;    /* Maintains aspect ratio */
  margin: 0 auto;  /* Centers the animation horizontally */
  display: block;  /* Removes any inline spacing issues */
}

/* footer */
footer{
  background-color: black;
}
.footer-wrapper {
    text-align: center;
/*     padding: 2rem 1rem; */
    position: relative;
    background-color: #FEBC5B; 
  }
/*   html[data-theme="dark"] .footer-wrapper{
    background-color: #df9226; 
} */
  .logos {
    margin-bottom: 2rem;
  }
  .logo-row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .logo {
    max-height: 7rem;
    margin: 0 1rem;
  }
  .footer-contact {
    margin-top: 2rem;
  }
  .social-links {
    margin-top: 2rem;
  }
  .custom-link {
  color: #2736c1; 
  font-weight: 600;
}


html[data-theme="dark"] .custom-link {
  color: #2736c1;
}
  /* Wave Animation Section */
  .waves {
/*     margin-top: 5vw; */
    position: relative;
    width: 100%;
    
  }
  
  .wave {
    position: absolute;
    top: -0.99rem;
    left: 0;
    width: 100%;
    height: 1rem;
    transition: 0.5s;
    background: url(https://static.igem.wiki/teams/5115/czh/footer-light.png);
    background-size: 600px 1rem;
  }
/*   html[data-theme="dark"] .wave{
    position: absolute;
    top: -0.99rem;
    left: 0;
    width: 100%;
    height: 1rem;
    transition: 0.5s;
    background: url(https://static.igem.wiki/teams/5115/czh/footer-dark.png);
    background-size: 600px 1rem;
} */
  html[data-theme="dark"] .waves::after {
    content: "";
    clear: both;
    display: block;
    position: relative;
  }
  .waves::after {
    content: "";
    clear: both;
    display: block;
    position: relative;
  }
  
  .wave#wave1 {
    z-index: 2;
    opacity: 1;
    bottom: -8rem;
    animation: animateWave 11s linear infinite;
  }
  
  .wave#wave2 {
    z-index: 1;
    opacity: 0.5;
    bottom: 3rem;
    animation: animateWave_02 10s linear infinite;
  }
  
  .wave#wave3 {
    z-index: 2;
    opacity: 0.2;
    bottom: 4rem;
    animation: animateWave 15s linear infinite;
  }
  
  .wave#wave4 {
    z-index: 1;
    opacity: 0.1;
    bottom: 5rem;
    animation: animateWave_02 20s linear infinite;
  }
  
  /* Wave Animations */
  @keyframes animateWave_02 {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: 1000px;
    }
  }
  
  @keyframes animateWave {
    0% {
      background-position-x: 1000px;
    }
    100% {
      background-position-x: 0px;
    }
  }
  
  @keyframes rotateLogo {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .home-logo {
    animation: rotateLogo 0.27s steps(8) infinite;
  }


  .nick,
  .word14,
  .waves {
  position: absolute;
  z-index: 200; /* 图片在上层 */
}
  .lottie-animation {
/*   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  z-index: 1; /* Lottie 在下层 */
  margin: 0;
  padding: 0;
  bottom: 0;
  }

</style>