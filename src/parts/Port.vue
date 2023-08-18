<template>
    <div class="port-item">
        <img alt="USBC" v-if="port === 'USB-C'" src="../img/icon/port_usbc.png"/>
        <img alt="USBC Thunder" v-if="port === 'USB-C Thunder'" src="../img/icon/port_usbc.png"/>
        <img alt="闪电" v-if="port === '闪电'" src="../img/icon/port_lightning.png"/>
        <div class="label">{{port}}</div>
    </div>

</template>

<script>
export default {
    name: "Port",
    props: {
        port: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";

.port-item{
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    &:hover{
        img{
            border-color: $color-main;
        }
        .label{
            color: $color-main;
        }
    }
    img {
        border: 1px solid transparent;
        display: block;
        width: 30px;
        height: 30px;
    }
    .label{
        margin-left: 5px;
    }
}

@media (prefers-color-scheme: dark) {
    .port-item{
        img{
            background-color: $dark-bg-highlight;
            border-color: $dark-border;
        }
        &:hover{
            img{
                border-color: transparent;
                background-color: white;
            }
        }
    }
}


</style>
