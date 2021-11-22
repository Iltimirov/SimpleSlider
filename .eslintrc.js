module.exports = {
  root: true,
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    semi: 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-curly-brace-presence': [2, {props: 'never', children: 'ignore'}],
    'eol-last': 1,
    'react-native/no-inline-styles': 'error',
    'import/no-cycle': 'warn',
    'import/no-self-import': 'warn',
  },
}
