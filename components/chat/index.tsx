import React from 'react';

import { Message } from 'components/chat/messages';
import { IpropsMessage } from 'interfaces/general';
import { useSocket } from 'hooks/useSocket';

const Chat = () => {
  const server = process.env.SERVER_SOCKET || 'localhost';
  const port = process.env.SERVER_SOCKET || '5000';
  const socket = useSocket(`${server}:${port}`);
  const [messages, setMessages] = React.useState<IpropsMessage[]>([]);

  React.useEffect(() => {
    listenSocket();
  });

  const listenSocket = () => {
    if (!socket) return;

    socket.emit('messages');

    socket.on('messages', data => {
      setMessages(data);
    });
  };

  const handleMessage = (message: IpropsMessage) => {
    setMessages(prev => [...prev, message]);
  };

  const handleSend = value => {
    const message: IpropsMessage = {
      id: `${new Date().getTime()}`,
      user: localStorage.getItem('userName'),
      value,
    };

    socket.emit('message', message);

    handleMessage(message);
  };

  return <Message messages={messages} handleSend={handleSend} />;
};

export default Chat;
