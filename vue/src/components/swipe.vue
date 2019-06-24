<template>
    <div class="swiper-container" :id="id">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'swipe',
        props: ["id", 'swiperOpetios'],
        mounted() {
            var mySwiper = new Swiper("#" + this.id, this.swiperOpetios)
        }
    }
</script>