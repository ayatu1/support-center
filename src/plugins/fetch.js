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
    } else {
        const message = await response.text()  //获取服务器返回的错误信息(一般会返回文本)
        const error = new Error(message)
        error.response = response
        throw error
    }
}