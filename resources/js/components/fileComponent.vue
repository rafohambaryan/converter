<template>
    <div>
        <div class="card-main">
            <message v-if = "message" :message="message" class="massage" :fileId="fileId"></message>
            <changeFile v-if="changeContent" :fileId="fileId" @closeChangePopup="closeChangePopup"  @closeChange="closeChange"></changeFile>
            <format v-if="activeFormat" :fileId="fileId" @closePopup="closePopup" @errorMessage="errorMessage"></format>
            <div  v-for="(file,key) of allFilse" :key="key" class="card">
                <div @click="deleteCard(file.id,key)" class="deletFile" >
                    <img src="../../assetc/img/cross.svg" alt="">
                </div>
                <div class="card-image">
                    <img v-if="nameFile(file.name) == 'json'" src="../../assetc/img/json_file.svg" alt="">
                    <img v-else-if="nameFile(file.name) == 'xml'" src="../../assetc/img/xml_file.svg" alt="">
                    <img v-else  src="../../assetc/img/csv_file.svg" alt="">
                    </div>
                <div class="card-description">
                    <h4>{{file.name}}</h4>
                </div>
                <div class="card-button">
                    <button type="submit" @click="download(file.id)">скачать</button>
                    <button class="change" type="submit" @click="change(file.id)">Изменять</button>
                </div>
            </div>
        </div>
        <div class="cover" v-if="cover"></div>

    </div>
</template>
<script>
    import message from './message.vue'
    import format from './formatComponent.vue'
    import changeFile from './changeFileComponent.vue'
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    export default {
        name: "fileComponent",
        components: {
            message,
            format,
            changeFile
        },
        computed: mapGetters(['allFilse']),
        async mounted() {
            this.getFiles();
        },
        data() {
            return {
                cover : false,
                fileId:null,
                message:'',
                activeFormat:false,
                changeContent:false,
            }
        },
        methods: {
            ...mapActions(['getFiles','deleteFile','getFile']),
            ...mapMutations(['createPost']),
            nameFile(file){
                let fileName = file.split('.')[file.split('.').length - 1];
                return fileName;
            },
            deleteCard(id,index){
                this.deleteFile(id);
                this.createPost(index);
            },
            download(id){
                window.scrollTo(0,0)
                this.cover = true;
                this.activeFormat = true;
                this.fileId = id;
            },
            closePopup(value){
                this.cover = value;
                this.activeFormat = value;
            },
            errorMessage(value){
                this.message = value;
                setTimeout(()=>{
                    this.message ='';
                },1000)
            },
            change(id){
                self = this;
                this.getFile(id)
                    .then((res)=>{
                        window.scrollTo(0,0);
                        self.cover = true;
                        self.fileId = id;
                        self.changeContent = true;
                    }).catch((error)=>{
                        console.log(error)
                    })

            },
            closeChange(value){
                this.cover = value;
                this.changeContent = value;
            },
            closeChangePopup() {
                this.cover = false;
                this.changeContent = false;
                this.getFiles()

            }

        }
    }
</script>
<style  lang="scss" scoped >
    .massage{

        position: absolute;
        z-index: 10;
        width: 220px;

    }
    .cover{
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0,0,0,0.5);
        top: 0;
    }
    .card-main{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 20px;
        position: relative;
        .card{
            width: 240px;
            background-color: white;
            display: flex;
            flex-direction: column;
            border-radius: 15px;
            padding: 20px 30px;
            margin:20px 5px;
            position: relative;
            .deletFile{
                position: absolute;
                right: 20px;
                cursor: pointer;
                img{
                    width:20px;
                }
            }
            .card-image {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .card-description{
                h4{
                    color:rgb(39, 39, 39);
                    font-size: 17px;
                    padding-top:10px;
                    margin: 0px;
                }
                p{
                    color:rgb(100, 100, 100);
                    font-size: 13px;
                    padding-top:8px;
                    margin: 0px;
                }
            }
            .card-button{
                width: 100%;
                margin-bottom: 5px;
                border-radius: 50px;
                button{
                    margin-top: 20px;
                    border-radius: 50px;
                    width: 110px;
                    border-width: 0px;
                    color: white;
                    height: 40px;
                    border: 1px solid #14a37d;
                    background-color: rgb(20, 163, 125);
                    transition: all ease-in-out .3s;
                    margin-right: 7px;
                    &:hover{
                        cursor: pointer;
                        color: rgb(20, 163, 125);
                        background-color:  white;
                        transition: all ease-in-out .3s;
                    }
                }
                .change{
                    border: 1px solid rgb(51, 111, 240);
                    background-color: rgb(51, 111, 240);
                    &:hover{
                        cursor: pointer;
                        color: rgb(51, 111, 240);
                        background-color:  white;
                        transition: all ease-in-out .3s;
                    }
                }
            }
        }
    }
</style>
