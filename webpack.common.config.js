const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js',
	},
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [MiniCSSExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'WebpackTesting',
			filename: 'index.html',
			template: './src/index.html',
			favicon: './src/favicon.ico',
			
		}),
		new MiniCSSExtractPlugin({
			filename: 'style.css',
		}),
	],
}
