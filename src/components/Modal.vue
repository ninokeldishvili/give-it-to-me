<template>
  <div class="nk-modal" v-if="modalVisible">
    <Input type="text" label="Description" />
    <Input type="text" label="Url" />
    <div class="add-wish-btns-container">
      <Button text="Cancel" class="nk-cancel-btn" />
      <Button text="Add Wish" class="add-wish-btn" />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import Input from "../components/Input";

export default {
  name: "Modal",
  components: { Button, Input },
  props: {
    modalVisible: {
      type: Boolean,
      required: true
    }
  }
};
</script>