<template>
    <div>
        <!-- <h2>guide-guide-guide</h2>
        <img :src="one" alt=""> -->
        <mt-swipe :auto="4000" class="guide" :continuous="false" :show-indicators="false">
            <mt-swipe-item v-for="(img,i) in imges" :key="i">
                <img :src="img" alt="" class="g-img" @click="gotoHome(i)">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: 'guide',
        data() {
            return {
                one: require("@/assets/logo.png"),
                imges: [
                    require("@/assets/images/slide1.png"),
                    require("@/assets/images/slide2.png"),
                    require("@/assets/images/slide3.png"),
                    require("@/assets/images/slide4.png"),
                ]
            }
        },
        methods: {
            gotoHome(id) {
                if (id == this.imges.length - 1) {
                    this.$router.push({ name: 'home' })
                }
            }
        },
        mounted() {
            if (localStorage.visi) {
                localStorage.visi++;
                if (localStorage.visi > 3) {
                    this.$router.push({ name: 'home' })
                }
            } else {
                localStorage.visi = 1
            }
        }
    }
</script>
<style scoped>
    .guide,
    .g-img {
        width: 100%;
        height: 100%;
    }
</style>