export default {
  // The gap bewteen two wave, default 300px.
  waveGap: {
    type: Number,
    default: 150,
  },
  // height of wave
  waveHeight: {
    type: Number,
    default: 40,
  },
  // layer amount of wave. default 3
  waveLayerCount: {
    type: Number,
    default:4,
  },
   // default color
  waveColor: {
    type: Array,
    default: function(){
      return ['#40ccd4','#71d8df','rgba(256,256,256,.5)','rgba(256,256,256,1)'];
    },
  },
  // position bottom
  wavePosition: {
    type: String,
    default: 'bottom',
  },
  space: {
    type: Number,
    default: 50,
  },
  // waveMode: uniform, center
  // waveMode: {
  //   type: String,
  //   default: 'uniform',
  // }
}
