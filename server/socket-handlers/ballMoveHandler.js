const { SocketAction } = require('../../client-server-interface');

function ballMoveHandler(namespace, socket, action) {
  const { type, payload } = action;
  const { ballX, ballY, score } = payload;

  // assert
  if (type !== SocketAction.BALL_MOVE) {
    console.log('Something went wrong... Wrong action sent to handler..');
  }

  // perform actions
  // broadcast to all other clients except the sender
  // the new ball position and score
  socket.broadcast.emit('ball-move', {
    type: SocketAction.BALL_MOVE,
    payload: { ballX, ballY, score },
  });
}

module.exports = {
  ballMoveHandler,
};
