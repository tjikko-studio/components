import React, {FC, FormEvent, PropsWithChildren, useCallback, useRef} from 'react'
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

const Row = ({children}: PropsWithChildren<{}>) => {
  return <div className="flex items-center gap-6 flex-col sm:flex-row">{children}</div>
}

const Cell = ({children}: PropsWithChildren<{}>) => {
  return <div className="flex-grow w-full">{children}</div>
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
    <form className={cn('flex flex-col w-full p-10 gap-8 rounded-lg', theme)} style={{backgroundColor: bgColor}} onSubmit={onSubmit}>
      {title || body ? (
        <div className="flex flex-col gap-3 dark:text-gray-50">
          {title && <h3>{title}</h3>}
          {body && <p className="my-0">{body}</p>}
        </div>
      ) : null}
      <Row>
        <Cell>
          <Input label="Company" ref={companyRef} />
        </Cell>
        <Cell>
          <Input label="Name" ref={nameRef} />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Input label="Email" ref={emailRef} />
        </Cell>
        <Cell>
          <Input label="Phone" ref={phoneRef} />
        </Cell>
      </Row>
      <div className="flex-grow-0">
        <Button label="Next" />
      </div>
    </form>
  )
}
