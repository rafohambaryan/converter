<template>
    <div class="popupFormat">
        <div @click="close()" class="closePopup" >
            <img src="../../assetc/img/cross1.svg" alt="">
        </div>
        <div>
            <label class="radio">
                <input type="radio" name="r" value="json" v-model="picked">
                <span>json</span>
            </label>
            <label class="radio">
                <input type="radio" name="r" value="csv" v-model="picked">
                <span>csv</span>
            </label>
            <label class="radio">
                <input type="radio" name="r"  value="xml" v-model="picked">
                <span>xml</span>
            </label>
        </div>
        <div @click="download()">скачать</div>
    </div>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex';
    export default {
        name: "format",
        components: {},
        props: ['fileId'],

        data() {
            return {
                picked:'',
            }
        },
        methods: {
            ...mapActions(['downloadFile']),
            download(){
                if(this.picked != ''){
                let data = [this.fileId,this.picked];
                this.downloadFile(data)
                    .then((res)=>{
                       let element = document.createElement('a');
                        element.setAttribute('href', `${window.location.origin}${res.path}`);
                        element.setAttribute('download',`${window.location.origin}${res.path}`);
                        element.style.display = 'none';
                        document.body.appendChild(element);
                        element.click();
                        document.body.removeChild(element);
                        this.$emit('closePopup',false)

                    }).catch((error)=>{
                        console.log(error)
                })}else{
                    this.$emit('errorMessage','Выберите формат')
                }

            },
            close(){
                this.$emit('closePopup',false)
            },
            getUserDocs: function (pahe) {
                return `${window.location.origin}/${pahe}`
            },

        }
    }
</script>
<style  lang="scss" scoped >
    $radioSize: 22px;
    $radioBorder: #D1D7E3;
    $radioActive: #5D9BFB;
    .closePopup{
    position: absolute;
    right: 20px;
        cursor: pointer;
        img{
            width: 20px;
        }
    }
.popupFormat{
    position: absolute;
    z-index: 5;
    background: white;
    padding: 25px;
    width: 160px;
    border-radius: 25px;
    top: 250px;
    left: 50%;
    transform: translate(-50%,-50%);
    .radio {
        margin: 16px 0;
        display: block;
        cursor: pointer;
        width: 60px;
        input {
            display: none;
            & + span {
                line-height: $radioSize;
                height: $radioSize;
                padding-left: $radioSize;
                display: block;
                position: relative;
                &:not(:empty) {
                    padding-left: $radioSize + 8;
                }
                &:before,
                &:after {
                    content: '';
                    width: $radioSize;
                    height: $radioSize;
                    display: block;
                    border-radius: 50%;
                    left: 0;
                    top: 0;
                    position: absolute;
                }
                &:before {
                    background: $radioBorder;
                    transition: background .2s ease, transform .4s cubic-bezier(.175, .885, .32, 2);
                }
                &:after {
                    background: #fff;
                    transform: scale(.78);
                    transition: transform .6s cubic-bezier(.175, .885, .32, 1.4);
                }
            }
            &:checked + span {
                &:before {
                    transform: scale(1.04);
                    background: $radioActive;
                }
                &:after {
                    transform: scale(.4);
                    transition: transform .3s ease;
                }
            }
        }
        &:hover {
            input {
                & + span {
                    &:before {
                        transform: scale(.92);
                    }
                    &:after {
                        transform: scale(.74);
                    }
                }
                &:checked + span {
                    &:after {
                        transform: scale(.4);
                    }
                }
            }
        }
    }
    > div:nth-child(3){
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
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            cursor: pointer;
            color: rgb(20, 163, 125);
            background-color:  white;
            transition: all ease-in-out .3s;
        }
    }
}
</style>
