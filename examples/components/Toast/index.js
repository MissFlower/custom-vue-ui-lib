/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-29 18:00:15
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 18:07:37
 */
import Toast from './toast'

// 在调用Vue.use()方法时,会执行 install()方法
Toast.install = function(Vue) {
  // 1.创建组件构造器
  const ToastConstructor = Vue.extend(Toast)

  // 2.使用new的方式,根据组件构造器，可以创建出来一个组件对象
  const toast = new ToastConstructor()

  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el 对应的就是 div 标签元素
  document.body.appendChild(toast.$el)

  // 5.原型方式进行挂载
  Vue.prototype.$toast = toast
}

export default Toast
