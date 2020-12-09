import state from '../state'
import router from '../router'

let baseUrl

export default {
    install(Vue, options) {
        baseUrl = options.baseUrl
        Vue.prototype.$fetch = $fetch
    }
}

export async function $fetch(url, options) {
    const finalOptions = Object.assign({}, {
        headers: {
            'Content-Type': 'application/json'   //告诉服务器我们的请求主体时Json
        },
        credentials: 'include'    //请求时携带cookie
    }, options)

    const response = await fetch(baseUrl + url, finalOptions)
    if (response.ok) {
        const data = await response.json()
        return data
    // } else if(response.status === 403) {
    //     //处理会话过期状态，服务器设置的时间到期或服务器重新启动时，
    //     localStorage.removeItem('username')
    //     state.user = null

        //如果这个路由是私有路由，就跳转到登录页面    因为服务器/login处理有错误，此处不做处理
        // if(router.currentRoute.matched.some((r) => r.meta.private)) {
        //     router.replace({name: 'login', params: {
        //             wantedRoute: router.currentRoute.fullPath
        //         }})
        // }
    } else {
        const message = await response.text()  //获取服务器返回的错误信息(一般会返回文本)
        const error = new Error(message)
        error.response = response
        throw error
    }
}