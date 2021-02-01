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
    async removeWish({ commit }, id) {
      await axios.delete(
        `https://6011797291905e0017be51c6.mockapi.io/api/v1/gifts/${id}`
      );
      commit("removeWish", id);
    },
    async addWish({ commit }, wish) {
      var data = {
        id: generateUUID(),
        title: wish.title,
        img_url:
          "https://lenergeek.com/wp-content/uploads/2019/11/france-image-marche-energie-degrade-LEnergeek.jpg",
        user_id: 1,
        status: false,
        url: wish.url,
      };

      await axios.post('https://6011797291905e0017be51c6.mockapi.io/api/v1/gifts/', data)
      commit("addWish", data);
    },
    
  },
  mutations: {
    setWishes: (state, wishes) => (state.wishes = wishes),
    removeWish: (state, id) =>
      (state.wishes = state.wishes.filter((g) => g.id != id)),
    addWish: (state, wish) => state.wishes.unshift(wish),
  },
  modules: {},
});


const generateUUID = function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c){
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}