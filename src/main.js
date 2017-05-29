// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import func from "./common/func";
import api from "../build/server/api";
import axios from "axios";
import vuex from 'vuex';
import store from './vuex/store'

Vue.prototype.api = api;
Vue.prototype.func = func;

Vue.use(vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App></App>',
  components: {App}
})
