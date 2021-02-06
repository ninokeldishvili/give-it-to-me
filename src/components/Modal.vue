<template>
  <div class="modal-background" v-if="modalVisible">
    <div class="nk-modal">
      <Input
        :isValid="isValid.description"
        type="text"
        label="Description"
        v-model="description"
      />
      <Input :isValid="isValid.url" type="text" label="Url" v-model="url" />
      <div class="add-wish-btns-container">
        <Button text="Cancel" class="nk-cancel-btn" @click="onModalHide()" />
        <Button
          text="Add Wish"
          class="add-wish-btn"
          @click="onWishAdd(description, url)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  },
  data() {
    return {
      description: "",
      url: "",
      submited: false
    };
  },
  computed: {
    isValid: function() {
      return {
        description: Boolean(this.description) || !this.submited,
        url: Boolean(this.url) || !this.submited
      };
    }
  },
  methods: {
    ...mapActions(["hideModal", "addWish"]),
    clearModalData() {
      (this.description = ""), (this.url = "");
    },
    onModalHide() {
      this.submited = false;
      this.hideModal();
      this.clearModalData();
    },
    onWishAdd(description, url) {
      this.submited = true;

      let values = Object.values(this.isValid);
      let allValid = values.every(i => i === true);

      if (!allValid) {
        return;
      }

      this.addWish({ description, url });
      this.clearModalData();
      this.submited = false;
    }
  }
};
</script>