<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-29 17:59:27
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 17:59:40
-->
<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    // 也可以通过ES6的方式,对参数进行默认值的设定
    // show(message="我是默认弹窗内容", duration=1500) { }
    show(message, duration) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        z-index: 999;
        border-radius:4px;
        color: #fff;
        background-color:rgba(0, 0, 0, .5);
    }
</style>
