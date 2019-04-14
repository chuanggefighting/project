
/* eslint-disable */
import Vue from 'vue'
import { createApp } from './main'


const { app, router  } = createApp()

router.onReady(() => {
    app.$mount('#app')
})




