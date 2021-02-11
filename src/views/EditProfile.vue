<template>
  <div class="edit-profile container">
    <div class="user-avatar">
      <font-awesome-icon icon="user" class="icon" />
    </div>
    <div class="user-info-form-container">
      <Input type="text" v-model="loggedUser.firstName" label="First Name" />
      <Input type="text" v-model="loggedUser.lastName" label="Last Name" />
      <Input type="text" v-model="loggedUser.phone" label="Phone Number" />
      <Input type="text" v-model="loggedUser.email" label="Email" />
      <Input type="text" v-model="loggedUser.address" label="Address" />
      <div class="form-btns">
        <Button class ="nk-cancel-btn" text="Cancel" @click="onCancelClick()" />
        <Button text="Submit" @click="updateUser(loggedUser)" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "EditProfile",
  components: {
    Input,
    Button
  },
  computed: {
    ...mapState(["loggedUser"])
  },
  methods: {
    ...mapActions(["setLoggedUser", "updateUser"]),
    onCancelClick() {
      this.setLoggedUser()
    }
  }
};
</script>
