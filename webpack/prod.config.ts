import path from 'path'
import * as fs from 'fs'
import { log, error } from './utils'
import { webpack, DefinePlugin } from 'webpack'
import { merge } from 'webpack-merge'
import baseConfig from './base.config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

fs.rmSync(path.resolve(__dirname, '../build'), {
  recursive: true,
  force: true,
})

const prodOptions = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new MiniCssExtractPlugin(),
  ],
})
const complier = webpack(prodOptions)

complier.run((err, stats) => {
  if (err || stats.hasErrors()) {
    error(stats.toString({ color: true }))
    process.exit(1)
  }

  log(stats.toString({ color: true }))
})
