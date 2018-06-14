import Vue from 'vue'
import Axios from 'axios'

import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

Object.defineProperties(Vue.prototype, {
    $http: {
        get() {
            let agent = Axios.create({
                timeout: 3000,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            return agent;
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
