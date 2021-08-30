const { io } = require('socket/actions');

export default function handler(_, res) {
  fetch(
    `http://localhost:5000/socket.io/?EIO=4&transport=polling&t=NkAo19-`
  ).then(
    () => {
      console.log('server is runing...');
    },
    () => {
      io.listen(5000);
      console.log('server is starting...');
    }
  );

  res.status(200).json({ name: 'Started socket' });
}
