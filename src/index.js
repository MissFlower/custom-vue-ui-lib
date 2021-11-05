/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 16:18:46
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 19:03:00
 */
import Button from '../packages/button/index.js'
import Input from '../packages/input/index.js'
import Toast from '../packages/toast/index.js'
import Pagination from '../packages/pagination'

const components = [Button, Input, Toast, Pagination]

const install = function(Vue, options = {}) {
	// console.log(Vue, options)
	components.forEach(component => {
		Vue.component(component.name, component)
	})
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export { install, Button, Input, Toast }

export default {
	version: '0.0.1',
	install,
	Button,
	Input,
	Toast
}
