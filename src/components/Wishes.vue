<template>
  <div class="wish-list">
    <div
      v-if="isLoggedInUser"
      class="add-new wish-card"
      @click="onAddWishClick()"
    >
      <font-awesome-icon icon="plus" class="icon" />
    </div>
    <div class="wish-card" v-for="wish in filteredWishes" :key="wish.id">
      <div class="img-container">
        <!-- <img class="gift-img" :src="wish.img_url" alt="Wish" /> -->
        <div class="gift-img">
          <font-awesome-icon icon="gift" class="icon" />
        </div>

        <div
          :class="
            wish.is_reserved && !isLoggedInUser ? 'overlay-reserved' : 'overlay'
          "
        ></div>
        <div class="option-btns" v-if="!wish.is_reserved || isLoggedInUser">
          <a :href="wish.url" target="blank">
            <Button text="View" />
          </a>
          <div @click="onRemoveClick()" v-if="isLoggedInUser">
            <Button text="Remove" />
          </div>
          <div @click="onReserveClick(wish)" v-else>
            <Button text="Reserve" />
          </div>
        </div>
        <div v-if="wish.is_reserved && !isLoggedInUser" class="reserved-btn">
          <Button text="Reserved" />
        </div>
      </div>
      <span>{{ wish.title }}</span>
    </div>
    <NKModal :modalVisible="modalVisible" :text="modalText" :type="modalType" />
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Button from "../components/Button";
import NKModal from "../components/NKModal";

export default {
  name: "Wishes",
  components: { Button, NKModal },
  data() {
    return {
      modalText: "",
      modalType: ""
    };
  },
  methods: {
    ...mapActions(["fetchWishes", "removeWish", "showModal", "reserveWish"]),
    onReserveClick(wish) {
      let reservedWish = { ...wish, is_reserved: false };
      this.reserveWish(reservedWish);
    },
    onRemoveClick() {
      this.modalType = "confirm";
      this.modalText = "Are You Sure?";
      this.showModal();
    },
    onAddWishClick() {
      this.modalType = "addWish";
      this.showModal();
    }
  },
  computed: {
    ...mapGetters(["allWishes", "modalVisible", "isLoggedInUser"]),
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
