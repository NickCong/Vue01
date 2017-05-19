<template>
  <div id="login">
  <div>
  <lable> <i class="fa fa-user-circle fa-2x"></i></lable>
  <input placeholder='Enter an account'> </input>
  </div>
  <div>
 <lable> <i class="fa fa-key fa-2x"></i></lable>
  <input placeholder='Enter the password'> </input>
  </div>
     <button v-on:click='btnclick'>{{ btnname }}</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    btnclick: function () {
      alert('Hello')
    }
  },
  data: function () {
    return {
      btnname: 'login'
    }
  }
  }
</script>

<style>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
