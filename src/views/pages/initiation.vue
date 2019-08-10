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
        bottom: 80px;
        font-size: 28px;
        color: #fff;
        text-align: center;
        text-shadow: 0px 0px 8px #00fcff;
        transform-style: preserve-3d;
        transform: translate3d(0, 0, 3000px);
        z-index: 999;
    }
    .logo {
        position: absolute;
        right: 30px;
        top: 40px;
        width: 160px;
        height: 40px;
        background: url('../../assets/images/page/logo.png') no-repeat center center/160px 40px;
    }
    .sun {
        width: 640px;
        height: 590px;
        right: 0;
        top: -120px;
        position: absolute;
        z-index: 0;
        background: url('../../assets/images/page/sun1.png') no-repeat center center/640px 590px;
    }
    .Jupiter {
        width: 700px;
        height: 700px;
        transform-style: preserve-3d;
        position: absolute;
        top: -88px;
        right: -160px;
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
        width: 40px;
        height: 50px;
        background: url('../../assets/images/page/Jupiter.png') no-repeat 50%/40px 50px;
        bottom: -30px;
        left: 50%;
        margin-left: -25px;
        transform: rotateX(90deg) rotateY(0) rotateZ(-120deg) translate3d(0, 0, 0rem);
        z-index: 1;
        animation: move1y 60s linear infinite;
    }

    @keyframes move1y {
        to {
            transform: rotateX(90deg) rotateY(360deg) rotateZ(240deg) translate3d(0, 0, 0);
        }
    }
    .Saturn {
        width: 1100px;
        height: 1100px;
        transform-style: preserve-3d;
        position: absolute;
        top: -280px;
        right: -320px;
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
        width: 65px;
        height: 72px;
        background: url('../../assets/images/page/Saturn.png') no-repeat 50%/65px 75px;
        bottom: -45px;
        left: 50%;
        margin-left: -25px;
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
        width: 1500px;
        height: 1500px;
        transform-style: preserve-3d;
        position: absolute;
        top: -440px;
        right: -480px;
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
        width: 90px;
        height: 98px;
        background: url('../../assets/images/page/Uranus.png') no-repeat 50%/90px 98px;
        bottom: -80px;
        left: 50%;
        margin-left: -25px;
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
        width: 2100px;
        height: 2100px;
        transform-style: preserve-3d;
        position: absolute;
        top: -660px;
        right: -640px;
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
        width: 214px;
        height: 214px;
        background: url('../../assets/images/page/Neptune.png') no-repeat 50%/214px 214px;
        bottom: -150px;
        left: 50%;
        margin-left: -25px;
        transform: rotateX(90deg) rotateY(-30deg) rotateZ(60deg) translateY(0);
        z-index: 100;
        animation: move4y 55s -20s linear infinite;
    }

    @keyframes move4y {
        to {
            transform: rotateX(90deg) rotateY(40deg) rotateZ(180deg) translateY(-100px);
        }
    }
    .textTheme {
        position: absolute;
        top: 400px;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 100;
        transform-style: preserve-3d;
        transform: translateZ(3000px);
        .star {
            width: 640px;
            height: 195px;
            position: absolute;
            left: 0;
            right: 0;
            top: -30px;
            // bottom: 0;
            margin: auto;
            background: url('../../assets/images/page/light.png') no-repeat 50%/642px 195px;
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
            font-size: 60px;
            line-height: 100px;
            opacity: 0;
            letter-spacing: 4px;
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