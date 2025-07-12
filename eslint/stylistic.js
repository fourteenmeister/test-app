import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.recommended,
  {
    rules: {
      'indent': ['error', 2],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-curly-spacing': ['error', {
        when: 'never',
        children: true,
      }],
      '@stylistic/keyword-spacing': ['error', {
        before: true,
      }],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: false,
      }],
    },
  },
]
