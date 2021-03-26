module.exports = {
    root: true,
  
    env: {
      node: true
    },
  
    'extends': [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      // '@vue/typescript/recommended',
    ],
  
    parserOptions: {
      ecmaVersion: 2020
    },
  
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'indent': ['error', 2],
      'vue/html-indent': ['error', 2, {
        'attribute': 1,
        'baseIndent': 1,
        'closeBracket': 0,
        'alignAttributesVertically': true,
        'ignores': []
      }],
      'quotes': [2, 'single'],
      'semi': [2, 'always'],
      'no-unused-vars': 'error',
      'space-unary-ops': [1, { 'words': true, 'nonwords': false }],
      'brace-style': [2, '1tbs', { 'allowSingleLine': false }],
      'comma-spacing': [2, { 'before': false, 'after': true }],
      'comma-style': [2, 'last'],
      'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
      'lines-around-comment': [
        2, {
          'beforeBlockComment': false,
          'beforeLineComment': false,
          'afterBlockComment': false,
          'afterLineComment': false,
          'allowBlockStart': true,
          'allowObjectStart': true,
          'allowArrayStart': true
        }],
      'max-depth': [2, 4],
      'max-len': [1, 160, 2],
      'max-nested-callbacks': [2, 3],
      'max-params': [2, 5],
      'max-statements': [1, 80],
      'no-array-constructor': [2],
      'no-lonely-if': 2,
      'no-multiple-empty-lines': [2, { 'max': 3, 'maxEOF': 1 }],
      'no-nested-ternary': 2,
      'no-spaced-func': 2,
      'no-trailing-spaces': 2,
      'no-unneeded-ternary': 2,
      'object-curly-spacing': [2, 'always', {
        'objectsInObjects': false,
        'arraysInObjects': false
      }],
      'arrow-spacing': 2,
      'block-scoped-var': 2,
      'no-dupe-class-members': 2,
      // 'no-var': 1,
      'object-shorthand': [1, 'always'],
      'array-bracket-spacing': [2, 'never'],
      'operator-linebreak': [2, 'after'],
      'semi-spacing': [2, { 'before': false, 'after': true }],
      'keyword-spacing': ['error'],
      'space-before-blocks': 2,
      'block-spacing': [2, 'always'],
      'space-before-function-paren': [2, 'never'],
      'space-in-parens': [2, 'never'],
      'spaced-comment': [1, 'always',
        { 'exceptions': ['-', '*', '+']
        }],
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      'camelcase': 'off',
      '@typescript-eslint/camelcase': 0,
      // allow debugger during development
    },
  
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true
        }
      }
    ]
  };
  