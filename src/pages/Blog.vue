<template>
         <div id='blog'>
             <div id='left-content'>
                <div >
                    <input ></input><i class="fa fa-search fa-x"></i>
                </div>
             </div>
             <div id='right-content'>
                <div id="main" v-cloak v-on:click="hideTooltip">
                   <ul class='blog-operation'>
                       <li v-on:click=''><i class="fa fa-newspaper-o fa-2x"></i></li>
                       <li v-on:click=''><i class="fa fa-save fa-2x" ></i></li>
                       <li v-on:click='toggleTooltip'><i class="fa fa-edit fa-2x" ></i></li>
                       <li v-on:click='clear'><i class="fa fa-trash-o fa-2x" ></i></li>
                   </ul>
                   <div class="tooltip" v-on:click.stop v-if="show_tooltip">
                      <input type="text" v-model="text_content" />
                   </div>
                   <p v-on:click.stop="toggleTooltip">{{text_content}}</p>
                </div>
             </div>
         </div>
</template>
<script>
export default{
 name:'blog',
 data:function (){
     return {
        show_tooltip: false,
        text_content: 'Edit me.'
    }
    },
    methods: {
        hideTooltip: function(){
            this.show_tooltip = false;
        },
        toggleTooltip: function(){
            this.show_tooltip = !this.show_tooltip;
        },
        clear: function(){
              this.show_tooltip = !this.show_tooltip;
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
         background-color:white;
     }
     #right-content{
         float:left;
         width:70%;
         background-color: lightgrey;
         text-align:center;


[v-cloak] {
  display: none;
}

*{
	margin:0;
	padding:0;
}


a, a:visited {
	outline:none;
	color:#389dc1;
}

a:hover{
	text-decoration:none;
}

section, footer, header, aside, nav{
	display: block;
}


/*-------------------------
	The edit tooltip
--------------------------*/

.tooltip{
	background-color:#5c9bb7;

	background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
	background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
	background-image:linear-gradient(top, #5c9bb7, #5392ad);

	box-shadow: 0 1px 1px #ccc;
	border-radius:3px;
	width: 290px;
	padding: 10px;

	position: absolute;
	left:50%;
	margin-left:-150px;
	top: 80px;
}

.tooltip:after{
	/* The tip of the tooltip */
	content:'';
	position:absolute;
	border:6px solid #5190ac;
	border-color:#5190ac transparent transparent;
	width:0;
	height:0;
	bottom:-12px;
	left:50%;
	margin-left:-6px;
}

.tooltip input{
	border: none;
	width: 100%;
	line-height: 34px;
	border-radius: 3px;
	box-shadow: 0 2px 6px #bbb inset;
	text-align: center;
	font-size: 16px;
	font-family: inherit;
	color: #8d9395;
	font-weight: bold;
	outline: none;
}

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
      }
  }
}
      }
   }
</style>
