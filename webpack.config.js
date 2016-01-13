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
    		test: /\.js$/, loaders: ['babel'], exclude: [/node_modules/] 
	    },
	    { 
	    	test: /\.css$/, loader: "style-loader!css-loader" 
	    }
	    ]
    }
};