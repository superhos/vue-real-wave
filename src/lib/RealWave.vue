<template>
  <div ref="wave" class="wave-div">
    <svg ref="wall" class="wave-wall" :id="svgId" style="">
    </svg>
    <slot></slot>
  </div>
</template>

<script>
import Snap from 'snapsvg-cjs';
export default {
  name: 'RealWave',
  data () {
    return {
      svgId: `wall_${this._uid}`,
      waveLayer: [], // wave Object list.
      waveLayerDatas: [], // wave data list.
      width: 0,
      height: 0,
      snap: null,
      waveGap: 300, // The gap bewteen two wave, default 300px.
      waveCount: 0, // widht / waveGap = waveCount
      waveHeight: 200, // 浪高
      waveLayerCount: 3, // layer amount of wave. default 3
    }
  },
  mounted(){
    if (this.$slots.length > 1)
      throw new Error(' - Real Wave Component should contain exactly one root element.');

    // size init
    this.width = this.$refs.wave.offsetWidth;
    this.height = this.$refs.wave.offsetHeight;

    this.snap = Snap(`#${this.svgId}`);
    this.waveCount = Math.ceil(this.width / this.waveGap);

    this.calWaveData();

    // let test = this.snap.path(`M0 100 S100 200, 300 100 S400 200,600 100 S700 200,900 100 S1000 200,1200 100 A95 95 0 0 1 0 100 Z`);
    //   // this.snap.path(`M0 100 S100 0, 300 100 S400 0,600 100 S700 0,900 100 S1000 0,1200 100 A95 95 0 0 1 0 100 Z`);
    //   test.animate({
    //     d: `M0 100 S200 200, 300 100 S500 200,600 100 S800 200,900 100 S1100 200,1200 100 A95 95 0 0 1 0 100 Z`
    //   },1500,mina.easeinout,() => {
    //     test.animate({
    //       d: `M0 100 S100 200, 300 100 S400 200,600 100 S700 200,900 100 S1000 200,1200 100 A95 95 0 0 1 0 100 Z`
    //     },1500,mina.easeinout)
    //   })
    // this.wave.push(this.snap.path(`M0 100 C92 179, 90 28, ${this.width} 100 A95 95 0 0 1 0 100 Z`));
    // this.wave[0].attr({
    //     fill: "#bada55",
    // });
    // this.animate(0);
    //
    // this.wave.push(this.snap.path(`M0 100 C90 28, 92 179, ${this.width} 100 A95 95 0 0 1 0 100 Z`));
    // this.wave[1].attr({
    //     fill: "#e9ffa3",
    // });
    // this.animate(1);

    for (let i in this.waveLayerDatas){
      this.waveLayer.push(this.snap.path(this.waveLayerDatas[i].items[0]));
      this.animate(i);
    }
    this.waveLayer[0].attr({
        fill: "#bada55",
    });

    this.waveLayer[1].attr({
        fill: "#e9ffa3",
    });

    this.waveLayer[1].attr({
        fill: "#F7F7F7",
    });
  },
  methods:{
    calWaveData(){
      for (let i = 0; i < this.waveLayerCount; i++){
        let waveLayerData = {items:[]};
        for (let k = 0; k < 3; k++){
          let waveStr = 'M0 100 ';
          for (let j = 0; j < this.waveCount; j++){
            waveStr += 'S' + (j*300+100 + k*100) + ' ' + 200 +',' + (j*300+300 + k*100) + ' ' + 100 + ' ';
          }
          waveStr += 'A95 95 0 0 1 0 100 Z';
          waveLayerData.items.push(waveStr);
        }
        this.waveLayerDatas.push(waveLayerData);
      }
    },
    animate(i){
      let that = this;
      this.waveLayer[i].animate({
        d: this.waveLayerDatas[i].items[1]
      },1500 + 500*i,mina.easeinout,()=>{
        this.waveLayer[i].animate({
          d: this.waveLayerDatas[i].items[2]
        },1500 + 500*i,mina.easeinout,() => {
          this.waveLayer[i].animate({
            d: this.waveLayerDatas[i].items[0]
          },1500 + 500*i,mina.easeinout,() => that.animate(i));
        });
      })
    }
  }
}
</script>

<style lang="scss">
.wave-div{
  position: relative;
  overflow: hidden;
  .wave-wall{
    z-index:-1;
    width:100%;
    height:100%;
    position:absolute;
    bottom:0;
    left:0
  }
}
</style>
