<template>
    <div>
        <!-- <h2>app--首页</h2> -->
        <router-view></router-view>
        <!-- <Foot></Foot> -->
        <MFoot></MFoot>
    </div>
</template>

<script>
    import MFoot from "@/components/mFoot.vue"
    export default {
        components: {
            MFoot
        }
    }
</script>