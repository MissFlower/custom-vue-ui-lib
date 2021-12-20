<template>
  <ul class="ai-pager" @click="onPagerClick">
    <li
      v-if="pageCount > 0"
      :class="{active: currentPage === 1, disabled}"
      class="number"
    >1</li>
    <li
      v-if="showPrevMore"
      :class="{disabled}"
      class="number prev-more-icon"
      @mouseenter="prevMouseenterHandle"
      @mouseleave="mouseleaveHandle"
    >{{ prevMoreText }}</li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="{active: currentPage === pager, disabled}"
      class="number"
    >{{ pager }}</li>
    <li
      v-if="showNextMore"
      :class="{disabled}"
      class="number next-more-icon"
      @mouseenter="nextMouseenterHandle"
      @mouseleave="mouseleaveHandle"
    >{{ nextMoreText }}</li>
    <li
      v-if="pageCount > 1"
      :class="{active: currentPage === pageCount, disabled}"
      class="number"
    >{{ pageCount }}</li>
  </ul>
</template>

<script>
export default {
	name: 'Pager',
	props: {
		pageCount: {
			type: Number,
			required: true
		},
		currentPage: {
			type: Number,
			required: true
		},
		pagerCount: {
			type: Number,
			required: true
		},
		disabled: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			prevMoreText: '···',
			nextMoreText: '···'
		}
	},
	computed: {
		showPrevMore() {
			let showPrevMore = false
			// 要想showPrevMore=true必须要当前的数大于页码按钮数量(不包括prev和next按钮)的一半
			if (this.pageCount > this.pagerCount && this.currentPage > this.pagerCount - (this.pagerCount - 1) / 2) {
				showPrevMore = true
			}
			return showPrevMore
		},
		showNextMore() {
			let showNextMore = false
			// 要想showNextMore=true必须要当前的数小于(总页数-页码数量的一半)
			if (this.pageCount > this.pagerCount && this.currentPage < this.pageCount - (this.pagerCount - 1) / 2) {
				showNextMore = true
			}
			return showNextMore
		},
		pagers() {
			const pageArray = []
			if (this.showPrevMore && !this.showNextMore) {
				const start = this.pageCount - this.pagerCount + 2
				for (let i = start; i < this.pageCount; i++) {
					pageArray.push(i)
				}
			} else if (!this.showPrevMore && this.showNextMore) {
				for (let i = 2; i < this.pagerCount; i++) {
					pageArray.push(i)
				}
			} else if (this.showPrevMore && this.showNextMore) {
				const offset = Math.floor(this.pagerCount / 2) - 1
				for (let i = this.currentPage - offset; i <= this.currentPage + offset; i++) {
					pageArray.push(i)
				}
			} else {
				for (let i = 2; i < this.pageCount; i++) {
					pageArray.push(i)
				}
			}
			return pageArray
		}
	},
	methods: {
		onPagerClick(e) {
			const { target } = e
			if (target.tagName === 'UL' || this.disabled) {
				return
			}
			let newPage = +target.textContent
			const pagerCountOffset = this.pagerCount - 2
			if (isNaN(newPage)) {
				console.dir(target)
				if (~target.className.indexOf('prev-more-icon')) {
					console.log('点击了prev-more-icon')
					newPage = this.currentPage - pagerCountOffset > 1 ? this.currentPage - pagerCountOffset : 1
				} else if (~target.className.indexOf('next-more-icon')) {
					console.log('点击了next-more-icon')
					newPage = this.currentPage + pagerCountOffset < this.pageCount ? this.currentPage + pagerCountOffset : this.pageCount
				}
			}
			if (newPage !== this.currentPage) {
				this.$emit('change', newPage)
			}
		},
		prevMouseenterHandle() {
			this.prevMoreText = '«'
		},
		nextMouseenterHandle() {
			this.nextMoreText = '»'
		},
		mouseleaveHandle() {
			this.prevMoreText = '···'
			this.nextMoreText = '···'
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
