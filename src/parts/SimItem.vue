<template>
    <div class="sim-item">
        <div class="name">{{ itemInfo.name }}</div>
        <div v-if="itemInfo.name && itemInfo.type" style="margin-bottom: 2px;"></div>
        <div class="type">{{ itemInfo.type }}</div>
    </div>
</template>

<script>
export default {
    name: "SimItem",
    props: {
        itemInfo: {
            type: Object,
            default: {
                name: '',
                type: ''
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";
.sim-item{
    min-width: 50px;
    margin-right: 5px;
    @include border-radius(3px);
    padding: 5px;
    color: $text-main;
    cursor: pointer;
    background-color: transparentize(black, 0.97);
    line-height: 1.1;
    position: relative;
    text-align: center;
    border: 1px solid transparentize(black, 0.92);
    font-size: $fz-tiny;
    .name{
        color: $text-subtitle;
        letter-spacing: 1px;
    }
    .type{
    }
    &:hover{
        background-color: white;
        border-color: $color-main;
        .name{
            font-weight: bold;
            color: $color-main;
        }
    }
}
</style>
