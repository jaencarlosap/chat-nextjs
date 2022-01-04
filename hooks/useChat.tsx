import { useEffect, useState } from 'react'

import { IpropsMessage } from 'interfaces/general'
import { useSocket } from './useSocket'

export const useChat = () => {
  const socket = useSocket()
  const [messages, setMessages] = useState<IpropsMessage[]>([])

  useEffect(() => {
    const handleGetMenssages = () => {
      socket.on('message', data => {
        setMessages(prev => prev.concat(data))
      })

      socket.on('messages', (data) => {
        setMessages(data)
      })
    }

    handleGetMenssages()
  }, [])

  const handleEmmitMessage = ({ user, value }) => {
    const message: IpropsMessage = {
      id: socket.id,
      time: new Date().toISOString(),
      user,
      value
    }

    socket.emit('message', message)
  }

  return {
    messages,
    handleEmmitMessage
  }
}

