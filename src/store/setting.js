export default {
  namespaced: true,
  state: {
    count: 0,
  },
  actions: {
    async increaseSetting({ dispatch, commit }, payload) {
      commit('increase', payload)
      console.log('after increaseSetting')
    },
  },
  mutations: {
    increase(state, payload) {
      state.count += payload
    },
    decrease(state, payload) {
      state.count -= payload
    },
  },
}
