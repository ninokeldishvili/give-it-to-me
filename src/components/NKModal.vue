<template>
  <div class="modal-background" v-if="modalVisible">
    <div class="nk-modal">
      <div class="modal-text">{{ text }}</div>
      <div class="ok-btn">
        <Button text="OK" @click="hideModal()" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "../components/Button";

export default {
  name: "NKModal",
  components: { Button },
  props: {
    modalVisible: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(["hideModal"])
  }
};
</script>