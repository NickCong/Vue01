import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
   state: {
     bloger:{
       id:'',
       name:'',
       email:''
     }
   },
   mutations:{
     updateBloger: function(state, newone){
       state.bloger.name = newone.name;
       state.bloger.email = newone.email;
     },
     initBloger: function (state, bloger){
       state.bloger.id = bloger.id;
       state.bloger.name = bloger.name;
       state.bloger.email = bloger.email;
     }
   }
})
export default store
