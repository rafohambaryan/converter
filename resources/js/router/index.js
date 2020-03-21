import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component:  () =>  import('../components/fileUploadComponent.vue')
        },
        {
            path: '/file',
            component: ()=> import('../components/fileComponent.vue')
        }
    ]

});


