<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 180">
        <title>svg-camera</title>
        <g id="图层_2" data-name="图层 2">
            <g id="图层_1-2" data-name="图层 1">
                <g id="svg-camera">
                    <rect id="frame" class="cls-1" width="370" height="180"/>
                    <rect class="cls-2" x="18" y="44" width="102" height="102" rx="26"/>
                    <path class="cls-3"
                          d="M94,45a25,25,0,0,1,25,25v50a25,25,0,0,1-25,25H44a25,25,0,0,1-25-25V70A25,25,0,0,1,44,45H94m0-2H44A27,27,0,0,0,17,70v50a27,27,0,0,0,27,27H94a27,27,0,0,0,27-27V70A27,27,0,0,0,94,43Z"/>
                    <circle class="cls-4" cx="93" cy="95.25" r="18.5"/>
                    <path d="M93,78.25a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                    <circle class="cls-4" cx="45.5" cy="71.75" r="18.5"/>
                    <path d="M45.5,54.75a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                    <circle class="cls-4" cx="45.5" cy="118.75" r="18.5"/>
                    <path d="M45.5,101.75a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                    <circle cx="90.5" cy="131.5" r="7.5"/>
                    <polyline id="标线" class="cls-5" points="59.5 54.5 80.5 33.5 165.75 33.5"/>
                    <polyline id="标线-2" data-name="标线" class="cls-5" points="110.5 82.5 117.5 76.5 165.75 76.5"/>
                    <line id="标线-3" data-name="标线" class="cls-5" x1="165.75" y1="118.5" x2="66.5" y2="118.5"/>
                    <polyline id="标线-4" data-name="标线" class="cls-5" points="94.5 139.5 106.5 155.5 165.75 155.5"/>
                    <text class="cls-6" transform="translate(183.38 38.12)">广角</text>
                    <text class="cls-6" transform="translate(183.38 79.12)">默认</text>
                    <text class="cls-6" transform="translate(183.38 122.12)">远焦</text>
                    <text class="cls-6" transform="translate(183.38 158.12)">雷达</text>
                    <text class="cls-7" transform="translate(224.67 21.73)">
                        {{iphone.cameras.back[2].model}} {{iphone.cameras.back[2].focal}} {{iphone.cameras.back[2].hdr}}
                        <tspan x="0" y="12">
                            <tspan
                                v-for="(dimension, index) in iphone.cameras.back[2].dimension"
                                :key="index"
                            >{{dimension.size}} {{dimension.fps.join(',')}}，</tspan>
                        </tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[2].pixelCount}} {{iphone.cameras.back[2].aperture}} {{iphone.cameras.back[2].zoomRate}}</tspan>
                    </text>
                    <text class="cls-7" transform="translate(224.67 64.73)">
                        {{iphone.cameras.back[0].model}} {{iphone.cameras.back[0].focal}} {{iphone.cameras.back[0].hdr}}
                        <tspan x="0" y="12">
                            <tspan
                                v-for="(dimension, index) in iphone.cameras.back[0].dimension"
                                :key="index"
                            >{{dimension.size}} {{dimension.fps.join(',')}}，</tspan>
                        </tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[0].pixelCount}} {{iphone.cameras.back[0].aperture}} {{iphone.cameras.back[1].zoomRate}}</tspan>
                    </text>
                    <text class="cls-7" transform="translate(224.67 157.73)">
                        {{iphone.cameras.back[3].model}}
                    </text>
                    <text class="cls-7" transform="translate(224.67 107.73)">
                        {{iphone.cameras.back[1].model}} {{iphone.cameras.back[1].focal}} {{iphone.cameras.back[1].hdr}}
                        <tspan x="0" y="12">
                            <tspan
                                v-for="(dimension, index) in iphone.cameras.back[1].dimension"
                                :key="index"
                            >{{dimension.size}} {{dimension.fps.join(',')}}，</tspan>
                        </tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[1].pixelCount}} {{iphone.cameras.back[1].aperture}} {{iphone.cameras.back[0].zoomRate}}</tspan>
                    </text>
                </g>
            </g>
        </g>
    </svg>
</template>

<script>
export default {
    name: "SvgCamera3Radar15",
    props: {
        iphone: {
            type: Object,
            default: {}
        }
    }

}
</script>

<style scoped>
.cls-1, .cls-5 {
    fill: none;
}

.cls-2 {
    fill: #e6e6e6;
}

.cls-3 {
    fill: gray;
}

.cls-4 {
    fill: #4d4d4d;
}

.cls-5 {
    stroke: #ff931e;
    stroke-miterlimit: 10;
}

.cls-6 {
    font-size: 12px;
    font-family: MicrosoftYaHeiUI-Bold,
    Microsoft YaHei UI;
    font-weight: 700;
}

.cls-7 {
    font-size: 10px;
    font-family: "Arial Narrow";
}
</style>
