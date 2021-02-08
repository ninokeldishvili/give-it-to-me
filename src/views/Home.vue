<template>
  <div class="home container">
    <div style="display:flex">
      <User :user="currentUser" />
      <Wishes />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Wishes from "../components/Wishes.vue";
import User from "../components/User.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Wishes,
    User
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    ...mapActions(["getUser"])
  },
  mounted() {
    this.getUser(1);
  }
};
</script>
