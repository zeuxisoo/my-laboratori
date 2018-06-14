import Vue from 'vue'
import Vuex from 'vuex'

import api from './api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: [],
        project:  {}
    },
    mutations: {
        setProjects: (state, projects) => {
            state.projects = projects;
        },

        setProject: (state, project) => {
            state.project = project;
        }
    },
    actions: {
        fetchProjects: ({ commit }) => {
            return api
                    .getAllProjects()
                    .then(response => {
                        const projects = response.data.reverse();

                        commit('setProjects', projects);

                        return projects;
                    })
        },

        fetchProject: ({ commit }, { id }) => {
            return api
                    .getAllProjects()
                    .then(response => response.data.reverse())
                    .then(projects => projects.filter(p => p.id == id))
                    .then(projects => {
                        if (projects.length != 1) {
                            return null;
                        }else{
                            const project = projects[0];

                            commit('setProject', project);

                            return project;
                        }
                    })
        }
    }
})
