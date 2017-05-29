<template>
   <div id="register">
      <div>
         <lable> <i class="fa fa-user-circle fa-2x fa-fw"></i></lable>
         <input placeholder='Enter an account' v-model="userAccount"></input>
      </div>
      <div>
         <lable> <i class="fa fa-key fa-2x fa-fw"></i></lable>
         <input placeholder='Enter the password' v-model="passWord"></input>
      </div>
      <div>
         <lable> <i class="fa fa-compass fa-2x fa-fw"></i></lable>
         <input placeholder='Confirm the password' v-model="confirmPassword"></input>
      </div>
      <div>
         <lable> <i class="fa fa-envelope-o fa-2x fa-fw"></i></lable>
         <input placeholder='Enter the email' v-model="email"></input>
      </div>
      <div>
          <button v-on:click='registerClick'>{{ registerBtnName }}</button>
          <button v-on:click='cancelClick'>{{ cancelBtnName }}</button>
      </div>
   </div>
</template>

<script>
export default {
  name: 'register',
  methods: {
     registerClick: function () {
         this.func.ajaxPost(this.api.register, { name:this.userAccount, password:this.passWord, email:this.email } , res => {
         if (res.data.code === 200)
         {
            this.$router.push({name: 'login'})
         }
         });
    },
    cancelClick: function () {
        this.$router.push({name: 'blog'})
        }
},
data: function () {
  return {
    userAccount:'',
    passWord:'',
    confirmPassword: '',
    email: '',
    cancelBtnName:'Cancel',
    registerBtnName:'Regiter'
  }
}
}
</script>

<style lang='scss' scoped>
#register {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  div{
      margin-bottom:30px;

  input{
  position: relative;
  top: -7px;
  margin-left: 5px;
  height: 24px;
  }
  button{
  margin-right: 30px;
  width: 100px;
  height: 28px;
  }
  }
}

</style>
