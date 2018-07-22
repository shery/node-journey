const server = require('./server');
const router = require('./router')


server.startHTTPServer(router.route);
