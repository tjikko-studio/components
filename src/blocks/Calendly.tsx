import React, {FC, FormEvent, useCallback, useRef} from 'react'
import {openPopupWidget} from 'react-calendly'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import {Button} from '../Button'
import {Input} from '../form/Input'

export interface CalendlyProps {
  username: string
  duration: string
  bgColor?: string
  title?: string
  body?: string
}

export const Calendly: FC<CalendlyProps> = ({title, body, bgColor, username, duration}) => {
  const theme = !bgColor || bgColor === 'transparent' ? 'light' : lightOrDark(bgColor)
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const companyRef = useRef(null)
  const phoneRef = useRef(null)

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()
      console.log('Company', companyRef.current.value)
      openPopupWidget({
        prefill: {
          email: emailRef.current.value,
          name: nameRef.current.value,
          customAnswers: {a1: companyRef.current.value, a2: phoneRef.current.value}
        },
        url: `https://calendly.com/${username}/${duration || '30min'}`
      })
    },
    [username, duration]
  )

  return (
    <form className={cn('flex flex-col p-10 gap-8 rounded-lg', theme)} style={{backgroundColor: bgColor}} onSubmit={onSubmit}>
      {title || body ? (
        <div className="flex flex-col gap-3 dark:text-gray-50">
          {title && <h3>{title}</h3>}
          {body && <p className="my-0">{body}</p>}
        </div>
      ) : null}
      <div className="flex items-center gap-6">
        <div className="flex-grow">
          <Input label="Company" ref={companyRef} />
        </div>
        <div className="flex-grow">
          <Input label="Name" ref={nameRef} />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex-grow">
          <Input label="Email" ref={emailRef} />
        </div>
        <div className="flex-grow">
          <Input label="Phone" ref={phoneRef} />
        </div>
      </div>
      <div className="flex-grow-0">
        <Button label="Next" />
      </div>
    </form>
  )
}
