<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 180">
        <title>svg-camera-2-vertical</title>
        <g id="图层_2" data-name="图层 2">
            <g id="图层_1-2" data-name="图层 1">
                <g id="svg-camera-2-vertical">
                    <rect id="frame" class="cls-1" width="370" height="180"/>
                    <rect class="cls-2" x="18" y="44" width="102" height="102" rx="26"/>
                    <path class="cls-3"
                          d="M94,45a25,25,0,0,1,25,25v50a25,25,0,0,1-25,25H44a25,25,0,0,1-25-25V70A25,25,0,0,1,44,45H94m0-2H44A27,27,0,0,0,17,70v50a27,27,0,0,0,27,27H94a27,27,0,0,0,27-27V70A27,27,0,0,0,94,43Z"/>
                    <circle class="cls-4" cx="45.75" cy="118" r="18.5"/>
                    <path d="M45.75,101a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                    <circle class="cls-4" cx="45.75" cy="72.5" r="18.5"/>
                    <path d="M45.75,55.5a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                    <line id="标线" class="cls-5" x1="166.75" y1="71.5" x2="69" y2="71.5"/>
                    <line id="标线-2" data-name="标线" class="cls-5" x1="166.75" y1="118.5" x2="69" y2="118.5"/>
                    <text class="cls-6" transform="translate(183.38 74.12)">远焦</text>
                    <text class="cls-6" transform="translate(183.38 123.12)">默认</text>
                    <text class="cls-7" transform="translate(224.67 57.73)">
                        {{iphone.cameras.back[0].model}}
                        <tspan x="0" y="12">{{iphone.cameras.back[0].focal}}</tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[0].pixelCount}}</tspan>
                    </text>
                    <text class="cls-7" transform="translate(224.67 108.73)">
                        {{iphone.cameras.back[1].model}}
                        <tspan x="0" y="12">{{iphone.cameras.back[1].focal}}</tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[1].pixelCount}}</tspan>
                    </text>
                </g>
            </g>
        </g>
    </svg>
</template>

<script>
export default {
    name: "SvgCamera2Vertical",
    props: {
        iphone: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>.cls-1,.cls-5{fill:none;}.cls-2{fill:#e6e6e6;}.cls-3{fill:gray;}.cls-4{fill:#4d4d4d;}.cls-5{stroke:#ff931e;stroke-miterlimit:10;}.cls-6{font-size:12px;font-family:MicrosoftYaHeiUI-Bold,
Microsoft YaHei UI;font-weight:700;}.cls-7{font-size:10px;font-family:MicrosoftYaHeiUILight, Microsoft YaHei UI;}
</style>
