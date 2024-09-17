<template>
    <footer>
      <!-- Wave Section -->
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
  
      <div class="footer-wrapper">
        <div class="logos">
          <a href="http://www.yfc.cn/" target="blank">
            <img class="logo" src="https://static.igem.wiki/teams/5115/czh/yf-lyh.svg" alt="yfc.cn" />
          </a>
          <a href="https://www.fudan.edu.cn/en/" target="blank">
            <img class="logo" src="https://static.igem.wiki/teams/5115/czh/fudan-lyh.svg" alt="www.fudan.edu.cn" />
          </a>
          <a href="https://life.fudan.edu.cn/main.htm" target="blank">
            <img class="logo" src="https://static.igem.wiki/teams/5115/czh/life-lyh.svg" alt="life.fudan.edu.cn" />
          </a>
          <a href="https://2024.igem.wiki/fudan/">
            <img class="logo home-logo" src="https://static.igem.wiki/teams/5115/czh/logo-lyh.svg" alt="Team Fudan #iGEM2024" />
          </a>
        </div>
        <hr />
  
        <!-- Contact and Copyright Section -->
        <div class="footer-contact">
          <p><small>&copy; 2024 - Content on this site is licensed under a
              <a class="subfoot" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International license</a>.
          </small></p>
          <p><small>The repository used to create this website is available at
              <a href="https://gitlab.igem.org/2024/fudan" target="_blank">gitlab.igem.org/2024/fudan</a>.
          </small></p>
        </div>
  
        <!-- Social Media Icons Section -->
        <div class="social-links">
          Contact&nbsp;us:&nbsp;<a href="mailto:igem@fudan.edu.cn" target="_blank">igem@fudan.edu.cn</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "PageFooter",
  });
  </script>
  
  <style scoped>
  .footer-wrapper {
    text-align: center;
    padding: 2rem 1rem;
    position: relative;
    background-color: #E3E4C8; 
  }
  
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
  
  /* Wave Animation Section */
  .waves {
    margin-top: 5vw;
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
    background: url(https://static.igem.wiki/teams/5115/czh/footer-wave.png);
    background-size: 600px 1rem;
  }
  
  .waves::after {
    content: "";
    clear: both;
    display: block;
    position: relative;
  }
  
  .wave#wave1 {
    z-index: 998;
    opacity: 1;
    bottom: -8rem;
    animation: animateWave 11s linear infinite;
  }
  
  .wave#wave2 {
    z-index: 997;
    opacity: 0.5;
    bottom: 3rem;
    animation: animateWave_02 10s linear infinite;
  }
  
  .wave#wave3 {
    z-index: 998;
    opacity: 0.2;
    bottom: 4rem;
    animation: animateWave 15s linear infinite;
  }
  
  .wave#wave4 {
    z-index: 997;
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
    animation: rotateLogo 0.27s linear infinite;
  }
  </style>
  