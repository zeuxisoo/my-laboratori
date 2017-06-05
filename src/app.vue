<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <div class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Lab</span>
                <div class="mdl-layout-spacer"></div>
                <div class="mdl-navigation mdl-layout--large-screen-only">
                    <a class="mdl-navigation__link" v-link="{ name: 'home' }">Home</a>
                    <a class="mdl-navigation__link" href="https://www.not.im/">Blog</a>
                    <a class="mdl-navigation__link" href="https://project.not.im/">Project</a>
                </div>
            </div>
        </div>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Lab</span>
            <div class="mdl-navigation">
                <a class="mdl-navigation__link" v-link="{ name: 'home' }">Home</a>
                <a class="mdl-navigation__link" href="https://www.not.im/">Blog</a>
                <a class="mdl-navigation__link" href="https://project.not.im/">Project</a>
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
.card-full-width.mdl-card {
    width: 100%;
}

.card-media.mdl-card__media {
    text-align: center;
    background: #CCF1F6;
}

.image-responsive img {
    max-width: 100% !important;
    height: auto;
    display: inline-block;
}
</style>

<script>
require('material-design-lite/dist/material.min.css')
require('material-design-lite/dist/material.min.js')

export default {
}
</script>
