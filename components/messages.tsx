import React from 'react';
import { IMessage } from 'interfaces/general';

export const Message = ({ messages, handleSend }: IMessage) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSendMessage = () => {
    handleSend(value);
    setValue('');
  };

  return (
    <div>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <span className="hljs-name">{message.value}</span>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Write your message!"
          onChange={handleChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};
