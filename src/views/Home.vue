<template>
  <v-container text-xs-center justify-center>
    <v-layout>
      <v-flex xs-12>
        <h1>MyAddressBook</h1>
        <p>アドレス帳を利用の方はgoogleログインをしてください</p>
      </v-flex>
      <v-flex xs-12>
        <v-btn flat color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["login"])
  }
};
</script>

<style scoped>
</style>