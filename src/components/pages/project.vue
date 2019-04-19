<template>
    <div id="scheme">
        <p class="comsch">项目开发</p>
        <div class="parallax" data-swiper-parallax-x="1000">
            <div class="Venus ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="1.4s">
                <div v-for="(value,key,index) in con" :key="index" :class='key+" ani"' swiper-animate-effect="bounceIn" swiper-animate-duration=".65s" :swiper-animate-delay='(1.2+.2*(index+1))+(index*.1*(1-index*.18))+"s"'>
                    <div :class="key+'-div'">
                        <div class="wr"></div>
                    </div>
                    <p>{{value}}</p>
                </div>
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
    name: "project",
    data() {
        return {
            con: { 
                ops: '企业网站', 
                pay: '电商网站', 
                media: '跨平台项目', 
                marketing: '后台管理系统', 
                tag: '微信小程序' 
            }
        };
    }
}
</script>
<style lang="scss" scoped>
#scheme {
    .parallax {
        position: absolute;
        top: 50%;
        right: 0rem;
        margin-top: -3.45rem;
        width: 3.88rem;
        height: 6.4rem;
        .Venus {
            position: absolute;
            top: 0;
            left: 0;
            width: 3.88rem;
            height: 6.4rem;
            background: url('../../assets/images/star/Venus.png')no-repeat 50%/3.88rem 6.4rem; // background: blue;
            div {
                width: 1.31rem;
                height: 1.87rem;
                position: absolute;
                p {
                    text-align: center;
                    color: #fff;
                    text-shadow: 0px 0px 4px #00fcff;
                    font-size: .2rem;
                    font-weight: 300;
                }
                .wr {
                    background: url('../../assets/images/commom/comser.png')no-repeat center center/4rem 2rem;
                    width: 1rem;
                    height: 1rem;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    margin: auto;
                    overflow: hidden;
                }
                $list:pay,
                media,
                O2O,
                marketing,
                ops,
                tag;
                @each $item in $list {
                    &.#{$item} {
                        .#{$item}-div {
                            position: relative;
                            width: 1.3rem;
                            height: 1.3rem;
                            background: url('../../assets/images/commom/#{$item}.png')no-repeat 50%/1.3rem 1.3rem;
                        }
                    }
                }
                &.pay {
                    top: -1.18rem;
                    left: 1.2rem;
                }
                &.media {
                    top: -.2rem;
                    left: -.5rem;
                }
                &.marketing {
                    top: 2.4rem;
                    left: -1.2rem;
                }
                &.ops {
                    top: 5rem;
                    left: -.6rem;
                }
                &.tag {
                    top: 6rem;
                    left: 1.2rem;
                }
            }
        }
    }

    .comsch {
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
            margin-top: -.1rem;
            width: 0;
            height: 0;
            border-width: .1rem;
            border-style: solid;
            border-color: transparent transparent transparent #FFF;
        }
    }
}
</style>