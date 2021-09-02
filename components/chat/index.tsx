import React from 'react';

import { Message } from 'components/chat/messages';
import { IpropsMessage } from 'interfaces/general';
import { useSocket } from 'hooks/useSocket';

const Chat = () => {
  const server = process.env.NEXT_PUBLIC_SERVER_SOCKET || 'localhost:5000';
  const socket = useSocket(`${server}`);
  const [messages, setMessages] = React.useState<IpropsMessage[]>([]);

  React.useEffect(() => {
    listenSocket();
  });

  const listenSocket = () => {
    if (!socket) return;

    socket.emit('messages');

    socket.on('messages', data => {
      if (JSON.stringify(data) != JSON.stringify(messages)) {
        setMessages(data);
      }
    });
  };

  const handleMessage = (message: IpropsMessage) => {
    setMessages(prev => [...prev, message]);
  };

  const handleSend = value => {
    const message: IpropsMessage = {
      id: `${new Date().getTime()}`,
      user: localStorage.getItem('userName'),
      time: new Date().toISOString(),
      value,
    };

    socket.emit('message', message);

    handleMessage(message);
  };

  return <Message messages={messages} handleSend={handleSend} />;
};

export default Chat;
