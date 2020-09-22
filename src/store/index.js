import Vue from 'vue'
import Vuex from 'vuex'
import homepage from './homepage'
import setting from './setting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homepage,
    setting,
  },
})
