<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  props: {
      options: {
          type: Object,
          required: true
      },
      height: Number,
      width: Number,
  },
  data () {
      return {
          style: {
              width: this.width ? `${this.width}px` : '100%',
              height: this.height ? `${this.height}px` : '100%',
              overflow: 'hidden',
              /* position: 'absolute', */
              top: 0,
              left: 0,
              bottom: 0,
          }
      }
  },

  mounted () {
      this.anim = lottie.loadAnimation({
              container: this.$refs.lavContainer,
              renderer: 'svg',
              loop: this.options.loop !== false,
              autoplay: this.options.autoplay !== false,
              path: this.options.path,
              rendererSettings: this.options.rendererSettings
          }
      );
      this.anim.setSpeed(0.3);
      this.anim.addEventListener('complete', () => {
              this.anim.destroy()
              this.$emit('lottie-complete');
          });
      this.$emit('animCreated', this.anim)
  }
}
</script>