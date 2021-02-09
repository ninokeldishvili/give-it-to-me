<template>
  <div class="user-info-container">
    <div class="user-photo">
      <font-awesome-icon icon="user" class="icon" />
    </div>
    <div class="user-info">
      <span>{{user.firstName}} {{user.lastName}}</span>
      <span>Ad: {{user.address}}</span>
      <span>Tel: {{user.phone}}</span>
    </div>
    <Button text="Sign Out" />
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Header",
  props:{
    user: {
      type: Object,
      required: false
    }
  },
  components: { Button }
};
</script>
