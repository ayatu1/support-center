<template>
    <div class="tickets">
        <Loading v-if="remoteDataBusy"></Loading>
        <div class="empty" v-else-if="tickets.length === 0">you don't have any ticket yet</div>
        <section v-else class="tickets-list">
            <div v-for="(ticket, index) in tickets" class="ticket-item" :key="index">
                <span>{{ticket.title}}</span>
                <span class="badge">{{ticket.status}}</span>
                <span class="date">{{ticket.date | date}}</span>
            </div>
        </section>
    </div>
</template>

<script>
    import RemoteData from "../mixin/RemoteData";

    export default {
        name: "Tickets",
        mixins: [RemoteData({tickets: 'tickets'})]
    }
</script>

<style scoped>

</style>