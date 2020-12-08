import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Home"
import FAQ from "./components/FAQ"
import Login from './components/Login'
import TickesLayout from "./components/TickesLayout"
import state from './state'

//安装此插件
Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/faq', name: 'faq', component: FAQ},
    {path: '/login', name: 'login', component: Login},
    {path: '/tickets', name: 'tickets', component: TickesLayout,
        meta:  {private: true}
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//全局前置守卫
router.beforeEach((to, from, next) => {
    if(to.meta.private && !state.user) {
        next({name: 'login', params: {wantedRoute: to.fullPath}})
        return
    }
    next()
})


export default router