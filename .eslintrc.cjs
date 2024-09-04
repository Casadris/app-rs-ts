module.exports = {
	env: {
		browser: true,
		node   : true,
		es2021 : true
	},
	parser       : '@typescript-eslint/parser',
	parserOptions: {
		sourceType         : 'module',
		extraFileExtensions: [ '.svelte' ]
	},
	extends: [
		'eslint:recommended',
		'plugin:svelte/recommended',
		'@electron-toolkit/eslint-config-ts/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@stylistic/all-extends',
		'plugin:@stylistic/disable-legacy'
	],
	plugins: [
		'@typescript-eslint',
		'eslint-plugin-svelte',
		'@stylistic'
	],
	overrides: [
		{
			files        : [ '*.svelte' ],
			parser       : 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		// ―― » Svelte —— inline function helper
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@stylistic/computed-property-spacing'            : [ 'error', 'always' ],
		'@stylistic/quotes'                               : [
			'error',
			'single',
			{ allowTemplateLiterals: true }
		],
		'@stylistic/no-confusing-arrow': [
			'error',
			{
				allowParens       : true,
				onlyOneSimpleParam: true
			}
		],
		'@stylistic/no-mixed-spaces-and-tabs': 'off',
		'@stylistic/indent'                  : [
			'error',
			'tab',
			{
				SwitchCase        : 1,
				ImportDeclaration : 1,
				ObjectExpression  : 'first',
				VariableDeclarator: 'first'
			}
		],
		'@stylistic/nonblock-statement-body-position': [
			'error',
			'below'
		],
		'@stylistic/no-extra-parens': [
			'error',
			'functions'
		],
		'@stylistic/arrow-parens': [
			'error',
			'always'
		],
		'@stylistic/linebreak-style': [
			'error',
			'windows'
		],
		'@stylistic/eol-last': [
			'error',
			'windows'
		],
		'@stylistic/quote-props': [
			'error',
			'as-needed'
		],
		'@stylistic/comma-spacing': [
			'error',
			{
				before: false,
				after : true
			}
		],
		'@stylistic/comma-dangle': [
			'error',
			'never'
		],
		'@stylistic/type-annotation-spacing': 'off',
		'@stylistic/key-spacing'            : [
			'error',
			{ align: 'colon' }
		],
		'@stylistic/no-multi-spaces': 'off',
		'@stylistic/semi'           : [
			'error',
			'never'
		],

		'@stylistic/no-extra-semi'  : 'error',
		'@stylistic/space-in-parens': [
			'error',
			'always'
		],
		'@stylistic/array-bracket-spacing': [
			'error',
			'always',
			{
				singleValue    : true,
				objectsInArrays: false,
				arraysInArrays : false
			}
		],
		'@stylistic/object-curly-spacing': [
			'error',
			'always'
		],
		'@stylistic/multiline-comment-style': [ 'error', 'separate-lines' ],
		'@stylistic/multiline-ternary'      : [
			'error',
			'always-multiline'
		],
		'@stylistic/keyword-spacing': [
			'error',
			{ after: true }
		],
		'@stylistic/brace-style'                : 'error',
		'@stylistic/space-before-function-paren': [
			'error',
			'never'
		],
		'@stylistic/function-call-spacing': [
			'error',
			'never'
		],
		'@stylistic/lines-between-class-members': [
			'error',
			'always'
		],
		'@stylistic/array-element-newline': [
			'error',
			'consistent'
		],
		'@stylistic/array-bracket-newline': [
			'error', 'consistent'
		],
		// { minProperties: 2 }
		'@stylistic/object-curly-newline': [
			'error',
			{ consistent: true }
		],
		'@stylistic/function-paren-newline': [
			'error',
			'consistent'
			// { minItems: 3 }
		],
		'@stylistic/object-property-newline'       : 'error',
		'@stylistic/function-call-argument-newline': [
			'error',
			'consistent'
		],
		'@stylistic/dot-location': [
			'error',
			'property'
		],
		'@stylistic/one-var-declaration-per-line': [
			'error',
			'always'
		],
		'@stylistic/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev     : '*',
				next     : 'return'
			},
			{
				blankLine: 'always',
				prev     : [
					'const',
					'let',
					'var'
				],
				next: '*'
			},
			{
				blankLine: 'any',
				prev     : [
					'const',
					'let',
					'var'
				],
				next: [
					'const',
					'let',
					'var'
				]
			}
		],
		'svelte/no-unused-svelte-ignore': 'off'
	}
}
