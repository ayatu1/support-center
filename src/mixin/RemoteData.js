export default function (resources) {
    return {
        data() {
            let initData = {
                //请求的数量
                remoteDataLoading: 0
            }

            //初始化initData各项
            for(const key in resources) {
                initData[key] = null
            }

            return initData
        },
        methods: {
            async fetchResource(key, url) {
                this.remoteDataLoading++
                try {
                    this.$data[key] = await this.$fetch(url)
                }catch (e) {
                    this.error = e
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
            }
        }
    }
}