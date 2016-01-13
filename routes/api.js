//no
var express = require("express");
var api = express.Router();
var http = require("http");

var options = {
  hostname : "localhost",
  port : "8080",
  path : ""
};

function handleResponse(res){
    var data = "";
    res.on("data", function(chunk){
        data+= chunk;
    });
    res.on("end", function(){
        console.log(data);
    });
};

api.get('*', function(req, res){
    options.path = req.originalUrl;
    http.request(options, function(res){
        handleResponse(res);
    }).end();
});

module.exports = api;