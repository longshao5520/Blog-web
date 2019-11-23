import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import Axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false

Vue.prototype.$http = Axios.create({
  baseURL: 'http://localhost:3000'
})

// pattern = "YYYY-MM-DD HH:mm:ss"

Vue.filter('dataFormat', function (dataStr:any, pattern:any){
  return moment(dataStr).format(pattern)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
