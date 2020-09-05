import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/Table.vue'
import Binance from '../views/Binance.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Table',
    component: Table
  },
  {
    path: '/binance',
    name: 'Binance',
    component: Binance
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
