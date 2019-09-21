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
export default {
  name: "App",
  components: {
    SideNav,
    Addresses
  },
  data: () => ({
    //
  }),
  methods: {
    openSideMenu() {
      this.$store.dispatch("toggleSideMenu");
    },
    ...mapActions(["toggleSideMenu"])
  }
};
</script>
