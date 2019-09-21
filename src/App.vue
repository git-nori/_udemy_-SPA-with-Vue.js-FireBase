<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase"></v-toolbar-title>
      <span>MyAddressBook</span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav />

    <v-content></v-content>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: {
    SideNav
  },
  data: () => ({
    //
  })
};
</script>
