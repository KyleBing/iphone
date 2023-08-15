<template>
    <div class="tip storage">
        <template v-if="isNaN(storage)">
            <div>
                {{storage}}
            </div>
        </template>
        <template v-else>
            <div v-if="storage < 1000">
                {{storage}}
                <span class="sup">GB</span>
            </div>
            <div v-else>
                {{storage / 1024}}
                <span class="sup">TB</span>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: "StorageItem",
    props: {
        storage: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";
.storage{
    text-align: center;
    min-width: 30px;
    position: relative;
    cursor: pointer;
    padding: 1px 5px;
    @include border-radius(3px);
    color: $text-value;
    margin-right: 10px;
    &:last-child{
        margin-right: 0;
    }
    .sup{
        border-color: $color-main;
        z-index: 100;
        display: none;
    }
    &.storage{
        border-color: transparent !important;
        background-color: $bg-storage;
        color: white;
    }
}

</style>
