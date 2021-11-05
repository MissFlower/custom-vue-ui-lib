<template>
  <button
    class="btn-prev"
    :disabled="disabled"
    @click="nextClick"
  >＞</button>
</template>

<script>
export default {
	name: 'Prev',
	props: {
		currentPage: {
			type: Number,
			required: true
		},
		pageCount: {
			type: Number,
			required: true
		}
	},
	computed: {
		disabled() {
			return this.currentPage === this.pageCount
		}
	},
	methods: {
		nextClick() {
			this.$emit('next-click')
		}
	}
}
</script>
