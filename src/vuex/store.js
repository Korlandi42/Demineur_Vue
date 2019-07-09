import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      score: 0,
      win: undefined
    },
    mutations: {
      increment (state, value) {
        state.score += value
      },
      end (state, value) {
          state.win = value
      }
    }
  })

  export default store