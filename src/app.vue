<template>
    <div id="app">
        <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link :to="{ name: 'home' }" class="navbar-item">Lab</router-link>

                <a role="button"
                    class="navbar-burger burger"
                    v-on:click="show_navbar = !show_navbar"
                    v-bind:class="{ 'is-active': show_navbar }">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu" v-bind:class="{ 'is-active': show_navbar }">
                <div class="navbar-end">
                    <router-link :to="{ name: 'home' }" class="navbar-item">Home</router-link>
                    <a href="https://www.not.im/" class="navbar-item">Blog</a>
                    <a href="https://project.not.im/" class="navbar-item">Project</a>
                </div>
            </div>
        </nav>
        <div class="section is-small">
            <div class="container is-fluid">
                <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut">
                    <router-view class="animated"></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '~animate.css';
@import '~bulma';

body {
    padding-top: 60px;
}

#app {
    font-family: 'Titillium Web', sans-serif;
}

.is-small {
    padding: 0px 5px;
}
</style>

<script>
export default {

    data() {
        return {
            show_navbar: false,
            transition_name: 'fade-enter'
        }
    }

}
</script>
