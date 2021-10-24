import React, {FC} from 'react'
import {InlineWidget} from 'react-calendly'
import cn from 'classnames'

export interface CalendlyProps {
  username: string
  duration: string
}

export const Calendly: FC<CalendlyProps> = ({username, duration}) => {
  return (
    <div className={cn('my-8 overflow-hidden')}>
      <InlineWidget url={`https://calendly.com/${username}/${duration || '30min'}`} />
    </div>
  )
}
