import {
	webpack,
	HotModuleReplacementPlugin,
	DefinePlugin,
	DllReferencePlugin,
} from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './base.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackDevServer, { Configuration } from 'webpack-dev-server'
import path from 'path'
import chalk from 'chalk'
import { error, log } from './utils'

const devOptions = merge(baseConfig, {
	mode: 'development',
	devtool: 'eval-cheap-source-map',
	output: {
		filename: '[name].js',
		chunkFilename: '[id].js',
	},
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': '"development"',
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),
		new HotModuleReplacementPlugin(),
		new DllReferencePlugin({
			manifest: path.resolve(__dirname, '../build/vendor-mainfest.json'),
		}),
	],
})
const options: Configuration = {
	hot: true,
	stats: {
		errorDetails: true,
	},
	contentBase: path.resolve(__dirname, '../'),
}
WebpackDevServer.addDevServerEntrypoints(devOptions, options)
const complier = webpack(devOptions)
const server = new WebpackDevServer(complier, options)

server.listen(3000, (err) => {
	if (err) {
		error(chalk.red(err))
		process.exit(1)
	}

	log(chalk.green('server render successful!'))
})
