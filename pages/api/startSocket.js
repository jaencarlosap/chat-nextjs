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
    console.log(data, messages);
    messages.push(data);
    socket.broadcast.emit('message', data);
  });
});

io.listen(5000);

export default function handler(req, res) {
  res.status(200).json({ name: 'Next.js' });
}
