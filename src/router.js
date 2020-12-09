import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Home"
import FAQ from "./components/FAQ"
import Login from './components/Login'
import TickesLayout from "./components/TickesLayout"
import Tickets from "./components/Tickets";
import NewTicket from "./components/NewTicket";
import state from './state'

//安装此插件
Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/faq', name: 'faq', component: FAQ},
    {path: '/login', name: 'login', component: Login,
        meta: {guest: true}  //访客路由，即仅限访客浏览
    },
    {path: '/tickets', component: TickesLayout,
        meta:  {private: true},  //已登录用户的私有路由
        children: [
            {path: '', name: 'tickets', component: Tickets},
            {path: 'new', name: 'new-ticket', component: NewTicket}
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//全局前置守卫
router.beforeEach((to, from, next) => {
    const username = localStorage.getItem('username')

    if(username) {    //用户登录了
        if(to.meta.guest) {
            next({name: 'home'})
        }else {
            next()
        }
    }else {
        if(to.meta.private) {
            next({name: 'login', params: {wantedRoute: to.fullPath}})
        }else {
            next()
        }
    }
})


export default router