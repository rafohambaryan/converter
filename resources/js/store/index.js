import  Vue from 'vue'
import Vuex from 'vuex'
import fillUploads from './modules/fileUploads'
Vue.use(Vuex);

export  default new Vuex.Store({
    modules:{
        fillUploads
    }
})
