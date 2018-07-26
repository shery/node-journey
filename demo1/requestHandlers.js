const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

function start(req, res) {
  console.log("Request handler 'start' was called.");
  var body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" enctype="multipart/form-data" method="post">'+
  '<input type="file" name="upload">'+
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
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    fs.renameSync(files.upload.path, "/tmp/test.png");
    res.writeHead(200, {'content-type': 'text/html'});
    res.write("received image:<br/>");
    res.write("<a href='/show'>go</a>");
    res.end();
  });
}

function show(req, res) {
  console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/test.png", "binary", (err, data) => {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write(err + "\n");
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "image/png"});
      res.write(data, "binary");
      res.end();
    };
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
