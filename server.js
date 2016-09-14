var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var email = require('./routes/email');
var proxy = httpProxy.createProxyServer();
var app = express();
console.log(process.env.NODE_ENV);

var environment = process.env.NODE_ENV;
// console.log('environment: ,' environment)
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.use('/email', email);


  // app.get('*', function response(req, res) {
  //   res.sendFile(path.join(__dirname, 'index.html'));
  // });

// if(!isProduction){
// 	console.log("DEVELOPMENT MODE ACHIEVED")
// 	var bundle = require('./server/bundle.js');
// 	bundle();

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

proxy.on('error', function(e){
	console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
	console.log('Server running on port ' + port);
});