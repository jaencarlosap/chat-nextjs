import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Container,
  InputContainer,
  InputMessage,
  RoundContainer,
  SendButton,
  Title,
  Wrapper,
} from 'components/styles/components_styles';

export const Home = () => {
  const router = useRouter();
  const refInputText = React.useRef();
  const [user, setUser] = React.useState('');

  const handleChange = e => {
    setUser(e.target.value);
  };

  const handleKeyPress = event => {
    if (event.ctrlKey && event.key === 'Enter') {
      handleSendUser();
    }
  };

  const handleSendUser = () => {
    localStorage.setItem('userName', user);
    router.push('/chat');
  };

  return (
    <Wrapper>
      <Container>
        <RoundContainer height="auto" width="70%" align="center">
          <Title>¡Welcome to the Next Chat!</Title>
          <InputContainer>
            <InputMessage
              ref={refInputText}
              type="text"
              value={user}
              fontSize="1rem"
              placeholder="Write your name!"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
          </InputContainer>
          <InputContainer>
            <SendButton onClick={handleSendUser} disabled={!user}>
              <b>Start to chat</b>
              <Image src="/icons/send.svg" height={30} width={30} />
            </SendButton>
          </InputContainer>
        </RoundContainer>
      </Container>
    </Wrapper>
  );
};
