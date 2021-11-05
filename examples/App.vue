<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:20:13
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 19:03:11
--><template>
  <div id="app">
    <AiButton type="primary">我的按钮</AiButton>
    <AiButton type="warning">我的按钮</AiButton>
    <AiButton type="danger">我的按钮</AiButton>
    <AiButton type="info">我的按钮</AiButton>
    <AiInput v-model="value" @input.native="handleInput" />
    <AiButton
      type="success"
      appendToBody
      @click="open"
    >toast</AiButton>
    <AiToast
      :visible.sync="visible"
      :message="message"
      appendToBody
    />
    <AiPagination
      background
      :current-page.sync="pageIndex"
      @current-change="currentChange"
    />
  </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			value: '哈哈',
			visible: false,
			message: '我是提示框Total的内容消息！',
			pageIndex: 2
		}
	},
	methods: {
		handleInput(e) {
			console.log(e)
		},
		open() {
			this.visible = true
		},
		currentChange(value) {
			console.log(`当前页面改变了：第${this.pageIndex}页`)
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

