import Vue from 'vue'
// import './use-antd'
import Root from './Root'
import router from './router'

new Vue({
  router,
  //   store,
  render: (h) => h(Root)
}).$mount('#app')
