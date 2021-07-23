import { webpack, HotModuleReplacementPlugin } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './base.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackDevServer from 'webpack-dev-server'
import path from 'path'
import chalk from 'chalk'
import { error, log } from './utils'

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
const server = new WebpackDevServer(complier, {
  stats: {
    errorDetails: true,
  },
})

server.listen(3000, (err) => {
  if (err) {
    error(chalk.red(err))
    process.exit(1)
  }

  log(chalk.green('server render successful!'))
})
