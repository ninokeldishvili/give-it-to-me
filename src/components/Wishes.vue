<template>
  <div class="wish-list">
    <div class="add-new wish-card" @click="showModal()">
      <font-awesome-icon icon="plus" class="icon" />
    </div>
    <div class="wish-card" v-for="wish in allWishes" :key="wish.id">
      <div class="img-container">
        <!-- <img class="gift-img" :src="wish.img_url" alt="Wish" /> -->
        <div class="gift-img">
          <font-awesome-icon icon="gift" class="icon" />
        </div>

        <div :class="wish.status ? 'overlay' : 'overlay-reserved'"></div>
        <div class="option-btns" v-if="wish.status">
          <a :href="wish.url" target="blank">
            <Button text="View" />
          </a>
          <div @click="removeWish(wish.id)">
            <Button text="Remove" />
          </div>
        </div>
        <div v-if="!wish.status" class="reserved-btn">
          <Button text="Reserved" />
        </div>
      </div>
      <span>{{ wish.title }}</span>
    </div>
    <Modal :modalVisible="modalVisible" />
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default {
  name: "Wishes",
  components: { Button, Modal },
  methods: {
    ...mapActions(["fetchWishes", "removeWish", "showModal"])
  },
  computed: mapGetters(["allWishes", "modalVisible"]),
  created() {
    this.fetchWishes();
  }
};
</script>
