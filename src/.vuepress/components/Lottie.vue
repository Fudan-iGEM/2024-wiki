<template>
    <div ref="lottieContainer" :style="containerStyle"></div>
  </template>
  
  <script>
  import lottie from 'lottie-web';
  
  export default {
    props: {
      animationUrl: {
        type: String,
        required: true
      },
      loop: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        containerStyle: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }
      };
    },
    mounted() {
      lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        path: this.animationUrl,
        loop: this.loop,
        autoplay: this.autoplay,
      });
    },
  };
  </script>
  
  <style scoped>
  /* 让动画充满父容器 */
  </style>
  