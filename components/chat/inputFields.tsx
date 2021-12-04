import React from 'react'
import Image from 'next/image'

import {
  InputMessage,
  SendButton,
  InputContainer
} from 'components/styles'
import { useSocket } from 'hooks/useSocket'

export const InputFields = () => {
  const { handleEmmitMessage } = useSocket()
  const refInputName = React.useRef(null)
  const refInputText = React.useRef(null)

  const handleSendMessage = () => {
    if (refInputText.current.value) {
      if (refInputName.current.value == '') {
        refInputName.current.value = 'Anónimo'
      }

      handleEmmitMessage({ user: refInputName.current.value, value: refInputText.current.value })
      refInputText.current.value = ''
      refInputText.current.focus()
    }
  }

  const handleKeyPress = event => {
    if ((event.ctrlKey && event.key === 'Enter') || event.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <InputContainer>
      <InputMessage
        ref={refInputName}
        type="text"
        width="20%"
        placeholder="Write your name!"
        onKeyPress={handleKeyPress}
      />
      <InputMessage
        ref={refInputText}
        type="text"
        placeholder="Write your message!"
        onKeyPress={handleKeyPress}
      />
      <SendButton onClick={handleSendMessage} disabled={!refInputText.current?.value}>
        <Image src="/icons/send.svg" height={30} width={30} />
      </SendButton>
    </InputContainer>
  )
}
