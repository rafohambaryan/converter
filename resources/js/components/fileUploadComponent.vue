<template>
    <section class="content">
        <message v-if="message" :message="message"></message>
        <div class="upload">
            <div class="upload-files">
                <header>
                    <label for="upload_file">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px"
                                 viewBox="0 0 512 512"
                                 style="enable-background:new 0 0 512 512;width: 40px;height: 40px;">
                                <g>
                                    <g>
                                        <g>
                                            <polygon
                                                    points="256.499,201.322 148.426,309.395 176.655,337.624 236.538,277.741 236.538,476.07 276.46,476.07 276.46,277.741     336.343,337.624 364.572,309.395   "
                                                    data-original="#000000" class="active-path" fill="#FFFFFF"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M416.127,193.178C413.766,106.07,342.171,35.93,254.503,35.93c-40.274,0-78.862,14.9-108.657,41.953    c-25.673,23.31-43.021,53.957-49.814,87.53c-24.27,5.219-46.423,17.773-63.563,36.25C11.531,224.239,0,253.638,0,284.444    c0,67.14,54.622,121.762,121.762,121.762c0.159,0,0.316-0.002,0.431-0.004h20.528v-39.922h-20.693l-0.38,0.004    c-45.074-0.062-81.726-36.751-81.726-81.84c0-42.365,33.031-78.196,75.199-81.571l16.568-1.326l1.697-16.533    c6.385-62.233,58.455-109.163,121.117-109.163c67.14,0,121.762,54.622,121.762,121.762v34.932h28.943    c36.872,0,66.869,29.997,66.869,66.869c0,36.872-29.997,66.869-66.869,66.869l-34.932-0.007V406.2h34.282    c0.217,0.004,0.433,0.007,0.65,0.007C464.094,406.207,512,358.3,512,299.415C512,244.214,469.905,198.662,416.127,193.178z"
                                                  data-original="#000000" class="active-path" fill="#FFFFFF"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="up">загрузить</span>
                            <span class="load">файл</span>
                        </p>
                        <input type="file" name="file" @change="previewFiles" id="upload_file">
                    </label>
                </header>
            </div>
        </div>


    </section>
</template>

<script>
    import message from './message.vue'
    import {mapActions} from 'vuex';

    export default {
        name: "List",
        components: {
            message
        },
        data() {
            return {
                g: '',
                message: '',
            }
        },
        methods: {
            ...mapActions(['fileUpload']),

            async previewFiles(event) {
                let extension = event.target.files[0].name.split('.')[event.target.files[0].name.split('.').length - 1];
                let file = event.target.files[0];
                if (['json', 'xml', 'csv'].includes(extension)) {
                    let form = new FormData();
                    let self = this;
                    form.append('file', file);
                    this.fileUpload(form)
                        .then((res) => {
                            self.$router.push('/file')
                        })
                        .catch(function (error) {
                           self.message = 'Что-то пошло не так';
                            setTimeout(() => {
                                self.message = '';
                            }, 2000)
                        });
                } else {
                    this.message = "файл должен быть в формате json, xml, csv";
                    setTimeout(() => {
                        this.message = '';
                    }, 2000)

                }
            },
        }
    };
</script>

