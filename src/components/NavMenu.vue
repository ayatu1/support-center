<template>
    <nav class="menu">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'faq'}">FAQ</router-link>
        <router-link :to="{name: 'tickets'}">Support tickets</router-link>
        <div class="spacer"></div>
        <template v-if="$state.user">
            <a href="">{{$state.user.username}}</a>
            <a href="" @click="logout">Logout</a>
        </template>
        <router-link v-else :to="{name: 'login'}">Login</router-link>
    </nav>
</template>

<script>
    export default {
        name: "NavMenu",
        methods: {
            async logout() {
                const result = await this.$fetch('logout')
                if(result.states === 'ok') {
                    this.$state.user = null
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../style/imports.styl"

    .router-link-exact-active {
        border-bottom-color: $primary-color;
    }
</style>