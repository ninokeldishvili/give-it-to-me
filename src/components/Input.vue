<template>
  <div class="nk-input">
    <div class="input-container">
      <label v-if="label">{{ label }}</label>
      <input :type="type" @input="onInputChange" :value="modelValue" />
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
    modelValue: {
      type: String
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
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
};
</script>
