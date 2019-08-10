<template>
    <div class="cases">
        <p class="comcom">部分案例</p>
        <div class="parallax" data-swiper-parallax-x="-1000">
            <div class="Saturn ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration=".8s" swiper-animate-delay=".8s"></div>
        </div>
        <div class="case">
            <div class="bgbig" data-swiper-parallax-x="-1000">
                <div class="bgpic ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration=".8s" swiper-animate-delay="1s">
                    <div :style="'background-image:url(' +ele+ ')'"></div>
                </div>
                <div class="text ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration=".9s" swiper-animate-delay="1s" :class="{txt:isopen}">
                    <div class="pageopen" @click="open">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="jspro" style="padding-top:.3rem;text-align:right">
                        <p v-for="item in textdata[num].pic" :key="item">{{item}}</p>
                    </div>
                </div>
            </div>

            <div data-swiper-parallax-x="1000">
                <ul class="listpic">
                    <li v-for='(item,index) in textdata' :key="index" :class="{addopacity:index==num}" class="ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="1.2s" :swiper-animate-delay='(.8+.1*(index))+(index*.1*(1-index*.18))+"s"' @touchstart='changePic(index)'></li>
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
    name: "cases",
    data() {
        return {
            isopen: true,
            num: 0,
            ele: require('../../assets/images/star/pictrue1.png'),
            textdata: [
                { pic: ['帮助“喜茶”突破传统营销', '量身定制', '全新“微信社交礼品卡”', '请朋友喝茶', '不再限于线下'] },
                { pic: ['传播“轻盈便携、温暖随行”', '用方言RAP的形式', '创作出6支方言视频', , '扩大声誉同时提升了产品销量'] },
                { pic: ['邀请颜如晶和肖骁直播辩论', '结合天猫导流电商', '并与摩拜单车合作', '配合网红直播', '高效互动提高销售'] },
                { pic: ['巴黎欧莱雅借助戛纳电影节造势', '打造社交口红', '送出52000份神秘礼盒', '3天视频播放76,637,726次', '粉丝量增长200,000+'] },
                { pic: ['创造#男生该不该扫地#奇葩辩论', '新品发布会和线上营销合二为一', '科沃斯DD系新品', '在天猫、官网全部售罄'] },
                { pic: ['近10000名高质量应聘者报名', '微博话题阅读量近4000万', 'Thomas Cook整体销量提升15%'] }
            ]
        };
    },
    methods: {
        open() {
            this.isopen = !this.isopen
            if (this.isopen) {
                document.querySelector('.pageopen').style.transform = 'rotateZ(0deg)'
            } else {
                document.querySelector('.pageopen').style.transform = 'rotateZ(180deg)'
            }
        },
        changePic(index) {
            this.num = index            
            var oImage = require('../../assets/images/star/pictrue' + (this.num + 1) + '.png');
            this.ele = oImage
        }
    }
}
</script>
<style lang="scss" scoped>
.cases {
    .comcom {
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
    .parallax {
        position: absolute;
        bottom: .12rem;
        left: 0rem;
        width: 5.26rem;
        height: 3.36rem;
        .Saturn {
            position: absolute;
            bottom: 0rem;
            left: -.5rem;
            margin-top: -3.02rem;
            width: 5.26rem;
            height: 3.36rem;
            background: url('../../assets/images/star/Saturn.png')no-repeat 50%/5.26rem 3.36rem;
        }
    }

    .case {
        .bgbig {
            position: absolute;
            top: 2.2rem;
            left: 0.36rem;
            .bgpic {
                width: 3.54rem;
                height: 2.27rem;
                position: relative;
                div {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: 3.54rem 2.27rem;
                    background-image: url('../../assets/images/star/pictrue1.png');
                    opacity: 1;
                    transition: opacity .5s;
                }
                .showbig{
                    opacity: .2;
                }
            }
            .text {
                position: absolute;
                width: 3.52rem;
                height: 0.3rem;
                overflow: hidden;
                transition: height 1s;
                .jspro {
                    p {
                        opacity: .8;
                        color: #ffffff;
                        text-shadow: 0px 0px 4px #00fcff;
                        font-size: .2rem;
                        padding-right: .1rem;
                        line-height: .36rem;
                    }
                }
                .pageopen {
                    position: absolute;
                    height: .36rem;
                    width: .36rem;
                    top: 0rem;
                    right: 0rem;
                    transition: transform .5s;
                    transform-origin: center center; // transform: rotateZ(180deg);
                    div {
                        width: 0.21rem;
                        height: 0.11rem;
                        position: absolute;
                        background: url('../../assets/images/page/paging.png')no-repeat 50%/.21rem .11rem;
                    }
                    & :nth-child(1) {
                        top: .1rem;
                        right: .1rem;
                    }
                    & :nth-child(2) {
                        top: 0.16rem;
                        right: .1rem;
                    }
                }
            }
            .txt {
                height: 100%;
            }
        }
        ul {
            position: absolute;
            right: .4rem;
            top: .8rem;
            li {
                width: 1.66rem;
                height: 1.07rem;
                margin: .2rem 0;
                opacity: 0.2;
                transition:opacity .2s;
                &.addopacity {
                    opacity: 1;
                }
                @for $i from 1 through 6 {
                    &:nth-child(#{$i}) {
                        background: url('../../assets/images/star/pictrue#{$i}.png')no-repeat 50%/100% 100%;
                    }
                }
            }
        }
    }
}
</style>