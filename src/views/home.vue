<template>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--6-col" v-for="project in projects">
            <div class="card-full-width mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">{{ project.caption }}</h2>
                </div>
                <div class="card-media mdl-card__media">
                    <img v-bind:src="project.thumb" border="0" alt="">
                </div>
                <div class="card-supporting-text mdl-card__supporting-text">
                    {{ project.description }}
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Get Detail
                    </a>
                </div>
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

.card-supporting-text.mdl-card__supporting-text {
    min-height: 40px;
}
</style>

<script>
export default {
    data() {
        return {
            projects: []
        }
    },

    ready() {
        this.$http.get('./data/projects.json')
            .then(
                (response) => {
                    if (response.ok) {
                        this.projects = response.data
                    }
                },
                (reason) => {

                }
            )
    }
}
</script>
