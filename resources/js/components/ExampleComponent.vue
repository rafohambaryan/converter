<template>
    <section class="content">
        <div class="container-fluid">
            <div class="content_upload_file">
                <form action="#" enctype='multipart/form-data'>
                    <label for="upload_file">
                        <div class="click-change-file"></div>
                    </label>
                    <input type="file" name="file" @change="previewFiles" id="upload_file">
                </form>
            </div>

        </div>
    </section>
</template>

<script>

    export default {
        name: "List",
        methods: {
            previewFiles(event) {
                let extension = event.target.files[0].name.split('.')[1];
                let file = event.target.files[0];
                if (['json', 'xml', 'csv'].includes(extension)) {
                    let form = new FormData();
                    form.append('file', file);
                    let request = new XMLHttpRequest();
                    request.open('POST', '/api/file');
                    request.send(form);
                    console.log(request.responseText)
                }
            }
        }

    };
</script>

<style scoped>
    #upload_file {
        display: none;
    }

    .click-change-file {
        width: 200px;
        height: 50px;
        cursor: pointer;
        border: 1px dotted rgba(162, 167, 172, 0.53);
        background-color: rgba(144, 149, 153, 0.22);
        margin: 0 auto;
    }
</style>
