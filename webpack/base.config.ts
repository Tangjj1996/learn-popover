import { Configuration } from 'webpack'
import path from 'path'

const baseOptions: Configuration = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	output: {
		path: path.resolve(__dirname, '../build'),
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
}

export default baseOptions
