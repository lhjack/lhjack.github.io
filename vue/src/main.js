import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
Vue.config.productionTip = false

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局声明   还要引入样式 

import ajax from "@/utils/ajax.js";
Vue.prototype.$axios = ajax   //this.$axios=>axios

import VueResource from "vue-resource";
Vue.use(VueResource)

import Head from "@/components/head.vue";
Vue.component("Head", Head)  //全局注册
import Foot from "@/components/foot.vue";
Vue.component("Foot", Foot)
import Swipe from "@/components/swipe.vue";
Vue.component("Swipe", Swipe)
import List from "@/components/List.vue";
Vue.component("List", List);
import "@/styles/index.scss";
import { bus } from "@/utils/bus.js";
new Vue({
  router,
  store,
  mounted() {
    console.log("这是项目的根实列")
  },
  watch: {
    '$route': function (to) {
      console.log(to);
      bus.$emit("changeActive", to.name)
    }
  },
  render: h => h(App) //项目的根组件
}).$mount('#app')
