<template>
  <button
    class="btn-prev"
    :disabled="disabled"
    @click="prevClick"
  >＜</button>
</template>

<script>
export default {
	name: 'Prev',
	props: {
		currentPage: {
			type: Number,
			required: true
		}
	},
	computed: {
		disabled() {
			return this.currentPage === 1
		}
	},
	methods: {
		prevClick() {
			this.$emit('prev-click')
		}
	}
}
</script>
