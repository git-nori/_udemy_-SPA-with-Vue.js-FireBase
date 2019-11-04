<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase"></v-toolbar-title>
      <span>MyAddressBook</span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";
import Addresses from "./views/Addresses";
import firebase from "firebase";
export default {
  name: "App",
  components: {
    SideNav,
    Addresses
  },
  created() {
    // onAuthStateChanged => 認証の状態が変わった際に呼び出されるコールバック関数を持つ
    firebase.auth().onAuthStateChanged(user => {
      // login => user, logout => null
      if (user) {
        this.setLoginUser(user);
      }
    });
  },
  data: () => ({
    //
  }),
  methods: {
    openSideMenu() {
      this.$store.dispatch("toggleSideMenu");
    },
    ...mapActions(["toggleSideMenu", "setLoginUser"])
  }
};
</script>
