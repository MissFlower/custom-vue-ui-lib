/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-06-22 11:25:56
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-26 11:57:11
 */
module.exports = {
	printWidth: 150, // 每行最大字符数，超过会换行，默认80
	tabWidth: 2, // 一个tab代表几个空格数，默认2
	useTabs: true, // 是否使用tab进行缩进，默认false
	semi: false, // 结尾是否添加分号 默认true
	vueIndentScriptAndStyle: true, // 在 Vue 文件中缩进 script 和 style 标签 默认 false
	singleQuote: true, // 字符串是否使用单引号，默认false
	quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号。as-needed|consistent|preserve 默认值as-needed
	bracketSpacing: true, // 在对象文字中的括号之间打印空格 默认 true
	trailingComma: 'none', // 是否使用尾逗号，可选值"<none|es5|all>"，默认none
	jsxBracketSameLine: false, // 元素的 > 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素） 默认false
	jsxSingleQuote: false, // 在 JSX 中使用单引号代替双引号 默认 false
	arrowParens: 'avoid', // 箭头函数参数周围包含括号 always|avoid 默认always
	insertPragma: false, // 插入编译指示 默认 false
	requirePragma: false, // 需要编译指示 默认 false
	proseWrap: 'never', // 包装
	htmlWhitespaceSensitivity: 'strict', // HTML 空白敏感度
	endOfLine: 'lf', // 行尾换行方式，可选值"<auto|lf|crlf|cr>"，默认auto
	rangeStart: 0
}
