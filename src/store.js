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
    addAddress (state, { id, address }) {
      address.id = id
      state.addresses.push(address)
    },
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
    updateAddress (state, { id, address }) {
      const index = state.addresses.findIndex(address => address.id === id)

      state.addresses[index] = address
    }
  },
  actions: {
    fetchAddresses ({ getters, commit }) {
      // firestoreからデータを取得し、addAddressを呼び出す
      firebase.firestore().collection(`users/${getters.uid}/addresses`).get().then(snapshot => {
        snapshot.forEach(doc => commit('addAddress', { id: doc.id, address: doc.data() }))
      })
    },
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
      // uidが存在する場合、firestoreにaddress(引数)を保存する
      if (this.getters.uid) firebase.firestore().collection(`users/${this.getters.uid}/addresses`).add(address).then(doc => {
        // doc.id => addressを識別するデータ, addメソッドのコールバック関数のオブジェクトからidを取得し,addAddressに引数で渡す
        commit('addAddress', { id: doc.id, address })  // mutationsのaddAddressを呼び出す
      })
    },
    updateAddress ({ getters, commit }, { id, address }) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).update(address).then(() => {
          commit('updateAddress', { id, address })
        })
      }
    }
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : null,
    getAddressById: state => id => state.addresses.find(address => address.id === id) // 関数を返す関数(idを引数にして呼び出す)
  }
})