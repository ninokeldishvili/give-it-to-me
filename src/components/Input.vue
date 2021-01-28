<template>
    <div class="nk-input">
      <input :type="type" />
      <Button v-if="hasButton" :text="btnText"/>
    </div>
</template>

<script>
import Button from '../components/Button'

export default {
  name: "Input",
  components:{Button},
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
