import { useEffect, useRef } from 'react'

import { RoundContainer } from 'components/styles'
import { Message } from './Messages'

export const ListMessages = ({ messages }) => {
  const refRoundContainer = useRef(null)

  useEffect(() => {
    refRoundContainer.current.scrollTop = refRoundContainer.current.scrollHeight
  })

  if (messages.length == 0) {
    return (
      <RoundContainer ref={refRoundContainer} >
        <div>loading...</div>
      </RoundContainer>
    )
  }

  return (
    <RoundContainer ref={refRoundContainer} >
      {messages.map((props) => <Message key={`${props.id}-${props.time}`} {...props} />)}
    </RoundContainer >
  )
}