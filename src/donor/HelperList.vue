<template>
    <div class="helper-container">
        <div class="helper-header">
            <div class="title">信息校正</div>
            <div class="subtitle">排名不分先后</div>
        </div>
        <div class="helper-list">
            <div class="helper-item" v-for="helper in helpers">
                <div class="name">{{helper}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";
const helpers = ref([])

onMounted(() => {
    getDonors()
})

function getDonors() {
    axios({
        url: 'http://kylebing.cn/portal/diary/get-latest-public-diary-with-keyword',
        params: {
            keyword: 'iphone-helper-list'
        }
    })
        .then(res => {
            if (res.status === 200) {
                helpers.value = []
                if (res.data.data && res.data.data.content) {
                    helpers.value = res.data.data.content.split('\n')
                }
            }
        })
        .catch(err => {
            console.log(err)
        })

}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";

.helper-container{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}
.helper-header{
    margin-bottom: 10px;
    display: flex;
    flex-flow: column;
    text-align: center;
    .title{
        font-weight: bold;
        font-size: $fz-title;
        color: $text-main;
    }
    .subtitle{
        font-size: $fz-m;
        color: $text-subtitle;
    }
}
.helper-list{
    margin: 0 auto;
    width: 80%;
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.helper-item{
    font-size: $fz-m;
    background-color: white;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid $color-border;
    padding: 5px 15px;
    @include border-radius(5px);
    display: flex;
    justify-content: flex-start;
    position: relative;
}


@media (prefers-color-scheme: dark) {
    .helper-item {
        color: $dark-text;
        background-color: $dark-bg;
        margin-bottom: 20px;
        border-color: $dark-border;
    }
    .helper-header{
        .title{
            color: $dark-text-title;
        }
        .subtitle{
            color: $dark-text-subtitle;
        }
    }
}

@media (max-width: 768px){
    .helper-list{
        width: 100%;
        padding: 20px;
        justify-content: space-between;
    }
    .helper-item {
        margin-bottom: 10px;
    }
}


</style>
