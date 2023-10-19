<template>
    <view class="donor-container">
        <view class="donor-header">
            <view class="title">赞赏列表</view>
        </view>
        <view class="donor-list">
            <view class="donor-item" v-for="item in donors">
                <view class="name">{{ item.name }}</view>
                <view class="amount"><span class="flag">￥</span>{{ item.amount }}</view>
                <!--            <view class="method">{{item.method}}</view>-->
                <!--            <view class="date">{{item.date}}</view>-->
            </view>
        </view>
    </view>
</template>

<script>
import axios from "axios";
export default {
    name: "DonorList",
    data(){
        return {
            donors: []  // 2023-10-19,微信,无名,6
        }
    },
    mounted() {
        this.getDonors()
    },
    methods: {
        getDonors(){
            axios({
                url: 'https://kylebing.cn/portal/diary/get-latest-public-diary-with-keyword',
                params: {
                    keyword: 'iphone-donor-list'
                }
            })
                .then(res => {
                    if (res.status === 200){
                        this.donors = []
                        let donorListStr = res.data.data.content
                        donorListStr && donorListStr.split('\n').forEach(str => {
                            let tempArray = str.split(',')
                            this.donors.push({
                                date: tempArray[0],
                                method: tempArray[1],
                                name: tempArray[2],
                                amount: Number(tempArray[3]),
                            })
                        })
                        this.donors.sort((a,b) => b.amount - a.amount)
                    }
                })
                .catch(err => {
                    console.log(err)
                })

        }
    }
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
    margin-right: 30px;
    margin-bottom: 30px;
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
