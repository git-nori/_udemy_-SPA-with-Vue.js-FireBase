import Vue from 'vue'
import Router from 'vue-router'
import Addresses from './views/Addresses.vue'
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import AddressesForm from './views/AddressesForm.vue'

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
    {
      path: '/helloworld',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/address/:address_id?/edit',  // address_idがない場合は'/address/edit'でもルーティングできるよう設定
      name: 'address_edit',
      component: AddressesForm
    }
  ]
})
