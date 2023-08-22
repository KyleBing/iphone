<template>
    <div class="switch-button">Flip</div>
</template>

<script>
export default {
    name: "SwitchButton",
    props: {
    },
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";

.switch-button{
    margin: 30px auto;
    width: 100px;
    border: 1px solid $color-border;
    padding: 10px;
    @include border-radius($radius);
    text-align: center;
    font-weight: bold;
    line-height: 1.5;
    @extend .btn-like;
    &:hover{
        background-color: $bg-highlight;
    }
}

@media (prefers-color-scheme: dark) {

}


</style>
