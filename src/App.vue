<template>
  <div>
    <div class="main">
      <div class="left-circle">
        <div class="left-circle-inner"></div>
      </div>
      <div class="container">
        <Header v-if="loggedUser.id"/>
      </div>
      <div class="right-circle">
        <div class="right-circle-inner"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import {mapState} from "vuex";

export default {
  name: "App",
  components: {
    Header
  },
  computed: {
    ...mapState(["loggedUser"])
  }
};
</script> 

<style>
@import "scss/style.css";
</style>
