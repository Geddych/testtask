import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbols:['btcusdt','bnbbtc','ethbtc'],
    curSymbol: '',
    stack:[]
  },
  getters:{
    
  },
  mutations: {
    setCurSymbol: (state,payload) => {state.curSymbol = payload.newSym}
  },
  actions: {
   
  },
  modules: {
  }
})
