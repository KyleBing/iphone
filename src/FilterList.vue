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
</style>

