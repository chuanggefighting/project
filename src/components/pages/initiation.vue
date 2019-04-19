<template>
    <div class="initiation">
        <div class='logo'></div>
        <div class="sun"></div>
        <div>
            <div class="Jupiter">
                <div class="Jupiter-ball"></div>
            </div>
            <div class="Saturn">
                <div class="Saturn-ball"></div>
            </div>
            <div class="Uranus">
                <div class="Uranus-ball"></div>
            </div>
            <div class="Neptune">
                <div class="Neptune-ball"></div>
            </div>
        </div>
        <div class="textTheme">
            <h2 class="text">李士闯</h2>
            <h2 class="text-gradient text" data-text="力争上游">个人简历</h2>
            <span class="star"></span>
        </div>
        <p class='verystar'>Linked by Autodesk 欧特克上海分公司</p>
        <div class="gopages next">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "initiation",
    data() {
        return {
        };
    },
    mounted() {
        setTimeout(() => {
            document.querySelector('.textTheme .star').className = "star bestar"
            document.querySelectorAll('.textTheme h2')[0].className = 'h_light'
            document.querySelectorAll('.textTheme h2')[1].className = 'h_light'
        },1000)
    }
}
</script>
<style lang="scss" scoped>
.initiation {
    position: relative; // background: #000;
    transform-style: preserve-3d; // perspective: 18rem;
    .verystar {
        position: absolute;
        right: 0;
        left: 0;
        margin: auto;
        bottom: 0.56rem;
        font-size: .2rem;
        color: #fff;
        text-align: center;
        text-shadow: 0px 0px 4px #00fcff;
        transform-style: preserve-3d;
        transform: translate3d(0, 0, 30rem);
        z-index: 999;
    }
    .logo {
        position: absolute;
        right: 0.26rem;
        top: 0.34rem;
        width: 1.6rem;
        height: 0.41rem;
        background: url('../../assets/images/page/logo.png') no-repeat center center/1.6rem .41rem;
    }
    .sun {
        width: 6.4rem;
        height: 5.93rem;
        right: 0rem;
        top: -1.2rem;
        position: absolute;
        z-index: 0;
        background: url('../../assets/images/page/sun1.png') no-repeat center center/6.4rem 5.93rem;
    }
    .Jupiter {
        width: 7rem;
        height: 7rem;
        transform-style: preserve-3d;
        position: absolute;
        top: -.88rem;
        right: -1.6rem;
        transform: rotateX(78deg) rotateY(42deg) rotateZ(0);
        border: 2px solid #576d81;
        animation: move1x 60s linear infinite;
        border-radius: 50%;
        z-index: 0; // border-bottom: none;        
    }

    @keyframes move1x {
        to {
            transform: rotateX(78deg) rotateY(42deg) rotateZ(-360deg);
        }
    }
    .Jupiter-ball {
        position: absolute;
        width: .42rem;
        height: .5rem;
        background: url('../../assets/images/page/Jupiter.png') no-repeat 50%/.42rem .5rem;
        bottom: -.3rem;
        left: 50%;
        margin-left: -.25rem;
        transform: rotateX(90deg) rotateY(0) rotateZ(-120deg) translate3d(0, 0, 0rem);
        z-index: 1;
        animation: move1y 60s linear infinite;
    }

    @keyframes move1y {
        to {
            transform: rotateX(90deg) rotateY(360deg) rotateZ(240deg) translate3d(0, 0, 0rem);
        }
    }
    .Saturn {
        width: 11rem;
        height: 11rem;
        transform-style: preserve-3d;
        position: absolute;
        top: -2.8rem;
        right: -3.2rem;
        transform: rotateX(78deg) rotateY(42deg) rotateZ(100deg);
        border: 3px solid #576d81;
        animation: move2x 55s linear infinite;
        border-radius: 50%;
        z-index: 0; // border-bottom: none;                
    }

    @keyframes move2x {
        to {
            transform: rotateX(78deg) rotateY(42deg) rotateZ(-120deg);
        }
    }
    .Saturn-ball {
        position: absolute;
        width: .65rem;
        height: .72rem;
        background: url('../../assets/images/page/Saturn.png') no-repeat 50%/.6rem .72rem;
        bottom: -.45rem;
        left: 50%;
        margin-left: -.25rem;
        transform: rotateX(-90deg) rotateY(100deg) rotateZ(0deg);
        z-index: 1;
        animation: move2y 55s linear infinite;
    }

    @keyframes move2y {
        to {
            transform: rotateX(-90deg) rotateY(-120deg) rotateZ(-180deg);
        }
    }
    .Uranus {
        width: 15rem;
        height: 15rem;
        transform-style: preserve-3d;
        position: absolute;
        top: -4.4rem;
        right: -4.8rem;
        transform: rotateX(76deg) rotateY(40deg) rotateZ(50deg);
        border: 2px solid #576d81;
        animation: move3x 30s -10s linear infinite;
        border-radius: 50%;
        z-index: 0; // border-bottom: none;                
    }

    @keyframes move3x {
        to {
            transform: rotateX(76deg) rotateY(40deg) rotateZ(-30deg);
        }
    }
    .Uranus-ball {
        position: absolute;
        width: .91rem;
        height: .98rem;
        background: url('../../assets/images/page/Uranus.png') no-repeat 50%/.91rem .98rem;
        bottom: -.8rem;
        left: 50%;
        margin-left: -.25rem;
        transform: rotateX(90deg) rotateY(-50deg) rotateZ(-240deg);
        z-index: 1;
        animation: move3y 30s -10s linear infinite;
    }

    @keyframes move3y {
        to {
            transform: rotateX(90deg) rotateY(30deg) rotateZ(-160deg);
        }
    }
    .Neptune {
        width: 21rem;
        height: 21rem;
        transform-style: preserve-3d;
        position: absolute;
        top: -6.6rem;
        right: -6.4rem;
        transform: rotateX(69deg) rotateY(38deg) rotateZ(30deg);
        border: 2px solid #576d81; // border-width:1px 0 0 0;
        // border-bottom: 0;
        animation: move4x 55s -20s linear infinite;
        border-radius: 50%;
        z-index: -1;
    }

    @keyframes move4x {
        to {
            transform: rotateX(69deg) rotateY(38deg) rotateZ(-40deg);
        }
    }
    .Neptune-ball {
        position: absolute;
        width: 2.14rem;
        height: 2.14rem;
        background: url('../../assets/images/page/Neptune.png') no-repeat 50%/2.14rem 2.14rem;
        bottom: -1.5rem;
        left: 50%;
        margin-left: -.25rem;
        transform: rotateX(90deg) rotateY(-30deg) rotateZ(60deg) translateY(0rem);
        z-index: 100;
        animation: move4y 55s -20s linear infinite;
    }

    @keyframes move4y {
        to {
            transform: rotateX(90deg) rotateY(40deg) rotateZ(180deg) translateY(-1rem);
        }
    }
    .textTheme {
        position: absolute;
        top: 4rem;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 100;
        transform-style: preserve-3d;
        transform: translateZ(30rem);
        .star {
            width: 6.42rem;
            height: 1.95rem;
            position: absolute;
            left: 0rem;
            right: 0;
            top: -.3rem;
            // bottom: 0;
            margin: auto;
            background: url('../../assets/images/page/light.png') no-repeat 50%/6.42rem 1.95rem;
            opacity: 0;
            z-index: -2;
        }
        .bestar {
            animation: opc2 .5s .8s ease-in forwards;
            @keyframes opc2 {
                0%{
                    opacity: 0;
                }
              
                75%{
                    opacity: 1;
                }
                100% {
                    opacity: .8;
                }
            }
        }
        h2 {
            color: rgb(225, 225, 225);
            font-size: .6rem;
            line-height: 1rem;
            opacity: 0;
            letter-spacing: .04rem;
        }
        .h_light {
            animation: opc 1.2s .2s forwards;
            color:#fff;
            text-shadow: 0px 0px 4px #00fcff;
            @keyframes opc {
                to {
                    opacity: .8;
                }
            }
        }
        .text-gradient {
            background: -webkit-linear-gradient(top, rgba(225, 225, 225, 1), rgba(225, 225, 225, .2));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
</style>