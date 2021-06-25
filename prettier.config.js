module.exports = {
  "editor.formatOnSave": false, // 全局默认关闭不做格式化，仅针对 js 和 ts 格式化
  // "[javascript]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode",
  //   "editor.formatOnSave": true,
  // },
  // "[typescript]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode",
  //   "editor.formatOnSave": true,
  // },
  printWidth: 80,
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 使用分号, 默认true
  semi: false,
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 行尾逗号,默认none,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  TrailingCooma: 'none',
  // 对象中的空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // JSX标签闭合位置 默认false
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  jsxBracketSameLine: true,
  // 在jsx中使用单引号代替双引号
  jsxSingleQuote: false,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
  // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  ignorePath: '.prettierignore',
  //true开启,false关闭  prettier使用eslint的代码格式进行校验
  eslintIntegration: true,
  //rue开启,false关闭  prettier使用stylelint的代码格式进行校验
  //   stylelintIntegration: true,
  // 结尾是 \n \r \n\r auto
  endOfLine: 'auto',
  wrapAttributes: false,
  // sortAttributes: false
  // 不格式化vue文件，vue文件的格式化单独设置
  disableLanguages: ['vue']
}
