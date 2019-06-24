<template>
    <mt-header v-bind:title="title">
        <div slot="left" v-if="show">
            <mt-button icon="back" @click="goback">返回</mt-button>
        </div>
        <mt-button v-if="flng" icon="search" slot="right" @click="goSearch"></mt-button>
    </mt-header>
</template>
<script>
    export default {
        props: ["title", "show"],
        data() {
            return {
                flng: true
            }
        },
        methods: {
            goback() {
                history.go(-1)
            },
            goSearch() {
                this.$router.push({ name: 'search' })
            }
        },
        mounted() {
            this.flng = this.$route.name == 'search' ? false : true
        }
    }
</script>