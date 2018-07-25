const http = require('http');
const url = require('url');

function startHTTPServer(route, handle) {
  function handleRequest(req, res) {
    let postData = ''
    const pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} received`)

    req.setEncoding('utf8')
    req.addListener('data', (postDataChunk) => {
      postData += postDataChunk
    })

    req.addListener('end', (postDataChunk) => {
      route(handle, pathname, postData, res)
    })

  }

  const server = http.createServer(handleRequest);

  server.listen(8888);
}

exports.startHTTPServer = startHTTPServer;
