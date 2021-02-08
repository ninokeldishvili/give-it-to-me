<template>
  <div class="edit-profile container">
    <div class="user-avatar">
      <font-awesome-icon icon="user" class="icon" />
    </div>
    <div class="user-info-form-container">
      <Input type="text" v-model="currentUser.firstName" label="First Name" />
      <Input type="text" v-model="currentUser.lastName" label="Last Name" />
      <Input type="text" v-model="currentUser.phone" label="Phone Number" />
      <Input type="text" v-model="currentUser.email" label="Email" />
      <Input type="text" v-model="currentUser.address" label="Address" />
      <Button text="Submit" />
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import {mapState,mapActions} from "vuex";

export default {
  name: "EditProfile",
  components: {
    Input,
    Button
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
