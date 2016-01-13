<template>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
            <div class="card-full-width mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">{{ project.caption }}</h2>
                </div>
                <div class="card-media mdl-card__media project-image image-responsive">
                    <img v-bind:src="project.image" border="0" alt="{{ project.caption }}">
                </div>
                <div class="mdl-card__supporting-text">
                    <div class="project-description">{{ project.description }}</div>
                    <div class="project-powered-by">Powered By: {{ project.poweredBy }}</div>
                </div>
                <div class="mdl-card__actions mdl-card--border" v-if="hasDemoLink">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect project-has-demo-link" href="{{ project.link }}" target="_blank">Open Demo</a>
                </div>
                <div class="mdl-card__actions mdl-card--border" v-if="!hasDemoLink">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect project-no-demo-link">No Demo</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.project-image {
    padding-top: 10px;
    padding-bottom: 10px;
}

.project-description {
    color: #555555;
}

.project-powered-by {
    margin-top: 10px;
    font-size: 12px;
}

.project-has-demo-link {
    color: #00BCD4 !important;
}

.project-no-demo-link {
    color: #CCCCCC !important;
}
</style>

<script>
export default {
    data() {
        return {
            project: {}
        }
    },

    computed: {
        hasDemoLink() {
            return this.project.link != ""
        }
    },

    route: {
        activate() {
            let id = this.$route.params.id;

            this.$http.get('/data/projects.json')
                .then(
                    (response) => {
                        if (response.ok) {
                            response.data.forEach((project) => {
                                if (project.id == id) {
                                    this.project = project
                                }
                            })
                        }
                    },
                    (reason) => {

                    }
                )
        }
    }
}
</script>
