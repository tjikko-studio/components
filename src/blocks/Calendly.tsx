import React, {FormEvent, PropsWithChildren, useCallback, useRef} from 'react'
import {openPopupWidget} from 'react-calendly'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import makeRandomId from '../../utilities/makeRandomId'
import {Button} from '../Button'
import {Input} from '../form/Input'
import {TextArea} from '../form/TextArea'

export interface CalendlyProps {
  username: string
  duration: string
  bgColor?: string
  title?: string
  body?: string
}

const Row = ({children}: PropsWithChildren<{}>) => {
  return (
    <div role="presentation" className="flex items-center gap-6 flex-col xl:flex-row">
      {children}
    </div>
  )
}

const Cell = ({children}: PropsWithChildren<{}>) => {
  return (
    <div role="presentation" className="flex-grow w-full">
      {children}
    </div>
  )
}

export const Calendly = ({title, body, bgColor, username, duration}: CalendlyProps) => {
  const theme = !bgColor || bgColor === 'transparent' ? 'light' : lightOrDark(bgColor)
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const companyRef = useRef(null)
  const phoneRef = useRef(null)
  const commentsRef = useRef(null)

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()
      if (commentsRef.current) {
        openPopupWidget({
          prefill: {
            email: emailRef.current.value,
            name: nameRef.current.value,
            customAnswers: {a1: companyRef.current.value, a2: phoneRef.current.value, a3: commentsRef.current.value}
          },
          url: `https://calendly.com/${username}/${duration || '30min'}`
        })
      }
    },
    [username, duration]
  )

  const headingId = makeRandomId()

  return (
    <form
      className={cn('flex flex-col w-full p-10 gap-8 rounded-lg', theme)}
      style={{backgroundColor: bgColor}}
      onSubmit={onSubmit}
      aria-labelledby={headingId}
    >
      {title || body ? (
        <div className="flex flex-col gap-3">
          {title && <h3 id={headingId} className="fontStyle-4xl" dangerouslySetInnerHTML={{__html: title}} />}
          {body && <div className="my-0" dangerouslySetInnerHTML={{__html: body}} />}
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
      <Row>
        <Cell>
          <TextArea label="Tell us more about your needs and we’ll prepare accordingly" ref={commentsRef} />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Button label="Next" />
        </Cell>
      </Row>
    </form>
  )
}
