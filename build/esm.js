const { promisify } = require('util')
const { ncp } = require('ncp')
const fs = require("fs")
const chalk = require('chalk')

const path = require('path')
const rootDir = path.join(__dirname, '../');

(async () => {
  try {
    const typeDir = path.join(rootDir, './types')
    if (!fs.existsSync(typeDir)) {
      console.error(chalk.red('types目录未生成无法拷贝到esm目录'))
      return;
    }
    await promisify(ncp)(typeDir, './esm')
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
