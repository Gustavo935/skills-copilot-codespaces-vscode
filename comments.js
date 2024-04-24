//create web server
var http = require('http');

//create web server
var server = http.createServer(function(req, res) {
  //handle incoming request
  console.log('Request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey ninjas');
});

server.listen(3000);