<template>
  <div class="nk-input">
    <div class="input-container">
      <label v-if="label">{{ label }}</label>
      <input :type="type" />
    </div>
    <Button v-if="hasButton" :text="btnText" />
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Input",
  components: { Button },
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    hasButton: {
      type: Boolean,
      required: false,
      default: false
    },
    btnText: {
      type: String,
      required: false
    }
  }
};
</script>
