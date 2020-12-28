<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:35:07
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-24 18:11:43
-->
<template>
  <button
    :disabled="buttonDisabled"
    class="ai-button"
    :class="[
      type ? 'ai-button--' + type : '',
      {'is-disabled': buttonDisabled}
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'AiButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonDisabled() {
      return this.disabled
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss">
.ai-button {
  display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-saiect: none;
    -webkit-user-saiect: none;
    -ms-user-saiect: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px
}
.ai-button+.ai-button {
  margin-left: 10px;
}
.ai-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.ai-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.ai-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.ai-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.ai-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
</style>

