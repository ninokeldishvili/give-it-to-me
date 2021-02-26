<template>
  <div class="user-info-container">
    <div class="user-photo">
      <font-awesome-icon icon="user" class="icon" />
    </div>
    <div class="user-info">
      <span>{{ user.firstName }} {{ user.lastName }}</span>
      <span>Ad: {{ user.address }}</span>
      <span>Tel: {{ user.phone }}</span>
    </div>
    <div v-if="isLoggedInUser" @click="signOut()">
      <router-link to="/login">
        <Button text="Sign Out" class="sign-out" />
        <font-awesome-icon icon="sign-out-alt" class="icon sign-out-responsive" />
      </router-link>
    </div>
    <div v-else @click="getUser(user.id)">
      <router-link to="/profile">
        <Button text="View Profile" class="view-profile"/>
        <font-awesome-icon icon="eye" class="icon view-profile-responsive" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  props: {
    user: {
      type: Object,
      required: false
    }
  },
  components: { Button },
  computed: {
    ...mapGetters(["isLoggedInUser"])
  },
  methods: {
    ...mapActions(["getUser", "signOut"])
  }
};
</script>
