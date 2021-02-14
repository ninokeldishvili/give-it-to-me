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
    <div v-if="isLoggedInUser">
      <Button text="Sign Out" />
    </div>
    <div v-else @click="getUser(user.id)">
      <router-link to="/profile">
        <Button text="View Profile" />
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
  methods:{
    ...mapActions(["getUser"])
  }
};
</script>
