<template>
  <div class="main">
    <div class="left-circle">
      <div class="left-circle-inner"></div>
    </div>
    <div class="container">
      <Header />
      <div style="display:flex">
        <div class="user-info-container">
          <div class="user-photo">
          </div>
          <div class="user-info">
            <span>Nino Keldishvili</span>
            <span>Ad: Erekle II st. #18</span>
            <span>Tel: 598903179</span>
          </div>
          <Button text="Sign Out"/>
        </div>
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
import Button from "./components/Button.vue"

export default {
  name: "App",
  components: {
    Header,
    Wishes,
    Button,
  }
};
</script>

<style>
@import "scss/style.css";
</style>
