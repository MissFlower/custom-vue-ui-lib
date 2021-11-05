module.exports = {
	presets: ['@vue/cli-plugin-babel/preset'],
	plugins: [
		[require.resolve('babel-plugin-module-resolver'), {
			root: ['ai-ui'],
			alias: {
				'ai-ui/src': './src'
			}
		}]
	]
}
