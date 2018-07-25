const http = require('http');
const url = require('url');

function startHTTPServer(route, handle) {
  function handleRequest(req, res) {
    const pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} received`)

    route(handle, pathname, res)
  }

  const server = http.createServer(handleRequest);

  server.listen(8888);
}

exports.startHTTPServer = startHTTPServer;
