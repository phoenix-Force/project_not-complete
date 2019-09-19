import Vuex from "vuex"
import Vue from 'vue'
Vue.use(Vuex)
import stocks from "./modules/stocks.js"


export default new Vuex.Store({

  modules: {
    stocks
  }

})
// export const store = new Vuex.Store({


//   },
//   getters: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
