<template>
  <div class="gift-list">
    <div class="gifts" v-for="gift in allGifts" :key="gift.id">
      <a :href="gift.url" target="blank">
        <div class="gift-card">
          <div class="img-container">
            <img :src="gift.img_url" alt="gift-for-you" />
            <div class="black-hover"></div>
            <div class="gift-btns">
              <div class="view"><Button text="View"/></div>
              <div class="remove"><Button text="Remove"/></div>
            </div>
          </div>
          <span>{{ gift.title }}</span>
        </div>
      </a>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Button from '../components/Button'

export default {
  name: "Gifts",
  components:{Button},
  methods: {
    ...mapActions(["fetchGifts"])
  },
  computed: mapGetters(["allGifts"]),
  created() {
    this.fetchGifts();
  }
};
</script>
