var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
//var api = require('./routes/api');
var httpProxy = require('http-proxy');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var proxy = new httpProxy.createProxyServer();

app.post('/v1/oauth/token', function(req, res){
  req.headers["contentType"] = "application/x-www-form-urlencoded";
  req.headers["accept"] = "application/json;charset=utf-8";
  proxy.web(req, res);
});

var addresses = [
  {
    host: 'https://spring-boot-simple.herokuapp.com',
    port: 80
  }
  //{
  //  host: 'localhost',
  //  port: 8081
  //}
];


app.all('/v1/*', function(req, res){
  req.headers["contentType"] = "application/json;charset=utf-8";
  var target = { target: addresses.shift() };
  proxy.web(req, res, target);
  addresses.push(target.target);
});

proxy.on('error', function (err, req, res) {
  if(err.code == 'ECONNREFUSED'){
    var target = { target: addresses.shift() };
    proxy.web(req, res, target);
    addresses.push(target.target);
  }else{
    throw err;
  }
});


app.use('/*', index);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  var error = {
    timestamp: new Date().getTime(),
    status: 404,
    error: "404",
    message: "page Not Found",
    path: req.originalUrl
  };
  res.send(error,err.status);
});

// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var error = {
    timestamp: new Date().getTime(),
    status: 404,
    error: "404",
    message: "page Not Found",
    path: req.originalUrl
  };
  res.send(error, error.status());
});

module.exports = app;
