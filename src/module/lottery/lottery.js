import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import routeConfig from './router/router-config'
import 'common/css/reset.css'
import global_ from 'common/js/common.js'

// 引入element-ui组件
import ElementUi from 'element-ui'
// import Fecha from 'fecha'

// import 'element-ui/lib/theme-default/index.css'
// import store from './store.js'

//加载路由中间件
// Vue.use(VueRouter)
Vue.use(VueResource)


Vue.prototype.GLOBAL = global_;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
