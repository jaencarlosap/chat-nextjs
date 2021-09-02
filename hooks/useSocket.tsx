import React from 'react';
import { io } from 'socket.io-client';

export const useSocket = (url: string) => {
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    let socketIo = io(url);

    if (socketIo && socketIo.disconnected) {
      socketIo = io(url);
    }

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
      socketIo.close();
    }

    return cleanup;
  }, []);

  return socket;
};
