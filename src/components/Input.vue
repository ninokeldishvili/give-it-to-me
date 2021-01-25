<template>
    <div class="nk-input">
      <input :type="type" />
      <div class="nk-btn" v-if="hasButton">{{btnText}}</div>
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
    hasButton: {
      type: Boolean,
      required: false,
      default: false
    },
    btnText:{
        type: String,
        required: false
    }
  }
};
</script>
