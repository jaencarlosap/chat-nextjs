import { Server } from 'socket.io'

export const io = new Server({
  cors: {
    origin: '*'
  }
})

const messages = []

const setMessage = message => {
  messages.push(message)
}

io.on('connection', socket => {
  socket.emit('messages', messages)

  socket.on('message', data => {
    setMessage(data)

    socket.broadcast.emit('message', data)
  })
})

const SocketEndPoint = (req, res) => {
  io.listen(3001)

  res.end(`Welcome to socket api`)
}

export default SocketEndPoint