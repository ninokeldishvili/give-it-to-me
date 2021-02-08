<template>
  <div class="home container">
    <div style="display:flex">
      <User />
      <Wishes />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Wishes from "../components/Wishes.vue";
import User from "../components/User.vue";

export default {
  name: "Home",
  components: {
    Wishes,
    User
  }
};
</script>
