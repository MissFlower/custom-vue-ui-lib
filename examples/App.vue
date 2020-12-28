<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:20:13
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-25 09:45:51
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <AiButton type="success">我的按钮</AiButton>
    <AiButton type="primary">我的按钮</AiButton>
    <AiButton type="warning">我的按钮</AiButton>
    <AiButton type="danger">我的按钮</AiButton>
    <AiButton type="info">我的按钮</AiButton>
    <AiInput v-model="value" @input.native="handleInput" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      value: '哈哈'
    }
  },
  methods: {
    handleInput(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
