<template>
  <div class="main">
    <div class="left-circle">
      <div class="left-circle-inner"></div>
    </div>
    <div class="container">
      <Header />
      <div style="display:flex">
        <User/>
        <Wishes/>
      </div>
    </div>
    <div class="right-circle">
      <div class="right-circle-inner"></div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Wishes from "./components/Wishes.vue";
import User from "./components/User.vue"

export default {
  name: "App",
  components: {
    Header,
    Wishes,
    User,
  }
};
</script>

<style>
@import "scss/style.css";
</style>
