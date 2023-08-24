<template>
    <div class="container">
        <About @toggleShare="toggleShare"/>

        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut animate__fast"
        >
            <Donation @FlipPenal="flipPanel" v-if="isDocationShowed"/>
        </transition>

        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut animate__fast"
        >
            <FilterList @FlipPenal="flipPanel" v-if="!isDocationShowed"  :iPhonesOrigin="iPhonesOrigin" @updateShowingDevices="updateShowingDevices"/>
        </transition>


        <div class="iphone-list">
            <div class="iphone" v-for="(iphone, index) in iPhones" :key="index">
                <div class="ref-content" v-if="!iphone.isTitleOnly">
                    <section class="main">
                        <iPhoneMainInfo :maxScore="maxScore" :iphone="iphone"/>
                        <div class="main-ref">
                            <div class="main-ref-item">
                                <div class="label">CPU</div>
                                <div class="value magenta">
                                    <span class="mr-3">{{iphone.cpu.model}}</span>
                                    <span v-if="iphone.cpu.rate">{{iphone.cpu.rate}} <i class="multiply">×</i> {{iphone.cpu.core}}</span>
                                    <span v-else>-</span>
                                </div>
                            </div>

                            <div class="main-ref-item">
                                <div class="label">GPU</div>
                                <div class="value cyan">
                                    <span>{{iphone.gpu.model || '-'}}</span>
                                    <span v-if="iphone.gpu.core"><i class="multiply">×</i> {{iphone.gpu.core}}</span>
                                </div>
                            </div>



                            <div class="main-ref-item">
                                <div class="label">内存</div>
                                <div class="value" v-if="iphone.memory.length > 0" v-for="memory in iphone.memory">
                                    <span class="mr-2">{{memory.size}}GB</span>
                                    <span class="little">{{memory.type}}</span>
                                </div>
                                <div class="value" v-if="iphone.memory.length === 0">
                                    <div class="title">-</div>
                                </div>
                            </div>
                            <div class="main-ref-item">
                                <div class="label">颜色</div>
                                <div class="value">
                                    <div class="colors">
                                        <div
                                            class="color"
                                            v-for="colorItem in iphone.colors"
                                            :key="colorItem"
                                            :title="colorItem.name"
                                            :style="`background-color: ${colorItem.color}`"/>
                                    </div>
                                </div>
                            </div>
                            <div class="main-ref-item">
                                <div class="label">重量</div>
                                <div class="value cyan">
                                    <span>{{iphone.weight}} g</span>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section class="screen">
                        <SvgScreen :iphone="iphone"/>
                    </section>
                    <section class="detail">
                        <div class="detail-list">
                            <div class="detail-item" :class="[{active: tags.some(item => item === 'storage')}]">
                                <div @click="tagToggle('storage')" class="detail-item-label">存储</div>
                                <div class="detail-item-content">
                                    <StorageItem
                                        :storage="storage"
                                        v-for="(storage, index) in iphone.storage"
                                        :key="index"
                                    />
                                </div>
                            </div>

                            <div class="detail-item" :class="[{active: tags.some(item => item === 'battery')}]">
                                <div @click="tagToggle('battery')" class="detail-item-label">电池</div>
                                <div class="detail-item-content">
                                    <div class="tip" v-if="iphone.battery">{{iphone.battery}} mah</div>
                                    <div class="tip" v-else>-</div>
                                </div>
                            </div>
                            <div class="detail-item" :class="[{active: tags.some(item => item === 'hardwareName')}]">
                                <div @click="tagToggle('hardwareName')" class="detail-item-label">硬件</div>
                                <div class="detail-item-content">
                                    <div class="tip">{{iphone.hardwareName}}</div>
                                </div>
                            </div>
                            <div class="detail-item" :class="[{active: tags.some(item => item === 'os')}]">
                                <div @click="tagToggle('os')" class="detail-item-label">系统</div>
                                <div class="detail-item-content">
                                    <div class="tip gradient-purple">{{iphone.os.init}} <span class="sup">初始</span></div>
                                    <div class="tip gradient-blue">{{iphone.os.last}} <span class="sup">最后</span></div>
                                </div>
                            </div>
                            <div class="detail-item" :class="[{active: tags.some(item => item === 'connection')}]">
                                <div @click="tagToggle('connection')" class="detail-item-label">连接</div>
                                <div class="detail-item-content" v-if="iphone.connectivity.length">
                                    <div class="tip" v-for="(item, index) in iphone.connectivity">{{item}}</div>
                                </div>
                                <div class="detail-item-content" v-else>
                                    <div class="tip">-</div>
                                </div>
                            </div>
                            <div class="detail-item" :class="[{active: tags.some(item => item === 'port')}]">
                                <div @click="tagToggle('port')" class="detail-item-label">接口</div>
                                <div class="detail-item-content">
                                    <Port :port="iphone.port" />
                                </div>
                            </div>
                            <div class="detail-item" :class="[{active: tags.some(item => item === 'waterResistant')}]">
                                <div @click="tagToggle('waterResistant')" class="detail-item-label">防水</div>
                                <div class="detail-item-content">
                                    <div class="tip">{{iphone.waterResistant.value || '-'}}
                                        <span v-if="iphone.waterResistant.waterDepth">(水下{{iphone.waterResistant.waterDepth}}米 {{iphone.waterResistant.timeHold}}分钟)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="detail-item" :class="[{active: tags.some(item => item === 'sim')}]">
                                <div @click="tagToggle('sim')" class="detail-item-label">SIM</div>
                                <div class="detail-item-content">
                                    <SimItem :itemInfo="sim" v-for="(sim, index) in iphone.sim" :key="index"/>
                                </div>
                            </div>
                            <div class="detail-item" :class="[{active: tags.some(item => item === 'model')}]">
                                <div @click="tagToggle('model')" class="detail-item-label">型号</div>
                                <div class="detail-item-content" v-if="iphone.models.length">
                                    <SimItem
                                        :itemInfo="itemInfo"
                                        v-for="(itemInfo, index) in iphone.models"
                                        :key="index"
                                    />
                                </div>
                                <div class="detail-item-content" v-else>
                                    <div class="tip">-</div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section class="camera">
                        <SvgCamera1
                            v-if="iphone.cameras && iphone.cameras.back && iphone.cameras.type === '1'"
                            :iphone="iphone"
                        />
                        <SvgCamera2VerticalSimple
                            v-if="iphone.cameras && iphone.cameras.back && iphone.cameras.type === '2-vertical-simple'"
                            :iphone="iphone"
                        />
                        <SvgCamera2PortraitSimple
                            v-if="iphone.cameras && iphone.cameras.back && iphone.cameras.type === '2-portrait-simple'"
                            :iphone="iphone"
                        />
                        <SvgCamera2Vertical
                            v-if="iphone.cameras && iphone.cameras.back && iphone.cameras.type === '2-vertical'"
                            :iphone="iphone"
                        />
                        <SvgCamera2Cross
                            v-if="iphone.cameras && iphone.cameras.back && iphone.cameras.type === '2-cross'"
                            :iphone="iphone"
                        />
                        <SvgCamera3
                            v-if="iphone.cameras && iphone.cameras.back && iphone.cameras.type === '3'"
                            :iphone="iphone"
                        />
                        <SvgCamera3Rader
                            v-if="iphone.cameras && iphone.cameras.back && iphone.cameras.type === '3-rader'"
                            :iphone="iphone"
                        />
                    </section>
                </div>
            </div>
        </div>
        <iPhoneFooter/>
        <Share/>
    </div>
