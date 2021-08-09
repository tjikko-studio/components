import {Input} from '../form/Input'
import {TextArea} from '../form/TextArea'
import {ButtonsGroup} from '../blocks/ButtonsGroup'

import React from 'react'

export const Form = ({
  items = [
    {
      component: 'Input',
      items: ''
    }
]
}) => {
  return (
    <>
      {items.map((item) => {
        switch (item.component) {
          case 'Input':
            return <Input key={JSON.stringify(item.items)} {...item.items} />
          case 'TextArea':
            return <TextArea key={JSON.stringify(item.items)} {...item.items} />
          case 'ButtonsGroup':
            return <ButtonsGroup key={JSON.stringify(item.items)} {...item.items} />
          default:
            return ('')
        }
      })}
    </>
  )
}
