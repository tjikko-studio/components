import React, {FC} from 'react'
import cn from 'classnames'

export interface CalendlyProps {}

export const Calendly: FC<CalendlyProps> = ({}) => {
  return (
    <>
      <div className={cn('calendly-inline-widget w-3/4 h-96 border-3')} data-url="https://calendly.com/stream-1/30min" />
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </>
  )
}
