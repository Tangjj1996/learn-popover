import path from 'path'
import { log, error } from './utils'
import { webpack } from 'webpack'
import { merge } from 'webpack-merge'
import baseConfig from './base.config'

import * as fs from 'fs'

fs.rmSync(path.resolve(__dirname, '../build'), {
  recursive: true,
  force: true,
})

const prodOptions = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
})
const complier = webpack(prodOptions)

complier.run((err, stats) => {
  if (err || stats.hasErrors()) {
    error(stats.toString({ color: true }))
    process.exit(1)
  }

  log(stats.toString({ color: true }))
})
