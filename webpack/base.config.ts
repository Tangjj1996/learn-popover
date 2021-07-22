import {Configuration} from 'webpack'
import path from 'path'

export default {
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: path.resolve(__dirname, '../build')
} as Configuration