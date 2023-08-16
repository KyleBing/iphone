<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 180">
        <title>svg-camera-2-cross</title>
        <g id="图层_2" data-name="图层 2">
            <g id="图层_1-2" data-name="图层 1">
                <g id="svg-camera-2-cross">
                    <rect id="frame" class="cls-1" width="370" height="180"/>
                    <rect class="cls-2" x="18" y="44" width="102" height="102" rx="26"/>
                    <path class="cls-3"
                          d="M94,45a25,25,0,0,1,25,25v50a25,25,0,0,1-25,25H44a25,25,0,0,1-25-25V70A25,25,0,0,1,44,45H94m0-2H44A27,27,0,0,0,17,70v50a27,27,0,0,0,27,27H94a27,27,0,0,0,27-27V70A27,27,0,0,0,94,43Z"/>
                    <circle class="cls-4" cx="91" cy="117" r="19.42"/>
                    <path
                        d="M91,99.15A17.85,17.85,0,1,1,73.15,117,17.87,17.87,0,0,1,91,99.15M91,96a21,21,0,1,0,21,21A21,21,0,0,0,91,96Z"/>
                    <circle class="cls-4" cx="48" cy="73.5" r="19.42"/>
                    <path
                        d="M48,55.65A17.85,17.85,0,1,1,30.15,73.5,17.87,17.87,0,0,1,48,55.65m0-3.15a21,21,0,1,0,21,21,21,21,0,0,0-21-21Z"/>
                    <line id="标线" class="cls-5" x1="166.75" y1="118.5" x2="115" y2="118.5"/>
                    <line id="标线-2" data-name="标线" class="cls-5" x1="166.75" y1="71.5" x2="72" y2="71.5"/>
                    <text class="cls-6" transform="translate(183.38 74.12)">广角</text>
                    <text class="cls-6" transform="translate(183.38 123.12)">默认</text>
                    <text class="cls-7" transform="translate(224.67 57.73)">
                        {{iphone.cameras.back[0].model}} {{iphone.cameras.back[0].focal}} {{iphone.cameras.back[0].hdr}}
                        <tspan x="0" y="12">
                            <tspan
                                v-for="(dimension, index) in iphone.cameras.back[0].dimension"
                                :key="index"
                            >{{dimension.size}} {{dimension.fps.join(',')}}，</tspan>
                        </tspan>
                        <tspan x="0" y="24">{{iphone.cameras.back[0].pixelCount}} {{iphone.cameras.back[0].aperture}} {{iphone.cameras.back[0].zoomRate}}</tspan>
                    </text>
                    <text class="cls-7" transform="translate(224.67 108.73)">
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
    name: "SvgCamera2Cross",
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
