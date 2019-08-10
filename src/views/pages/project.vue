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
        right: 0;
        margin-top: -345px;
        width: 388px;
        height: 640px;
        .Venus {
            position: absolute;
            top: 0;
            left: 0;
            width: 388px;
            height: 640px;
            background: url('../../assets/images/star/Venus.png')no-repeat 50%/388px 640px; // background: blue;
            div {
                width: 130px;
                height: 187px;
                position: absolute;
                p {
                    text-align: center;
                    color: #fff;
                    text-shadow: 0px 0px 4px #00fcff;
                    font-size: 20px;
                    font-weight: 300;
                }
                .wr {
                    background: url('../../assets/images/commom/comser.png')no-repeat center center/400px 200px;
                    width: 100px;
                    height: 100px;
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
                            width: 130px;
                            height: 130px;
                            background: url('../../assets/images/commom/#{$item}.png') no-repeat 50%/130px 130px;
                        }
                    }
                }
                &.pay {
                    top: -118px;
                    left: 120px;
                }
                &.media {
                    top: -20px;
                    left: -50px;
                }
                &.marketing {
                    top: 240px;
                    left: -120px;
                }
                &.ops {
                    top: 500px;
                    left: -60px;
                }
                &.tag {
                    top: 600px;
                    left: 120px;
                }
            }
        }
    }

    .comsch {
        position: absolute;
        top: 38px;
        left: 50px;
        font-size: 36px;
        color: #6fb1bd;
        &:after {
            content: '';
            position: absolute;
            left: -20px;
            top: 50%;
            margin-top: -10px;
            width: 0;
            height: 0;
            border-width: 10px;
            border-style: solid;
            border-color: transparent transparent transparent #FFF;
        }
    }
}
</style>