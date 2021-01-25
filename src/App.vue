<template>
  <div class="main">
    <div class="left-circle">
      <div class="left-circle-inner"></div>
    </div>
    <div class="container">
      <Header />
      <div style="display:flex">
        <div class="gift-list">
            <div class="user-info"></div>
        </div>
      </div>
    </div>
    <div class="right-circle">
      <div class="right-circle-inner"></div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
@import "scss/style.css";
</style>
