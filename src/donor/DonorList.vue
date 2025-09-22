<template>
    <div class="donor-container">
        <div class="donor-header">
            <div class="title">赞赏列表</div>
        </div>
        <div class="donor-list">
            <div class="donor-item" v-for="item in donors">
                <div class="name">{{ item.name }}</div>
<!--                <div class="amount"><span class="flag">￥</span>{{ item.amount }}</div>-->
<!--                <div class="method">{{item.method}}</div>-->
<!--                <div class="date">{{item.date}}</div>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";

const donors = ref([])  // 2023-10-19,微信,无名,6

onMounted(() => {
    getDonors()
})

function getDonors() {
    axios({
        url: 'http://kylebing.cn/portal/diary/get-latest-public-diary-with-keyword',
        params: {
            keyword: 'iphone-donor-list'
        }
    })
        .then(res => {
            if (res.status === 200) {
                donors.value = []
                let donorListStr = res.data.data.content
                donorListStr && donorListStr.split('\n').forEach(str => {
                    let tempArray = str.split(',')
                    donors.value.push({
                        date: tempArray[0],
                        method: tempArray[1],
                        name: tempArray[2],
                        amount: Number(tempArray[3]),
                    })
                })
                donors.value.sort((a, b) => b.amount - a.amount)
            }
        })
        .catch(err => {
            console.log(err)
        })
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";

.donor-container{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}
.donor-header{
    display: flex;
    flex-flow: column;
    text-align: center;
    margin-bottom: 10px;
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
.donor-list{
    margin: 0 auto;
    width: 80%;
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.donor-item{
    background-color: white;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid $color-border;
    padding: 5px 15px;
    @include border-radius(5px);
    display: flex;
    justify-content: flex-start;
    position: relative;
    .amount{
        .flag{
            font-size: $fz-tiny;
        }
        cursor: pointer;
        transition: all 0.3s;
        @include box-shadow(1px 1px 3px transparentize(black, 0.8));
        font-size: $fz-sm;
        z-index: 10;
        position: absolute;
        top: -15px;
        right: -20px;
        border: 1px solid $color-border;
        background-color: white;
        color: $text-main;
        padding: 3px 10px;
        @include border-radius(30px)
    }
    &:hover{
        .amount{
            transition: all 0.3s;
            font-size: $fz-big;
        }
    }
}


@media (prefers-color-scheme: dark) {
    .donor-item {
        color: $dark-text;
        background-color: $dark-bg;
        margin-bottom: 20px;
        border-color: $dark-border;
        .amount{
            .flag{
                font-size: $fz-tiny;
            }
            @include box-shadow(1px 1px 3px transparentize(black, 0.8));
            border: 1px solid $dark-border;
            background-color: $dark-bg;
            color: $dark-text;
            color: $yellow;
        }
    }
    .donor-header{
        .title{
            color: $dark-text-title;
        }
        .subtitle{
            color: $dark-text-subtitle;
        }
    }

}

@media (max-width: 768px){
    .donor-list{
        width: 100%;
        padding: 20px;
        justify-content: space-between;
    }
    .donor-item {
        margin-bottom: 20px;
    }
}


</style>
