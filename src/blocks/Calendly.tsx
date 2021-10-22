import React, {FC} from 'react'
import cn from 'classnames'

export interface CalendlyProps {}

export const Calendly: FC<CalendlyProps> = ({}) => {
  return (
    <>
      <div
        className={cn('calendly-inline-widget')}
        style={{minWidth: '320px', height: '630px'}}
        data-url="https://calendly.com/stream-1/30min"
      />
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </>
  )
}
