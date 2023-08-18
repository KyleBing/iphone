<template>
    <div class="ad-container">
        <div class="ad"
             @mousemove="changeMousePoint"
             :style="`
             height: ${adBoardHeight}px; width: ${adBoardWidth}px;
             transform: rotateY(${x<adBoardWidth/2 ? '-': ''}${Math.abs(x-adBoardWidth/2)/adBoardWidth*rotateAngleY}deg) rotateX(-${y/adBoardHeight*rotateAngleX}deg)
             `"
        >
<!--            <h1>广告</h1>-->
<!--            <div class="controller">
                <div class="btn"></div>
                <div class="btn"></div>
            </div>-->
        </div>
    </div>
</template>

<script>
export default {
    name: "Ad3D",
    data(){
        return {
            x: 0,
            y: 0,
            adBoardWidth: 260,
            adBoardHeight: 80,
            rotateAngleY: 45,
            rotateAngleX: 15,
        }
    },
    methods: {
        changeMousePoint(event){
            this.x = event.offsetX
            this.y = event.offsetY
        }
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
        background: $gradient-bg-blue;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid white;
        box-sizing: content-box;
        @include border-radius(10px);
        transform: rotateY(45deg) rotateX(-15deg);
        h1{
            position: absolute;
            bottom: 2px;
            left: 2px;
            font-weight: normal;
            font-size: 10px;
            color: white;
        }
        .controller{
            position: absolute;
            left: 5px;
            bottom: -15px;
            display: flex;
            justify-content: flex-start;
            .btn{
                margin-right: 3px;
                width: 10px;
                height: 10px;
                background: $gradient-bg-blue;
                @include border-radius(10px);
            }
        }
    }
}

@media (prefers-color-scheme: dark) {

}


</style>
