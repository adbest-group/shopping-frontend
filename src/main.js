import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Icon from 'vue-svg-icon/Icon.vue';


Vue.config.productionTip = false

import global_ from './utils/Global.js'
Vue.prototype.GLOBAL = global_
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})

Vue.component('icon', Icon);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
