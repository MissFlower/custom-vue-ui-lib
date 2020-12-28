/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:54:15
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-24 16:17:27
 */
import AiInput from './src/input'

AiInput.install = function(Vue) {
  Vue.component(AiInput.name, AiInput)
}

export default AiInput
