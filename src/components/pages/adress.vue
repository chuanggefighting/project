<template>
    <div class="adress">
        <div class="parallax" data-swiper-parallax-y="650">
            <div class="earth ani" Swiper-animate-effect="bounceInUp" swiper-animate-duration="1.4s" swiper-animate-delay="-.2s"></div>
        </div>
        <div class="text-info" data-swiper-parallax-y="650">
            <div class="adresstext ani" swiper-animate-effect="changeshow" swiper-animate-duration="1.4s" swiper-animate-delay="1s">
                <ul class="personal-info">
                    <li @click='gomap'>
                        <h3>地址</h3>
                        <div>
                            <span>上海市浦东新区张东路2281弄</span>
                            <span class="map"></span>
                        </div>
                    </li>
                    <li>
                       <h3>电话</h3> 
                       <span>17621538916</span>
                    </li>
                    <li>
                        <h3>邮箱</h3>
                        <span>17621538916@verystar.cn</span>
                    </li>
                    <li>
                        <h3>博客</h3>
                        <a target="_blank" href="https://chuanggefighting.github.io/">https://chuanggefighting.github.io/</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="gopages prev">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="masker"></div>
    </div>
</template>
<script>
export default {
    name: "adress",
    data() {
        return {
        };
    },
    methods:{
        gomap(){
            this.$router.push('/homemap')
        }
    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
.adress {
    overflow: hidden;
    .parallax {
        position: absolute;
        width: 100%;
        height: 3.87rem;
        bottom: 0rem;
        left: 0rem;
        right: 0;
        margin: auto;
    }
    .earth {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 3.87rem;
        background: url('../../assets/images/star/earth.png')no-repeat 50%/120% 3.87rem;
    }
    .text-info {
        position: absolute;
        width: 4.29rem;
        height: 4rem;
        left: 0;
        right: 0;
        top: 1.8rem;
        margin: auto; // background: red;
        .adresstext {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            margin: auto;
            overflow: hidden;
            box-sizing: border-box;
            background: url('../../assets/images/commom/adressmask.png')no-repeat 50%/4.29rem 3.99rem;
            .personal-info {
                // color: #b9c4c8;
                opacity:.9;
                
                box-sizing: border-box;
                padding: .2rem 0 0 .26rem;
                li{
                    line-height: .4rem;
                    margin-bottom: .12rem;
                    h3 {
                        font-size: .22rem;
                        color: #51b3cf;
                        font-weight: 800;
                        text-shadow: initial;
                    }
                    span, a {
                        color: #fff;
                        font-size: .22rem;
                        font-weight: 300;
                        text-shadow: 0px 0px 4px #00fcff;
                    }
                    .map {
                        display: inline-block;
                        width: 0.19rem;
                        height: 0.25rem;
                        background: url('../../assets/images/page/adress.png') no-repeat 50%/.19rem 0.25rem;
                        vertical-align: -.03rem;
                        padding-left: .1rem;
                    }
                }
            }
        }
    }
    .masker {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        background: url('../../assets/images/star/last.png')no-repeat 50%/100% 100%;
        z-index: -3;
        transition: opacity .3s;
    }
}
</style>