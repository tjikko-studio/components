import React, {FormEvent, PropsWithChildren, useCallback, useRef} from 'react'
import {openPopupWidget} from 'react-calendly'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import makeRandomId from '../../utilities/makeRandomId'
import {Button} from '../Button'
import {Input} from '../form/Input'
import {TextArea} from '../form/TextArea'
import {Heading, HeadingAlignment, HeadingLevel, HeadingSize} from './Heading'

export interface CalendlyProps {
  username: string
  duration: string
  bgColor?: string
  heading_text?: string
  heading_level?: HeadingLevel
  heading_size?: HeadingSize
  heading_alignment?: HeadingAlignment
  body?: string
  locale?: string
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

const requiredMark = `<sup class="text-red-600">*</sup>`

export const Calendly = ({
  heading_text,
  heading_level,
  heading_size,
  heading_alignment,
  body,
  bgColor,
  username,
  duration,
  locale
}: CalendlyProps) => {
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
      {heading_text || body ? (
        <div className="flex flex-col gap-3">
          {heading_text && (
            <Heading
              id={headingId}
              heading_text={heading_text}
              heading_level={heading_level}
              heading_size={heading_size}
              heading_alignment={heading_alignment}
            />
          )}
          {body && <div className="my-0" dangerouslySetInnerHTML={{__html: body}} />}
        </div>
      ) : null}
      <Row>
        <Cell>
          <Input label={locale === 'fr' ? 'Compagnie' : 'Company'} ref={companyRef} />
        </Cell>
        <Cell>
          <Input label={`${locale === 'fr' ? 'Nom' : 'Name'}${requiredMark}`} ref={nameRef} required />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Input label={`${locale === 'fr' ? 'Courriel' : 'Email'}${requiredMark}`} ref={emailRef} required />
        </Cell>
        <Cell>
          <Input label={locale === 'fr' ? 'Téléphone' : 'Phone'} ref={phoneRef} />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <TextArea
            label={
              locale === 'fr'
                ? 'Faites-nous part de vos besoins et nous nous préparerons en conséquence'
                : 'Tell us more about your needs and we’ll prepare accordingly'
            }
            ref={commentsRef}
          />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Button label={locale === 'fr' ? 'Suivant' : 'Next'} />
        </Cell>
      </Row>
    </form>
  )
}
