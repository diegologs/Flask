import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import Navbar from './components/Navbar/Navbar.vue'
Vue.component('Navbar',Navbar)

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  Navbar,
  template: '<App/>'
}).$mount('#app')
