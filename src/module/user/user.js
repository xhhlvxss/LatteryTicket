import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from 'components/router/router-config'
import 'common/css/reset.css'
import global_ from 'common/js/common.js'

// 引入element-ui组件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './store.js'

//加载路由中间件
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUi)
// Vue.use(Fecha)




Vue.prototype.GLOBAL = global_;

//定义路由
const router = new VueRouter({
  routes: routeConfig
})

/* eslint-disable no-new */
new Vue({
	router,
  // store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
