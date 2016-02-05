var path = require('path');

module.exports = {
    entry: './public/javascripts/app.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: '/home/runner/react-blog/public/javascripts/bundle.js'
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
            },
            {
                test: /\.json$/,
                loader: 'json'
            }

	    ]
    }
};
