var http = require("http");

var express = require("express");
var app = express();

//Setup view engine
app.set("view engine", "vash");

//Setup server
var server = http.createServer(app);
server.listen(3000);