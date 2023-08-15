<template>
    <About @toggleShare="toggleShare"/>
    <FilterList
        :iPhonesOrigin="iPhonesOrigin"
        @updateShowingDevices="updateShowingDevices"
    />
    <div class="iphone-list">
        <div class="iphone" v-for="(iphone, index) in iPhones" :key="index">
            <div class="title-content">
                <div>
                    <div :class="['title', {'is-new': iphone.isNew}]">{{iphone.name}}</div>
                    <div class="score-bar" v-if="iphone.geekbenchScore.multi">
                        <div class="bar" :style="`width: ${iphone.geekbenchScore.multi / maxScore * 100}px`"></div>
                        <div class="score">{{iphone.geekbenchScore.multi}}</div>
                    </div>
                </div>
                <div class="slogan">{{iphone.slogan}}</div>
            </div>
            <div class="ref-content" v-if="!iphone.isTitleOnly">
                <section class="main">
                    <div class="image">
                        <div class="img-frame">
                            <img :src="iphone.pic" alt="icon">
                        </div>
                    </div>
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
                                    <div class="color" :title="colorItem.name" v-for="colorItem in iphone.colors" :style="`background-color: ${colorItem.color}`"></div>
                                </div>
                            </div>
                        </div>
                        <div class="main-ref-item">
                            <div class="label">日期</div>
                            <div class="value cyan">
                                <span>{{iphone.release}}</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="screen">
                    <svg width="100%" viewBox="0 0 535 270" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="screen" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="screenMesure" transform="translate(0.000000, 46.500000)">
                                <text id="height" font-family="PingFangSC-Medium, PingFang SC" font-size="20" font-weight="400" fill="#000000">
                                    <tspan x="0.4" y="94">{{iphone.height}}</tspan>
                                </text>
                                <text id="thickness" font-family="PingFangSC-Medium, PingFang SC" font-size="20" font-weight="400" fill="#000000">
                                    <tspan x="209.77" y="176">{{iphone.thickness}}</tspan>
                                </text>
                                <rect id="iphone-outside" stroke="#B1B1B1" fill="#D8D8D8" x="96" y="0" width="77" height="153" rx="11"></rect>
                                <rect id="iphone-inside" stroke="#3D3D40" fill="#FFFFFF" x="87" y="9" width="77" height="153" rx="11"></rect>
                                <g id="ruler-/-vitical-" transform="translate(66.000000, 9.000000)" fill="#00A5FF">
                                    <rect id="iphone-line" x="0" y="0" width="8" height="2"></rect>
                                    <rect id="iphone-line" x="3" y="2" width="2" height="149"></rect>
                                    <rect id="iphone-line" x="0" y="151" width="8" height="2"></rect>
                                </g>
                                <g id="ruler-/-vitical--copy" transform="translate(87.000000, 172.000000)" fill="#00A5FF">
                                    <rect id="Rectangle" x="0" y="0" width="2" height="8"></rect>
                                    <rect id="iphone-line" x="75" y="0" width="2" height="8"></rect>
                                    <rect id="iphone-line" x="2" y="3" width="73" height="2"></rect>
                                </g>
                                <g id="Group-3" transform="translate(177.500000, 162.000000) rotate(-45.000000) translate(-177.500000, -162.000000) translate(169.000000, 158.000000)" fill="#00A5FF">
                                    <rect id="Rectangle" x="0" y="0" width="2" height="8"></rect>
                                    <rect id="iphone-line" x="15" y="0" width="2" height="8"></rect>
                                    <rect id="iphone-line" x="2" y="3" width="13" height="2"></rect>
                                </g>
                                <text id="width" font-family="PingFangSC-Medium, PingFang SC" font-size="20" font-weight="400" fill="#000000">
                                    <tspan x="107.19" y="215">{{iphone.width}}</tspan>
                                </text>
                            </g>
                            <g id="screenPx" transform="translate(303.194846, 55.065109)">
                                <text id="heightPX" opacity="0.779999971" font-family="PingFangSC-Medium, PingFang SC" font-size="20" font-weight="400" fill="#000000">
                                    <tspan x="1.26515405" y="85.434891">{{iphone.screen.height}}</tspan>
                                </text>
                                <rect id="iphone-inch" stroke="#3D3D40" fill="#FFFFFF" x="85.8051541" y="0.434890986" width="77" height="153" rx="11"></rect>
                                <rect id="Rectangle" fill="#FFFFFF" x="138.805154" y="53.434891" width="92" height="58" rx="5"></rect>
                                <text id="inch" font-family="PingFangSC-Medium, PingFang SC" font-size="20" font-weight="400" line-spacing="25" fill="#000000">
                                    <tspan x="149.305154" y="78.434891">{{iphone.screen.size}} 寸</tspan>
                                </text>
                                <text id="density" font-family="PingFangSC-Medium, PingFang SC" font-size="20" font-weight="400" line-spacing="25" fill="#000000">
                                    <tspan x="147.805154" y="103.434891">{{iphone.screen.density}} dpi</tspan>
                                </text>
                                <g id="ruler-/-vitical-" transform="translate(64.805154, 0.434891)" fill="#00A5FF">
                                    <rect id="iphone-line" x="0" y="0" width="8" height="2"></rect>
                                    <rect id="iphone-line" x="3" y="2" width="2" height="149"></rect>
                                    <rect id="iphone-line" x="0" y="151" width="8" height="2"></rect>
                                </g>
                                <g id="ruler-/-vitical--copy" transform="translate(85.805154, 163.434891)" fill="#00A5FF">
                                    <rect id="iphone-line" x="0" y="0" width="2" height="8"></rect>
                                    <rect id="iphone-line" x="75" y="0" width="2" height="8"></rect>
                                    <rect id="iphone-line" x="2" y="3" width="73" height="2"></rect>
                                </g>
                                <rect id="Rectangle" fill="#00A5FF" transform="translate(90.805154, 152.434891) rotate(-66.000000) translate(-90.805154, -152.434891) " x="89.8051541" y="148.434891" width="2" height="8"></rect>
                                <rect id="iphone-line" fill="#00A5FF" transform="translate(157.805154, 3.434891) rotate(-66.000000) translate(-157.805154, -3.434891) " x="156.805154" y="-0.565109014" width="2" height="8"></rect>
                                <rect id="iphone-line" fill="#00A5FF" transform="translate(124.805154, 77.434891) rotate(-66.000000) translate(-124.805154, -77.434891) " x="43.8051541" y="76.434891" width="162" height="2"></rect>
                                <text id="widthPX" font-family="PingFangSC-Medium, PingFang SC" font-size="20" font-weight="400" fill="#000000">
                                    <tspan x="102.225154" y="206.434891">{{iphone.screen.width}}</tspan>
                                </text>
                            </g>
                            <text id="screenType" font-family="Galvji-Bold, Galvji" font-size="20" font-weight="bold" fill="#404040">
                                <tspan x="216.020508" y="19">{{iphone.screen.type}}</tspan>
                            </text>
                            <text v-if="iphone.screen.brightness" id="screenLight" font-family="Galvji" font-size="15" font-weight="normal" fill="#404040">
                                <tspan x="216.020508" y="41">{{iphone.screen.brightness}} nit</tspan>
                            </text>
                            <text v-if="iphone.screen.refreshRate" id="screenRate" font-family="Galvji" font-size="15" font-weight="normal" fill="#404040">
                                <tspan x="216.020508" y="64">{{iphone.screen.refreshRate}} hz</tspan>
                            </text>
                            <text v-if="iphone.screen.touch3D" id="touch3D" font-family="PingFangSC-Semibold, PingFang SC" font-size="15" font-weight="500" fill="#404040">
                                <tspan x="111" y="155">压感</tspan>
                            </text>
                            <text v-if="iphone.screen.hdr" id="HDR" font-family="PingFangSC-Semibold, PingFang SC" font-size="15" font-weight="500" fill="#404040">
                                <tspan x="109.8525" y="127">HDR</tspan>
                            </text>
                        </g>
                    </svg>

                </section>
                <section class="detail">
                    <div class="detail-list">
                        <div class="detail-item" :class="[{active: tags.some(item => item === 'storage')}]">
                            <div @click="tagToggle('storage')" class="detail-item-label">存储</div>
                            <div class="detail-item-content">
                                <div class="tip storage" v-for="(item, index) in iphone.storage" :key="index">
                                    <template v-if="isNaN(item)">
                                        <div>
                                            {{item}}
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div v-if="item < 1000">
                                            {{item}}
                                            <span class="sup">GB</span>
                                        </div>
                                        <div v-else>
                                            {{item / 1024}}
                                            <span class="sup">TB</span>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="detail-item" :class="[{active: tags.some(item => item === 'weight')}]">
                            <div @click="tagToggle('weight')" class="detail-item-label">重量</div>
                            <div class="detail-item-content">
                                <div class="tip">{{iphone.weight}} g</div>
                            </div>
                        </div>
                        <div class="detail-item" :class="[{active: tags.some(item => item === 'battery')}]">
                            <div @click="tagToggle('battery')" class="detail-item-label">电池</div>
                            <div class="detail-item-content">
                                <div class="tip" v-if="iphone.battery">{{iphone.battery}} mah</div>
                                <div class="tip" v-else>-</div>
                            </div>
                        </div>

                        <div class="detail-item" :class="[{active: tags.some(item => item === 'sim')}]">
                            <div @click="tagToggle('sim')" class="detail-item-label">SIM</div>
                            <div class="detail-item-content">
                                <div class="sim-item" v-for="(sim, index) in iphone.sim" :key="index">
                                    <div class="name">{{sim.name}}</div>
                                    <div class="type">{{sim.type || '单卡'}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="detail-item" :class="[{active: tags.some(item => item === 'hardwareName')}]">
                            <div @click="tagToggle('hardwareName')" class="detail-item-label">硬件</div>
                            <div class="detail-item-content">
                                <div class="tip">{{iphone.hardwareName}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-list">
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
                                <div class="tip">{{iphone.port}}</div>
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
                        <div class="detail-item" :class="[{active: tags.some(item => item === 'model')}]">
                            <div @click="tagToggle('model')" class="detail-item-label">型号</div>
                            <div class="detail-item-content" v-if="iphone.models.length">
                                <div class="sim-item" v-for="(model, index) in iphone.models" :key="index">
                                    <div class="name">{{model.name}}</div>
                                    <div class="type">{{model.type}}</div>
                                </div>
                            </div>
                            <div class="detail-item-content" v-else>
                                <div class="tip">-</div>
                            </div>
                        </div>

                    </div>
                </section>

                <section class="camera">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.14 168.83">
                        <title>camera</title>
                        <g id="图层_2" data-name="图层 2">
                            <g id="图层_1-2" data-name="图层 1">
                                <g id="camera">
                                    <rect class="cls-1" x="1" y="29.83" width="102" height="102" rx="26"/>
                                    <path class="cls-2"
                                          d="M77,30.83a25,25,0,0,1,25,25v50a25,25,0,0,1-25,25H27a25,25,0,0,1-25-25v-50a25,25,0,0,1,25-25H77m0-2H27a27,27,0,0,0-27,27v50a27,27,0,0,0,27,27H77a27,27,0,0,0,27-27v-50a27,27,0,0,0-27-27Z"/>
                                    <circle class="cls-3" cx="76" cy="81.08" r="18.5"/>
                                    <path d="M76,64.08a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                                    <circle class="cls-3" cx="28.5" cy="57.58" r="18.5"/>
                                    <path d="M28.5,40.58a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                                    <circle class="cls-3" cx="28.5" cy="104.58" r="18.5"/>
                                    <path d="M28.5,87.58a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                                    <polyline class="cls-4" points="42.5 40.33 63.5 19.33 149.5 19.33"/>
                                    <polyline class="cls-4" points="94.5 70.33 108.5 63.33 147.5 63.33"/>
                                    <line class="cls-4" x1="50" y1="106.33" x2="150" y2="106.33"/>
                                    <text class="cls-5" transform="translate(166.38 24.96)">默认</text>
                                    <text class="cls-5" transform="translate(166.38 66.96)">远焦</text>
                                    <text class="cls-5" transform="translate(166.38 110.96)">广角</text>
                                    <text class="cls-5" transform="translate(166.38 152.96)">雷达</text>
                                    <circle cx="73.5" cy="117.33" r="7.5"/>
                                    <polyline class="cls-4" points="76.75 124.58 88 150.33 149 150.33"/>
                                    <text
                                        v-if="iphone.cameras.back && iphone.cameras.back.length > 0"
                                        class="cls-6"
                                        transform="translate(207.67 8.56)">
                                        {{iphone.cameras.back[0].model}}
                                        <tspan x="0" y="12">{{iphone.cameras.back[0].focal}}</tspan>
                                        <tspan x="0" y="24">{{iphone.cameras.back[0].pixelCount}}</tspan>
                                    </text>
                                    <text class="cls-6"
                                          transform="translate(207.67 52.56)">
                                        234567890-234123461
                                        <tspan x="0" y="12">9287364981726394876</tspan>
                                        <tspan x="0" y="24">1298374619287363</tspan>
                                    </text>
                                    <text class="cls-6" transform="translate(207.67 95.56)">
                                        234567890-234123461
                                        <tspan x="0" y="12">9287364981726394876</tspan>
                                        <tspan x="0" y="24">1298374619287363</tspan>
                                    </text>
                                    <text class="cls-6" transform="translate(207.67 138.56)">
                                        234567890-234123461
                                        <tspan x="0" y="12">9287364981726394876</tspan>
                                        <tspan x="0" y="24">1298374619287363</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </svg>
                </section>
            </div>
        </div>
    </div>
    <iPhoneFooter/>
    <Share/>
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

export default {
    components: {FilterList, Share, About, iPhoneFooter},
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
            linkQQ: 'https://jq.qq.com/?_wv=1027&k=Z8E0HrWA'
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
            this.selectedNames = selectedNames
            this.iPhones = this.selectedNames.map(name => this.deviceMap.get(name))
            if (this.iPhones.length === 0) {
                this.iPhones = [...this.iPhonesOrigin]
            }
            this.iPhones.push(this.iPhonesOrigin[0])
            this.iPhones.pop()
        },

        filterIphone() {

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

