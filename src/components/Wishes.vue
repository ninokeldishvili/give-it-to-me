<template>
  <div class="wish-list">
    <div class="add-new wish-card">
    +    
    </div>
      <div class="wish-card" v-for="wish in allWishes" :key="wish.id">
        <div class="img-container">
          <img :src="wish.img_url" alt="Wish" />
          <div class="overlay"></div>
          <div class="option-btns">
            <a :href="wish.url" target="blank">
              <Button text="View" />
            </a>
            <div @click="removeWish(wish.id)">
              <Button text="Remove" />
            </div>
          </div>
        </div>
        <span>{{ wish.title }}</span>
      </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Button from "../components/Button";

export default {
  name: "Wishes",
  components: { Button },
  methods: {
    ...mapActions(["fetchWishes", "removeWish"])
  },
  computed: mapGetters(["allWishes"]),
  created() {
    this.fetchWishes();
  }
};
</script>
