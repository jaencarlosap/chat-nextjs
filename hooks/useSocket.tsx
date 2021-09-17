import React from 'react';
import { io } from 'socket.io-client';

export const useSocket = (url: string) => {
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    try {
      fetch('/api/socket');
    } catch (error) {}

    const socketIo = io(url);

    setSocket(socketIo);

    const cleanup = () => {
      if (socket) {
        socket.disconnect();
      }
    };

    return cleanup;
  }, []);

  return socket;
};
