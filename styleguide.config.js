let webpack = require('webpack')

module.exports = {
	components: 'components/**/*.js',
	require: ['./styles/globals.scss'],
	ignore: [
		'components/ScholarCard/*.js',
		'components/Modal/*.js',
		'components/Navigation/*.js',
		'components/Header/*.js',
		'components/DropDown/*.js',
		'components/SelectButton/*.js',
		'components/ScholarCardItem/*.js',
	],
	webpackConfig: {
		module: {
			rules: [
				{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				process: { env: {} },
			}),
		],
	},
}
