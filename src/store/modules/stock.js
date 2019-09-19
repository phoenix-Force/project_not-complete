import stocks from "../../data/data.js"

const state = {
  stocks: []
}
const mutations = {
  'SET_STOCK'(state, stock) {
    state.stocks = stock
  },
  'RND_STOCK'(state) {

  }
}
const actions = {
  buyStock: ({
    commit
  }, order) => {
    commit();
  },
  initStock: ({
    commit
  }) => {
    commit('SET_STOCK', stocks)
  },
  randomizeStock: ({
    commit
  }) => {
    commit('RND_STOCK')
  },
  getters: {
    stocks: state => state.stocks

  }

}
export default {
  state,
  mutations,
  actions,
  getters
}
