// https://eslint.org/docs/rules/
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        endOfLine: 'lf',
        printWidth: 120,
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
  },
  overrides: [
    {
      files: ['./view/**/*.{{j,t}s?(x),vue}'],
      env: {
        browser: true,
      },
      extends: ['plugin:vue/vue3-essential'],
      rules: {
        'no-console': [1, { allow: ['warn', 'error'] }],
      },
    },
    {
      files: ['./view/**/*.html'],
      plugins: ['eslint-plugin-html'],
    },
  ],
};
