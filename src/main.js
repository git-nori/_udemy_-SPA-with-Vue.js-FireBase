import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBq0mJqwjuxgw9_jzF80j2V538JSDn8VIo",
  authDomain: "my-address-pj-30662.firebaseapp.com",
  databaseURL: "https://my-address-pj-30662.firebaseio.com",
  projectId: "my-address-pj-30662",
  storageBucket: "my-address-pj-30662.appspot.com",
  messagingSenderId: "582498817888",
  appId: "1:582498817888:web:fae1d7980f5bb8c288f005",
  measurementId: "G-Q3C41S1WCL"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
