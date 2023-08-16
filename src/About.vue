<template>
    <div class="about gradient">
        <div class="about-header">
            <div class="icon">
                <img style="display: none" src="./img/links/iphone_white@2x.png" alt="for 知乎链接图标抓取">
                <img src="./img/links/iphone_white@2x.png?v=1" alt="">
            </div>
            <div class="content">
                <h1 class="title">iPhone 参数大全</h1>
                <div class="thumbs-up" @click="thumbsUp">
                    <img v-if="heartActive" src="./img/links/heart_active@1x.png" alt="heart">
                    <img v-else src="./img/links/heart_inactive@1x.png" alt="heart">
                    <p v-show="thumbsUpCount" class="multiply">×</p>
                    <h3 v-show="thumbsUpCount">{{thumbsUpCount}}</h3>
                </div>
            </div>
        </div>

        <div class="copyright-group">
            <div class="share-links">
                <a class="link-item" target="_blank" href="https://kylebing.cn/tools/ipad">
                    <img src="./img/links/ipad_white@2x.png" alt="ipad">
                </a>
                <a class="link-item">
                    <img src="./img/links/iphone_white@2x.png" alt="phone">
                </a>
                <a class="link-item" target="_blank" href="https://kylebing.cn/tools/airpods">
                    <img src="./img/links/airpods_white@2x.png" alt="airpods">
                </a>
                <a class="link-item" target="_blank" href="https://kylebing.cn/tools/apple-chip">
                    <img src="./img/links/chip_white@2x.png" alt="chip">
                </a>
                <a class="link-item" target="_blank" href="https://kylebing.cn/tools/apple-watch">
                    <img src="./img/links/apple-watch@2x.png" alt="watch">
                </a>
            </div>
            <div class="author-info">
                <p>主页：<a class="link" target="_blank" href="https://kylebing.cn/">kylebing.cn</a></p>
                <p>更新：<a class="link" target="_blank" href="https://en.wikipedia.org/wiki/IPhone">{{dateLastUpdate}}</a></p>
                <p>分享：<span @click="toggleShare">点击扫一扫</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import projInfo from '../package.json'
import axios from "axios";
import {mapMutations, mapState} from "vuex";
export  default {
    emits: ['toggleShare'],
    data(){
        return {
            dateLastUpdate: projInfo.dateModify,
            // thumb up
            pingPongInterval: null,
            thumbsUpKey: 'iphone',
            heartActive: false,
            thumbsUpCount: 0,
        }
    },
    computed: {
        ...mapState(['isShareShowed'])
    },
    mounted(){
        this.getInitThumbsUpCount()
        this.websocketInit()
    },
    methods: {
        ...mapMutations(["SET_SHOW_SHARE"]),
        toggleShare(){
            this.SET_SHOW_SHARE(!this.isShareShowed)
        },
        // 点赞功能
        getInitThumbsUpCount() {
            axios
                .get('https://kylebing.cn/portal/thumbs-up?key=' + this.thumbsUpKey)
                .then(res => {
                    if (res.data && res.data.data) {
                        this.thumbsUpCount = res.data.data
                    }
                })
        },
        websocketInit() {
            this.websocket = new WebSocket('wss://kylebing.cn/ws')
            this.websocket.onopen = this.websocketOnOpen
            this.websocket.onmessage = this.websocketOnMessage
            this.websocket.onerror = this.websocketOnError
            this.websocket.onclose = this.websocketClose
        },
        websocketOnOpen() {
            this.portStatus = 'success'
            this.pingPongInterval = setInterval(() => {
                if (this.websocket) {
                    switch (this.websocket.readyState) {
                        case 0: // connecting
                            break;
                        case 1: // open
                            let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                            this.websocket.send(JSON.stringify(message))
                            break;
                        case 2:  // closing
                            clearInterval(this.pingPongInterval)
                            break;
                        case 3: // closed
                            clearInterval(this.pingPongInterval)
                            break;
                    }
                }
            }, 10000)
        },
        websocketOnMessage(res) {
            let receivedMessage = JSON.parse(res.data)
            switch (receivedMessage.type) {
                case WSMessage.type.heartBeat:
                    break;
                case WSMessage.type.thumbsUp:
                    if (receivedMessage.content.key === this.thumbsUpKey) {
                        this.thumbsUpCount = receivedMessage.content.count
                    }
                    break;
            }
        },
        websocketOnError() {
            this.portStatus = 'error'
            this.websocket.send('on error')
        },
        websocketClose() {
            this.portStatus = 'closed'
            console.log('socket has closed')
        },
        thumbsUp() {
            this.sendMessage(this.thumbsUpKey)
        },
        sendMessage(key) {
            if (this.websocket) {
                this.heartActive = true
                let message = new WSMessage(WSMessage.type.thumbsUp, {
                    key: key
                })
                this.websocket.send(JSON.stringify(message))
            }
        },
    }
}


class WSMessage {
    constructor(type, content) {
        this.type = type
        this.content = content
    }

    static type = {
        thumbsUp: 'thumbs-up',
        heartBeat: 'heart-beat',
    }
}
</script>

<style lang="scss">
@import "scss/plugin";
// 关于
.about{
    font-family: 'Galvji';
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 15px 35px;
    background-color: white;
    a{
        &:hover{
            text-decoration: underline;
        }
        color: white;
    }
    @media (max-width: 768px){
        align-items: stretch;
        padding: 35px 25px 25px;
        flex-flow: column nowrap;
    }
}

.about-header{
    display: flex;
    justify-content: space-between;
    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
        img{
            height: 50px;
        }
    }
    .content{
        flex-grow: 1;
        display: flex;
        flex-flow: row nowrap;
        margin-left: 30px;
        justify-content: flex-start;
        align-items: center;
        .title{
            font-size: $fz-title;
        }
    }

    @media (max-width: 768px){
        margin-bottom: 20px;
        .icon{
            display: none;
        }
        .content{
            flex-flow: column nowrap;
            margin-left: 0;
            .thumbs-up{
                padding: 15px 0;
            }
            .title{
                width: 100%;
                text-align: center;
            }
        }
    }
}
.copyright-group{
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px){
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
}
.author-info{
    cursor: pointer;
    font-family: "Galvji";
    margin-left: 30px;
    padding: 10px 15px;
    justify-content: space-between;
    line-height: 1.4;
    font-size: 11px;
    letter-spacing: 0.5px;
    @include border-radius(5px);
    p{
        &:last-child{
            margin-bottom: 0;
        }
    }
    @media (max-width: 768px){
        padding: 15px 20px;
        @include border-radius(5px);
        background-color: rgba(255,255,255,0.05);
        border: none;
        margin: 0 0 10px;
    }

    .link{
        &:hover{
            color: white !important;
        }
        &:active{
            transform: translateY(2px);
        }
    }
}

.share-links{
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    .link-item{
        width: 70px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        @include border-radius(10px);
        img{
            display: block;
            height: 40px;
        }
        &[href]:hover{
            background-color: transparentize(black, 0.8);
        }
    }
    @media (max-width: 768px){
        .link-item{
            padding: 10px 0;
        }
        margin-bottom: 30px;
    }
}


.thumbs-up{
    width: 120px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap!important;
    @include transform(translateY(2px));
    cursor: pointer;
    img{
        height: 30px !important;
    }
    .multiply{
        padding: 0 4px;
    }
    h3{
        font-weight: normal;
        font-size: 12px;
        text-align: center;
    }
}

@media (max-width: 768px){
    .search-bar{
        display: none;
    }
}

</style>
