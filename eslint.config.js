import { tanstackConfig } from '@tanstack/eslint-config'
import tanstackQueryPlugin from '@tanstack/eslint-plugin-query'

import importConfig from './eslint/import.js'
import reactConfig from './eslint/react.js'
import customRules from './eslint/rules.js'
import stylisticConfig from './eslint/stylistic.js'
import typescriptConfig from './eslint/typescript.js'

export default [
  ...tanstackConfig,
  ...tanstackQueryPlugin.configs['flat/recommended'],
  ...typescriptConfig,
  ...importConfig,
  reactConfig,
  ...stylisticConfig,
  {
    rules: customRules,
  },
]
