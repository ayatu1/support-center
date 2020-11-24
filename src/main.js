import Vue from 'vue'
import 'babel-polyfill'
import AppLayout from "./components/AppLayout"
import router from "./router"
import './global-components'

new Vue({
  el: '#app',
  render(h) {
    return h(AppLayout)
  },
  // ...AppLayout,
  router
})