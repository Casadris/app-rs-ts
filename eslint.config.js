// ―― » eslint `v9.*.*` config
import globals from 'globals'
// import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginSvelte from 'eslint-plugin-svelte'

import svelteConfig from './svelte.config.js'

export default [
	{ files: [ '**/*.{js,mjs,cjs,ts}' ] },
	{ languageOptions: { globals: globals.browser } },
	// pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginSvelte.configs[ 'flat/recommended' ],
	{
		rules: {
			// override/add rules settings here, such as:
			// 'svelte/rule-name': 'error'
		}
	},
	{
		files: [
			'**/*.svelte',
			'*.svelte'
			// '**/*.svelte.ts', '*.svelte.ts', '**/*.svelte.js', '*.svelte.js',
		],
		languageOptions: {
			parserOptions: {
				// ―― » `svelte.config.js`.
				svelteConfig
			}
		}
	},
	{
		files        : [ '*.svelte' ],
		parser       : 'svelte-eslint-parser',
		parserOptions: {
			parser: '@typescript-eslint/parser'
		}
	}
]