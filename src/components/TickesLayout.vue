<template>
    <main class="tickets-layout">
        <h1>your support tickets</h1>
        <div class="actions">
            <router-link
                v-if="$route.name !== 'tickets'"
                tag="button"
                class="secondary"
                :to="{name: 'tickets'}"
            >
                see all tickets
            </router-link>
            <router-link
                v-if="$route.name !== 'new-ticket'"
                tag="button"
                :to="{name: 'new-ticket'}"
            >
                new tickets
            </router-link>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
    export default {
        name: "TickesLayout"
    }
</script>

<style scoped>

</style>