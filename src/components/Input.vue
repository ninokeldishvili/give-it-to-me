<template>
    <div class="nk-input">
      <label class="input-label" v-if="label">{{ label }}</label>
      <input :type="type" @input="onInputChange" :value="modelValue" :disabled="disabled"/>
      <label class="invalid-msg" v-if="!isValid">* Please Provide {{label}}</label>
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
    },
    disabled:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
};
</script>
