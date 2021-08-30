import { io } from 'socket/config';
import { messages, setMessage } from 'socket/temp_db';

io.on('connection', socket => {
  socket.on('messages', () => {
    socket.emit('messages', messages);
  });

  socket.on('message', data => {
    setMessage(data);
    socket.broadcast.emit('message', data);
  });
});

export { io };
