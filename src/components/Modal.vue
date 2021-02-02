<template>
<div class="modal-background" v-if="modalVisible">
  <div class="nk-modal" >
    <Input type="text" label="Description"/>
    <Input type="text" label="Url" />
    <div class="add-wish-btns-container">
      <Button text="Cancel" class="nk-cancel-btn" @click="hideModal()"/>
      <Button text="Add Wish" class="add-wish-btn" />
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
    methods: {
    ...mapActions(["hideModal"]),
  },
  
};
</script>