<template>
  <div class="login">
    <Input label="Email" />
    <Input label="Password" />
    <div @click="onLogin()">
      <router-link to="/">
        <Button text="Login" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Input from "./Input";
import Button from "./Button";
import { mapActions } from "vuex";

export default {
  name: "Login",
  props: {
    text: {
      type: String,
      required: false
    }
  },
  components: {
    Input,
    Button
  },
  methods: {
    ...mapActions(["setLoggedUser"]),
    onLogin() {
      this.setLoggedUser();
    }
  }
};
</script>
