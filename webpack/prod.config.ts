import { webpack } from 'webpack'
import { merge } from 'webpack-merge'
import baseConfig from './base.config'

const prodOptions = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
})
const complier = webpack(prodOptions)

complier.run((err, stats) => {
  if (err || stats.hasErrors()) {
  }
})
