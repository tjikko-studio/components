import React, {FC, useCallback, useMemo, useState} from 'react'
import {openPopupWidget} from 'react-calendly'
import type {Prefill} from 'react-calendly/typings/calendly'
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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')

  const prefill: Prefill = useMemo(
    () => ({email, phone, firstName, lastName, name: `${firstName} ${lastName}`, customAnswers: {a1: company}}),
    [firstName, lastName, email, phone, company]
  )

  const handleBookClick = useCallback(() => {
    openPopupWidget({
      prefill,
      url: `https://calendly.com/${username}/${duration || '30min'}`
    })
  }, [username, duration, prefill])

  return (
    <div className={cn('flex flex-col w-full p-10 gap-8 rounded-lg', theme)} style={{backgroundColor: bgColor}}>
      {title && body && (
        <div className="flex flex-col gap-3 dark:text-gray-50">
          {title && <h3>{title}</h3>}
          {body && <p className="my-0">{body}</p>}
        </div>
      )}
      <div className="flex flex-col gap-y-6 w-full">
        <Input label="Company" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full" />
        <Input label="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full" />
        <Input label="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full" />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
        <Input label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full" />

        <div className="flex gap-x-6 w-full">
          <Button onClick={handleBookClick} label="Next" />
        </div>
      </div>
    </div>
  )
}
