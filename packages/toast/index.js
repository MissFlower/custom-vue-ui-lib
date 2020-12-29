/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-29 18:09:25
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 18:34:35
 */

import AiToast from './src/toast'

// 在调用Vue.use()方法时,会执行 install()方法
AiToast.install = function(Vue) {
  Vue.component(AiToast.name, AiToast)
}

export default AiToast
