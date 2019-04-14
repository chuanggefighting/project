<template>
    <div>
        <h2>{{msg}}</h2>
        <div>
            <!-- <span>{{ Info }}</span> -->
        </div>
    </div>
    
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                msg: 'home 组件'
            }
        },
        // asyncData ({ store, route }) {
        //     // 请求电影数据， 传入 ID ： 12345
        //     return store.dispatch('getInfo')
        // },
        computed: {
            // Info(){
            //     return this.$store.state.info;
            // }
        },
        created(){
            axios.get('http://localhost:3000/api/info').then(res => {
                console.log(res)
            })
        }
    }
</script>