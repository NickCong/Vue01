<template>
  <div id="login">
  <div>
  <lable> <i class="fa fa-user-circle fa-2x"></i></lable>
  <input placeholder='Enter an account' v-model="userAccount"></input>
  </div>
  <div>
 <lable> <i class="fa fa-key fa-2x"></i></lable>
  <input placeholder='Enter the password' v-model="passWord"> </input>
  </div>
  <span v-if='show'>{{errorMessage}}</span>
     <button v-on:click='btnloginclick'>{{ btnloginname }}</button>
     <button v-on:click='btnregisterclick'>{{ btnregistername }}</button>
  </div>
</template>

<script>

export default {
  name: 'login',
  methods: {
    btnloginclick: function () {
        this.show = false;
        this.func.ajaxPost(this.api.login, {name:this.userAccount, password: this.passWord }, res => {
            if (res.data.code === 200){
                if(res.data.user !=null ){
                     this.$router.push({name: 'blog'})
                 }
            }
            this.show = true;
        })
    },
    btnregisterclick: function (){
        this.$router.push({name: 'register'})
    }
   },
  data: function () {
    return {
      show:false,
      userAccount:'',
      passWord:'',
      btnloginname: '登陆',
      btnregistername: '注册',
      errorMessage:'您输入账号和密码不对'
    }
  }
  }
</script>

<style lang='scss' scoped>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  div{
     margin-bottom:30px;
  }

  input{
     position: relative;
     top: -7px;
     margin-left: 5px;
     height: 24px;
  }
  button{
     margin-right:30px;
     height:30px;
     width:100px;
  }
}

</style>
