// MODULES
const http = require('http');
const io = require('socket.io');

// CONFIGS
const { socketServerConfig } = require('./configs/socket-server-config');
const { port, cors } = socketServerConfig;

// SERVERS
// initialize
const apiServer = require('./api/apiServer');
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, { cors });

// start http server: response to api requests
httpServer.listen(port);
console.log(`Listening on port ${port}...`);

// start sockets server: response to sockets actions
const sockets = require('./sockets');
sockets.listen(socketServer);
