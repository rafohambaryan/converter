<template>
    <div class="changeContent">
        <div @click="closeChange()" class="closePopup" >
            <img src="../../assetc/img/cross1.svg" alt="">
        </div>
        <textarea v-model="message"></textarea>
        <button @click="changefile()">Изменять</button>

    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "changeFile",
        components: {

        },
        props: ['fileId'],
        computed: {
            ...mapGetters(['getfileData']),

        },
        data() {
            return {
            }
        },
        created(){
            this.message  = this.getfileData.file
        },
        methods: {
            ...mapActions(['chenge']),
            closeChange(){
                    this.$emit('closeChange',false)
            },
            changefile(){

                let data = [this.fileId,{file: this.message, format: this.getfileData.JSon.pare(format)}]
                this.chenge(data)
                    .then((res)=>{
                        console.log(res);
                        this.$emit('closeChangePopup',false)
                    }).catch(err=>{
                        console.log(err)
                })
            }

        }
    }
</script>
<style  lang="scss" scoped >
    .changeContent{
        background-color: white;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        padding: 20px 30px;
        margin: 20px 5px;
        position: absolute;
        z-index: 5;
        .closePopup{
            position: absolute;
            right: 15px;
            cursor: pointer;
            img{
                width: 20px;
            }
        }
        textarea{
            height: 253px;
            width: 823px;
            border-radius: 4px;
            margin: 8px 0px 0px;
            border: 1px solid rgb(220, 227, 234);
            padding: 20px;
            font-size: 14px;
            line-height: 24px;
            resize: vertical;
            overflow: auto;
            margin-top: 30px;
        }
        button{
            width: 150px;
            margin-top: 17px;
            height: 40px;
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
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

</style>
