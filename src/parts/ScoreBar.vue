<template>
    <div class="score-bar" v-if="iphone.geekbenchScore.multi">
        <div class="bar-item" :style="`width: ${150}px`">
            <div class="bar-current" :style="`width: ${iphone.geekbenchScore.multi / maxScore * 150}px`"></div>
        </div>
        <div class="score">{{iphone.geekbenchScore.multi}}</div>
    </div>
</template>

<script>
export default {
    name: "ScoreBar",
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

.score-bar{
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
    .bar-item{
        position: relative;
        .bar-current{
            @include border-radius(5px);
            background: $gradient-bg-green;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
        }
        background-color: $bg-highlight;
        @include border-radius(2px);
        height: 6px;
    }
    .score{
        font-family: "sans-serif";
        margin-left: 5px;
        font-size: $fz-sm;
    }
}

@media (prefers-color-scheme: dark) {
    .score-bar{
        .bar-item{
            background-color: $dark-bg-highlight;
            .bar-current{
                background: $gradient-bg-green;
            }
        }
        .score{
            color: $dark-text;
            font-size: $fz-sm;
        }
    }
}


</style>
