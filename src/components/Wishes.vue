<template>
  <div class="wish-list">
    <div
      v-if="loggedUser.id == user.id"
      class="add-new wish-card"
      @click="showModal()"
    >
      <font-awesome-icon icon="plus" class="icon" />
    </div>
    <div class="wish-card" v-for="wish in filteredWishes" :key="wish.id">
      <div class="img-container">
        <!-- <img class="gift-img" :src="wish.img_url" alt="Wish" /> -->
        <div class="gift-img">
          <font-awesome-icon icon="gift" class="icon" />
        </div>

        <div :class="!wish.is_reserved ? 'overlay' : 'overlay-reserved'"></div>
        <div class="option-btns" v-if="!wish.is_reserved">
          <a :href="wish.url" target="blank">
            <Button text="View" />
          </a>
          <div @click="removeWish(wish.id)" v-if="user.id == loggedUser.id">
            <Button text="Remove" />
          </div>
          <div @click="onReserveClick(wish)" v-else>
            <Button text="Reserve" />
          </div>
        </div>
        <div v-if="wish.is_reserved" class="reserved-btn">
          <Button text="Reserved" />
        </div>
      </div>
      <span>{{ wish.title }}</span>
    </div>
    <Modal :modalVisible="modalVisible" />
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default {
  name: "Wishes",
  components: { Button, Modal },
  methods: {
    ...mapActions(["fetchWishes", "removeWish", "showModal", "reserveWish"]),
    onReserveClick(wish) {
      let reservedWish = { ...wish, is_reserved: false };
      this.reserveWish(reservedWish);
    }
  },
  computed: {
    ...mapGetters(["allWishes", "modalVisible"]),
    ...mapState(["user", "loggedUser"]),
    filteredWishes() {
      return this.allWishes.filter(w =>
        this.user.id
          ? w.user_id == this.user.id
          : w.user_id == this.loggedUser.id
      );
    }
  },
  created() {
    this.fetchWishes();
  }
};
</script>
