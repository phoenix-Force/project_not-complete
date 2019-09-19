import Vuex from "vuex"
import Vue from 'vue'
Vue.use(Vuex)
import stocks from "./modules/stock.js"


const store = new Vuex.Store({

  modules: {
    stocks
  }

})
export default {
  store
}
// export const store = new Vuex.Store({


//   },
//   getters: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
