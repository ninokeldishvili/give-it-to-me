<template>
  <div class="home container" v-if="loggedUser.id">
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
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Wishes,
    User
  },
  computed: {
    ...mapState(["loggedUser", "user"]),
    currentUser() {
      return this.loggedUser.id == this.user.id || !this.user.id
        ? this.loggedUser
        : this.user;
    }
  }
};
</script>
