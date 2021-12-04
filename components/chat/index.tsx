import React from 'react'

import {
  Container,
  Wrapper
} from 'components/styles'
import { ListMessages } from './listMessages'
import { InputFields } from './inputFields'

const Chat = () => {

  return (
    <Wrapper>
      <Container>
        <ListMessages />
        <InputFields />
      </Container>
    </Wrapper>
  )
}

export default Chat
