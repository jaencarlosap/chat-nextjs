import React from 'react';
import { io } from 'socket.io-client';

export const useSocket = (url: string) => {
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    let socketIo = io(url, {
      transports: ['websocket', 'polling'],
    });

    if (socketIo && socketIo.disconnected) {
      fetch(`/api/startSocket`)
        .then(res => res.json())
        .then(
          result => {
            console.log(result);
          },
          error => {
            console.log(error);
          }
        );

      socketIo = io(url, {
        transports: ['websocket', 'polling'],
      });
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
