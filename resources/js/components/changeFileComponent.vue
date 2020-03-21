<template>
    <div class="changeContent">
        <div @click="closeChange()" class="closePopup" >
            <img src="../../assetc/img/cross.svg" alt="">
        </div>
        <textarea>{{getfileData =="[]"? '': getfileData}}</textarea>
        <button>Изменять</button>

    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "changeFile",
        components: {},
        props: [],
        computed: mapGetters(['getfileData']),
        data() {
            return {
            }
        },
        methods: {
            closeChange(){
                    this.$emit('closeChange',false)
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
            background-color: #336ff0;
            border: none;
            border-radius: 20px;
            cursor: pointer;
        }
    }

</style>
