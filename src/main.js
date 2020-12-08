import Vue from 'vue'
import 'babel-polyfill'
import AppLayout from "./components/AppLayout"
import router from "./router"
import './global-components'
import VueFetch, {$fetch} from './plugins/fetch'
import state from "./state"
import VueState from './plugins/state'

Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
})

Vue.use(VueState, state)

new Vue({
  el: '#app',
  data: state,
  render(h) {
    return h(AppLayout)
  },
  // ...AppLayout,
  router,   //将路由器提供给应用
})

//当页面加载或应用启动时，向服务器发送请求检查用户是否已登录
async function main() {
  try {
    state.user = await $fetch('user')
  }catch (e) {
    console.warn(e)
  }
}

main()
