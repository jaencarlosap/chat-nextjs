import React from 'react'

import {
  Container,
  Wrapper
} from 'components/styles'
import { ListMessages } from './listMessages'
import { InputFields } from './inputFields'
import { useChat } from 'hooks/useChat'

export const Chat = () => {
  const { messages, handleEmmitMessage } = useChat()

  return (
    <Wrapper>
      <Container flexDirection="row">
        <Container>
          <ListMessages messages={messages} />
          <InputFields handleEmmitMessage={handleEmmitMessage} />
        </Container>
      </Container>
    </Wrapper>
  )
}