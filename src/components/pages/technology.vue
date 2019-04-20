<template>
    <div class="tachnology">
        <p class="personal">个人技能</p>
        <div data-swiper-parallax-x="1000">
            <div class="Mercury ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="1.3s" ></div>
        </div>

        <div class="textinfo">
            <div class="ani-info ani" swiper-animate-effect="changeshow" swiper-animate-duration="1.8s" swiper-animate-delay="1.1s">
                <ul>
                    <li>熟练使用 Npm、Sass、Gulp、Webpack 等工具</li>
                    <li>熟练使用 ES6、ES7、CSS3、HTML5 等新语法</li>
                    <li>熟练使用 jQuery、Zepto、swiper 等 JS 库</li>
                    <li>熟练使用 Handsontable、echarts 等插件</li>
                    <li>熟练使用 Bootstrap、ElementUI 等 UI 框架</li>
                    <li>熟练使用 Vue.js、Express、Koa2 等 js 框架</li>
                    <li>熟悉基础 Python、Mysql、React、小程序 等语法</li>
                </ul>
            </div>
        </div>
        <div class="gopages prev">
            <div></div>
            <div></div>
            <div></div>
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
    name: "tachnology",
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
.tachnology {
    .personal {
        position: absolute;
        top: .38rem;
        left: .5rem;
        font-size: .3rem;
        color: #6fb1bd;
        &:after {
            content: '';
            position: absolute;
            left: -.16rem;
            top: 50%;
            margin-top:-.1rem;
            width: 0;
            height: 0;
            border-width: .1rem;
            border-style: solid;
            border-color: transparent transparent transparent #FFF;
        }
    }
    .Mercury {
        position: absolute;
        top: .6rem;
        right: 0rem;
        width: 2.51rem;
        height: 3.48rem;
        background: url('../../assets/images/star/Mercury.png')no-repeat 50%/2.51rem 3.48rem;
    }
    .textinfo {
        position: absolute;
        width: 5rem;
        height: 3.8rem;
        left: .4rem;
        top: 4.2rem;
        overflow: hidden;
        .ani-info {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            margin: auto; // animation: changeshow 3s forwards;
            background:url('../../assets/images/commom/comser.png')no-repeat 50%/100% 100%;
            opacity: .9;
            ul {
                padding-top: .16rem;
                li {
                    line-height: .5rem;
                    font-size: .2rem;
                    text-indent: .34rem;
                    text-shadow: 0px 0px 4px #00fcff;
                    color: #fff;
                    font-weight: 300;
                }
            }
        }
    }
}
</style>