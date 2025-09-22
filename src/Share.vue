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
<script lang="ts" setup>
import QRCode from "@/qr.js"
import {useProjectStore} from "@/useProjectStore.ts";
import {ref, onMounted} from "vue";

const projectStore = useProjectStore()

const shareQrCode = ref('')
const shareQrCodeQQ = ref('')

const linkAddress = 'http://kylebing.cn/tools/iphone/'
const linkQQ = 'https://jq.qq.com/?_wv=1027&k=Z8E0HrWA'

onMounted(() => {
    shareQrCodeQQ.value = QRCode.generatePNG(linkQQ)
    shareQrCode.value = QRCode.generatePNG(linkAddress)
})


function toggleShare(){
    projectStore.isShareShowed = !projectStore.isShareShowed
}
</script>
