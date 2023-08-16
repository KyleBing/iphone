<template>
    <footer>
        <p>2020.10.20 ~ {{dateLastUpdate}}</p>
        <p><a class="link" target="_blank" href="https://github.com/KyleBing/iphone">https://github.com/KyleBing/iphone</a></p>
    </footer>
</template>
<script>
import projInfo from '../package.json'

export default {
    name: 'Footer',
    data(){
        return {
            dateLastUpdate: projInfo.dateModify
        }
    },
    created() {

    },
    mounted() {

    },
    computed: {
    },
    methods: {

    }
}
</script>

<style lang="scss">

@import "scss/plugin";

footer{
    background-color: $bg-highlight;
    padding: 30px 0 40px;
    font-size: 12px;
    text-align: center;
    color: $gray;
    a{
        color: $gray;
        &:hover{
            color: $color-main;
        }
    }
}

</style>

