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
import { useDate } from 'hooks/useDate';

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
    if ((event.ctrlKey && event.key === 'Enter') || event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Wrapper>
      <Container>
        <RoundContainer>
          {messages.map(message => {
            let name = message.user ? message.user : 'Anónimo';
            let { time } = useDate(message.time);

            return (
              <HasMessage key={message.id}>
                <p>{`${name} - ${time}`}</p>
                <p>{` ${message.value}`}</p>
              </HasMessage>
            );
          })}
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
