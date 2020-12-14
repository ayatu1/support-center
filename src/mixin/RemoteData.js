// mixin本质上是一个对象，所以此处定义一个接收参数然后返回对象的函数
// resources: 接收一个对象，键是要添加的数据属性的名称，值是需要对服务器进行请求的路径
//函数作用：1 获取远程数据  2 管理加载动画 3 管理每个资源的错误
export default function (resources) {
    return {
        data() {
            let initData = {
                //请求的数量
                remoteDataLoading: 0,
                remoteErrors: {}
            }

            //初始化initData各项
            for(const key in resources) {
                initData[key] = null
                initData.remoteErrors[key] = null
            }

            return initData
        },
        methods: {
            //从服务器获取数据
            async fetchResource(key, url) {
                this.remoteDataLoading++
                this.remoteErrors[key] = null
                try {
                    this.$data[key] = await this.$fetch(url)
                }catch (e) {
                    this.remoteErrors[key] = e
                }
                this.remoteDataLoading--
            }
        },
        created() {
            //遍历所有的url
            for(const key in resources) {
                let url = resources[key]
                if(typeof url === 'function') {
                    this.$watch('id', (val) => {
                        this.fetchResource(key, `ticket/${val}`)
                    }, {
                        immediate: true
                    })
                } else {
                    this.fetchResource(key, url)
                }
            }
        },
        computed: {
            remoteDataBusy() {
                return this.remoteDataLoading !== 0
            },
            hasRemoteError() {
                return Object.keys(this.remoteErrors).some((key) => {
                    return this.remoteErrors[key]
                })
            }
        }
    }
}