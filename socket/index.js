const { io } = require('./config.js');
const { messages, setMessage } = require('./temp_db.js');

const PORT = process.env.SERVER_PORT_SOCKET || 5000;

io.on('connection', socket => {
  socket.on('messages', () => {
    socket.emit('messages', messages);
  });

  socket.on('message', data => {
    setMessage(data);
    socket.broadcast.emit('message', data);
  });
});

io.listen(PORT);

console.log(`server runing on port ${PORT}`);
