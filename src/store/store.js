import Vuex from "vuex"
import Vue from 'vue'
Vue.use(Vuex)



export const store = new Vuex.Store({
  state: {
    stocks: [{
        id: '1',
        name: 'Apple',
        value: 2200
      },
      {
        id: '2',
        name: 'Google',
        value: 2600
      },
      {
        id: '3',
        name: 'Facebook',
        value: 1800
      },
      {
        id: '4',
        name: 'twitter',
        value: 1500
      },
      {
        id: '5',
        name: 'tata',
        value: 1690
      },
      {
        id: '6',
        name: 'IBM',
        value: 1700
      },
      {
        id: '7',
        name: 'KFC',
        value: 1650
      }
    ]

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
