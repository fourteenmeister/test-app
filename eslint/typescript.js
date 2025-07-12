import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  tsEslint.configs.stylistic,
  {
    languageOptions: {
      parserOptions: {
        project: ['../tsconfig.eslint.json', '../tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
)
