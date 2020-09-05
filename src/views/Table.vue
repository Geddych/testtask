<template>
    <div>
      <h1>Стакан по символу {{symbol}} </h1>
      <tableComp />
    </div>
  
</template>

<script>
import tableComp from '../components/tableComp.vue'

export default {
  name: 'Table',
  components: {
    tableComp
  },
  beforeMount() {
    this.$store.dispatch('getStack')
  },
  computed: {
    symbol() {
      return this.$store.state.curSymbol
    }
  } 
}
</script>
