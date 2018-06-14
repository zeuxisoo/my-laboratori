import Vue from 'vue'

import router from './router'
import store from './store'
import api from './api'

import App from './App.vue'

Vue.config.productionTip = false

Object.defineProperties(Vue.prototype, {
    $http: {
        get() {
            return api.agent;
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
