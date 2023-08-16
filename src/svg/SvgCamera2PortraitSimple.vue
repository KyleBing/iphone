<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 180">
        <title>svg-camera-2-portrait-simple</title>
        <g id="图层_2" data-name="图层 2">
            <g id="图层_1-2" data-name="图层 1">
                <g id="svg-camera-2-portrait-simple">
                    <rect id="frame" class="cls-1" width="370" height="180"/>
                    <rect class="cls-2" x="23.29" y="69.29" width="111.42" height="47.42" rx="23.5"/>
                    <path class="cls-3"
                          d="M111.21,70A22.8,22.8,0,0,1,134,92.79v.42A22.8,22.8,0,0,1,111.21,116H46.79A22.8,22.8,0,0,1,24,93.21v-.42A22.8,22.8,0,0,1,46.79,70h64.42m0-1.42H46.79A24.24,24.24,0,0,0,22.58,92.79v.42a24.24,24.24,0,0,0,24.21,24.21h64.42a24.24,24.24,0,0,0,24.21-24.21v-.42a24.24,24.24,0,0,0-24.21-24.21Z"/>
                    <circle class="cls-4" cx="110" cy="93.25" r="16.65"/>
                    <path
                        d="M110,78a15.3,15.3,0,1,1-15.3,15.3A15.31,15.31,0,0,1,110,78m0-2.7a18,18,0,1,0,18,18,18,18,0,0,0-18-18Z"/>
                    <circle class="cls-4" cx="48" cy="93" r="16.65"/>
                    <path
                        d="M48,77.7A15.3,15.3,0,1,1,32.7,93,15.31,15.31,0,0,1,48,77.7M48,75A18,18,0,1,0,66,93,18,18,0,0,0,48,75Z"/>
                    <polyline id="标线" class="cls-5" points="166.75 56.5 134.5 56.5 119.5 75.5"/>
                    <polyline id="标线-2" data-name="标线" class="cls-5" points="166.75 130.5 71.5 130.5 57.95 111.41"/>
                    <text class="cls-6" transform="translate(183.38 59.12)">默认</text>
                    <text class="cls-6" transform="translate(183.38 135.12)">远焦</text>
                    <text class="cls-7" transform="translate(224.67 42.73)">
                        {{iphone.cameras.back[0].model}} {{iphone.cameras.back[0].focal}} {{iphone.cameras.back[0].hdr}}
                        <tspan x="0" y="12">
                            <tspan
                                v-for="(dimension, index) in iphone.cameras.back[0].dimension"
                                :key="index"
                            >{{dimension.size}} {{dimension.fps.join(',')}}，</tspan>
                        </tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[0].pixelCount}} {{iphone.cameras.back[0].aperture}} {{iphone.cameras.back[0].zoomRate}}</tspan>
                    </text>
                    <text class="cls-7" transform="translate(224.67 120.73)">
                        {{iphone.cameras.back[1].model}} {{iphone.cameras.back[1].focal}} {{iphone.cameras.back[1].hdr}}
                        <tspan x="0" y="12">
                            <tspan
                                v-for="(dimension, index) in iphone.cameras.back[1].dimension"
                                :key="index"
                            >{{dimension.size}} {{dimension.fps.join(',')}}，</tspan>
                        </tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[1].pixelCount}} {{iphone.cameras.back[1].aperture}} {{iphone.cameras.back[1].zoomRate}}</tspan>
                    </text>
                </g>
            </g>
        </g>
    </svg>
</template>

<script>
export default {
    name: "SvgCamera2PortraitSimple",
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
