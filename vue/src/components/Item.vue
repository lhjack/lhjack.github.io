<template>
    <div>
        <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
            <img :src="good.img" alt="" width="100%" height="240">
            <h2 class="h2">{{good.name}} -- ¥RMB{{  good.price }} -- {{good.type.text}}</h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "item",
        props: ["good"]
    }
</script>
<style scoped>
    .item {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: block;
        border-bottom: 2px dotted darkgoldenrod;
    }

    .h2 {
        height: 40px;
        color: darkmagenta;
        font-size: .3rem;
    }

    .item-move {
        animation: zoomInDown .8s;
    }
</style>