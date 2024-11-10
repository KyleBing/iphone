<template>
    <!-- FILTER LIST-->
    <div class="filter-list">
        <div class="iphone-tag-list" >
           <div v-for="(iPhoneGroup, index) in iPhoneSeries" :key="index">
               <div :class="['iphone-tag', {active: selectedNames.includes(item.name)}]"
                    v-for="item in iPhoneGroup.toReversed()" :key="item.name_short"
                    @click="filterTagToggle(item.name)"
               >
                   <div class="name">{{ item.name_short }}</div>
                   <div class="year">{{ item.release.substring(0, 4) }}</div>
               </div>
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
            cursor: pointer;
            padding: 3px 8px;
            margin-right: 5px;
            @include border-radius(3px);
            .name{
                line-height: 1.3;
                font-size: 13px;
                color: $text-main;
            }
            .year{
                line-height: 1;
                color: $text-comment;
                font-size: 8px;
            }
            &:hover{
                background-color: $bg-highlight;
                .name{
                    color: $text-main;
                }
                .year{
                    color: $text-comment;
                }
            }
            &.active{
                background-color: #6a7282;
                border-color: transparent;
                .name{
                    color: white;
                }
                .year{
                    color: white;
                }
            }
        }
    }
}

@media (max-width: 768px){
    .filter-list{
        .iphone-tag-list{
            justify-content: flex-start;
            > div{
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
            }
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
                .name{
                    color: $dark-text-title;
                }
                .year{
                    color: $dark-text-title;
                }
                &:hover{
                    background-color: $dark-bg-highlight;
                    .name{
                        color: $dark-text-subtitle;
                    }
                    .year{
                        color: $dark-text-subtitle;
                    }
                }
                &.active{
                }
            }
        }
    }
}


</style>

