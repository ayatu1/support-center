import Vue from 'vue'
import 'babel-polyfill'
import state from "./state"
import AppLayout from "./components/AppLayout"
import router from "./router"
import './global-components'
import VueFetch, {$fetch} from './plugins/fetch'
import VueState from './plugins/state'
import * as filters from './filters'


Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
})

Vue.use(VueState, state)

//注册全局过滤器  date: function
for(let key in filters) {
  Vue.filter(key, filters[key])
}



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




