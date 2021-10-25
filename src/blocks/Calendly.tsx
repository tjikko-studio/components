import React, {FC, useCallback, useMemo, useState} from 'react'
import {openPopupWidget} from 'react-calendly'
import type {Prefill} from 'react-calendly/typings/calendly'
import cn from 'classnames'

import getComponent from '../../utilities/getComponent'
import {Button} from '../Button'
import {Input} from '../form/Input'

import {BlockProps} from '../../shared/types'

export interface CalendlyProps {
  username: string
  duration: string
  bgColor: string
  header?: BlockProps[]
}

function extractCombo(thing: string) {
  return thing ? thing.split('|') : [null, null]
}

export const Calendly: FC<CalendlyProps> = ({header, bgColor, username, duration}) => {
  const [theme, background] = extractCombo(bgColor)
  const toComponent = getComponent()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')

  const prefill: Prefill = useMemo(
    () => ({email, firstName, lastName, name: `${firstName} ${lastName}`, customAnswers: {a1: company}}),
    [firstName, lastName, email, company]
  )

  const handleBookClick = useCallback(() => {
    openPopupWidget({
      prefill,
      url: `https://calendly.com/${username}/${duration || '30min'}`
    })
  }, [username, duration, prefill])

  return (
    <div className={cn('flex flex-col items-center py-8 overflow-hidden', theme ? theme : 'dark')} style={{backgroundColor: background}}>
      <div className="my-8 dark:text-gray-50">
        {header?.map((block) => {
          return toComponent(block)
        })}
      </div>

      <div className="flex flex-col">
        <div className="flex py-2">
          <div className="flex flex-col pr-8">
            <Input label="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="flex flex-col pr-8">
            <Input label="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        <div className="flex py-2">
          <div className="flex flex-col pr-8">
            <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col pr-8">
            <Input label="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
        </div>

        <div className="flex py-8">
          <Button onClick={handleBookClick} label="Next" />
        </div>
      </div>
    </div>
  )
}
