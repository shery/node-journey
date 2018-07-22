const http = require('http');
const url = require('url');

function startHTTPServer(route) {
  function handleRequest(req, res) {
    const pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} received`)

    route(pathname)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  }

  const server = http.createServer(handleRequest);

  server.listen(8888);
}

exports.startHTTPServer = startHTTPServer;
