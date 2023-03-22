module.exports = {
	"extends": [
		"@nuxtjs/eslint-config-typescript"
	],
	"rules": {
		"indent": ['error', 'tab'],
		"quotes": ['error', 'single'],
		"semi": ['error', 'always'],
		'prefer-destructuring': ['warn', { object: true, array: false }],
		'no-unused-vars': ['warn'],
		'no-undef': 0,
		"@typescript-eslint/no-unused-vars": ["off"]
	}	
}
