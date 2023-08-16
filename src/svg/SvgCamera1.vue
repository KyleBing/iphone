<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 180">
        <title>svg-camera-1</title>
        <g id="图层_2" data-name="图层 2">
            <g id="图层_1-2" data-name="图层 1">
                <g id="svg-camera-1">
                    <rect id="frame" class="cls-1" width="370" height="180"/>
                    <circle class="cls-2" cx="76" cy="63" r="27.54"/>
                    <path class="cls-3"
                          d="M76,36a27,27,0,0,1,27,27h0A27,27,0,0,1,76,90h0A27,27,0,0,1,49,63h0A27,27,0,0,1,76,36h0m0-1.08A28.08,28.08,0,1,0,104.08,63,28.12,28.12,0,0,0,76,34.92Z"/>
                    <circle class="cls-4" cx="76" cy="63" r="18.5"/>
                    <path d="M76,46A17,17,0,1,1,59,63,17,17,0,0,1,76,46m0-3A20,20,0,1,0,96,63,20,20,0,0,0,76,43Z"/>
                    <line id="标线" class="cls-5" x1="166.75" y1="63.5" x2="99" y2="63.5"/>
                    <text class="cls-6" transform="translate(183.38 66.12)">默认</text>
                    <text class="cls-7" transform="translate(224.67 49.73)">
                        {{iphone.cameras.back[0].model}}
                        <tspan x="0" y="12">{{iphone.cameras.back[0].focal}}</tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[0].pixelCount}}</tspan>
                    </text>
                </g>
            </g>
        </g>
    </svg>

</template>

<script>
export default {
    name: "SvgCamera1",
    props: {
        iphone: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
.cls-1,.cls-5{fill:none;}.cls-2{fill:#e6e6e6;}.cls-3{fill:gray;}.cls-4{fill:#4d4d4d;}.cls-5{stroke:#ff931e;stroke-miterlimit:10;}.cls-6{font-size:12px;font-family:MicrosoftYaHeiUI-Bold,
Microsoft YaHei UI;font-weight:700;}.cls-7{font-size:10px;font-family:MicrosoftYaHeiUILight, Microsoft YaHei UI;}

</style>
