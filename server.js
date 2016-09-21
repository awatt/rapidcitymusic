var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var bodyParser = require('body-parser');

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//nodemail server-side route
var email = require('./routes/email');
app.use('/email', email);

// var publicPath = path.resolve(__dirname, 'public');
// app.use(express.static(publicPath));

if (isDeveloping) {
	var compiler = webpack(config);

	  compiler.plugin('compile', function() {
	    console.log('Bundling...');
	    bundleStart = Date.now();
	  });

	  compiler.plugin('done', function() {
	    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
	  });		

	var middleware = webpackMiddleware(compiler, {
		publicPath: config.output.publicPath,
		contentBase: 'src',
		stats: {
			colors: true,
			hash: false,
			timings: true,
			chunks: false,
			chuckModuels: false,
			modules: false
		}
	});

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('*', function response(req, res){
		res.sendFile(path.join(__dirname, 'index.html'));
	});
	// app.get('*', function response(req,res){
	// 	console.log('GOT INTO MAIN APP.GET RESPONSE')
	// 	console.log('middleware.fileSystem: ', middleware.fileSystem)
	// 	res.write(middleware.fileSystem.readFileSync(path.join(__dirname, './index.html')))
	// 	console.log('GOT PAST RES.WRITE')
	// 	res.end();
	// });

} else {
	app.use(express.static(__dirname + '/dist'));
	app.get('*', function response(req, res){
		res.sendFile(path.join(__dirname, 'index.html'));
	});
}


  // app.get('*', function response(req, res) {
  //   res.sendFile(path.join(__dirname, 'index.html'));
  // });

// if(!isProduction){
// 	console.log("DEVELOPMENT MODE ACHIEVED")
	// var bundle = require('./server/bundle.js');
	// bundle();

// 	app.all('/build/*', function(req, res){
// 		proxy.web(req, res, {
// 			target: 'http://localhost:8080'
// 		});
// 	});

// 	// app.all('/email/*', function(req, res){
// 	// 	proxy.web(req, res, {
// 	// 		target: 'http://localhost:8080'
// 	// 	});
// 	// });
// }

// proxy.on('error', function(e){
// 	console.log('Could not connect to proxy, please try again...');
// });

// app.listen(port, function () {
// 	console.log('Server running on port ' + port);
// });

app.listen(port, '0.0.0.0', function onStart (err) {
	if(err){
		console.log(err);
	}
	console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});