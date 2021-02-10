<template>
  <div class="main">
    <div class="left-circle">
      <div class="left-circle-inner"></div>
    </div>
    <div class="container">
      <div class="header">
        <router-link to="/"
          ><img
            alt="logo"
            class="main-logo"
            src="./images/logo.png"
        /></router-link>
        <div style="display:flex; flex-direction:row">
          <Input type="text" v-model="user" />
          <div @click="onSearch()" style="margin:auto 0">
            <Button text="Search" />
          </div>
          <div v-if="user"
            class="search-items"
            style="height:auto ;border: 1px solid #b5b5b5;position: absolute; width: 37%; top: 75px; background: #f4f4f4; z-index: 2;"
          >
            <ul >
              <li v-for="user in searchUsers" :key="user.id">{{user.firstName}}</li>
            </ul>
          </div>
        </div>

        <div class="user-settings">
          <div class="user">
            <font-awesome-icon icon="user" class="icon" />
            <div class="profile-dropdown">
              <ul>
                <li><router-link to="/">My Wishes</router-link></li>
                <li>
                  <router-link to="/edit-profile">Edit Profile</router-link>
                </li>
                <li><router-link to="/">Sign Out</router-link></li>
              </ul>
            </div>
          </div>
          <div class="lang-switch">EN</div>
        </div>
      </div>
    </div>
    <div class="right-circle">
      <div class="right-circle-inner"></div>
    </div>
  </div>
  <router-view />
</template>

<script>
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Input,
    Button
  },
  data() {
    return {
      user: ""
      // searchUsers: []
    };
  },
  computed: {
    ...mapState(["currentUser", "users"]),
    searchUsers() {
      return this.users.filter(
        u => u.firstName.toLowerCase().includes(this.user.toLowerCase()) || u.lastName.toLowerCase().includes(this.user.toLowerCase())
      );
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  }
};
</script> 

<style>
@import "scss/style.css";
</style>
