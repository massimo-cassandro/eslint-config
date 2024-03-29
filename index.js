/* eslint-env node */

module.exports = {
  'env': {
    'browser': true,
    'jquery': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'ignorePatterns': [
    'dist/**/*.*',
    '**/node_modules/**/*.*',
    '**/vendor/**/*.*',
    '**/*-min.js',
    '**/*.min.js'
  ],
  'parserOptions': {
    'ecmaVersion': 2021,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ignoredNodes': ['TemplateLiteral *']
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eqeqeq': ['warn', 'always', {'null': 'ignore'}],
    'no-extra-boolean-cast': 'off',
    'no-extra-semi': 'error',
    'no-throw-literal': 'off',
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'no-console': 'warn',
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],
    'import/no-anonymous-default-export': 0
  }
};
