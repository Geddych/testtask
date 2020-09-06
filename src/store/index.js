import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbols:['BTCUSDT','BNBBTC','ETHBTC'],
    curSymbol: 'BTCUSDT',
    bids:[],
    asks:[],
    ws: null
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
    socket_sub() { 
      this.state.ws = new WebSocket(`wss://stream.binance.com:9443/ws/${this.state.curSymbol.toLowerCase()}@depth20`)
    },
    socket_change() {
      this.state.ws.close(1000,'reopen')
      this.state.ws = new WebSocket(`wss://stream.binance.com:9443/ws/${this.state.curSymbol.toLowerCase()}@depth20`)
    },
    socket_listen({ commit }) {
      this.state.ws.onmessage = (msg) => {
        let jsonMSg = JSON.parse(msg.data)
        commit('setStack',jsonMSg)
      }
    },
    socket_close() {
      this.state.ws.close(1000,'Завершена работа')
    }
   
  },
  modules: {
  }
})


