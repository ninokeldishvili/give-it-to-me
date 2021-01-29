import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    wishes: [],
  },
  getters: {
    allWishes: (state) => state.wishes,
  },
  actions: {
    async fetchWishes({ commit }) {
      const response = await axios.get(
        "https://6011797291905e0017be51c6.mockapi.io/api/v1/gifts"
      );

      commit("setWishes", response.data);
    },
    async removeWish({commit}, id){
      await axios.delete(
        `https://6011797291905e0017be51c6.mockapi.io/api/v1/gifts/${id}`
      )
      commit("removeWish", id);
    }
  },
  mutations: {
    setWishes: (state, wishes) => (state.wishes = wishes),
    removeWish: (state, id) => (state.wishes = state.wishes.filter(g=>g.id != id))
  },
  modules: {},
});
