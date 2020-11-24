export default function (resources) {
    return {
        data() {
            let initData = {
                // remoteDataLoading: 0
            }

            //初始化initData各项
            for(const key in resources) {
                initData[key] = null
            }

            return initData
        },
        methods: {
            async fetchResource(key, url) {
                this.loading = true
                try {
                    this.$data[key] = await this.$fetch(url)
                }catch (e) {
                    this.error = e
                }
                this.loading = false
            }
        },
        created() {
            for(const key in resources) {
                let url = resources[key]
                this.fetchResource(key, url)
            }
        }
    }
}