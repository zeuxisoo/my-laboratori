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
            loading: false
        }
    },

    created() {
        this.fetchProject();
    },

    watch: {
        '$route': 'fetchProject'
    },

    computed: {
        project() {
            return this.$store.state.project;
        },

        hasDemoLink() {
            return this.project.link != "";
        }
    },

    methods: {
        async fetchProject() {
            try {
                this.loading = true;

                let project = await this.$store.dispatch('fetchProject', {
                    id: this.$route.params.id
                });

                if (project === null) {
                    alert('Cannot find the related project!');

                    this.$router.replace({
                        name: 'home'
                    });
                }
            }catch(error) {
                console.log(error);
            }finally{
                this.loading = false;
            }
        },

        back() {
            this.$router.go(-1);
        }
    }
}
</script>
