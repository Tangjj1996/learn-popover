import path from 'path'
import * as fs from 'fs'
import { log, error } from './utils'
import chalk from 'chalk'
import { webpack, DefinePlugin, DllReferencePlugin } from 'webpack'
import { merge } from 'webpack-merge'
import baseConfig from './base.config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

if (fs.existsSync(path.resolve(__dirname, '../build'))) {
	const filenames = fs.readdirSync(path.resolve(__dirname, '../build'))

	for (let i = 0; i < filenames.length; i++) {
		if (filenames[i].match(/^vendor/)) continue
		fs.rmSync(path.resolve(__dirname, `../build/${filenames[i]}`), {
			recursive: true,
			force: true,
		})
	}
}

const prodOptions = merge(baseConfig, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].[fullhash:8].js',
		chunkFilename: '[id].[chunkhash:8].js',
	},
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
		new DllReferencePlugin({
			manifest: path.resolve(__dirname, '../build/vendor-mainfest.json'),
		}),
	],
})
const complier = webpack(prodOptions)

complier.run((err, stats) => {
	if (err || stats.hasErrors()) {
		error(chalk.red(stats.toString()))
		process.exit(1)
	}
	log(stats.toString())
})
