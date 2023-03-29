// main.js

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000/api'
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
