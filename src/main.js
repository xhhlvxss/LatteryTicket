
import Vue from 'vue'
import app from 'module/index/App'




Vue.config.productionTip = false
import global_ from 'components/Global/Global'
Vue.prototype.GLOBAL = global_;

new Vue({
  el: '#app',
  template: '<app/>',
  components: { app }
})
