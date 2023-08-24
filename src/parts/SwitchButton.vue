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
    background-color: white;
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
        border-color: black;
        @include box-shadow(2px 2px 5px rgba(0,0,0,0.2));
        @include transition(all 0.3s);
    }
}

@keyframes move-around {
    0%  {transform: translateY(-10px) scale(1);}
    50% {transform: translateY(-10px) scale(1.2);}
    100%{transform: translateY(-10px) scale(1);}
}


@media (prefers-color-scheme: dark) {
    .switch-button{
        background-color: $dark-bg;
        border-color: $green;
        &:hover{
            border-color: white;
        }
    }

}


</style>
