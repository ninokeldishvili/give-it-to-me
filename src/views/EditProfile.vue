<template>
  <div class="edit-profile container">
    <Input type="text" label="First Name" />
    <Input type="text" label="Last Name" />
    <Input type="text" label="Phone Number" />
    <Input type="text" label="Email" />
    <Input type="text" label="Address" />
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
