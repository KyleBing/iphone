<template>
    <div class="iphone-main-info">
        <div class="img-frame">
            <img :src="iphone.pic" alt="icon">
        </div>

        <ScoreBar :iphone="iphone" :max-score="maxScore"/>
        <div :class="['title', {'is-new': iphone.isNew}]">{{iphone.name}}</div>
        <div class="date">{{iphone.release}}</div>
        <div class="slogan" v-if="iphone.slogan">{{iphone.slogan}}</div>
    </div>
</template>

<script>
import ScoreBar from "@/parts/ScoreBar";
export default {
    name: "iPhoneMainInfo",
    components: {ScoreBar},
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
.iphone-main-info{
    width: 400px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    margin-right: 40px;
    font-family: "Galvji", sans-serif;
}

.img-frame {
    padding: 10px 20px;
    @include border-radius(10px);
    flex-shrink: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    img {
        @include border-radius(16px);
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
    .iphone-main-info{
        padding-top: 40px;
        width: auto;
    }
}

@media (prefers-color-scheme: dark) {
    .title{
        color: $dark-text-title;
    }
    .date{
        color: $dark-text;
    }
    .img-frame{
        background-color: white;
    }
    .slogan{
        background-color: transparent;
        border: 1px solid $dark-border;
        color: $dark-text-subtitle;
    }
    .score-bar{

    }
}


</style>
