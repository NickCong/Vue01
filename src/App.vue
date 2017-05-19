<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1 class='site-title' > {{ sitetitle }} </h1>
    <div style="clear:both"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
   return {
      sitetitle:'博客园'
   }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding:20px;
  margin-left:100px;
  margin-right:100px;
}
.logo{
width:100px;
height:100px;
float:left;
}
.site-title{
margin-left: 100px;
float: left;
font-size: 40px;
}
</style>
