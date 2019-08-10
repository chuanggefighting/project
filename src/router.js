import Vue from "vue";
import Router from "vue-router";
import entrance from 'views/entry/entrance'
import homemap from 'views/entry/homemap'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
});
