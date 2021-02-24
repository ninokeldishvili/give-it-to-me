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
          <div @click="onRemoveClick(wish)" v-if="isLoggedInUser">
            <Button text="Remove" />
          </div>
          <div @click="onReserveClick(wish)" v-else>
            <Button text="Book Now" />
          </div>
        </div>
        <div
          v-if="wish.is_reserved && !isLoggedInUser"
          class="reserved-btn"
          @mouseover="wish.hover = true"
          @mouseleave="wish.hover = false"
          :title="wish.reserved_by !== loggedUser.id && 'This wish is booked by someone else' || ''"
        >
          <Button
            @click="onReserveClick(wish)"
            :text="
              wish.reserved_by === loggedUser.id && wish.hover
                ? 'Unbook'
                : 'Booked'
            "
          />
        </div>
      </div>
      <span>{{ wish.title }}</span>
    </div>
    <NKModal
      :modalVisible="modalVisible"
      :text="modalText"
      :type="modalType"
      :data="selectedWish"
    />
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
      modalType: "",
      selectedWish: ""
    };
  },
  watch: {
    isModalConfirmed: function() {
      if (this.isModalConfirmed) {
        this.removeWish(this.selectedWish.id);
        this.confirm();
      }
    }
  },
  methods: {
    ...mapActions([
      "fetchWishes",
      "removeWish",
      "showModal",
      "reserveWish",
      "confirm"
    ]),
    onReserveClick(wish) {
      if (wish.is_reserved && wish.reserved_by !== this.loggedUser.id) {
        return;
      }

      let reservedWish = {
        ...wish,
        is_reserved: !wish.is_reserved,
        reserved_by: this.loggedUser.id
      };
      this.reserveWish(reservedWish);
    },
    onRemoveClick(wish) {
      this.modalType = "confirm";
      this.modalText = "Are You Sure?";
      this.selectedWish = wish;
      this.showModal();
    },
    onAddWishClick() {
      this.modalType = "addWish";
      this.showModal();
    }
  },
  computed: {
    ...mapGetters(["allWishes", "modalVisible", "isLoggedInUser"]),
    ...mapState(["user", "loggedUser", "confirmed"]),
    filteredWishes() {
      return this.allWishes.filter(w =>
        this.user.id
          ? w.user_id == this.user.id
          : w.user_id == this.loggedUser.id
      );
    },
    isModalConfirmed() {
      return this.confirmed;
    }
  },
  created() {
    this.fetchWishes();
  }
};
</script>
