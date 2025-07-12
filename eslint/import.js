import importNewLines from 'eslint-plugin-import-newlines'
import { importX } from 'eslint-plugin-import-x'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'

export default [
  {
    plugins: {
      'import-x': importX,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import/order': 'off',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': [
        'warn',
        {
          allow: ['node:path'],
        },
      ],
      'import-x/order': [
        'error',
        {
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'unknown',
          ],
          'pathGroups': [
            {
              pattern: '@/**',
              group: 'external',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowedDepth: 2,
          allowSameFolder: true,
          prefix: '@',
          rootDir: 'src',
        },
      ],
    },
  },
  {
    plugins: {
      'import-newlines': importNewLines,
    },
    rules: {
      'max-len': [
        'error',
        120,
      ],
      'import-newlines/enforce': [
        'error',
        4,
        120,
      ],
    },
  },
]
