var http = require("http");

var express = require("express");
var app = express();

//Setup view engine
app.set("view engine", "vash");

//Setup controllers & Map routes
var controllers = require("./controllers");
controllers.init(app);

//Set public static resource folder
app.use(express.static(__dirname + "/public"));

//Setup server
var server = http.createServer(app);
server.listen(3000);