/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 16:18:46
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-24 19:13:25
 */
import Button from '../packages/button/index.js'
import Input from '../packages/input/index.js'

const components = [
  Button,
  Input
]

const install = function(Vue, options = {}) {
  // console.log(options)
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button,
  Input
}

export default {
  version: '0.0.1',
  install,
  Button,
  Input
}
