import { Configuration } from 'webpack'
import path from 'path'

export default {
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[id].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.d.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
} as Configuration
