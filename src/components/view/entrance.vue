<template>
    <div v-swiper:mySwiper="swiperOption">
        <!-- parallax 开启视差效果（相对父元素移动） -->
        <planet data-swiper-parallax="-16.5%" data-swiper-parallax-duration="300"></planet>

        <div class="sound" @click="soundplay">
            <audio muted autoplay loop src="./static/sound/02.mp3"></audio>
        </div>
        <div class="bell">
            <audio preload src="./static/sound/03.mp3"></audio>
        </div>
        
        <meteor data-swiper-parallax="-20%"></meteor>

        <div class="swiper-wrapper">
            <initiation class="swiper-slide"></initiation>
            <company class="swiper-slide"></company>
            <technology class="swiper-slide"></technology>
            <project class="swiper-slide"></project>
            <!-- <cases class="swiper-slide"></cases> -->
            <adress class="swiper-slide"></adress>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>

    </div>
</template>
<script>
import planet from 'common/planet'
import meteor from 'common/meteor'
import initiation from 'pages/initiation'
import company from 'pages/company'
import technology from 'pages/technology'
import project from 'pages/project'
// import cases from 'pages/cases'
import adress from 'pages/adress'
export default {
    name: "entrance",
    components: {
        planet,
        meteor,
        initiation,
        company,
        technology,
        project,
        adress
    },
    data() {
        return {
            swiperOption: {
                direction: 'vertical',
                grabCursor: true,      // 鼠标覆盖时指针会变成手掌形状， 
                setWrapperSize: true,
                autoHeight: true,
                height: window.innerHeight,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                touchMoveStopPropagation: false,
                mousewheel: true,
                observeParents: true,
                parallax: true,  // 开启视差效果
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev'
                },
                touchRatio: 1,
                longSwipesRatio : 0.1,
                // swiper callbacks
                on: {
                    init(){
                        swiperAnimateCache(this); // 隐藏动画元素 
                        swiperAnimate(this); // 初始化完成开始动画
                    },
                    transitionStart(swiper){
                        swiperAnimate(this);
                    },
                    transitionEnd(){
                        let bell = document.querySelector('.bell audio')
                        bell.currentTime = 0;
                        if(this.activeIndex!=3){
                            setTimeout(() => {
                                bell.play()
                            }, 400) 
                        }
                    }
                }
            }
        }
    },
    methods:{
        soundplay(){
            var audio = this.$el.querySelector('.sound audio')
            if(audio.paused){
                audio.play();
                this.$el.querySelector('.sound').className= "sound"
            }else{
                audio.pause();
                this.$el.querySelector('.sound').className="sound changesound"
            }
        },
        audioAutoPlay() {
            var audio = this.$el.querySelector('.sound').children[0];
            var bell = this.$el.querySelector('.bell').children[0];

            // 兼容 Android、ios
            //   document.addEventListener('touchstart', function () {
            //     //   audio.play();
            //   })

            //   // 兼容微信              
            //   document.addEventListener("WeixinJSBridgeReady", function () { 
            //       audio.play(); 
            //       bell.load()
            //   }, false);
            
        }       
    },
    mounted () {
        // this.audioAutoPlay()
    }
}
</script>
<style lang="scss">
.swiper-wrapper {
    z-index: 2;
}
.info {
    margin-top: -50px;
	position: absolute;
    top: 0;
}
.sound{
    width: .6rem;
    height: .6rem;
    background: url('../../assets/images/commom/open.png');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: .6rem .6rem;
    position: fixed;
    left: 0.2rem;
    bottom: 0.2rem;
    z-index: 999;
    border-radius: 50%;
    animation: rota 6s linear infinite;
    transform: rotateZ(0deg);
}
@keyframes rota {
    to{
        transform: rotateZ(360deg)
    }
}
.changesound{
    width: .6rem;
    height: .6rem;
    background-repeat: no-repeat;
    background-position: 0 0;
    background: url('../../assets/images/commom/close.png');
    background-size: .6rem .6rem;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
}

.gopages {
	width: .22rem;
	height: 0.24rem;
	position: absolute;
	margin-left: -.1rem;
	transform-style: preserve-3d;
	transform: translate3d(0, 0, 50rem);
	transition: opacity .2s;
	div {
		width: 0.21rem;
		height: 0.11rem;
		background: url('../../assets/images/page/paging.png')no-repeat 50%/.21rem .11rem;
		position: absolute;
		opacity: 0;
		animation: play .6s infinite;
		&:nth-child(1) {
			top: 0;
			animation-delay: 0
		}
		&:nth-child(2) {
			top: .07rem;
			animation-delay: -.5s
		}
		&:nth-child(3) {
			top: 0.14rem;
			animation-delay: -1s
		}
		@keyframes play {
			to {
				opacity: 1;
			}
		}
	}
}

.prev {
	width: 0.22rem;
	height: 0.24rem;
	top: .25rem;
	left: 50%;
	margin-left: -0.11rem;
	div {
		transform: rotateZ(180deg);
	}
}

.next {
	bottom: .25rem;
	left: 50%;
	transform-origin: center center;
	margin-left: -.11rem;
}

.touch {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 10000;
}
</style>
