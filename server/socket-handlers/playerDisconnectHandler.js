function playerDisconnectHandler(namespace, socket, reason) {
  console.log(`Client ${socket.id} disconnected: ${reason}`);
}

module.exports = {
  playerDisconnectHandler,
};
