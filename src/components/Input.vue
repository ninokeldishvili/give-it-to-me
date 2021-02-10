<template>
  <div class="nk-input">
    <div class="input-container">
      <label class="input-label" v-if="label">{{ label }}</label>
      <input :type="type" @input="onInputChange" :value="modelValue" />
      <label class="invalid-msg" v-if="!isValid">* Please Provide {{label}}</label>
    </div>
  </div>
</template>

<script>

export default {
  name: "Input",
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
    isValid:{
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
};
</script>
