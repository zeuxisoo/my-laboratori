<template>
    <div class="home">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="projects.length > 0">
            <div class="columns is-multiline">
                <div class="column is-half" v-for="project in projects" v-bind:key="project.id">
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title">
                                {{ project.caption }}
                            </p>
                        </div>
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img v-bind:src="project.thumb" v-bind:alt="project.caption">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                {{ project.description }}
                            </div>
                        </div>
                        <footer class="card-footer">
                            <router-link class="card-footer-item"
                                 v-bind:to="{ name: 'project', params: { id : project.id } }">
                                More
                            </router-link>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',

    data() {
        return {
            loading: false
        }
    },

    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchProjects();
    },

    watch: {
        // call again the method if the route changes
        '$route': 'fetchProjects'
    },

    computed: {
        projects() {
            return this.$store.state.projects;
        }
    },

    methods: {
        fetchProjects() {
            try {
                this.loading = true;

                this.$store.dispatch('fetchProjects');
            }catch(error) {
                console.log(error);
            }finally{
                this.loading = false;
            }
        }
    }
}
</script>
