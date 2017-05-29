<template>
  <div id="app">
     <div id='logoandtitle'>
         <img class="logo" src="./assets/logo.png">
         <span class='site-title' > {{ sitetitle }} </span>
     </div>
    <div style="clear:both"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
   return {
      sitetitle:'博 客 园'
   }
  }
}
</script>

<style>
body{
background-color: #eff4f8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding:20px;
  padding-top:0;
  margin-left:100px;
  margin-right:100px;
}
#logoandtitle{
   text-align: center;
   background-color: #eff4f8;
   //ackground-image:url('./assets/header01.jpg');
}
.logo{
width:200px;
height:200px;
}
.site-title{
    margin-left: 50px;
    font-size: 50px;
    position: relative;
    top: -80px;}
</style>
