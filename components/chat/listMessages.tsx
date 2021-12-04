import { useEffect, useRef } from 'react'
import {
  HasMessage,
  RoundContainer
} from 'components/styles'
import { useDate } from 'hooks/useDate'
import { useSocket } from 'hooks/useSocket'

export const ListMessages = () => {
  const { messages } = useSocket()
  const refRoundContainer = useRef(null)

  useEffect(() => {
    refRoundContainer.current.scrollTop =
      refRoundContainer.current.scrollHeight
  })

  return (
    <RoundContainer ref={refRoundContainer} >
      {
        messages.map(({ user, time, id, value }) => {
          const { time: hour } = useDate(time)

          return (
            <HasMessage key={`${id}-${time}`}>
              <p>{`${user}`}</p>
              <p>
                {value}
                <span>{hour}</span>
              </p>
            </HasMessage>
          )
        })
      }
    </RoundContainer >
  )
}