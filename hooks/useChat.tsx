import { useEffect, useState } from 'react'

import { useSocket } from './useSocket'
export interface IpropsMessage {
  id: string;
  user: string;
  time: string;
  value: string;
}

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

  const handleEmmitMessage = (props) => {
    const message: IpropsMessage = {
      id: socket.id,
      time: new Date().toISOString(),
      ...props
    }

    socket.emit('message', message)
  }

  return {
    messages,
    handleEmmitMessage
  }
}

