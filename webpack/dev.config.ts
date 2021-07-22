import { webpack } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './base.config'

const option = merge(baseConfig)
const complier = webpack(option)

complier.run((err, status) => {
    if (err || status.hasErrors()) {
    }
})
