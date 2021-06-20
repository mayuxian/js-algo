module.exports = {
  env: {
    "browser": true,
    "node": true,
    // "es2021": true,
    // "jest/globals": true
  },
  globals: {
    "window": true,
  },
  extends: [
    // "eslint:recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // 'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    "sourceType": "module",
    // project: path.resolve(__dirname, './tsconfig.json'),
    // tsconfigRootDir: __dirname,
  },
  plugins: [
    // "vue",
    // "@typescript-eslint"
  ],
  rules: {
    // "off"或0 -关闭规则
    // "warn" 或1 - 开启规则, 使用警告 程序不会退出
    // "error"或2 - 开启规则, 使用错误 程序退出
    "no-unused-vars": 'off',
    "no-extra-semi": 'off'
  }
}
