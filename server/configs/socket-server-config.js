const socketServerConfig = {
  port: 3000,
  cors: {
    origin: `http://localhost:${this.port}`,
    methods: ['GET', 'POST'],
  },
};

module.exports = {
  socketServerConfig,
};
