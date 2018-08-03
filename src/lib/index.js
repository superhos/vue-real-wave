import vueRealWave from './vue-real-wave.vue'
vueRealWave.install = (Vue, options) => {
    Vue.component(vueRealWave.name, vueRealWave)
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueRealWave)
}
// 导出模块
export default vueRealWave
