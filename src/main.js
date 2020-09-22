import Vue from 'vue'
import Root from './Root'
import router from './router'
import store from './store'
import './use-antd'

new Vue({
  router,
  store,
  render: (h) => h(Root),
}).$mount('#app')
