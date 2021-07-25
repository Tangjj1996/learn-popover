import path from 'path'
import { webpack, DllPlugin, Configuration } from 'webpack'
import chalk from 'chalk'
import { log, error } from './utils'

const dllOptions: Configuration = {
  mode: 'development',
  entry: ['react', 'react-dom'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'vendor.bundle.js',
    library: 'verdor_lib',
  },
  plugins: [
    new DllPlugin({
      name: 'verdor_lib',
      format: true,
      path: path.resolve(__dirname, '../build/vendor-mainfest.json'),
    }),
  ],
}
const complier = webpack(dllOptions)

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
