<template>
    <div class="home">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="projects.length > 0">
            <div class="columns is-multiline is-mobile">
                <div class="column is-half-mobile is-half-desktop" v-for="project in projects" v-bind:key="project.id">
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
                            <a href="#" class="card-footer-item">Save</a>
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
            loading: false,
            projects: []
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

    methods: {
        async fetchProjects() {
            this.loading = true;

            try {
                let response = await this.$http.get('/data/projects.json');
                let projects = response.data.reverse();

                this.projects = projects;
                this.loading = false;
            }catch(error) {
                console.log(error);
            }
        }
    }
}
</script>
