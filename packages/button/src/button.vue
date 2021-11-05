<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-24 15:35:07
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 18:58:56
-->
<template>
  <button
    ref="button"
    :disabled="buttonDisabled"
    class="ai-button"
    :class="[
      type ? 'ai-button--' + type : '',
      {'is-disabled': buttonDisabled}
    ]"
    @click="handleClick"
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
		},
		appendToBody: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			name: ''
		}
	},
	computed: {
		buttonDisabled() {
			return this.disabled
		}
	},
	mounted() {
		if (this.appendToBody) {
			document.body.appendChild(this.$el)
		}
	},
	destroyed() {
		// if appendToBody is true, remove DOM node after destroy
		if (this.appendToBody && this.$el && this.$el.parentNode) {
			this.$el.parentNode.removeChild(this.$el)
		}
	},
	methods: {
		handleClick(evt) {
			this.$emit('click', evt)
		}
	}
}
</script>

