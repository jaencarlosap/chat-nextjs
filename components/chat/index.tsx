import React from 'react'

import {
  Container,
  Wrapper
} from 'components/styles'
import { ListMessages } from './listMessages'
import { InputFields } from './inputFields'

export const Chat = () => {
  return (
    <Wrapper>
      <Container flexDirection="row">
        <Container>
          <ListMessages />
          <InputFields />
        </Container>
      </Container>
    </Wrapper>
  )
}