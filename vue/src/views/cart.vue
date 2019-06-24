<template>
    <div>
        <h2> 购物车 cart ... </h2>
        <h2>Vux 案例</h2>
        <div>
            <h2>count---{{count1}}---{{count2}}---{{count3}}---{{count}}</h2>
            <h2>city1---{{city1}}---{{city2}}---{{city}}</h2>
            <h2>msg--{{msg1}}---{{msg}}</h2>
        </div>
        <div>
            <hr>
            <mt-button type="primary" @click="add">count add</mt-button>
            <mt-button type="danger" @click="desc(10)">count desc 10</mt-button>
            <mt-button type="primary" @click="increment(40)">count add 40</mt-button>
            <mt-button type="danger" @click="changeCity('北京-深圳')">地方</mt-button>
            <p>
                <input type="text" placeholder="请输入" ref="one" @input="getMsg">
            </p>
            <mt-button type="danger" @click="changeCityAjax({url:'/vue/index',cb(){ }})">异步修改city </mt-button>
        </div>
    </div>
</template>
<script>
    import store from "@/store";
    import { mapState, mapActions, mapMutations } from "vuex"
    export default {
        data() {
            return {
                count1: this.$store.state.count + 100,
                count2: store.state.count + 888,
                city1: this.$store.state.city
            }
        },
        computed: {
            // count3() {
            //     return this.$store.state.count;
            // },
            // msg1() {
            //     return this.$store.state.msg;
            // },
            // city2() {
            //     return this.$store.state.city;
            // }

            ...mapState({   // 会把这些属性 传入 computed this.count3 
                // 箭头函数可使代码更简练
                count3: state => state.count,
                // 传字符串参数 'msg' 等同于 `state => state.msg`
                msg1: 'msg',
                city2(state) {   // state 就mapState 把 store.state 当做参数传入 
                    return state.city + " wuhan1902"
                }
            }),

            ...mapState([
                'count',
                'msg',
                'city'
            ])
        },
        methods: {
            // add() {
            //     // dispatch(actionType,参数)
            //     this.$store.dispatch("countAdd")
            // },
            // desc() {
            //     this.$store.dispatch("countDesc", 10)
            // },
            ...mapActions({
                add: "countAdd",  // 将 `this.add()` 映射为 `this.$store.dispatch('countAdd')`
                desc: "countDesc"   // 将 `this.desc()` 映射为 `this.$store.dispatch('countDesc')`
            }),
            // increment(n) {
            //     this.$store.dispatch("increment", n)
            // },
            // changeCity(city) {
            //     this.$store.dispatch("changeCity", city)
            // },
            // changeMsg(msg) {
            //     this.$store.dispatch("changeMsg", msg)
            // },
            ...mapActions([
                'increment',  // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
                'changeCity',   // 将 `this.changeCity()` 映射为 `this.$store.dispatch('changeCity')`
                'changeCityAjax'
            ]
            ),
            ...mapMutations([
                'changeMsg'   //  this.changeMsg  映射为  this.$store.commit('changeMsg')
            ]),
            getMsg() {
                console.log(this.$refs.one.value)
                // this.changeMsgBy(this.$refs.one.value);
                this.changeMsg(this.$refs.one.value)
            }
        },
        mounted() {
            console.log(this.$store)
        }

    }
</script>