var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

var loadIndex = function() {
	indexAsBuffer = fs.readFile('index.html');
//	return indexAsBuffer.toString();
	return typeOf indexAsBuffer; 
};
app.get('/', function(request, response) {
  response.send(loadIndex());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
