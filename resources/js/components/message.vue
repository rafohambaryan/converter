<template>
    <div>
        <div class="messageContent">
            <div class="message">
                <div class="mb-1 pt-2 bg-danger" variant="danger">
                    <h5 class="text-white">{{message}}</h5></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "message",
        components: {},
        props: ['message'],
        data() {
            return {
            }
        },
        methods: {


        }
    }
</script>
<style  lang="scss" scoped >
    .messageContent{
        background-color: #fd7570 !important;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
        height: 60px;
        position: absolute;
        width: 422px;
        bottom: -100px;
        right: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
    h5{
        font-size: 20px;
        color: white;
        margin: 0;
    }
    }

</style>
