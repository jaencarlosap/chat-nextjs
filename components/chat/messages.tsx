import React from 'react';
import Image from 'next/image';

import { IMessage } from 'interfaces/general';
import {
  Wrapper,
  RoundContainer,
  InputMessage,
  SendButton,
  Container,
  HasMessage,
  InputContainer,
} from 'components/styles/components_styles';

export const Message = ({ messages, handleSend }: IMessage) => {
  const [value, setValue] = React.useState('');
  const refInputText = React.useRef(null);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (value) {
      handleSend(value);
      setValue('');
      refInputText.current.focus();
    }
  };

  const handleKeyPress = event => {
    if (event.ctrlKey && event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Wrapper>
      <Container>
        <RoundContainer>
          {messages.map(message => (
            <HasMessage key={message.id}>
              <span>{`${message?.user}: ${message.value}`}</span>
            </HasMessage>
          ))}
        </RoundContainer>
        <InputContainer>
          <InputMessage
            ref={refInputText}
            type="text"
            value={value}
            placeholder="Write your message!"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <SendButton onClick={handleSendMessage} disabled={!value}>
            <Image src="/icons/send.svg" height={30} width={30} />
          </SendButton>
        </InputContainer>
      </Container>
    </Wrapper>
  );
};
