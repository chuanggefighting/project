
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index.vue'
import home from '@/components/Home.vue'
Vue.use(Router)
export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { 
              path: '/', 
              redirect: '/index' 
            },
            {
              path: '/index',
              component: index
            },
            {
              path: '/home',
              component: home
            }
        ]
    })
}