<style lang="scss" scoped>
    $skin: #4db6ac;
    #upload_file {
        display: none;
    }


    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .upload {
        position: relative;
        width: 400px;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(black, .2);
        background: #fff;
        animation: fadeup .5s .5s ease both;
        transform: translateY(20px);
        opacity: 0;
        position: absolute;
        margin-top: 150px;

        .upload-files {
            header {
                background: $skin;
                border-radius: 5px;
                text-align: center;

                p {
                    color: #fff;
                    font-size: 33px;
                    margin: 0;
                    padding: 50px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    svg {
                        transform: translateY(20px);
                        opacity: 0;
                        font-size: 30px;
                        animation: fadeup .5s 1s ease both;
                        margin-right: 10px;
                    }

                    .up {
                        font-weight: bold;
                        transform: translateX(-20px);
                        display: inline-block;
                        opacity: 0;
                        margin-right: 13px;
                        animation: faderight .5s 1.5s ease both;
                    }

                    .load {
                        display: inline-block;
                        font-weight: 100;
                        margin-left: -8px;
                        transform: translateX(-20px);
                        opacity: 0;
                        animation: faderight 1s 1.5s ease both;
                    }
                }
            }

            .body {
                text-align: center;
                padding: 50px 0;
                padding-bottom: 30px;

                &.hidden {
                    display: none;
                }

                input {
                    visibility: hidden;
                }

                p {
                    font-size: 14px;
                    padding-top: 15px;
                    line-height: 1.4;

                    b,
                    a {
                        color: $skin;
                    }
                }

                &.active {
                    border: dashed 2px $skin;

                    i {
                        box-shadow: 0 0 0 -3px #fff,
                        0 0 0 lightgray,
                        0 0 0 -3px #fff,
                        0 0 0 lightgray;
                        animation: file .5s ease both;
                    }

                    @keyframes file {
                        50% {
                            box-shadow: -8px 8px 0 -3px #fff,
                            -8px 8px 0 lightgray,
                            -8px 8px 0 -3px #fff,
                            -8px 8px 0 lightgray;
                        }
                        75%,
                        100% {
                            box-shadow: -8px 8px 0 -3px #fff,
                            -8px 8px 0 lightgray,
                            -16px 16px 0 -3px #fff,
                            -16px 16px 0 lightgray;
                        }
                    }

                    .pointer-none {
                        pointer-events: none;
                    }
                }
            }

            footer {
                width: 100%;
                margin: 0 auto;
                height: 0;

                .divider {
                    margin: 0 auto;
                    width: 0;
                    border-top: solid 4px darken($skin, 3.5%);
                    text-align: center;
                    overflow: hidden;
                    transition: width .5s ease;

                    span {
                        display: inline-block;
                        transform: translateY(-25px);
                        font-size: 12px;
                        padding-top: 8px;
                    }
                }

                &.hasFiles {
                    height: auto;

                    .divider {
                        width: 100%;

                        span {
                            transform: translateY(0);
                            transition: transform .5s .5s ease;
                        }
                    }
                }

                .list-files {
                    width: 320px;
                    margin: 0 auto;
                    margin-top: 15px;
                    padding-left: 5px;
                    text-align: center;
                    overflow-x: hidden;
                    overflow-y: auto;
                    max-height: 210px;

                    &::-webkit-scrollbar-track {
                        background-color: rgba(lightgray, .25);
                    }

                    &::-webkit-scrollbar {
                        width: 4px;
                        background-color: rgba(lightgray, .25);
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: rgba($skin, .5);
                    }

                    .file {
                        width: 300px;
                        min-height: 50px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        opacity: 0;
                        animation: fade .35s ease both;

                        .name {
                            font-size: 12px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            width: 80px;
                            text-align: left;
                        }

                        .progress {
                            width: 175px;
                            height: 5px;
                            border: solid 1px lightgray;
                            border-radius: 2px;
                            background: linear-gradient(to left, rgba($skin, .2), rgba($skin, .8)) no-repeat;
                            background-size: 100% 100%;

                            &.active {
                                animation: progress 30s linear;
                            }
                        }

                        @keyframes progress {
                            from {
                                background-size: 0 100%;
                            }
                            to {
                                background-size: 100% 100%;
                            }
                        }

                        .done {
                            cursor: pointer;
                            width: 40px;
                            height: 40px;
                            background: $skin;
                            border-radius: 50%;
                            margin-left: -10px;
                            transform: scale(0);
                            position: relative;

                            &:before {
                                content: "View";
                                position: absolute;
                                top: 0;
                                left: -5px;
                                font-size: 24px;
                                opacity: 0;
                            }

                            &:hover:before {
                                transition: all .25s ease;
                                top: -30px;
                                opacity: 1;
                            }

                            &.anim {
                                animation: done1 .5s ease forwards;

                                #path {
                                    animation: done2 2.5s .5s ease forwards;
                                }
                            }

                        }

                        @keyframes done2 {
                            to {
                                stroke-dashoffset: 0;
                            }
                        }
                        @keyframes done1 {
                            50% {
                                transform: scale(.5);
                                opacity: 1;
                            }
                            80% {
                                transform: scale(.25);
                                opacity: 1;
                            }
                            100% {
                                transform: scale(.5);
                                opacity: 1;
                            }
                        }
                    }
                }

                .importar {
                    outline: none;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 20px;
                    margin: auto;
                    border: solid 1px $skin;
                    color: $skin;
                    background: transparent;
                    padding: 8px 15px;
                    font-size: 12px;
                    border-radius: 4px;
                    font-family: Roboto;
                    line-height: 1;
                    cursor: pointer;
                    transform: translateY(15px);
                    opacity: 0;
                    visibility: hidden;
                    margin-left: calc(50% - 40px);

                    &.active {
                        transition: transform .5s 1.5s ease, opacity .5s 1.5s ease, background;
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                    }

                    &:hover {
                        background: $skin;
                        color: #fff;
                    }
                }
            }
        }

        @keyframes fadeup {
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        @keyframes faderight {
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes fade {
            to {
                opacity: 1;
            }
        }
        @media (max-width: 400px) {
            width: 100%;
            height: 100%;
        }
    }


</style>
