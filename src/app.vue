<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <div class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Labs</span>
                <div class="mdl-layout-spacer"></div>
                <div class="mdl-navigation mdl-layout--large-screen-only">
                    <a class="mdl-navigation__link" href="">Home</a>
                    <a class="mdl-navigation__link" href="">Blog</a>
                    <a class="mdl-navigation__link" href="">Profile</a>
                </div>
            </div>
        </div>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Labs</span>
            <div class="mdl-navigation">
                <a class="mdl-navigation__link" href="">Home</a>
                <a class="mdl-navigation__link" href="">Blog</a>
                <a class="mdl-navigation__link" href="">Profile</a>
            </div>
        </div>
        <div class="mdl-layout__content">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>
require('material-design-lite/dist/material.min.css')
require('material-design-lite/dist/material.min.js')

export default {
}
</script>
