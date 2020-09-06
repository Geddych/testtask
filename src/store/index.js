import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbols:['BTCUSDT','BNBBTC','ETHBTC'],
    curSymbol: 'BTCUSDT',
    bids:[],
    asks:[]
  },
  getters:{
    
  },
  mutations: {
    setCurSymbol: (state,payload) => {state.curSymbol = payload.newSym},
    setStack:(state,payload) => {
      state.asks = payload.asks
      state.bids = payload.bids
    }
  },
  actions: {
    async getStack({ commit }) {
     let responce = await fetch(`https://api.binance.com/api/v3/depth?symbol=${this.state.curSymbol}`)
     let st = await responce.json()
     commit('setStack',st)
    }
   
  },
  modules: {
  }
})


