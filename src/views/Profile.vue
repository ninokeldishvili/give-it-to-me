<template>
  <div class="profile container">
    <div class="user-avatar">
      <font-awesome-icon icon="user" class="icon" />
    </div>
    <div class="user-info-form-container">
      <Input type="text" v-model="currentUser.firstName" label="First Name" :disabled = "!isLoggedInUser"/>
      <Input type="text" v-model="currentUser.lastName" label="Last Name" :disabled = "!isLoggedInUser"/>
      <Input type="text" v-model="currentUser.phone" label="Phone Number" :disabled = "!isLoggedInUser"/>
      <Input type="text" v-model="currentUser.email" label="Email" :disabled = "!isLoggedInUser"/>
      <Input type="text" v-model="currentUser.address" label="Address" :disabled = "!isLoggedInUser"/>
      <div class="password"  >
        <Input type="text" v-model="currentUser.password" label="Password" :disabled = "!isLoggedInUser"/>
        <div @click="toggleNewPasswordInputs()" class="edit-password-btn">
          <font-awesome-icon icon="pencil-alt" class="icon"/>
        </div>
      </div>
      <Input type="text" v-model="currentUser.password" label="New Password" :disabled = "!isLoggedInUser" v-if="editPasswordShow"/>
      <Input type="text" v-model="currentUser.password" label="Confirm Password" :disabled = "!isLoggedInUser" v-if="editPasswordShow"/>
      <div class="form-btns" v-if="isLoggedInUser">
        <Button class="nk-cancel-btn" text="Cancel" @click="onCancelClick()" />
        <Button text="Submit" @click="updateUser(currentUser)" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { mapState, mapActions,mapGetters } from "vuex";

export default {
  name: "Profile",
  components: {
    Input,
    Button
  },
  data(){
    return{
      editPasswordShow: false,
    }
  },
  computed: {
    ...mapState(["loggedUser", "user","isLoggedInUser"]),
    ...mapGetters(["isLoggedInUser"]),
    currentUser() {
      return this.loggedUser.id == this.user.id || !this.user.id
        ? this.loggedUser
        : this.user;
    },
  },
  methods: {
    ...mapActions(["updateUser", "setLoggedUser"]),
    onCancelClick() {
      this.setLoggedUser(this.currentUser.id);
    },
    toggleNewPasswordInputs(){
      this.editPasswordShow = !this.editPasswordShow;
    }
  }
};
</script>
