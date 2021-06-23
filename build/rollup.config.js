
const path = require('path')
const getPath = _path => path.resolve(__dirname, _path)
const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const uglify = require('rollup-plugin-uglify')
const typescript = require('rollup-plugin-typescript2')
const extensions = ['.js', '.ts', '.jsx', '.tsx'];

const eslint = require('@rollup/plugin-eslint') // eslint插件
// eslint
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**']
})

module.exports = (config) => {
  const { input, fileName, name, format } = config
  return {
    input: {
      input,
      external: [],
      plugins: [
        //加载外部模块
        nodeResolve({
          extensions,
          modulesOnly: true,
        }),
        esPlugin,
        typescript({
          tsconfig: getPath('../tsconfig.json'), // 导入本地ts配置
          declarationDir:'./types',
          useTsconfigDeclarationDir: false,  //TODO:设置成true,必须每次删除types目录
          // extensions
        }),
        // babel({
        //   babelHelpers: 'bundled',
        //   exclude: 'node_modules/**',
        //   extensions,
        // }),
        // uglify()
      ]
    },
    output: {
      file: fileName,
      format: format || 'umd', //'esm'  //TODO:需要支持umd和commonjs
      name: name || '$ALGO',
      globals: {}
    }
  }
}
