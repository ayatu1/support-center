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
            for(const key in resources) {
                let url = resources[key]
                this.fetchResource(key, url)
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