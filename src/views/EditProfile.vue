<template>
  <div class="edit-profile container">
    <Input label="First Name" />
    <Input label="Last Name" />
    <Input label="Phone Number" />
    <Input label="Email" />
    <Input label="Address" />
    <Button text="Submit" />
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  name: "EditProfile",
  components: {
    Input,
    Button
  }
};
</script>
