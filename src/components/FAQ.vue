<template>
    <main class="faq">
        <h1>frenquently</h1>
        <div class="error" v-if="hasRemoteError">can't load the questions</div>
        <Loading v-if="remoteDataBusy"></Loading>
        <section class="list">
            <article v-for="question in questionList" :key="question._id">
                <h2 v-html="question.title"></h2>
                <p v-html="question.content"></p>
            </article>
        </section>
    </main>
</template>

<script>
    import RemoteData from "../mixin/RemoteData";

    export default {
        name: "FAQ",
        mixins: [
            RemoteData({
                questionList: 'questions'
            })
        ]
        // created() {
        //     fetch(this.url + 'questions').then((response) => {
        //             if(response.ok) {
        //                 return response.json()
        //             }else {
        //                 return Promise.reject('error')
        //             }
        //         }).then((result) => {
        //             this.questions = result
        //     }).catch((e) => {
        //         this.error = e
        //     })
        // },
        // async created() {
        //     this.loading = true
        //     try {
        //         this.questions = await this.$fetch('questions')
        //     }catch (e) {
        //         this.error = e
        //     }
        //     this.loading = false
        // },
    }
</script>

<style scoped>

</style>