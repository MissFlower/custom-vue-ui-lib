/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:20:13
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 18:36:33
 */
import Vue from 'vue'
import App from './App.vue'

import AiUi from '../src'
Vue.use(AiUi, {
  size: 14
})

// // 1.引入自定义的 toast插件
// import toast from './components/Toast'
// // 2.安装toast插件
// Vue.use(toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
