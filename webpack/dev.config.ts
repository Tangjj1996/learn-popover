import { webpack, HotModuleReplacementPlugin } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './base.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import chalk from 'chalk'
import { log, error } from './utils'
import * as fs from 'fs'

fs.rmSync(path.resolve(__dirname, '../build'), {
  recursive: true,
  force: true,
})

const devOptions = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new HotModuleReplacementPlugin(),
  ],
})
const complier = webpack(devOptions)

complier.run((err, stats) => {
  if (err || stats.hasErrors()) {
    error(chalk.red(stats.toString()))
    process.exit(1)
  }

  log(
    stats.toString({
      color: true,
    })
  )
})
