<template>
  <a :href="url" target="blank">
    <div class="gift-card">
      <div class="img-container">
        <img :src="img_url" alt="gift-for-you" />
      </div>
      <span>{{ title }}</span>
    </div>
  </a>
</template>


<script>
export default {
  name: "Gift",
  props: {
    id: {
      type: Number,
      required: "false"
    },

    title: {
      type: String,
      required: "false"
    },

    img_url: {
      type: String,
      required: "false"
    },

    user_id: {
      type: Number,
      required: "false"
    },

    status: {
      type: Boolean,
      required: "false"
    },

    url: {
      type: String,
      required: "false"
    }
  }
};
</script>
