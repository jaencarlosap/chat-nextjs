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
  const refRoundContainer = React.useRef(null);

  React.useEffect(() => {
    refRoundContainer.current.scrollTop =
      refRoundContainer.current.scrollHeight;
  });

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
        <RoundContainer ref={refRoundContainer}>
          {messages.map(({ user, time, id, value }) => {
            let { time: hour } = useDate(time);

            return (
              <HasMessage key={`${id}-${time}`}>
                <p>{`${user || 'Anónimo'}`}</p>
                <p>
                  {value}
                  <span>{hour}</span>
                </p>
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
