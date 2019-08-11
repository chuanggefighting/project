import Vue from "vue";
import Router from "vue-router";

const entrance = () => import("./views/entry/entrance.vue")
Vue.use(Router);

export default new Router({
  // mode: "history",
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
      component: () =>
        import ('./views/entry/homemap.vue')
    }
  ]
});
