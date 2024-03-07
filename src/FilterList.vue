<template>
    <!-- FILTER LIST-->
    <div class="filter-list">
        <div class="iphone-tag-list" >
           <div v-for="(iPhoneGroup, index) in iPhoneSeries" :key="index">
               <div :class="['iphone-tag', {active: selectedNames.includes(item.name)}]"
                    v-for="item in iPhoneGroup" :key="item.name_short"
                    @click="filterTagToggle(item.name)"
               >{{item.name_short}}</div>
           </div>
        </div>
    </div>
</template>
<script>

import SwitchButton from "@/parts/SwitchButton";
import {iPhoneSeries} from "@/iPhones";
export default {
    name: "FilterList",
    components: {SwitchButton},
    emits: ['updateShowingDevices'],
    props: {
        iPhonesOrigin: {
            type: Array,
            default: []
        },
    },
    data(){
        return {
            iPhoneSeries,
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
        iPhoneSeries() {
            return iPhoneSeries
        },
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
    background-color: $bg-highlight;
    padding: 20px 30px 20px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid $color-border;
    .iphone-tag-list{
        @include border-radius(10px);
        max-width: 1440px;
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        padding: 10px;
        .iphone-tag{
            min-width: 50px;
            border: 1px solid $color-border;
            font-family: "Galvji", sans-serif;
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

@media (prefers-color-scheme: dark) {
    .filter-list{
        border-bottom-color: $dark-border;
        background-color: $dark-bg;
        .iphone-tag-list{
            .iphone-tag{
                border-color: $dark-border;
                color: $dark-text;
                background-color: $dark-bg;
                &:hover{
                    background-color: $dark-bg-highlight;
                }
                &.active{
                }
            }
        }
    }
}


</style>

