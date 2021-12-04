import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { IpropsMessage } from 'interfaces/general'

export const useSocket = () => {
  const socket = io()
  const [messages, setMessages] = useState<IpropsMessage[]>([])

  useEffect(() => {
    const handleSocket = async () => {
      await fetch('/api/socket').finally(() => {

        socket.on('message', data => {
          setMessages(prev => prev.concat(data))
        })

        socket.on('messages', (data) => {
          if (messages.length == 0) {
            setMessages(data)
          }
        })

      })
    }

    handleSocket()

    return () => {
      socket.disconnect()
    }
  }, [])

  const handleEmmitMessage = ({ user, value }) => {
    const message: IpropsMessage = {
      id: socket.id,
      time: new Date().toISOString(),
      user,
      value
    }

    socket.emit('message', message)
    setMessages(prev => prev.concat(message))
  }

  return {
    socket,
    messages,
    setMessages,
    handleEmmitMessage
  }
}