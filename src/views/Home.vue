<template>
  <div class="home container">
    <div style="display:flex">
      <User :user="userToShow"/>
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
    ...mapState(["loggedUser","user"]),
    userToShow(){
      return this.loggedUser.id == this.user.id ? this.loggedUser : this.user;
    }
  },
  methods: {
    ...mapActions(["setLoggedUser"])
  },
  mounted() {
    this.setLoggedUser()
  }
};
</script>
