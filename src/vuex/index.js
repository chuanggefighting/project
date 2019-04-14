
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
 
Vue.use(Vuex)
 
export function createStore() {
    let store = new Vuex.Store({
        state:{
            info: ''
        },
        actions:{
            getInfo({ commit }) {
                
                axios.get('http://localhost:3000/api/info').then(res => {
                    console.log(res)
                })
                // return axios.get('http://localhost:3000/api/info').then(res => {
                //     console.log(res)
                //     commit('setInfo' , res.data.data)
                // })
            }
        },
        mutations: {
            setInfo(state, res) {
                state.info = res;
            }
        }
    })
    return store
}

