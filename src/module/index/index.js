import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import routeConfig from './router-config'
import 'common/css/reset.css'
import global_ from 'common/js/common.js'

// 引入element-ui组件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


//加载路由中间件
// Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUi)

Vue.prototype.GLOBAL = global_;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


