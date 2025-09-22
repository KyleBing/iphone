<template>
    <div class="ad-container">
        <div class="ad"
             @mousemove="changeMousePoint"
             :style="`
             height: ${adBoardHeight}px; width: ${adBoardWidth}px;
             transform: rotateY(${x < adBoardWidth / 2 ? '-' : ''}${Math.abs(x - adBoardWidth / 2) / adBoardWidth * rotateAngleY}deg) rotateX(-${y / adBoardHeight * rotateAngleX}deg)
             `"
        >
            <div class="ad-qr">
                <div class="alipay-qr">
                    <img src="./qr.png" alt="">
                </div>
                <div class="alipay-desc">
                    <div class="title">
                        <img src="./alipay.svg" alt="alipaylogo">
                        <h1>支付宝红包</h1>
                    </div>
                    <p class="desc">可用于在实体店消费使用</p>
                    <p class="desc">每天可领取一次</p>
                </div>
            </div>

<!--            <h1>广告</h1>-->
<!--            <div class="controller">
                <div class="btn"></div>
                <div class="btn"></div>
            </div>-->
        </div>
    </div>
</template>

<script lang="ts" setup>

const x = ref(0)
const y = ref(0)
const adBoardWidth = ref(240)
const adBoardHeight = ref(80)
const rotateAngleY = ref(45)
const rotateAngleX = ref(15)

function changeMousePoint(event) {
    changeMousePoint(event){
        x.value = event.offsetX
        y.value = event.offsetY
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";

.ad-container{
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 600px;
    .ad{
        background-color: white;
        //background: $gradient-bg-blue;
        display: flex;
        justify-content: center;
        align-items: center;
        //border: 2px solid $aliblue;
        border: 2px solid white;
        box-sizing: content-box;
        @include border-radius(10px);
        transform: rotateY(45deg) rotateX(-15deg);

    }
}

.ad-qr{
    width: 100%;
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .alipay-qr{
        flex-shrink: 0;
        width: 60px;
        height: 60px;
        img{
            display: block;
            width: 100%;
        }
    }
    .alipay-desc{
        margin-left: 10px;
        color: $text-main;
        font-size: $fz-sm;
        .title{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img{
                display: flex;
                flex-shrink: 0;
                width: 20px;
            }
            h1{
                margin-left: 5px;
                font-size: $fz-sm + 3;
                font-weight: bold;
            }
        }
        .desc{

            color: $text-subtitle;
        }
    }
}



@media (prefers-color-scheme: dark) {

}

@media (max-width: 768px){
    .ad-container{
        margin-bottom: 20px;
    }
}


</style>
