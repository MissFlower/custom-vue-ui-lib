<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-29 17:59:27
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 19:03:44
-->
<template>
  <div class="toast" v-if="visible">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'AiToast',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 1500
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(val) {
      if (val) {
        setTimeout(() => {
          this.$emit('update:visible', false)
        }, this.duration)
      }
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
