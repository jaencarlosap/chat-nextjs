import { Server } from 'socket.io'

const messages = []

const setMessage = message => {
  messages.push(message)
}

const SocketEndPoint = (_, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      cors: {
        origin: '*'
      }
    })

    io.on('connection', socket => {
      socket.broadcast.emit('a user connected')
      socket.emit('messages', messages)

      socket.on('message', data => {
        setMessage(data)

        socket.broadcast.emit('message', data)
      })
    })

    res.socket.server.io = io
    res.end(`socket.io running`)
  } else {
    res.end(`socket.io already running`)
  }

  res.end()
}

export default SocketEndPoint