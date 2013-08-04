var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.CreateServer(express.logger());

app.get('/', function(request, response) {
	var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
});

app.use("/css",express.static(__dirname + '/css/'));
app.use("/js",express.static(__dirname + '/js/'));
app.use("/libs",express.static(__dirname + '/libs/'));

var port = process.env.PORT||8080;
app.listen(port, function(){
	console.log("Listening on " + port);
});


