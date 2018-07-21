const http = require('http');
const url = require('url');

function startHTTPServer() {
  function handleRequest(req, res) {
    const pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} received`)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  }

  var server = http.createServer(handleRequest);

  server.listen(8888);
}

exports.startHTTPServer = startHTTPServer;
