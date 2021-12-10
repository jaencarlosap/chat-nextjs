import { useEffect } from 'react'
import { io } from 'socket.io-client'

export const useSocket = () => {
  const socket = io()

  useEffect(() => {
    fetch('/api/socket')

    return () => {
      socket.disconnect()
    }
  }, [])

  return socket
}
