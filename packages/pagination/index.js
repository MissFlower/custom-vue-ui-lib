import AiPagination from './src/pagination'

// 当时用vue.use(AiPagination)时会调用AiPagination.install方法
AiPagination.install = function(Vue) {
	console.log(AiPagination)
	Vue.component(AiPagination.name, AiPagination)
}

export default AiPagination
