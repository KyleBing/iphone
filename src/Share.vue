<template>
    <!--    分享 -->
    <div class="help-container" v-show="isShareShowed" :style="`height: ${insets.height}px`">
        <div class="help">
            <div class="help-header">
                <h3>扫一扫</h3>
            </div>
            <div class="help-body">
                <div class="qr-item">
                    <div class="img-container">
                        <img :src="shareQrCode" alt="qr">
                    </div>
                    <p>当前页</p>
                </div>
                <div class="qr-item">
                    <div class="img-container">
                        <img :src="shareQrCodeQQ" alt="qr">
                    </div>
                    <p>QQ群</p>
                </div>
            </div>
            <div class="help-footer">
                <div class="operation-btn" @click="toggleShare">关闭</div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations, mapState} from "vuex";
import QRCode from "@/qr.js"

export  default {
    name: 'Share',
    data(){
        return {
            shareQrCode: '',
            shareQrCodeQQ: ''
        }
    },
    mounted(){
        this.qrImg = QRCode.generatePNG(window.location.href)


    },
    computed: {
        ...mapState(['insets', 'isShareShowed'])
    },
    methods: {
        ...mapMutations(['SET_SHOW_SHARE']),
        toggleShare(){
            this.SET_SHOW_SHARE(!this.isShareShowed)
        }
    }
}
</script>
