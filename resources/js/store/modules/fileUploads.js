import axios from "axios";

export  default {
    state: {
        data: [],
        fileData: null
    },
    getters: {
        allFilse(state){
            return state.data
        },
        getfileData(state){
            return state.fileData
        }
    },
    actions: {
        async fileUpload(ctx,data){
            try{
                const file = await axios.post(window.location.origin+'/api/file', data)
                return  file;
            }catch(error){
                throw  error
            }
        },

        async getFiles(ctx){
            try{
                const files = await axios.get(`${window.location.origin}/api/file`)
                ctx.commit('updateFiles',files.data.file)
            }catch(error){
                throw  error
            }
        },

        async deleteFile(ctx,id){
            try{
                const file= await axios.delete(`${window.location.origin}/api/file/${id}`)
                }catch(error){
                    throw  error
                }
        },

        async downloadFile(ctx,data){
            try {
                const file = await axios.post(`${window.location.origin}/api/file/convert/${data[0]}`, {format:data[1]})
                return file.data;
            } catch (error) {
                throw  error
            }
        },

        async getFile(ctx,id){
            try {
                const file = await axios.get(`${window.location.origin}/api/file/${id}`);
                console.log(file.data.file,"ggg")
                ctx.commit('fileData',file.data.file)
            } catch (error) {
                throw  error
            }
        }

    },
    mutations: {
        updateFiles(state,data){
            state.data = data
        },
        createPost(state,index){
            state.data.splice(index, 1);
        },
        fileData(state,data){
            state.fileData = data
        }
    }
}
