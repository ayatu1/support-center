<template>
    <div class="app-layout">
        <header class="header">
            <div><img src="../assets/logo.svg" alt="logo" class="img"></div>
            <div>My shirt shop</div>
        </header>

        <NavMenu>

        </NavMenu>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import NavMenu from "./NavMenu";

    export default {
        name: "AppLayout",
        components: {
            NavMenu
        }
    }
</script>

<style lang="stylus">
    @import "../style/main"
</style>

<style lang="stylus" scoped>
    .header {
        .img {
            width: 64px;
            height: 64px;
        }
    }
</style>