<template>
    <div class="donation-container">
        <DonationerList/>
        <div class="announcement markdown" v-html="articleHtml"></div>
        <div class="qr-list">
            <div class="qr-code alipay">
                <img src="./alipay.jpg" alt="支付宝">
            </div>
            <div class="qr-code wechat">
                <img src="./wechat.png" alt="微信">
            </div>
        </div>
        <div class="donation-list">
            <div class="donation-person"></div>
        </div>
    </div>
</template>

<script>

import Ad3D from "@/ad/Ad3D";
const article = `
# 给读者的一封信

Hi 我是该网站的作者。

最开始的时候是先做的 iPad 参数页面，当时正想入个二手的 iPad 用，但 iPad 型号有点太多了，在没有整理这些资料之前我都不知道 iPad 的主要几个类别是什么，哪个 iPad 是哪个 iPad 都对不上。
所以为了查阅方便，就收集各方面的资料做了第一个参数页面 [iPad 参数大全](https://kylebing.cn/tools/ipad)，其中主要以 Wikipedia 为主。这下好了，哪个 iPad 是哪个 iPad 都清楚了，再估算它的价值的时候也有底了。

再后来又先后做了下面这些参数页面，因为喜欢，所以做起来比较有动力。

|页面|创建时间|
---|---
| [iPad 参数](https://kylebing.cn/tools/ipad) | 2020-04-14 |
| [苹果芯片参数](https://kylebing.cn/tools/apple-chip) | 2020-06-05 |
| [iPhone参数](https://kylebing.cn/tools/iphone) | 2020-10-20 |
| [AirPods参数](https://kylebing.cn/tools/airpods) | 2022-01-28 |
| [Apple Watch 参数](https://kylebing.cn/tools/apple-watch) | 2023-03-29 |


如果你感觉这些页面对你有所帮助，且想为网站的运营增一把力，可以选择以下任一一种方式 ;D


`

import SwitchButton from "@/parts/SwitchButton";
import {marked} from "marked";
import DonationerList from "@/donation/DonationerList";
export default {
    name: "Donation",
    emits: ['FlipPenal'],
    components: {DonationerList, Ad3D, SwitchButton},
    data(){
        return {
            article,
        }
    },
    methods: {
        changeMousePoint(event){
            this.x = event.offsetX
            this.y = event.offsetY
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

.donation-container{
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
    .donation-container{
        background-color: $dark-bg;
        border-bottom-color: $dark-border;
    }

}


</style>
