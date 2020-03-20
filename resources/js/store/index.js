export default {

    state: {

        file: []

    },

    getters: {

        getFilesFormGetters(state) { //take parameter state

            return state.file
        }
    },

    actions: {
        allFilesFromDatabase(context) {

            axios.get("api/file")

                .then((response) => {
                    context.commit("file", response.data.file) //categories will be run from mutation

                })

                .catch(() => {

                    console.log("Error..")

                })
        }
    },

    mutations: {
        file(state, data) {
            return state.file = data
        }
    }
}
