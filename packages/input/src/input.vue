<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:54:03
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-24 18:41:03
-->
<template>
  <input
    type="text"
    :class="['ai-input', {
      'is-disabled': disabled
    }]"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  />
</template>

<script>
export default {
  name: 'AiInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang="scss">
input {
  cursor: pointer;
}
.ai-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}

.ai-input.is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>
