<template>
  <div class="header">
    <img alt="Vue logo" class="main-logo" src="../images/logo.png" />
    <Input type="text" :hasButton="true" btnText="Search"/>
    <div class="user-settings">
      <div class="user">USER</div>
      <div class="lang-switch">EN</div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";

export default {
  name: "Header",
  components: { Input }
};
</script>
