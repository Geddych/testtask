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
  computed: {
    symbol() {
      return this.$store.state.curSymbol
    }

  } 
}
</script>

<style lang="scss" scoped>
div {
  overflow: hidden;
}
</style>
