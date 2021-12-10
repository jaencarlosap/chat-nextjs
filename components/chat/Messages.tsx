import { HasMessage } from 'components/styles'
import { useDate } from 'hooks/useDate'

export const Message = ({ user, time, value }) => {
  const { time: hour } = useDate(time)

  return (
    <HasMessage>
      <p>{`${user}`}</p>
      <p>
        {value}
        <span>{hour}</span>
      </p>
    </HasMessage>
  )
}