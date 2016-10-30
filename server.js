var path = require('path');
var express = require('express');
// var webpack = require('webpack');
// var webpackMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
// var config = require('./webpack.config.js');
var bodyParser = require('body-parser');

// var isDeveloping = process.env.NODE_ENV !== 'production';
// var port = isDeveloping ? 3000 : Number(process.env.PORT);
var app = express();
var port = Number(process.env.PORT) || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//nodemail server-side route
var email = require('./routes/email');
app.use('/email', email);

// console.log("process.env.GMAIL_UN: ", process.env.GMAIL_UN)
// console.log("process.env.GMAIL_PW: ", process.env.GMAIL_PW)

// if (isDeveloping) {
// 	var compiler = webpack(config);

// 	  compiler.plugin('compile', function() {
// 	    console.log('Bundling...');
// 	    bundleStart = Date.now();
// 	  });

// 	  compiler.plugin('done', function() {
// 	    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
// 	  });		

// 	var middleware = webpackMiddleware(compiler, {
// 		publicPath: config.output.publicPath,
// 		contentBase: 'src',
// 		stats: {
// 			colors: true,
// 			hash: false,
// 			timings: true,
// 			chunks: false,
// 			chuckModuels: false,
// 			modules: false
// 		}
// 	});

// 	app.use(middleware);
// 	app.use(webpackHotMiddleware(compiler));
// 	app.get('*', function response(req, res){
// 		res.sendFile(path.join(__dirname, 'index_dev.html'));
// 	});

// } else {
// 	app.use(express.static(__dirname + '/dist'));
// 	app.get('*', function response(req, res){
// 		res.sendFile(path.join(__dirname, '/dist/index.html'));
// 	});
// }


app.use(express.static(__dirname + '/dist'));
app.get('*', function response(req, res){
	res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, '0.0.0.0', function onStart (err) {
	if(err){
		console.log(err);
	}
	console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});