<template>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 180">
        <title>svg-camera-2-vertical-simple</title>
        <g id="图层_2" data-name="图层 2">
            <g id="图层_1-2" data-name="图层 1">
                <g id="svg-camera-2-vertical-simple">
                    <rect id="frame" class="cls-1" width="370" height="180"/>
                    <path class="cls-2"
                          d="M79,151.79A27.83,27.83,0,0,1,51.21,124V62a27.79,27.79,0,0,1,55.58,0v62A27.83,27.83,0,0,1,79,151.79Z"/>
                    <path class="cls-3"
                          d="M79,35a27,27,0,0,1,27,27v62a27,27,0,0,1-54,0V62A27,27,0,0,1,79,35m0-1.58A28.61,28.61,0,0,0,50.42,62v62a28.58,28.58,0,1,0,57.16,0V62A28.61,28.61,0,0,0,79,33.42Z"/>
                    <circle class="cls-4" cx="78.75" cy="124" r="18.5"/>
                    <path d="M78.75,107a17,17,0,1,1-17,17,17,17,0,0,1,17-17m0-3a20,20,0,1,0,20,20,20,20,0,0,0-20-20Z"/>
                    <circle class="cls-4" cx="79" cy="62" r="18.5"/>
                    <path d="M79,45A17,17,0,1,1,62,62,17,17,0,0,1,79,45m0-3A20,20,0,1,0,99,62,20,20,0,0,0,79,42Z"/>
                    <line id="标线" class="cls-5" x1="166.75" y1="63.5" x2="102" y2="63.5"/>
                    <line id="标线-2" data-name="标线" class="cls-5" x1="166.75" y1="123.5" x2="102" y2="123.5"/>
                    <text class="cls-6" transform="translate(183.38 66.12)">远焦</text>
                    <text class="cls-6" transform="translate(183.38 128.12)">默认</text>
                    <text class="cls-7" transform="translate(224.67 49.73)">
                        {{iphone.cameras.back[0].model}}
                        <tspan x="0" y="12">{{iphone.cameras.back[0].focal}}</tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[0].pixelCount}}</tspan>
                    </text>
                    <text class="cls-7" transform="translate(224.67 113.73)">
                        {{iphone.cameras.back[1].model}}
                        <tspan x="0" y="12">{{iphone.cameras.back[1].focal}}</tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[1].pixelCount}}</tspan>
                    </text>
                    <circle class="cls-8" cx="79" cy="93" r="5.5"/>
                    <path class="cls-9" d="M79,88a5,5,0,1,1-5,5,5,5,0,0,1,5-5m0-1a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"/>
                </g>
            </g>
        </g>
    </svg>

</template>

<script>
export default {
    name: "SvgCamera2VerticalSimple",
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
Microsoft YaHei UI;font-weight:700;}.cls-7{font-size:10px;font-family:MicrosoftYaHeiUILight, Microsoft YaHei
UI;}.cls-8{fill:#fff;}.cls-9{fill:#ccc;}
</style>
