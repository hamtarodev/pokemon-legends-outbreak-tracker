// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'sort-imports-es6-autofix'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    semi: [2, 'always'],
    quotes: ['error', 'single'],
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }]
  }
};