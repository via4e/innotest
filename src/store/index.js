import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: {},
    current: { id: 0, children: [] }
  },
  getters: {},
  mutations: {
    SETDB (state, payload) {
      state.db = payload
    },
    SETCURRENT (state, payload) {
      console.log('set', payload)
      state.current = payload
    },    
  },
  actions: {
    SETDB (context, payload) {
      context.commit('SETDB', payload)
    },
  },
})
