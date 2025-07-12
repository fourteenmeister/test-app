import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

export default {
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  ...reactPlugin.configs.flat.recommended,
  languageOptions: {
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
  rules: {
    ...reactPlugin.configs.flat.recommended.rules,
  },
}
