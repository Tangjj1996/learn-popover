import { Configuration } from 'webpack'
import path from 'path'

export default {
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[id].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: [{ loader: 'babel-loader' }] }],
  },
} as Configuration
