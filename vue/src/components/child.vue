<template>
    <div>
        <h2>child-on</h2>
        <h2>msg--{{msg}}--{{word}}--{{count}}</h2>
        <button @click="send">自定义事件修改父组件</button>
        <slot name="msg">如果没有分发的内容就会默认显示</slot>
    </div>
</template>
<script>
    export default {
        props: ['msg', 'word'],
        data() {
            return {
                count: 1000
            }
        },
        methods: {
            send() {
                this.$emit("sendparent", "我是通过自定义事件过来的")
            }
        }
    }
</script>