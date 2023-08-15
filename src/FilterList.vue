<template>
    <!-- FILTER LIST-->
    <div class="filter-list">
        <div class="iphone-tag-list">
            <div :class="['iphone-tag', {active: selectedNames.includes(item.name)}]"
                 v-for="item in iPhonesOrigin" :key="item.name_short"
                 @click="filterTagToggle(item.name)"
            >{{item.name_short}}</div>
        </div>
    </div>
</template>
<script>

export default {
    name: "FilterList",
    emits: ['updateShowingDevices'],
    props: {
        iPhonesOrigin: {
            type: Array,
            default: []
        },
    },
    data(){
        return {
            selectedNames: []
        }
    },
    created() {

    },
    mounted() {

    },
    computed: {
    },
    methods: {
        // 筛选手机信息
        filterTagToggle(deviceName) {
            if (this.selectedNames.includes(deviceName)) {
                this.selectedNames.splice(this.selectedNames.indexOf(deviceName), 1)
            } else {
                this.selectedNames.push(deviceName)
            }
            this.$emit('updateShowingDevices', this.selectedNames)
        },
    }
}
</script>

<style lang="scss">

@import "src/scss/plugin";
.filter-list{
    padding: 10px 30px 5px;
    display: flex;
    justify-content: center;
    .iphone-tag-list{
        @include border-radius(10px);
        max-width: 1440px;
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        padding: 10px;
        .iphone-tag{
            border: 1px solid $color-border;
            font-family: "Galvji";
            background-color: white;
            white-space: nowrap;
            margin-bottom: 5px;
            font-size: 13px;
            cursor: pointer;
            padding: 3px 8px;
            margin-right: 5px;
            line-height: 1.3;
            @include border-radius(3px);
            color: $text-main;
            &:hover{
                background-color: $bg-highlight;
            }
            &.active{
                background-color: #6a7282;
                border-color: transparent;
                color: white;
            }
        }
    }
}

@media (max-width: 768px){
    .filter-list{
        .iphone-tag-list{
            .iphone-tag{
                font-size: 14px;
                padding: 5px 10px;
                @include border-radius(6px);
            }
        }
    }
}

</style>

