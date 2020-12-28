/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:20:13
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-25 09:43:42
 */
import Vue from 'vue'
import App from './App.vue'

import AiUi from '../src'
Vue.use(AiUi, {
  size: 14
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
