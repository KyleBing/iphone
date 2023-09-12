<template>
    <div class="video-wrapper">
        <video
            id="september-2023"
            autoplay=""
            loop=""
            data-inline-media=""
            muted=""
            preload="auto"
            data-inline-media-plugins="PlayPauseButton"
            data-load-timeout="5000"
            data-inline-media-basepath="/105/media/us/apple-events/2023/ad6b79de-2819-4715-be4e-c9f1488ab703/anim"
            aria-label="朦胧闪烁的微粒在 Apple 标志中流淌，一些颗粒飘离散去。"
            role="img"
            playsinline=""
            src="https://www.apple.com.cn/105/media/us/apple-events/2023/ad6b79de-2819-4715-be4e-c9f1488ab703/anim/large_2x.mp4"></video>
        <div class="date">2023.09.13 01:00</div>
    </div>
</template>

<script>
export default {
    name: "Opening",
    computed: {
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";

.video-wrapper{
    padding: 40px 0;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    align-items: center;
    video{
        max-width: 400px;
    }
    background-color: black;
    .date{
        font-size: $fz-big;
        font-family: 'LLPixel';
        color: white;
        font-weight: bold;

    }
}

@media (prefers-color-scheme: dark) {

}


</style>
