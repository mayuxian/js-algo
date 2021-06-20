const { babel } = require('@rollup/plugin-babel')
//TODO:支持commonjs
// import commonjs from '@rollup/plugin-commonjs' // commonjs模块转换插件
const nodeResolve = require('@rollup/plugin-node-resolve');
const uglify = require('rollup-plugin-uglify')
const typescript = require('@rollup/plugin-typescript')
// const typescript=require('rollup-plugin-typescript')
const tslint = require('rollup-plugin-tslint')
const extensions = ['.js', '.ts', '.jsx', '.tsx'];

module.exports = (config) => {
  const { input, fileName, name, format } = config
  return {
    input: {
      input,
      external: [],
      plugins: [
        nodeResolve({
          extensions,
          modulesOnly: true,
        }),
        //TODO:支持tslint的配置
        tslint({
          // throwOnError: true,
          // throwOnWarning: true,
          // include: ['src/**/*.ts', 'src/**/*.tsx'],
          // exclude: ['node_modules/**', '*.js', '*.scss', '*.css'],
        }),
        typescript(),

        // commonjs(),
        babel({
          // babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          extensions,
        }),
        // resolve(), //加载外部模块
        uglify()
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
