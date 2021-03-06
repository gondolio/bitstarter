var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

var loadIndex = function() {
	indexAsBuffer = fs.readFileSync('./index.html');
	return indexAsBuffer.toString();
};
app.get('/', function(request, response) {
  response.send(loadIndex());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
