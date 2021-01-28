import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    gifts: [],
  },
  getters: {
    allGifts: (state) => state.gifts,
  },
  actions: {
    async fetchGifts({ commit }) {
      const response = await axios.get(
        "https://6011797291905e0017be51c6.mockapi.io/api/v1/gifts"
      );

      commit("setGifts", response.data);
    },
  },
  mutations: {
    setGifts: (state, gifts) => (state.gifts = gifts),
  },
  modules: {},
});
