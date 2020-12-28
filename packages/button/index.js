/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:35:18
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-24 19:07:04
 */
import AiButton from './src/button'

AiButton.install = function(Vue) {
  Vue.component(AiButton.name, AiButton)
}

export default AiButton
