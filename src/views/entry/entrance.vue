<template>
    <div v-swiper:mySwiper="swiperOption">
        <!-- parallax 开启视差效果（相对父元素移动） -->
        <planet data-swiper-parallax="-16.5%" data-swiper-parallax-duration="300"></planet>

        <div class="sound" :class="{ 'changesound': playAudio}"  @click="soundplay">
            <audio ref="audio_2" muted preload loop :src="audio_2"></audio>
        </div>
        <div class="bell">
            <audio ref="audio_3" preload :src="audio_3"></audio>
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
import planet from 'components/planet'
import meteor from 'components/meteor'
import initiation from 'views/pages/initiation'
import company from 'views/pages/company'
import technology from 'views/pages/technology'
import project from 'views/pages/project'
// import cases from 'views/pages/cases'
import adress from 'views/pages/adress'
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
            playAudio: false,
            audio_2: require("../../assets/sound/02.mp3"),
            audio_3: require("../../assets/sound/03.mp3"),
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
            var audio = this.$refs.audio_2
            if(audio.paused){
                audio.play();
                this.playAudio = true
            }else{
                audio.pause();
                this.playAudio = false
            }
        }   
    },
    created(){
        console.log(111111111)
    }
}
</script>
<style lang="scss">
.swiper-wrapper {
    z-index: 4;
}
.info {
    margin-top: -100px;
	position: absolute;
    top: 0;
}
.sound{
    width: 80px;
    height: 80px;
    background: url('../../assets/images/commom/close.png');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 80px 80px;
    position: fixed;
    left: 40px;
    bottom: 60px;
    z-index: 999;
    border-radius: 50%;
    animation-play-state: paused;
    
    &.changesound{
        width: 80px;
        height: 80px;
        background: url('../../assets/images/commom/open.png');
        background-position: 0 0;
        background-size: 80px 80px;
        animation: rota 6s linear infinite;
        transform: rotateZ(0deg);
    }
}
@keyframes rota {
    to{
        transform: rotateZ(360deg)
    }
}


.prev {
	width: 44px;
	height: 48px;
	top: 100px;
	left: 50%;
	margin-left: -44px;
	div {
		transform: rotateZ(180deg);
	}
}

.next {
	bottom: 50px;
	left: 50%;
	transform-origin: center center;
	margin-left: -22px;
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
