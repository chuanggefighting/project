import Vue from 'vue'
import Router from 'vue-router'
import entrance from 'view/entrance'
import homemap from 'view/homemap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: entrance
    }, 
    {
      path: '/entrance',
      name: 'entrance',
      component: entrance
    }, {
      path:'/homemap',
      name:'homemap',
      component: homemap
    }
  ]
})
