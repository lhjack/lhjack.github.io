import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//每一个 Vuex 应用的核心就是 store（仓库） “store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)
// 1. Vuex 的状态存储是响应式的
// 2. 你不能直接改变 store 中的状态 。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
// Vuex 使用单一状态树  一个对象就包含了全部的应用层级状态  所有组件的数据存储 一个对象 state 
import { CHANGE_MSG } from "@/utils/mutate_types.js"
import axios from "@/utils/ajax"
export default new Vuex.Store({
  state: {  // 对象就包含了全部的应用层级状态
    count: 1902,
    city: "china-wh",
    msg: "daydayup",
    login: {},
    good: {},
    carNum: 24,
    keyword: 2222,
    data: {
      mv: [],
      goods: [],
      types: [],
      allGoods: []
    }
  },
  actions: {  // Action 提交的是 mutation，而不是直接变更状态  Action 可以包含任意异步操作  ajax 
    countAdd(context) {
      context.commit("countAdd")
    },
    countDesc(context, num) {
      context.commit("countDesc", num)
    },
    increment(context, num) {
      context.commit("increment", num)
    },
    changeCity({ commit }, city) {
      commit("changeCity", city)
    },
    // changeMsg({ commit }, msg) {
    //   commit(CHANGE_MSG, msg)
    // }
    getMv({ commit }, mv) {
      commit("getMv", mv)
    },
    getSearchGoods({ commit }, { url, cb, params }) {
      axios.get(url, {
        params: params
      }).then(res => {
        cb();  //执行一些回调函数
        commit("getSearchGoods", res.data.result);
      })
    },
    changeCityAjax({ commit }, { url, cb }) {
      axios.get(url).then(res => {
        cb();
        commit("changeCityAjax", res.data.msg)
      })
    },
    getTypesAjax({ commit }, { url }) {
      axios.get(url).then(res => {
        commit("getTypesAjax", res.data.result)
      })
    },
    getAllGoodAjax({ commit }, { url, cb }) {
      axios.get(url).then(res => {
        cb();
        commit("getAllGoodAjax", res.data.result)

      })
    }
  },
  mutations: {
    countAdd(state) {
      console.log(state)
      state.count++;
    },
    countDesc(state, num) {
      state.count -= num;
    },
    increment(state, num) {
      state.count += num;
    },
    changeCity(state, city) {
      state.city = city;
    },
    [CHANGE_MSG](state, msg) {
      state.msg = msg;
    },
    getMv(state, mv) {
      // vuex 数据是响应式   但是修改的数据要让vuex 可以监测   新对象替换老对象
      console.log(mv);
      state.data = { ...state.data, mv: mv }
    },
    getSearchGoods(state, goods) {
      state.data = { ...state.data, goods }
    },
    changeCityAjax(state, city) {
      state.city = city;
    },
    getTypesAjax(state, types) {
      state.data = { ...state.data, types }
    },
    getAllGoodAjax(state, allGoods) {
      state.data = { ...state.data, allGoods }
    },
    getKeyword(state, keyword) {
      state.keyword = keyword;
    }
  },
  getters: {//  需要从 store 中的 state 中派生出一些状态,进行过滤
    newMv(state) {
      return state.data.mv.filter((m, i) => i % 2 == 0);
    },
    newTypes(state) {
      return state.data.types.map((item, i) => {
        item.text = item.text + "_" + i;
        return item;
      })
    }
  }
})
