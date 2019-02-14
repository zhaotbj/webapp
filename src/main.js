import Vue from 'vue'
import App from './App'
import router from './router'

import httpPlugin from '@/assets/js/http'
Vue.config.productionTip = false
Vue.use(httpPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
