<template>
    <div class="project">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="project != null">
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title">
                        {{ project.caption }}
                    </p>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img v-bind:src="project.image" v-bind:alt="project.caption">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        {{ project.description }}
                        <div class="powered-by">
                            Powered By: {{ project.poweredBy }}
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item" v-on:click="back()">Back</a>
                    <a class="card-footer-item" v-if="hasDemoLink === false">No Demo</a>
                    <a class="card-footer-item" target="_blank"
                        v-if="hasDemoLink === true"
                        v-bind:href="this.project.link">
                        Open Demo
                    </a>
                </footer>
            </div>
        </div>
    </div>
</template>

<style scoped>
.powered-by {
    padding-top: 10px;
    font-size: 12px;
}
</style>

<script>
export default {
    name: 'project',

    data() {
        return {
            loading: false,
            project: null
        }
    },

    created() {
        this.fetchProject();
    },

    watch: {
        '$route': 'fetchProject'
    },

    computed: {
        hasDemoLink() {
            return this.project.link != ""
        }
    },

    methods: {
        async fetchProject() {
            this.loading = true;

            try {
                let project_id = this.$route.params.id;
                let response   = await this.$http.get('/data/projects.json');
                let projects   = response.data.reverse();

                let matched_project = null;

                for(let i in projects) {
                    let project = projects[i];

                    if (project.id == project_id) {
                        matched_project = project;
                        break;
                    }
                }

                this.project = matched_project;
                this.loading = false;
            }catch(error) {
                console.log(error);
            }
        },

        back() {
            this.$router.go(-1);
        }
    }
}
</script>
