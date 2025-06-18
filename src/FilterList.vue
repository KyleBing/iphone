<template>
    <!-- FILTER LIST-->
    <div class="filter-list">
        <div class="iphone-tag-list" >
           <div v-for="(iPhoneGroup, index) in iPhoneSeries" :key="index">
               <div :class="['iphone-tag', {active: selectedNames.includes(item.name)}, {'is-new': item.isNew}]"
                    v-for="item in iPhoneGroup.toReversed()" :key="item.name_short"
                    @click="filterTagToggle(item.name)"
               >
                   <div class="name">{{ item.name_short }}</div>
                   <div class="year">{{ item.release.substring(0, 4) }}</div>
               </div>
           </div>
        </div>
        <div class="view-3d-button" v-if="selectedNames.length > 0" @click="showModelViewer">
            3D 尺寸对比
        </div>
        <ModelViewer 
            v-if="showViewer"
            :show="showViewer"
            :model="selectedModel"
            :models="selectedModels"
            @close="showViewer = false"
        />
    </div>
</template>
<script>

import SwitchButton from "@/parts/SwitchButton";
import {iPhoneSeries} from "@/iPhones";
import ModelViewer from "@/components/ModelViewer.vue";

export default {
    name: "FilterList",
    components: {
        SwitchButton,
        ModelViewer
    },
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
            selectedNames: [],
            showViewer: false
        }
    },
    computed: {
        selectedModel() {
            if (this.selectedNames.length > 0) {
                return this.iPhonesOrigin.find(iphone => iphone.name === this.selectedNames[0]);
            }
            return null;
        },
        selectedModels() {
            return this.selectedNames.map(name => 
                this.iPhonesOrigin.find(iphone => iphone.name === name)
            ).filter(Boolean);
        }
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
        showModelViewer() {
            this.showViewer = true;
        }
    }
}
</script>

<style lang="scss">
@import "src/scss/plugin";

.filter-list{
    background-color: $bg-highlight;
    padding: 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid $color-border;

    .view-3d-button {
        margin-top: 15px;
        padding: 8px 16px;
        background-color: #4CAF50;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background-color 0.3s;

        &:hover {
            background-color: #45a049;
        }

        i {
            font-size: 16px;
        }
    }

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
            &.is-new{
                background: linear-gradient(to top right, lighten($cyan, 50%), white);
            }
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
                &.is-new{
                    background: #6a7282!important;
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
                &.is-new{
                    background: linear-gradient(to top right, transparentize($cyan, 0.95), transparentize(white, 0.95));
                }
                &:hover{
                    background-color: $dark-bg-highlight;
                    .name{
                        color: $dark-text-title;
                    }
                    .year{
                        color: $dark-text-title;
                    }
                }
                &.active{
                    background-color: white;
                    &.is-new{
                        background: white !important;
                    }
                    .name{
                        color: black;
                    }
                    .year{
                        color: black;
                    }
                }
            }
        }
    }
}
</style>

