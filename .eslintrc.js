// https://eslint.org/docs/rules/
const commonRules = {
  'prettier/prettier': [
    1,
    {
      singleQuote: true,
      endOfLine: 'lf',
      printWidth: 120,
      trailingComma: 'all',
    },
  ],
  'import/extensions': [2, 'never', { pattern: { css: 'always' } }],
  'import/prefer-default-export': 0,
  '@typescript-eslint/lines-between-class-members': 0,
  '@typescript-eslint/no-explicit-any': [1, { ignoreRestArgs: true }],
  '@typescript-eslint/no-floating-promises': [2, { ignoreVoid: true, ignoreIIFE: true }],
  '@typescript-eslint/no-inferrable-types': [1, { ignoreParameters: true, ignoreProperties: true }],
  '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: false }],
  '@typescript-eslint/no-non-null-assertion': 0,
  '@typescript-eslint/no-unsafe-argument': 1,
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-unsafe-member-access': 0,
  '@typescript-eslint/no-use-before-define': [
    2,
    {
      classes: false,
      functions: false,
      enums: false,
      typedefs: false,
      ignoreTypeReferences: true,
    },
  ],
  '@typescript-eslint/restrict-template-expressions': [1, { allowBoolean: true }],
  'lines-between-class-members': [1, 'always', { exceptAfterSingleLine: true }],
  'max-classes-per-file': 0,
  'no-bitwise': 0,
  'no-plusplus': 0,
  'no-unused-vars': 1,
  'no-void': [2, { allowAsStatement: true }],
  radix: [1, 'as-needed'],
};

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
    project: ['./tsconfig.eslint.json'],
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    ...commonRules,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
  },
  overrides: [
    {
      files: ['./view/**/*.{{j,t}s?(x),vue}'],
      env: {
        browser: true,
      },
      parserOptions: {
        project: ['./view/tsconfig.json'],
      },
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:vue/vue3-essential',
        '@vue/typescript',
        'plugin:import/typescript',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
      ],
      plugins: ['vue', 'prettier'],
      rules: {
        ...commonRules,
        'no-console': [1, { allow: ['warn', 'error'] }],
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['./view/**/*.html'],
      plugins: ['eslint-plugin-html'],
    },
    {
      files: ['./vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
