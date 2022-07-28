const { SocketAction } = require('../../client-server-interface');
const {
  getReadyPlayerCount,
  setReadyPlayerCount,
} = require('../store/server-state');

function playerReadyHandler(namespace, socket, action) {
  const { type, payload } = action;
  const {} = payload;

  // assert
  if (type !== SocketAction.READY) {
    console.log('Something went wrong... Wrong action sent to handler..');
  }
  console.log('player ready', socket.id);

  // perform actions
  // start the game
  const count = getReadyPlayerCount() + 1;
  setReadyPlayerCount(count);

  if (count % 2 === 0) {
    namespace.emit('start-game', {
      action: SocketAction.START_GAME,
      payload: {
        refereeId: socket.id,
      },
    });
  }
}

module.exports = {
  playerReadyHandler,
};
