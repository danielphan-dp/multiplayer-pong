const {
  playerReadyHandler,
  paddleMoveHandler,
  ballMoveHandler,
  playerDisconnectHandler,
} = require('./socket-handlers');

function listen(io) {
  const namespace = io.of('/pong');
  namespace.on('connection', (socket) => {
    console.log('USER CONNECT, SOCKET ID: ', socket.id);
    socket.on('ready', (action) => {
      playerReadyHandler(namespace, socket, action);
    });
    socket.on('paddle-move', (action) => {
      paddleMoveHandler(namespace, socket, action);
    });
    socket.on('ball-move', (action) => {
      ballMoveHandler(namespace, socket, action);
    });
    socket.on('disconnect', (reason) => {
      playerDisconnectHandler(namespace, socket, reason);
    });
  });
}

module.exports = {
  listen,
};
