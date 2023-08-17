<template>
    <div class="image-container">
        <div class="img-frame">
            <img :src="iphone.pic" alt="icon">
        </div>
        <div class="score-bar" v-if="iphone.geekbenchScore.multi && !iphone.isTitleOnly">
            <div class="bar" :style="`width: ${iphone.geekbenchScore.multi / maxScore * 100}px`"></div>
            <div class="score">{{iphone.geekbenchScore.multi}}</div>
        </div>
        <div :class="['title', {'is-new': iphone.isNew}]">{{iphone.name}}</div>
        <div class="date">{{iphone.release}}</div>
        <div class="slogan">{{iphone.slogan}}</div>

    </div>
</template>

<script>
export default {
    name: "iPhoneImage",
    props: {
        iphone: {
            type: Object,
            default: {}
        },
        maxScore: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";
.image-container{
    width: 400px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    margin-right: 40px;
    font-family: "Galvji";
}

.img-frame {
    flex-shrink: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    img {
        height: 200px;
        display: block;
    }
}


.title{
    font-weight: bold;
    margin-top: 20px;
    font-size: $fz-big;
    color: $text-main;
    &.is-new{
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        //background-image: linear-gradient(to top right, #ff31d1, #00ceff);
        background-image: linear-gradient(90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43);
    }
}


.score-bar{
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
    .bar{
        @include border-radius(2px);
        height: 5px;
        background: $gradient-bg-green
    }
    .score{
        font-family: "sans-serif";
        margin-left: 5px;
        font-size: $fz-sm;
    }
}

.date{
    margin-top: 5px;
    font-size: $fz-date;
    color: $text-subtitle;
}


.slogan{
    background-color: $bg-highlight;
    padding: 10px;
    @include border-radius($radius);
    text-align: center;
    width: 200px;
    text-wrap: normal;
    margin-top: 10px;
    font-size: $fz-sm;
    color: $text-value;

}

@media (max-width: 450px) {
    .image-container{
        padding-top: 40px;
        width: auto;
    }
}


</style>
