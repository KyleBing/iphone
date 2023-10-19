<template>
    <div class="switch-button"/>
</template>

<script>
export default {
    name: "SwitchButton",
    props: {},
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";

.switch-button{
    width: 20px;
    height: 20px;
    background: linear-gradient(130deg, white, lighten(black, 90%));
    margin: 0 auto;
    transform: translateY(-15px);
    @include border-radius(100px);
    text-align: center;
    line-height: 1;
    border: 1px solid $color-border;
    @extend .btn-like;
    @include transition(all 0.3s);
    animation: move-around 3s infinite ease-in-out;
    &:hover{
        background: $blue !important;
        border-color: white !important;
        @include box-shadow(2px 2px 5px rgba(0,0,0,0.2));
        @include transition(all 0.3s);
    }
}

@keyframes move-around {
    0% {
        border-color: $blue;
        @include box-shadow(0 0 5px transparentize($blue, 0.2));
        transform: translateY(-10px) scale(1);
    }
    50% {
        border-color: $color-border;
        @include box-shadow(0 0 25px transparentize($blue, 1));
        transform: translateY(-10px) scale(1.2);
    }
    100% {
        border-color: $blue;
        @include box-shadow(0 0 5px transparentize($blue, 0.2));
        transform: translateY(-10px) scale(1);
    }
}


@media (prefers-color-scheme: dark) {
    .switch-button{
        background: linear-gradient(130deg,  lighten($dark-bg, 35%), $dark-bg);
        border-color: black;
        &:hover{
            border-color: white;
        }
    }

}


</style>
