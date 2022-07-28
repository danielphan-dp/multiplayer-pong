const { SocketAction } = require('../../client-server-interface');

function paddleMoveHandler(namespace, socket, action) {
  const { type, payload } = action;
  const { xPosition } = payload;

  // assert
  if (type !== SocketAction.PADDLE_MOVE) {
    console.log('Something went wrong... Wrong action sent to handler..');
  }

  // perform actions
  // broadcast to all other clients except the sender
  // the paddle new position
  socket.broadcast.emit('paddle-move', {
    type: SocketAction.PADDLE_MOVE,
    payload: { xPosition },
  });
}

module.exports = {
  paddleMoveHandler,
};
