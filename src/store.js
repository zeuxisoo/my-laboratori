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
        }
    },
    actions: {
        fetchProjects: ({ commit }) => {
            return api
                    .getAllProjects()
                    .then(response => {
                        let projects = response.data.reverse();

                        commit('setProjects', projects);
                    })
        }
    }
})
