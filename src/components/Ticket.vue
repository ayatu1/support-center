<template>
    <div class="ticket">
        <h2>Ticket</h2>
        <Loading v-if="remoteDataBusy"></Loading>
        <div class="empty" v-else-if="!ticket">
            Ticket not found.
        </div>
        <template v-else>
            <section class="infos">
                <div class="info">
                    Created on <strong>{{ticket.date | date}}</strong>
                </div>
                <div class="info">
                    Author <strong>{{ticket.user.username }}</strong>
                </div>
                <div class="info">
                    Status <span class="badge">{{ticket.status}}</span>
                </div>
            </section>
            <section class="content">
                <h3>{{ticket.title}}</h3>
                <p>{{ticket.description}}</p>
            </section>
        </template>
    </div>
</template>

<script>
    import RemoteData from "../mixin/RemoteData";

    export default {
        name: "Ticket",
        props: {
            id: {
               type: String,
               required: true
            }
        },
        // computed: {
        //     id() {
        //         return this.$route.params.id
        //     }
        // },
        mixins: [
            //接收id的过程是异步的，所以此处传入方法给RemoteData
            RemoteData({'ticket':() => {
                return `ticket/${this.id}`
            }})
            // RemoteData({'ticket': `ticket/${this.id}`})
        ]
    }
</script>

<style scoped>

</style>