
import Vue from 'vue'
import App from './App'
import {createRouter} from './router'
import {createStore} from './vuex'
// import async from './utils/async'
// Vue.use(async)


export function createApp() {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
     router,
     render: h => h(App)
  })
　return { app, router, store }
}




