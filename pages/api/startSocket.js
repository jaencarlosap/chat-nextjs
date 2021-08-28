import { io as client } from 'socket.io-client';
const io = require('socket.io')({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const messages = [];

io.on('connection', socket => {
  socket.on('messages', () => {
    socket.emit('messages', messages);
  });

  socket.on('message', data => {
    messages.push(data);
    socket.broadcast.emit('message', data);
  });
});

export default function handler(req, res) {
  fetch(
    `http://localhost:5000/socket.io/?EIO=4&transport=polling&t=NkAo19-`
  ).then(
    result => {
      console.log(result);
    },
    error => {
      io.listen(5000);
      console.log(error);
    }
  );

  res.status(200).json({ name: 'Started socket' });
}
