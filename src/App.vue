<template>


  <div class="main">
    <div class="left-circle" style="display:none">
      <div class="left-circle-inner"></div>
    </div>
    <div class="container">
      <div class="header">
        <router-link to="/"><img alt="logo" class="main-logo" src="./images/logo.png"/></router-link>
        <Input type="text" :hasButton="true" btnText="Search" />
        <div class="user-settings">
          <div class="user">
            <font-awesome-icon icon="user" class="icon" />
            <div class="profile-dropdown">
              <ul>
                <li>My Wishes</li>
                <li>Edit Profile</li>
                <li>Sign Out</li>
              </ul>
            </div>
          </div>
          <div class="lang-switch">EN</div>
        </div>
      </div>

    </div>
    <div class="right-circle" style="display:none" >
      <div class="right-circle-inner"></div>
    </div>
  </div>

  <router-view />
</template>

<script>
import Input from "./components/Input.vue";


export default {
  name: "App",
  components: {
    Input
  }
};
</script> 

<style>
@import "scss/style.css";
</style>
