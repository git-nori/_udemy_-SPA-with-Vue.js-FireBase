import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    addresses: [],
    login_user: null
  },
  mutations: {
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addAddress (state, address) {
      state.addresses.push(address)
    },
    setLoginUser (state, user) {
      state.user = user
    },
    deleteLoginUser (state) {
      state.user = null
    }
  },
  actions: {
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider() // google認証を使う際のプロバイダーを格納
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout () {
      firebase.auth().signOut() // firebaseのログアウト
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser') // ログアウト時にユーザー情報を破棄するmutationsを呼び出す
    },
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user) // ログインユーザーをstateに格納するmutationsを呼び出す
    },
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
    addAddress ({ commit }, address) {
      commit('addAddress', address)  // mutationsのaddAddressを呼び出す
    }
  }
})