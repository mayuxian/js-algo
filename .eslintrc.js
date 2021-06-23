const path = require('path')
const resolve = _path => path.resolve(__dirname, _path)
module.exports = {
  env: {
    "browser": true,
    "node": true,
    'commonjs': true,
    // "es2021": true,
    // "jest/globals": true
  },
  globals: {
    "window": true,
  },
  extends: [
    // "eslint:recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: '@typescript-eslint/parser', //ts
    project: resolve('./tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  plugins: [
    // "@typescript-eslint"
  ],
  rules: {
    // "off"或0 -关闭规则
    // "warn" 或1 - 开启规则, 使用警告 程序不会退出
    // "error"或2 - 开启规则, 使用错误 程序退出
    "no-unused-vars": 'off',
    "no-extra-semi": 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-setting-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off', //TODO:有待更新配置
    // '@typescript-eslint/no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^h$',
    //     varsIgnorePattern: '^h$',
    //   },
    // ],
    'no-use-before-define': 'off',
    // 'no-setting-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
    'space-before-function-paren': 'off',
    //--------------typescript eslint end-----------------
    // "off"或0 -关闭规则
    // "warn" 或1 - 开启规则, 使用警告 程序不会退出
    // "error"或2 - 开启规则, 使用错误 程序退出
    'prettier/prettier': 'off',
    'no-prototype-builtins': 'off',
    'space-before-function-paren': 0,
    // "vue/no-unused-vars": "off", //设置vue中的配置
    'no-unused-vars': [
      'warn',
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'none',
      },
    ],
    'no-empty': 'off',
    'no-undef': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
