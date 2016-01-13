var express = require("express");
var index = express.Router();
var path = require("path");

index.all("/", function(req, res){
	res.render("index");
});

module.exports = index;