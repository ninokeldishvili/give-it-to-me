import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    wishes: [],
    users: [],
    modalVisible: false,
    loggedUser: {},
    user: {},
  },
  getters: {
    allWishes: (state) => state.wishes,
    modalVisible: (state) => state.modalVisible,
    isLoggedInUser: (state) => state.loggedUser.id == state.user.id || !state.user.id
  },
  actions: {
    async fetchWishes({ commit }) {
      const response = await axios.get("gifts");

      commit("setWishes", response.data);
    },
    async removeWish({ commit }, id) {
      await axios.delete(`gifts/${id}`);
      commit("removeWish", id);
    },
    async addWish({ commit }, payload) {
      let data = {
        id: generateUUID(),
        title: payload.description,
        img_url:
          "https://lenergeek.com/wp-content/uploads/2019/11/france-image-marche-energie-degrade-LEnergeek.jpg",
        user_id: this.state.loggedUser.id,
        is_reserved: true,
        url: payload.url,
      };
      await axios.post("gifts/", data);
      commit("addWish", data);
      commit("hideModal");
    },
    showModal({ commit }) {
      commit("showModal");
    },
    hideModal({ commit }) {
      commit("hideModal");
    },

    async reserveWish({ commit }, wish) {
      await axios.put(`gifts/${wish.id}`, wish);
      commit("reserveWish", wish);
    },

    async fetchUsers({ commit }) {
      const response = await axios.get("users");

      commit("setUsers", response.data);
    },

    async getUser({ commit }, id) {
      let response = await axios.get(`users/${id}`);

      let user = response.data;
      commit("getUser", user);
    },

    async updateUser({ commit }, loggedUser) {
      await axios.put(`users/${loggedUser.id}`, loggedUser);
      commit("updateUser", loggedUser);
    },

    async setLoggedUser({ commit }) {
      let response = await axios.get(`users/1`);
      let user = response.data;
      commit("setLoggedUser", user);
    },

    signOut({commit}){
      commit("signOut");
    }
  },
  mutations: {
    setWishes: (state, wishes) => (state.wishes = wishes),
    setUsers: (state, users) => (state.users = users),
    removeWish: (state, id) =>
      (state.wishes = state.wishes.filter((g) => g.id != id)),
    reserveWish: (state, wish) => {
      let wishIndex = state.wishes.findIndex((w) => w.id == wish.id);
      state.wishes[wishIndex] = wish;
    },
    addWish: (state, wish) => state.wishes.unshift(wish),
    showModal: (state) => (state.modalVisible = true),
    hideModal: (state) => (state.modalVisible = false),
    getUser: (state, user) => (state.user = user),
    updateUser: (state, loggedUser) => (state.loggedUser = loggedUser),
    setLoggedUser: (state, loggedUser) => (state.loggedUser = loggedUser),
    signOut: (state) => (state.loggedUser = {}),
  },
  modules: {},
});

const generateUUID = function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
