<template>
    <div class="donor-container">
        <DonorList/>
        <div class="announcement markdown" v-html="articleHtml"></div>
        <div class="qr-list">
            <div class="qr-code alipay">
                <img src="./alipay.jpg" alt="支付宝">
            </div>
            <div class="qr-code wechat">
                <img src="./wechat.png" alt="微信">
            </div>
        </div>
        <div class="donor-list">
            <div class="donor-person"></div>
        </div>
    </div>
</template>

<script>

import Ad3D from "@/ad/Ad3D";

import SwitchButton from "@/parts/SwitchButton";
import {marked} from "marked";
import DonorList from "@/donor/DonorList";
import axios from "axios";
export default {
    name: "Donor",
    emits: ['FlipPenal'],
    components: {DonorList, Ad3D, SwitchButton},
    data(){
        return {
            article: '',
        }
    },
    mounted() {
        this.getDonationDesc()
    },
    methods: {
        changeMousePoint(event){
            this.x = event.offsetX
            this.y = event.offsetY
        },
        getDonationDesc(){
            axios({
                url: 'https://kylebing.cn/portal/diary/get-latest-public-diary-with-keyword',
                params: {
                    keyword: 'iPhone赞赏说明'
                }
            })
                .then(res => {
                    if (res.status === 200){
                        this.article = res.data.data.content
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    computed: {
        articleHtml(){
            return marked.parse(this.article)
        }
    }
}
</script>

<style scoped lang="scss">
@import "../scss/plugin";

.donor-container{
    background-color: #f1ffef;
    padding: 50px 10px;
    border-bottom: 1px solid $color-border;
}

.announcement{
    position: relative;
    margin: 0 auto;
    max-width: 1024px;
}
.close{
    font-size: 2rem;
    @extend .btn-like;
    &:hover{
        color: $blue;
    }
}
.qr-list{
    max-width: 1024px;
    margin: 100px auto;
    display: flex;
    justify-content: space-around;
    .qr-code{
        box-sizing: content-box;
        width: 160px;
        border: 10px solid transparent;
        background-color: white;
        @include border-radius(20px);
        &.alipay{
            border-color: $blue;
        }
        &.wechat{
            border-color: $green;
        }
        img{
            @include border-radius(18px);
            overflow: hidden;
            display: block;
            width: 100%;
        }
    }
}

@media (max-width: 450px) {
    .qr-list {
        align-items: center;
        flex-flow: column nowrap;
        .qr-code{
            margin-bottom: 30px;
        }
    }
}

@media (prefers-color-scheme: dark) {
    .donor-container{
        background-color: $dark-bg;
        border-bottom-color: $dark-border;
    }

}


</style>
