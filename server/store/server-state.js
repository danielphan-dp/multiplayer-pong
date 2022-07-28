let state = {
  readyPlayerCount: 0,
};

function getReadyPlayerCount() {
  return state.readyPlayerCount;
}

function setReadyPlayerCount(readyPlayerCount) {
  state.readyPlayerCount = readyPlayerCount;
}

module.exports = {
  getReadyPlayerCount,
  setReadyPlayerCount,
};
