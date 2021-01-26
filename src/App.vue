<template>
  <div class="main">
    <div class="left-circle">
      <div class="left-circle-inner"></div>
    </div>
    <div class="container">
      <Header />
      <div style="display:flex">
        <div class="user-info"></div>
        <div class="gift-list">
          <div class="gifts" v-for="gift in gifts" :key="gift.id">
            <Gift
              :id="gift.id"
              :title="gift.title"
              :img_url="gift.img_url"
              :user_id="gift.user_id"
              :status="gift.status"
              :url="gift.url"
              :data="data"
            />
          </div>
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
import Gift from "./components/Gift.vue";
import data from "../src/mockdata"

export default {
  name: "App",
  components: {
    Header,
    Gift
  },
  data() {
    return {
      gifts: data,
    };
  }
};
</script>

<style>
@import "scss/style.css";
</style>
