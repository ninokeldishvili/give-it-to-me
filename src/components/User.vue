<template>
  <div class="user-info-container">
    <div class="user-photo">
      <font-awesome-icon icon="user" class="icon" />
    </div>
    <div class="user-info">
      <span>Nino Keldishvili</span>
      <span>Ad: Erekle II st. #18</span>
      <span>Tel: 598903179</span>
    </div>
    <Button text="Sign Out" />
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Header",
  components: { Button }
};
</script>
