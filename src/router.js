import Vue from 'vue'
import Router from 'vue-router'
import Addresses from './views/Addresses.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }
    ,
    {
      path: '/addresses',
      name: 'addresses',
      component: Addresses
    },
  ]
})
