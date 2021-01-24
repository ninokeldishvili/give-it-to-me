<template>
<div class="header">
    <img alt="Vue logo" class="main-logo"  src="../images/logo.png">
    <div class="search">
      <input type="text" >
      <div class="search-btn">Search</div>
    </div>
    <div class="user-settings">
      <div class="user">USER</div>
      <div class="lang-switch">EN</div>
    </div>
    
</div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
