module.exports = {
	root: true,
	env: {
		node: true,
		es2022: true,
	},
	extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/multi-word-component-names': 'off',
	},
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
	},
}
