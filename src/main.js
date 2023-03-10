import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "./store";

import TypeNav from "./components/TypeNav";
import MyPagination from "./components/Pagination";

import './plugins/swiper'   //加载swiper的配置
import './plugins/element'  //加载element-ui
import './mock/mockServer'  //加载mock数据
import './plugins/velidate' //表达验证

import * as API from '@/api'
// 路由懒加载
import VueLazyload from "vue-lazyload";
import loading from "@/assets/images/loading.gif";
// 注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(MyPagination.name, MyPagination)
Vue.use(VueLazyload,{
  loading  //:require('@/assets/images/loading.gif')
})
// 控制台不显示 非生产环境下的打包提示
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    // 1)创建或指定事件总线，保存在Vue上
    Vue.prototype.$bus = this
    Vue.prototype.$API = API //当不使用vuex时，把接口请求函数全部装在对象中挂在vue原型上
  },

  render: h => h(App),
  router, //注册路由器
  store   //注册vuex的store对象
}).$mount('#app')
