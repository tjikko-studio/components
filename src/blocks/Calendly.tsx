import React, {FC, useEffect} from 'react'
import cn from 'classnames'

export interface CalendlyProps {}

export const Calendly: FC<CalendlyProps> = () => {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    script.setAttribute('async', 'true')
    head.appendChild(script)
    return () => {
      head.removeChild(script)
    }
  }, [])
  return (
    <div
      className={cn('calendly-inline-widget')}
      style={{minWidth: '320px', height: '630px'}}
      data-url="https://calendly.com/stream-1/30min"
    />
  )
}
