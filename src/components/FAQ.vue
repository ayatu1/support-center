<template>
    <main class="faq">
        <h1>frenquently</h1>
        <div class="error" v-if="error">can't load the questions</div>
        <Loading v-if="loading"></Loading>
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
        data() {
            return {
                // questions: [],
                error: null,
                loading: false,
            }
        },
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
        mixins: [
            RemoteData({
                questionList: 'questions'
            })
        ]
    }
</script>

<style scoped>

</style>