</template>
<script>

import iPhones from "@/iPhones";
import axios from "axios";
import projInfo from '../package.json'
import About from "@/About";
import Share from "@/Share";
import iPhoneFooter from "@/iPhoneFooter";
import {mapMutations} from "vuex";
import FilterList from "@/FilterList";
import SvgScreen from "@/svg/SvgScreen.vue";
import Port from "@/parts/Port.vue";
import StorageItem from "@/parts/StorageItem.vue";
import SimItem from "@/parts/SimItem.vue";
import SvgCamera3 from "@/svg/SvgCamera3";
import SvgCamera2Cross from "@/svg/SvgCamera2Cross";
import SvgCamera1 from "@/svg/SvgCamera1";
import SvgCamera2Vertical from "@/svg/SvgCamera2Vertical";
import SvgCamera2PortraitSimple from "@/svg/SvgCamera2PortraitSimple";
import SvgCamera2VerticalSimple from "@/svg/SvgCamera2VerticalSimple";
import SvgCamera3Rader from "@/svg/SvgCamera3Rader";
import iPhoneMainInfo from "@/parts/iPhoneMainInfo"
import Donation from "@/ad/Donation";

export default {
    components: {
        Donation,
        iPhoneMainInfo,
        SvgCamera3Rader,
        SvgCamera2VerticalSimple,
        SvgCamera2PortraitSimple,
        SvgCamera2Vertical,
        SvgCamera1,
        SvgCamera2Cross,
        SvgCamera3, SimItem, StorageItem, Port, SvgScreen, FilterList, Share, About, iPhoneFooter},
    el: "#app",
    data(){
        return {
            // 浏览器参数
            portraitMode: false,
            mobileMode: false,
            latesOS: '最新',
            iPhones: iPhones,
            iPhonesOrigin: iPhones,

            deviceMap: new Map(),

            // 机型信息筛选
            selectedNames: [], // 已选中的名字

            tags: [],
            keyword: '',
            tipShowed: false,

            // share info
            isShareShowed: false,
            insets: {
                height: innerHeight,
                width: innerWidth
            },
            shareQrCode: null,
            shareQrCodeQQ: null,
            linkAddress: 'http://kylebing.cn/tools/iphone/',
            linkQQ: 'https://jq.qq.com/?_wv=1027&k=Z8E0HrWA',

            isDocationShowed: false,
        }
    },
    mounted() {
        // 全屏相关
        let chromeCore = /Chrome/i.test(navigator.userAgent)
        let mobileMode = /Mobile/i.test(navigator.userAgent)
        this.portraitMode = window.innerWidth > window.innerHeight
        this.mobileMode = mobileMode


        this.generateDeviceMap() // 生成 iPhone Map

        // onresize
        onresize = () => {
            this.SET_INSETS(
                {
                    height: innerHeight,
                    width: innerWidth
                }
            )
        }
        // this.shareQrCode = QRCode.generatePNG(this.linkAddress, {margin: 1})
        // this.shareQrCodeQQ = QRCode.generatePNG(this.linkQQ, {margin: 1})

    },
    methods: {
        ...mapMutations(['SET_INSETS']),
        flipPanel(){
            console.log('FlipPenal')
            this.isDocationShowed = !this.isDocationShowed
        },
        toggleShare() {
            this.isShareShowed = !this.isShareShowed
        },
        generateDeviceMap() {
            this.iPhones.forEach(device => {
                this.deviceMap.set(device.name, device)
            })
        },
        tagToggle(tag) {
            if (this.tags.some(item => item === tag)) {
                this.tags.splice(this.tags.indexOf(tag), 1)
            } else {
                this.tags.push(tag)
            }
        },


        updateShowingDevices(selectedNames) {
            if (selectedNames.length > 0){
                this.selectedNames = selectedNames
                this.iPhones = this.selectedNames.map(name => this.deviceMap.get(name))
            } else {
                this.iPhones = [...this.iPhonesOrigin]
            }
        },
    },
    computed: {
        maxScore() {
            let max = 0
            iPhones.forEach(item => {
                if (max < item.geekbenchScore.multi) {
                    max = item.geekbenchScore.multi
                }
            })
            return max
        }
    }
}



</script>

<style lang="scss">
@import "scss/iPhone";
</style>

