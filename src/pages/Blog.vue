<template>
         <div id='blog'>
             <div id='left-content'>
                <div >
                    <input v-model="search_content" ></input><i class="fa fa-search fa-x"></i>
                </div>
                <userinfo v-bind:username="this.$store.state.bloger.name"></userinfo>
             </div>
             <div id='right-content'>
                <div id="main" v-cloak v-on:click="disableEdit">
                   <ul class='blog-operation'>
                       <li v-on:click='' v-bind:title='newtooltip'><i class="fa fa-newspaper-o fa-fw"></i></li>
                       <li v-on:click='' v-bind:title='savetooltip'><i class="fa fa-save fa-fw" ></i></li>
                       <li v-on:click.stop ='toggleEditStatus' v-bind:title='edittooltip'><i class="fa fa-edit fa-fw" ></i></li>
                       <li v-on:click='clear' v-bind:title='deletetooltip'><i class="fa fa-trash-o fa-fw" ></i></li>
                   </ul>
                   <p v-on:click.stop="toggleEditStatus" v-bind:class="{active: isActive }">{{text_content}}</p>
                </div>
             </div>
         </div>
</template>
<script>
import userinfo from "../components/userinfo"
export default{
 name:'blog',
 data:function (){
     return {
        newtooltip:'New Blog',
        savetooltip:'Save Blog',
        edittooltip:'Edit Blog',
        deletetooltip:'Clear Blog',
        isActive: false,
        text_content: 'Edit me.',
        search_content:''
    }
  },
  components: {
    userinfo
  },
  methods: {
        disableEdit: function(){
            this.isActive = false;
        },
        toggleEditStatus: function(){
            this.isActive = !this.isActive;
        },
        clear: function(){
              this.isActive = !this.isActive;
              this.text_content ='';
        }
    }

}
</script>

<style lang='scss' scoped>
#blog{
     #left-content{
         float:left;
         width:30%;

         .fa-search{
           position: relative;
           left: -20px;
         }
     }
     #right-content{
         float:left;
         width:70%;
         background-color: lightgrey;
         text-align:center;

       p{
	         font-size:22px;
	         font-weight:bold;
	         color:#6d8088;
	         height: 30px;
	         cursor:default;
          }

       p b{
	         color:#ffffff;
	         display:inline-block;
	         padding:5px 10px;
	         background-color:#c4d7e0;
	         border-radius:2px;
	         text-transform:uppercase;
	         font-size:18px;
       }

      p:before{
	       content:'✎';
	       display:inline-block;
	       margin-right:5px;
	       font-weight:normal;
	       vertical-align: text-bottom;
      }

      #main{
	          height:300px;
	          position:relative;
	          padding-top: 50px;

          .blog-operation{
            position:relative;
            float:right;
            padding-top:10px;
            padding-right:20px;
            top:-50px;
            list-style: none;
            display: inline-flex;

            li{
              margin-left: 20px;
              width:16px;
            }
         }
    }
      .active{
        margin:30px;
        border:2px dotted;
      }
  }
}
</style>
