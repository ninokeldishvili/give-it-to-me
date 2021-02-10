<template>
  <div class="header">
    <router-link to="/">
      <img alt="logo" class="main-logo" src="../images/logo.png" />
    </router-link>
    <div class="search">
      <Input type="text" v-model="user" />
      <div @click="onSearch()" style="margin:auto 0">
        <Button text="Search" />
      </div>
      <div v-if="user" class="search-items">
        <ul>
          <router-link to="/"
            ><li
              v-for="user in searchUsers"
              :key="user.id"
              @click="getSelectedUser(user.id)"
            >
              {{ user.firstName }} {{ user.lastName }}
            </li></router-link
          >
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
</template>

<script>
import Input from "../components/Input";
import Button from "../components/Button";
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",
  components: { Input, Button },
  data() {
    return {
      user: "",
      selectedUser: ""
    };
  },
  computed: {
    ...mapState(["currentUser", "users"]),
    searchUsers() {
      return this.users.filter(
        u =>
          u.firstName.toLowerCase().includes(this.user.toLowerCase()) ||
          u.lastName.toLowerCase().includes(this.user.toLowerCase())
      );
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchUsers", "getUser"]),
    getSelectedUser(userId) {
      this.selectedUser = this.users.find(u => u.id === userId);
      this.user =
        this.selectedUser.firstName + " " + this.selectedUser.lastName;
    },
    onSearch() {
      this.getUser(this.selectedUser.id);
      this.user = "";
    }
  }
};
</script>
