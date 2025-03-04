<template>
    <div class="score-container">
        <div class="label">跑分</div>
        <div class="score-bar">
            <div class="bar-item" :style="`width: ${130}px`">
                <div class="bar-current" :style="`width: ${percentage * 130}px`"></div>
            </div>
            <div class="score">
                <span>{{ iphone.geekbenchScore.multi || '×' }}</span>
                <span class="ml-2 percentage">{{ Math.floor((percentage * 100)).toFixed(0) }}%</span>
            </div>
        </div>
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
    },
    computed: {
        percentage(){
            return this.iphone.geekbenchScore.multi / this.maxScore
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";
.score-container{
    margin-top: 15px;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    .label{
        margin-right: 10px;
        font-size: $fz-sm;
        color: $text-main;
    }
}
.score-bar{
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
        .percentage{
            color: $text-main;
        }
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
            .percentage{
                color: $dark-text;
            }
        }
    }
}


</style>
