const { io, httpServer } = require('./config');
const { messages, setMessage } = require('./temp_db');

const PORT = process.env.PORT || 5000;

io.on('connection', socket => {
  socket.emit('messages', messages);

  socket.on('message', data => {
    setMessage(data);

    socket.broadcast.emit('message', data);
  });
});

httpServer.listen(PORT);

module.exports = { PORT, httpServer };
