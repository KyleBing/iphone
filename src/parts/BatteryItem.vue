<template>
    <div class="battery-item">
        <div class="name">{{ itemInfo.name }}</div>
        <template v-if="itemInfo.mah">
            <div style="margin-bottom: 2px;"></div>
            <div class="mah">{{ itemInfo.mah }} mah</div>
        </template>

        <template v-if="itemInfo.wh">
            <div style="margin-bottom: 2px;"></div>
            <div class="wh">{{ itemInfo.wh }} wh</div>
        </template>
    </div>
</template>

<script>
export default {
    name: "BatteryItem",
    props: {
        itemInfo: {
            type: Object,
            default: {
                name: '',
                mah: '',
                wh: ''
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";
.battery-item{
    font-family: sans-serif;
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
    .mah{
    }
    .wh{
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

@media (prefers-color-scheme: dark) {
    .battery-item{
        .name{
            color: $dark-text;
        }
        .mah{
            color: $dark-text;
        }
        .wh{
            color: $dark-text;
        }
        border: 1px solid $dark-border;
        &:hover{
            background-color: $dark-bg-highlight;
        }
    }

}

</style>
