<template>
  <div>
    <div class="header">
      <router-link to="/">
        <img
          @click="goToMyWishes()"
          alt="logo"
          class="main-logo"
          src="../images/logo.png"
        />
      </router-link>
      <div class="header-right">
        <div class="user-settings">
          <div class="user">
            <font-awesome-icon icon="user" class="icon" />
            <div class="profile-dropdown">
              <ul>
                <router-link to="/">
                  <li @click="goToMyWishes()">My Wishes</li>
                </router-link>
                <router-link to="/profile">
                  <li @click="getUser(loggedUser.id)">My Profile</li>
                </router-link>
                <router-link to="/login">
                  <li @click="signOut()">Sign Out</li>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="lang-switch">EN</div>
        </div>
        <div class="search">
          <Input type="text" v-model="inputUser" />
          <div @click="onSearch()" style="margin:auto 0">
            <Button text="Search" />
          </div>
          <div v-if="inputUser" class="search-items">
            <ul>
              <li
                v-for="user in searchUsers"
                :key="user.id"
                @click="getSelectedUser(user.id)"
              >
                {{ user.firstName }} {{ user.lastName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div class="search-responsive">
        <Input type="text" v-model="inputUser" />
        <div @click="onSearch()" style="margin:auto 0">
          <Button text="Search" />
        </div>
        <div v-if="inputUser" class="search-items">
          <ul>
            <li
              v-for="user in searchUsers"
              :key="user.id"
              @click="getSelectedUser(user.id)"
            >
              {{ user.firstName }} {{ user.lastName }}
            </li>
          </ul>
        </div>
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
      inputUser: "",
      selectedUser: ""
    };
  },
  computed: {
    ...mapState(["user", "users", "loggedUser"]),
    searchUsers() {
      return this.users.filter(
        u =>
          u.firstName.toLowerCase().includes(this.inputUser.toLowerCase()) ||
          u.lastName.toLowerCase().includes(this.inputUser.toLowerCase())
      );
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchUsers", "getUser", "signOut"]),
    getSelectedUser(userId) {
      this.selectedUser = this.users.find(u => u.id === userId);
      this.inputUser =
        this.selectedUser.firstName + " " + this.selectedUser.lastName;
    },
    onSearch() {
      if (!this.inputUser) {
        return;
      }
      this.getUser(this.selectedUser.id);
      this.inputUser = "";
    },
    goToMyWishes() {
      this.getUser(this.loggedUser.id);
      this.inputUser = "";
    }
  }
};
</script>
