const { playerReadyHandler } = require('./playerReadyHandler');
const { paddleMoveHandler } = require('./paddleMoveHandler');
const { ballMoveHandler } = require('./ballMoveHandler');
const { playerDisconnectHandler } = require('./playerDisconnectHandler');

module.exports = {
  playerReadyHandler,
  paddleMoveHandler,
  ballMoveHandler,
  playerDisconnectHandler,
};
