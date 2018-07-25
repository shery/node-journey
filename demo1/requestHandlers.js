const querystring = require('querystring');

function start(req, res) {
  console.log("Request handler 'start' was called.");
  var body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" method="post">'+
  '<textarea name="text" rows="20" cols="60"></textarea>'+
  '<input type="submit" value="Submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(body)
  res.end()
}

function upload(req, res) {
  console.log("Request handler 'upload' was called.");
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write(querystring.parse(req).text)
  res.end()
}

exports.start = start;
exports.upload = upload;
