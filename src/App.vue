<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon v-show="$store.state.login_user" @click="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase"></v-toolbar-title>
      <span>MyAddressBook</span>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn flat @click="logout">LogOut</v-btn>
      </v-toolbar-items>
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
        if (this.$router.currentRoute.name === "home")
          // home画面にいる場合はログイン時にaddress画面へ遷移
          this.$router.push({ name: "addresses" });
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: "home" });
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
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "deleteLoginUser"
    ])
  }
};
</script>
