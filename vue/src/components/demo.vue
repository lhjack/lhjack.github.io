<template>
    <div>
        <h2>demo-demo</h2>
        <div class="box">
            完整语法高亮
            CommonJS 模块
            组件作用域的 CSS
        </div>
        <p><input type="text" v-model="word"></p>
        <button @click="change">refs 去实现父修改子</button>
        <Child ref="one" msg="this is props" :word="word" v-on:sendparent="getWord">
            <div slot="msg">
                <h2 v-for="(a,i) in arr " :key="i">{{a}}</h2>
            </div>
        </Child>
    </div>
</template>

<script>
    import Child from "./child.vue"
    export default {
        methods: {
            change() {
                this.$refs.one.count += 10;
            },
            getWord(data) {
                this.word = data;
            }
        },
        data() {
            return {
                word: "今天好热",
                arr: ["热热闹闹", "红红火火"]
            }
        },
        components: {
            Child
        }
    }
</script>
<style lang="css" scoped>
    h2 {
        color: aqua;
    }

    .box {
        color: red;
    }
</style>