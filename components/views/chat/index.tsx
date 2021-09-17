import React from 'react';

import { IpropsMessage } from 'interfaces/general';
import { useSocket } from 'hooks/useSocket';

import { Message } from './messages';

const Chat = () => {
  const server = process.env.NEXT_PUBLIC_SERVER_SOCKET || 'localhost:5000';
  const socket = useSocket(`${server}`);
  const [messages, setMessages] = React.useState<IpropsMessage[]>([]);

  React.useEffect(() => {
    const getInitData = () => {
      if (!socket) return;

      if (messages.length == 0) {
        socket.on('messages', data => {
          setMessages(data);
        });
      }

      socket.on('message', data => {
        setMessages(prev => prev.concat(data));
      });
    };

    getInitData();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  const handleSend = value => {
    const message: IpropsMessage = {
      id: socket.id,
      user: localStorage.getItem('userName'),
      time: new Date().toISOString(),
      value,
    };

    socket.emit('message', message);
    setMessages(prev => prev.concat(message));
  };

  return <Message messages={messages} handleSend={handleSend} />;
};

export default Chat;
