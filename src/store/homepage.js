const delay = (second) => {
  return new Promise((resolve) => setTimeout(resolve, second * 1000))
}

export default {
  namespaced: true,
  state: {
    count: 0,
  },
  actions: {
    async increase2Times({ dispatch, commit }, payload) {
      await dispatch('delayAndIncrease', payload)
      console.log('after increase2Times 1')
      await dispatch('delayAndIncrease', payload)
      console.log('after increase2Times 2')
    },
    async delayAndIncrease({ dispatch, commit }, payload) {
      await delay(1)
      commit('increase', payload)
      console.log('after delayAndIncrease')
    },
    async increaseAll({ dispatch, commit }, payload) {
      await dispatch('setting/increaseSetting', payload, { root: true })
      await dispatch('delayAndIncrease', payload)
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
