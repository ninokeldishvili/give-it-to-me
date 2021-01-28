<template>
      <div class="nk-btn" >{{text}}</div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: false
    },
  }
};
</script>
