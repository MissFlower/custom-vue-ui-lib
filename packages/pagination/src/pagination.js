import Pager from './pager'
import Prev from './prev'
import Next from './next'
import { isNumber } from 'ai-ui/src/utils/is'
export default {
	name: 'AiPagination',
	props: {
		// 总页数
		pageCount: {
			type: Number,
			default: 10
		},
		// 页码按钮的数量
		pagerCount: {
			type: Number,
			default: 7
		},
		pageSize: {
			type: Number,
			default: 10
		},
		disabled: {
			type: Boolean,
			default: false
		},
		background: {
			type: Boolean,
			default: false
		},
		currentPage: {
			type: Number,
			default: 1
		},
		total: {
			type: Number
		}
	},
	data() {
		return {
			interalCurrentPage: 1
		}
	},
	computed: {
		internalPageCount() {
			if (isNumber(this.total)) {
				return Math.max(1, Math.ceil(this.total / this.pageSize))
			} else if (isNumber(this.pageCount)) {
				return Math.max(1, this.pageCount)
			}
			return null
		}
	},
	watch: {
		currentPage: {
			handler(val) {
				this.interalCurrentPage = this.getValidCurrentPage(val)
			},
			immediate: true
		},
		interalCurrentPage: {
			handler(val) {
				this.$emit('update:current-page', val)
			},
			immediate: true
		}
	},
	render() {
		return (
			<div class={['ai-pagination', { 'is-background': this.background }]}>
				<Prev currentPage={this.interalCurrentPage} on-prev-click={this.prevClickHandle} />
				<Pager currentPage={this.interalCurrentPage} pageCount={this.internalPageCount} pagerCount={this.pagerCount} disabled={this.disabled} on-change={this.handleCurrentChange} />
				<Next currentPage={this.interalCurrentPage} pageCount={this.internalPageCount} on-next-click={this.nextClickHandle} />
			</div>
		)
	},
	methods: {
		handleCurrentChange(page) {
			this.interalCurrentPage = this.getValidCurrentPage(page)
			this.emitChange()
		},
		prevClickHandle() {
			this.interalCurrentPage = this.getValidCurrentPage(--this.interalCurrentPage)
			this.emitChange()
		},
		nextClickHandle() {
			this.interalCurrentPage = this.getValidCurrentPage(++this.interalCurrentPage)
			this.emitChange()
		},
		getValidCurrentPage(val) {
			val = parseInt(val, 10)
			let resetValue = val
			if (!isNumber(val)) {
				if (isNaN(val) || val < 1) {
					resetValue = 1
				}
			} else {
				if (val < 1) {
					resetValue = 1
				} else if (val > this.internalPageCount) {
					resetValue = this.internalPageCount
				}
			}
			return resetValue
		},
		emitChange() {
			this.$nextTick(() => {
				this.$emit('current-change', this.interalCurrentPage)
			})
		}
	}
}
