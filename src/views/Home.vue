<template>
  <v-container text-xs-center justify-center>
    <v-row>
      <v-col xs-12>
        <h1>MyAddressBook</h1>
        <p>アドレス帳を利用の方はgoogleログインをしてください</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs-12 mt-5>
        <v-btn flat color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-col>
    </v-row>
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