// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// https://www.npmjs.com/package/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 用于 nuxt.js/ssr 时，则应将其保留在浏览器构建环境
// nuxt.js：process.BROWSER_BUILD
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

// 组件局部引用 (can't work in Nuxt.js/SSR)
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

// export default {
//   components: {
//     swiper,
//     swiperSlide
//   }
// }



Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     let flag = IsPC()
//     if (to.path != '/verystar' && flag) {
//         next('/verystar')
//     } else if(to.path == '/verystar' && !flag){
//         next('/')
//     } else {
//         next()
//     }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

