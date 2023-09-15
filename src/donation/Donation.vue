<template>
    <div class="donation-container">
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

希望这些参数页面或多或少的对你有所帮助。

## 一、网站的变迁
最初的时候这些页面运行在国外服务器上，很早之前就知道这网站的应该都知道，页面响应都不是怎么快，响应大约是 220ms 左右。

后来国外主机不稳定，经常被封 IP，就不想用它了。

后来将它移到了国内服务器，就是目前我的小阿里云主机，保留了原有的网站地址，也就是说自始至终参数页面的地址都没有变过，以后也不会变。

> 阿里云主机 5 年，总费用 ￥1721.1

移到国内之后遇到了一个新的问题，我的主机是很小带宽的： 1M，这样在加载图片的时候就会显得异常慢。

所以为了加载更快，我把图片放到了七牛云上托管，本来用 http 的时候免费流量足够用，中间把网站升级到了 https，七牛云里的图片也不得不走 https，这样就产生了一个图片流量费用，就目前的访问量来算的话，大约是 ￥10/月。

## 二、下一步
其实我是想让它自给自足的，所以我准备两个计划：

### 1. 开放打赏入口

如果你感觉这些页面对你有所帮助，并且想助网站一臂之力，可以随意打赏，请在留言中备注好自己的用户名  ^^

所有打赏朋友的用户名都将在一个赞助页面呈现，按打赏力度排序。

### 2. 以一种很优雅的方式嵌入广告

我也非常讨厌广告，之前的任何页面中都没有加过广告，也算是一种尝试，但当打赏的方式不适用时，会找一种优雅的方式嵌入广告。


`

import SwitchButton from "@/parts/SwitchButton";
import {marked} from "marked";
export default {
    name: "Donation",
    emits: ['FlipPenal'],
    components: {Ad3D, SwitchButton},
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
