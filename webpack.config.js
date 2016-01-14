var path = require('path');

module.exports = {
    entry: './public/javascripts/app.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: 'public/javascripts/bundle.js'
    },
    module: {
    	loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loaders: [ 'babel' ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }
	    ]
    }
};