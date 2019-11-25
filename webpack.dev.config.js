const path = require('path'); 

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['@babel/polyfill','./src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: ''
	},
	mode: 'development',
	devServer:{
		contentBase: path.resolve(__dirname,'dist'),
		index: 'index.html',
		port:'9000'
	},
	module: {
		rules: [
			{
				test:/\.(png|jpg)$/,
				use: ['file-loader']
			},

			{
				test:/\.css$/,
				use: ['style-loader','css-loader']
			},

			{
				test:/\.scss$/,
				use: ['style-loader' , 'css-loader' , 'sass-loader']
			},

			{
				test:/\.js$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: ['transform-class-properties']
					}
				}
			},

			{
				test:/\.hbs$/,
				use: ['handlebars-loader']
			},

		]
	},
	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'List To Do with Fetch',
			template:'src/index.hbs',
			description: 'Basic Webpack'
		}),
	]

};