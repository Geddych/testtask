<template>
  <div class="about">
    <div >
      <h2>
        Список Символов
      </h2>
        <p
        v-for="sym in symbols"
        v-bind:key='sym'
        >
        <span v-if="symbol == sym">{{ sym.toUpperCase() }} (Текущий символ)</span>
        <span v-else>{{sym.toUpperCase()}}</span>
        </p>
    </div>
    <div>
      <h2>
        Выьерите символ:
      </h2>
      <select v-model="selected" v-on:change="setCurSymbol(selected)">
        <option v-for="sym in symbols" selected
         v-bind:key='sym'
         v-bind:value={sym} 
         v-html="sym.toUpperCase()" >
         </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name:'Binance',
  data: () => {
    return {
      selected: 'nt'
    }
  },
  computed:{
    symbol() {
      return this.$store.state.curSymbol
    },
    symbols() {
      return this.$store.state.symbols
    },
    
  },
  methods: {
    setCurSymbol(selected) {
      this.$store.commit('setCurSymbol',{newSym:selected.sym})
    }
  }
}
  
</script>