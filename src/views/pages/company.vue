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
                    <p class="h2">创智汇</p>
                    <br>
                    <p>时间：2016.7 -- 2017.8</p>
                    <p>项目：商城网站</p>
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
                    <p>时间：2018.7 -- 至今</p>
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
        top: 40px;
        left: 0;
        width: 400px;
        height: 800px;
        background: url('../../assets/images/star/Neptune.png')no-repeat 50%/400px 800px;
    }

    .cominfo {
        position: absolute;
        top: 40px;
        right: 60px;
        font-size: 32px;
        color: #6fb1bd;
        transform-style: preserve-3d;
        transform: translateZ(10000px);
        z-index: 9999;
        &:after {
            content: '';
            position: absolute;
            right: -20px;
            top: 50%;
            margin-top: -12px;
            width: 0;
            height: 0;
            border-width: 12px;
            border-style: solid;
            border-color: transparent #FFF transparent transparent;
        }
    }
    .textinfo {
        width: 600px;
        height: 260px;
        overflow: hidden;
        opacity: .9;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        
        .ani-info {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            width: 600px;
            height: 100%;
            margin: auto;
            overflow: hidden;
            background: url('../../assets/images/commom/show.png')no-repeat 50%/100% 100%;
            div{
                padding: 20px 0 0 30px;
                box-sizing: border-box;  
                p {
                    font-size: 24px;
                    text-shadow: 0px 0px 8px #00fcff;
                    letter-spacing: 10px;
                    line-height: 40px;
                    color: #fff;
                    font-weight: 300;
                    &.h2{
                        font-size: 28px;
                    }
                }
            }
        }
        
        &.first{
           top: 100px; 
        }
        &.second{
            top: 50%;
            margin-top: -1.2rem;
        }
        &.third{
            bottom: 100px;
        }
    }
}
</style>