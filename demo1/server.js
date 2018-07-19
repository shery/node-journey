var http = require("http");

function startHTTPServer() {
  function handleRequest(req, res) {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.write("hello");
    res.end();
  }

  var server = http.createServer(handleRequest);

  server.listen(8888);
}

exports.startHTTPServer = startHTTPServer;
