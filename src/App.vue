<template>
  <div id="app">
    <VueRealWave wavePosition="bottom" :waveLayerCount="4" :space="80" :waveGap="100" waveMode="uniform">
      <img src="./assets/logo.png">
    </VueRealWave>
    <div>
        <h1>Vue-real-wave.js v1.0</h1>
        <h3>Thanks For Using.</h3>
        <h4>@SevenChan</h4>
    </div>
  </div>
</template>

<script>
import VueRealWave from './lib/vue-real-wave.vue';

export default {
  name: 'app',
  components:{VueRealWave},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
html,body{margin:0;padding:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img{
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);

  filter: grayscale(100%);

  filter: gray;
}

h1, h2 {
  font-weight: normal;
}

</style>
