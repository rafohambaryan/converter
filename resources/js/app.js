require('./bootstrap');

window.Vue = require('vue');

//support vuex
import Vuex from 'vuex'

Vue.use(Vuex);
import storeData from "./store/index"
import VueRouter from 'vue-router'

const routes = [
    {path: '/', component: require('./components/ExampleComponent.vue')},
    { path: '/list', component: require('./pages/ListFiles') }
];

const store = new Vuex.Store(
    storeData
);
const router = new VueRouter({
    routes
});
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('list-files', require('./pages/ListFiles'));

const app = new Vue({
    el: '#app',
    store, //vuex
    router
});
