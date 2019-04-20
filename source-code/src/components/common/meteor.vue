<template>
    <div class="starwrap">
        <div class="star-item" ref="star_item" v-for="(item, index) in starList" :key="index"></div>
    </div>
</template>
<script>
export default {
    name: "starwrap",
    data() {
        return {
            starList: [],
            timer: ''
        };
    },
    methods: {
        resetStar(index) {
            let model = this.$refs.star_item[index]
            model.style.top = this.randomNum(-2, 5) + 'rem'
            model.style.right = this.randomNum(-3, -1) + 'rem'
            model.style.width = Math.random() * .4 + .6 + 'rem'
            model.style.height = Math.random() * .01 + .01 + 'rem'
            model.style.transformStyle = 'translateZ(' + -(Math.random() * 10 + 20) + 'rem)'
            model.style.animation = "move " + this.randomNum(11, 21) + "s ease-in"
            model.addEventListener("webkitAnimationEnd", () => {
                model.style.animation = ''
                this.starList[index] = false
            });
        },
        createStar() {
            for (let i = 0; i < 5; i++) {
                this.starList.push(false)
            }
        },
        checkStar() {
            for (let i = 0; i < this.starList.length; i++) {
                if (!this.starList[i]) {
                    this.starList[i] = true
                    this.resetStar(i)
                    break
                }
            }
        },
        randomNum(min, max) {
            let range = max - min;
            let rand = Math.random();
            let num = min + Math.round(rand * range);
            return num;
        },
        stopStar() {
            for (let i = 0; i < this.starList.length; i++) {
                let model = this.$refs.star_item[i]
                model.style.animation = ''
                this.starList[i] = false
            }
        }
    },
    mounted() {
        var wrap = document.querySelector('.starwrap')
        wrap.style.height = window.innerHeight * 2 + 'px'
        this.createStar()
        // this.$nextTick(() => {
        //     this.timer = setInterval(() => {
        //         this.checkStar()
        //     }, this.randomNum(1, 3) * 1000)
        // })
    },
    activated() {
        this.timer = setInterval(() => {
            this.checkStar()
        }, this.randomNum(1, 3) * 1000)
    },
    deactivated() {
        clearInterval(this.timer)
        this.stopStar()
    }
}

</script>
<style lang="scss">
.starwrap {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    transform-style: preserve-3d;
    .star-item {
        position: absolute;
        background-image: -webkit-linear-gradient(right, rgba(225, 225, 225, 0), rgba(225, 225, 225, 1));
        height: 2px;
        transform: rotate(-45deg);
    }
}

@keyframes move {
    to {
        opacity: 0;
        width: .6rem;
        height: 0.01rem;
        transform: rotate(-45deg) translate3d(-30rem, 0, 0)
    }
}
</style>