import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

var Router = new VueRouter({
    hashbang: false,
    history: true,
    saveScrollPosition: true
});

Router.map({
    '/': {
        name     : 'home',
        component: require('./views/home.vue')
    },
});

Router.start(Vue.extend(require('./app.vue')), '#app');
