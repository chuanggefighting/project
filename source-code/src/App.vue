<template>
  <div id="app">
    <keep-alive>
			<router-view></router-view>
		</keep-alive>
    <v-stoprotate></v-stoprotate>
    <div class="mask"></div>
  </div>
</template>

<script>
import stoprotate from 'common/stoprotate'
export default {
  name: 'App',
  components: {
		vStoprotate: stoprotate,
  },
  mounted(){
      var imgs = [require('./assets/images/commom/adressmask.png'),
                require('./assets/images/commom/active.png'),
                require('./assets/images/commom/client.png'),
                require('./assets/images/commom/comser.png'),
                require('./assets/images/commom/marketing.png'),
                require('./assets/images/commom/mask.png'),
                require('./assets/images/commom/media.png'),
                require('./assets/images/commom/nav.png'),
                require('./assets/images/commom/O2O.png'),
                require('./assets/images/commom/ops.png'),
                require('./assets/images/commom/pay.png'),
                require('./assets/images/commom/show.png'),
                require('./assets/images/commom/tag.png'),
                require('./assets/images/page/adress.png'),
                require('./assets/images/page/Jupiter.png'),
                require('./assets/images/page/light.png'),
                require('./assets/images/page/logo.png'),
                require('./assets/images/page/Neptune.png'),
                require('./assets/images/page/paging.png'),
                require('./assets/images/page/Saturn.png'),
                require('./assets/images/page/sun1.png'),
                require('./assets/images/page/Uranus.png'),
                require('./assets/images/page/Uranus.png'),
                require('./assets/images/star/earth.png'),
                require('./assets/images/star/icon.png'),
                require('./assets/images/star/Jupiter.png'),
                require('./assets/images/star/last.png'),
                require('./assets/images/star/Mars.png'),
                require('./assets/images/star/Mercury.png'),
                require('./assets/images/star/Neptune.png'),
                require('./assets/images/star/pictrue1.png'),
                require('./assets/images/star/pictrue2.png'),
                require('./assets/images/star/pictrue3.png'),
                require('./assets/images/star/pictrue4.png'),
                require('./assets/images/star/pictrue5.png'),
                require('./assets/images/star/pictrue6.png'),
                require('./assets/images/star/Saturn.png'),
                require('./assets/images/star/Venus.png')]

      let loading = document.querySelector('.app_loading')
      let i = 0
      let timer = null;
      let len = imgs.length

      document.addEventListener('DOMContentLoaded', () => { 
          const load = src => {
              if(i < len){
                  var img_obj = new Image;
                  img_obj.src = src;
                  
                  timer = setInterval(() => {
                      if (img_obj.complete) {  // 检测图像是否加载完成
                          if (i >= len*.8) {
                            loading.style.opacity = 0
                            setTimeout(() => {
                                loading.style.display = 'none'
                            }, 1000)
                          }
                          load(imgs[i++])
                      }
                  }, 30)
              }else{
                  clearInterval(timer)
              }
          }
          load(imgs[i])
      })
  }
}
</script>

<style lang="scss">
@import url('./assets/css/reset.css');
.mask {
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	background: url('./assets/images/commom/mask.png');
	opacity: .5;
	z-index: 999;
	transform-style: preserve-3d;
	transform: translateZ(100rem);
	pointer-events: none;
}


</style>


