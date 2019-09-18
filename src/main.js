import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {
  routes
} from "./router.js"
import Vuex from "vuex"

Vue.use(VueRouter);
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
