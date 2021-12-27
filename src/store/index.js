import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const state = {
    vuex_username: "",
    vuex_goods: [],
    vuex_goodsDetails: {},
    vuex_carts:[],
    vuex_cartsStep:1
}

const getters = {
    vuex_username() {
        // return window.sessionStorage.getItem('username') ? 
        return state.vuex_username ? state.vuex_username : window.sessionStorage.getItem('username')
    }


}


const actions = {
    async login() {


    },
    async getGoods(state, typename) {
        const { data: res } = await axios({
            method: 'get',
            url: 'http://47.97.207.96:8081/login/index/goods?typename=' + typename,
        })
        if (res.success) {
            state.commit('GETGOODS', res)
        }
    },
    async getGoodsDetails(state, id) {
        const { data: res } = await axios({
            method: 'get',
            url: 'http://47.97.207.96:8081/login/index/goods/detail?id=' + id,
        })
        console.log(res)
        if (res.success) {
            state.commit('GETGOODSDETAILS', res)
        }
    },
    async addToCarts(state, params) {
        
        console.log(params)
        const { data: res } = await axios({
            method: 'get',
            url: 'http://47.97.207.96:8081/goods/insert?gid='+params.id+'&count='+params.count+'&standard='+params.standard,
            withCredentials:true
        })

    },
    async getcarts(state){
        const {data:res} = await axios({
            method:'get',
            url:'http://47.97.207.96:8081/goods/carts'
        })
        if(res.success){
            res.body.forEach(item => {
                
            });

            state.commit('GETCARTS',res.body)
        }
    },
    async deleteCartsShopping(state,id){
       const {data:res} = await axios({
            method:'get',
            url:'http://47.97.207.96:8081/goods/carts/delete?gid='+id
        })
        if(res.success){
            console.log(res)
        }
    },
    async updateCarts(state,params){
        

        // if(res.success){
        //     console.log(res)
        // }
    }
}

const mutations = {
    GETGOODS(state, res) {
        state.vuex_goods = res.body
    },
    GETGOODSDETAILS(state, res) {
        window.sessionStorage.setItem('goodsDetails', JSON.stringify(res.body))
        state.vuex_goodsDetails = res.body
    },
    LOGIN(state, username) {
        state.vuex_username = username
        // state.vuex_cartsStep = 2

    },
    GETCARTS(state,res){
        window.sessionStorage.setItem('carts',JSON.stringify(res))
        state.vuex_carts = res
    },
    DINGDAN(state){
        state.vuex_cartsStep = 2
    },
    
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})