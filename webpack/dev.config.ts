import { webpack } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './base.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import chalk from 'chalk'
const log = console.log

const devOptions = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
})
const complier = webpack(devOptions)

const watching = complier.watch({}, (err, stats) => {
  if (err || stats.hasErrors()) {
    log(chalk.red(stats.toString()))
    process.exit(1)
  }
})

watching.close((err) => {
  if (err) {
    log(chalk.red(err))
  }
})
