<template>
    <div class="form-group">
        <div v-for="file in getAllFiles">
            {{ file.name }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListFiles",
        mounted() {

            this.$store.dispatch("allFilesFromDatabase")

        },
        computed: {
            getAllFiles(){ //final output from here
                return this.$store.getters.getFilesFormGetters
            }
        },

    }
</script>

<style scoped>

</style>
