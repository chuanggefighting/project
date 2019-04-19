<template>
    <div class="company">
        <div class="gopages prev">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div data-swiper-parallax-x="-1000">
            <div class="Neptune ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1.6s"></div>
        </div>
        <p class="cominfo">工作经验</p>
        <div class="textinfo first">
            <div class="ani-info ani" swiper-animate-effect="changeshow" swiper-animate-duration="1.5s" swiper-animate-delay="1s">
                <div>
                    <p class="h2">郑州云景科技</p>
                    <br>
                    <p>时间：2015.7 -- 2017.8</p>
                    <p>项目：企业站、商城站</p>
                    <p>技术：React、Bootstrap、juicer、Gulp、Scss、Git</p>
                </div>
            </div>
        </div>
        <div class="textinfo second">
            <div class="ani-info ani" swiper-animate-effect="changeshow" swiper-animate-duration="1.5s" swiper-animate-delay="1s">
                <div>
                    <p class="h2">展讯通信</p>
                    <br>
                    <p>时间：2017.8 -- 2018.7</p>
                    <p>项目：展讯业务后台系统</p>
                    <p>技术：Vue、Bootstrap、Scss、Svn、Handsontable、Echarts</p>
                </div>
            </div>
        </div>
        <div class="textinfo third">
            <div class="ani-info ani" swiper-animate-effect="changeshow" swiper-animate-duration="1.5s" swiper-animate-delay="1s">
                <div>
                    <p class="h2">Autodesk</p>
                    <br>
                    <p>时间：2017.7 -- 至今</p>
                    <p>项目：代码测试平台</p>
                    <p>技术：Vue、ElementUI、Webpack、Three.js、Ace</p>
                </div>
            </div>
        </div>
        <div class="gopages next">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "company",
    data() {
        return {
            isbegin: false
        };
    }
}
</script>
<style lang="scss" scoped>
.company {
    .Neptune {
        position: absolute;
        top: .4rem;
        left: 0rem;
        width: 3.58rem;
        height: 6.7rem;
        background: url('../../assets/images/star/Neptune.png')no-repeat 50%/3.58rem 6.7rem;
    }

    .cominfo {
        position: absolute;
        top: .38rem;
        right: .5rem;
        font-size: .3rem;
        color: #6fb1bd;
        transform-style: preserve-3d;
        transform: translateZ(100rem);
        z-index: 9999;
        &:after {
            content: '';
            position: absolute;
            right: -.16rem;
            top: 50%;
            margin-top: -.1rem;
            width: 0;
            height: 0;
            border-width: .1rem;
            border-style: solid;
            border-color: transparent #FFF transparent transparent;
        }
    }
    .textinfo {
        width: 4rem;
        height: 2.4rem; // background: blue;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
        &.first{
           top: 1rem; 
        }
        &.second{
            top: 50%;
            margin-top: -1.2rem;
        }
        &.third{
            bottom: 1rem;
        }
        .ani-info {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box; // padding: .25rem 0 0 .35rem;
            margin: auto; // animation: changeshow 3s forwards;
            background: url('../../assets/images/commom/show.png')no-repeat 50%/100% 100%;
            opacity: .9;
            div {
                padding: .25rem 0 0 .3rem;
                box-sizing: border-box;
                p {
                    font-size: .22rem;
                    text-shadow: 0px 0px 4px #00fcff;
                    letter-spacing: .05em;
                    line-height: .33rem;
                    color: #fff;
                    font-weight: 300;
                    &.h2{
                        font-size: .3rem;
                    }
                }
            }
        }
    }
}
</style>