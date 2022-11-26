import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import './form'
import './axios'
import { router} from './router'
import store from './store'

import './globalmixins'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
