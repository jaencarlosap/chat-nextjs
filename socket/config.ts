export const io = require('socket.io')({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
