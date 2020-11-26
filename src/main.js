require('./mock/index')
import echarts from "echarts"
import Vue from 'vue'
import App from './App.vue'
// 自定义icon font图标库
import "./assets/iconfont/iconfont"
import './directive/index'
import axios from './plugins/axios'
import './plugins/element.js'
import router from './router'
import store from './store'
// global css
import './styles/index.less'
import i18n from './utils/i18n'
import './utils/permission'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
