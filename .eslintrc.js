module.exports = {
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020
    },
    plugins: ['vue', '@typescript-eslint', 'prettier', 'simple-import-sort'],
    rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'no-redeclare': 'off',
        'import/export': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'vue/no-multiple-template-root': 0,
        'import/extensions': [0, 'never', { 'web.js': 'never', json: 'never' }],
        'import/no-unresolved': 0,
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ]
    }
}
