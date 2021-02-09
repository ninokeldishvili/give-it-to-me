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
      <div class="form-btns">
        <Button class ="nk-cancel-btn" text="Cancel" @click="onCancelClick()" />
        <Button text="Submit" @click="updateUser(currentUser)" />
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
    ...mapState(["currentUser"])
  },
  methods: {
    ...mapActions(["getUser", "updateUser"]),
    onCancelClick() {
      this.getUser(1)
    }
  }
};
</script>
