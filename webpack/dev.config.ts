import { webpack } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './base.config'

const devOptions = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
})
const complier = webpack(devOptions)

complier.watch({}, (err, stats) => {
  if (err || stats.hasErrors()) {
  }
})
