import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import 'common/css/reset.css'
import global_ from 'common/js/common.js'

// 引入element-ui组件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource)
Vue.use(ElementUi)

Vue.prototype.GLOBAL = global_;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


