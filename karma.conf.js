const path = require('path');

module.exports = function (config) {
	config.set({
		browsers: ['PhantomJS'],
		singleRun: true,
		frameworks: ['mocha'],
		files: [
			'tests.webpack.js'
		],
		preprocessors: {
			'tests.webpack.js': ['webpack', 'sourcemap']
		},
		plugins: [
			'karma-phantomjs-launcher',
			'karma-webpack',
			'karma-sourcemap-loader',
			'karma-mocha',
			'karma-mocha-reporter'
		],
		reporters: ['mocha'],
		webpack: {
			devtool: 'inline-source-map',
			module: {
				noParse: [],
				preLoaders: [
					{
						test: /[-_\.](test|spec)\.jsx?$/,
						loader: 'eslint-loader',
						include: path.resolve('./src')
					}
				],
				loaders: [
					{
						test: /\.jsx?$/,
						loader: 'babel-loader',
						exclude: /node_modules/,
						query: {
							presets: ['react', 'es2015']
						}
					}
				]
			},
			resolve: {
				root: path.resolve('./src'),
				extensions: ['', '.js', '.jsx']
			},
			watch: true,
			eslint: {
				formatter: require('eslint-friendly-formatter'),
				configFile: '.eslintrc'
			}
		},
		webpackServer: {
			noInfo: true
		}
	});
};
