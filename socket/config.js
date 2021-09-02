const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
  },
});

module.exports = { io, httpServer };
