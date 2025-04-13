import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPlugin from '@eslint/js'

export default tseslint.config(
  {ignores: ['dist'] as const},
  {
    files: ['**/*.{ts,tsx}'] as const,
    plugins: {
      eslint: eslintPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      'eslint/max-len': [
        'error',
        {
          code: 80,
          ignoreUrls: true
        }
      ],
      'prettier/prettier': 'error'
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
  }
)
