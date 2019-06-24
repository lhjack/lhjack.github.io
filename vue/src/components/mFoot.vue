<template>
    <footer>

        <mt-tabbar v-model="selected">
            <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
                <i slot="icon" class="icon iconfont" v-html="foot.icon"></i>
                {{foot.txt}}
            </mt-tab-item>
        </mt-tabbar>
    </footer>
</template>
<script>
    import { bus } from "@/utils/bus"
    export default {
        name: "Mfoot",
        data() {
            return {
                foots: [
                    { txt: "首页", path: "/index/home", name: "home", icon: "&#xe62a;" },
                    { txt: "分类", path: "/index/classify", name: "classify", icon: "&#xe778;" },
                    { txt: "购物车", path: "/index/cart", name: "cart", icon: "&#xe614;" },
                    { txt: "我", path: "/index/my", name: "my", icon: "&#xe60c;" }
                ],
                selected: 'home'
            }
        },
        watch: {
            selected(newVal) {
                this.$router.push({ name: newVal })
            }
        },
        mounted() {
            console.log(this.$route);
            this.selected = this.$route.name;

            bus.$on("changeActive", (name) => {
                this.selected = name;
            })
        }
    }
</script>
<style lang="scss" scoped>
    footer {
        position: fixed;
        width: 100%;
        height: .9rem;
        left: 0;
        bottom: 0;
        background: #fff;
        display: flex !important;
        z-index: 100;
        border-top: 1px solid black;

        div {
            flex: 1;
            height: 0.9rem;

            a {
                display: block;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 0.06rem 0;
                text-align: center;
                font-family: "微软雅黑";
                color: #999;
                position: relative;

                i {
                    width: 100%;
                    height: 0.45rem;
                    line-height: 0.45rem;
                    font-size: 0.42rem !important;
                }

                span {
                    width: 100%;
                    height: 0.35rem;
                    line-height: 0.35rem;
                    font-size: 0.26rem;
                }

                .hot {
                    position: absolute;
                    top: 0;
                    left: 60%;
                    display: inline;
                    width: .25rem;
                }
            }

            .nav-active,
            .router-link-exact-active {
                color: #0dc441;
                border-color: #0dc441;
            }

        }
    }
</style>