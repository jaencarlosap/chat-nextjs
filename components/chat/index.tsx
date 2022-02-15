import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import {
  Container,
  ContainerScroll,
  HasMessage,
  InputContainer,
  InputMessage,
  InputTextContainer,
  RoundButton
} from 'components/styles'
import { useChat, useDate } from 'hooks'

export const Chat = () => {
  const ContainerScrollRef = useRef(null)
  const refInputName = React.useRef(null)
  const refInputText = React.useRef(null)
  const { messages, handleEmmitMessage } = useChat()

  const handleSendMessage = () => {
    if (refInputText.current.value) {
      if (refInputName.current == null) {
        refInputName.current = `User${Math.floor(Math.random() * 100)}`
      }

      handleEmmitMessage({ user: refInputName.current, value: refInputText.current.value })
      refInputText.current.value = ''
      refInputText.current.focus()
    }
  }

  const handleKeyPress = ({ ctrlKey, key }) => {
    if ((ctrlKey && key === 'Enter') || key === 'Enter') handleSendMessage()
  }

  const Message = ({ user, time, value }) => {
    const { time: hour } = useDate(time)
    const isUser = user === refInputName.current
    const color = isUser ? '#dbf2ff' : '#ffffff'
    const alignItems = isUser ? 'flex-end' : 'flex-start'
    const borderRadius = isUser ? '5px 0px 5px 5px' : '0px 5px 5px 5px'

    return (
      <Container alignItems={alignItems}>
        <HasMessage backgroundColor={color} borderRadius={borderRadius}>
          <p>{user}</p>
          <p>
            {value}
            <span>{hour}</span>
          </p>
        </HasMessage>
      </Container>
    )
  }

  useEffect(() => {
    ContainerScrollRef.current.scrollTop = ContainerScrollRef.current.scrollHeight
  })

  return (
    <Container
      alignItems="center"
      flexDirection='row'
      height="100vh"
      justifyContent="center"
    >
      <ContainerScroll width="50%" height="50%" overflow="hidden">
        <ContainerScroll ref={ContainerScrollRef} width="auto" height="80%">
          {messages?.length > 0 ?
            messages.map((props) => <Message key={`${props.id}-${props.time}`} {...props} />)
            : <div>Loading...</div>
          }
        </ContainerScroll>
        <Container padding="5px" height="10%" justifyContent="center">
          <InputContainer>
            <RoundButton onClick={handleSendMessage} disabled>
              <Image src="/icons/settings.svg" height={30} width={30} />
            </RoundButton>
            <InputTextContainer>
              <InputMessage
                ref={refInputText}
                type="text"
                borderRadius="20px"
                placeholder="Write your message!"
                onKeyPress={handleKeyPress}
              />
            </InputTextContainer>
            <RoundButton onClick={handleSendMessage}>
              <Image src="/icons/send.svg" height={30} width={30} />
            </RoundButton>
          </InputContainer>
        </Container>
      </ContainerScroll>
    </Container >
  )
}