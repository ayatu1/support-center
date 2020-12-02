let baseUrl


export default {
    install(Vue, options) {
        baseUrl = options.baseUrl
        Vue.prototype.$fetch = $fetch
    }
}

async function $fetch(url, options) {
    const finalOptions = Object.assign({}, {

    })

    const response = await fetch(baseUrl + url, finalOptions)
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        const error = new Error('error')
        throw error
    }



}