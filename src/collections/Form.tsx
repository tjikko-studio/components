import React, { FC, HTMLAttributes } from 'react'
import {Input} from '../form/Input'
import {TextArea} from '../form/TextArea'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import keyExists from '../../utilities/keyExists'
import getWidth from '../../utilities/getWidth'
import { ColumnProps } from './Section'

export interface FormItemProps {
  columns: ColumnProps[]
}
export interface FormProps extends HTMLAttributes<HTMLElement> {
  /**
   * What is the width of the form?
   */
  width ?: 'string'

  /**
   * Form object that will be parsed through to build the component
   */
  content?: FormItemProps[]
}

export const Form: FC<FormProps> = ({
  width = 'full',
  content = []
}) => {
  const formClasses = [`grid sm:grid-cols-12 gap-4 w-${width}`]

  return (
    <form className='grid gap-4'>
      {
        content.map(({ columns }) => {
          let hasLabel = keyExists(columns, 'label', ['type', 'Input'])
          return(
          <section key={JSON.stringify(columns)} className={`${formClasses.join(' ')}`}>
            {
              columns.map((column) => (
                <div key={JSON.stringify(column)} className={`sm:col-span-${getWidth(column.width)}`}>
                  {
                    column.blocks.map((block) => {
                      let columnInputLabel = ((hasLabel && block.type === 'ButtonsGroup') || (hasLabel && !block.content['label'] ))
                      return getComponent(block, columnInputLabel);
                    })
                  }
                </div>
              ))
            }
          </section>
        )})
      }
    </form>
  )
}

function getComponent (
  component: {
    type: string,
    content: any
  },
  columnInputLabel: boolean
) {
  let spacingTop = columnInputLabel ? 'sm:pt-7' : ''
  switch (component.type) {
    case 'Input':
      return <Input key={JSON.stringify(component.content)} {...component.content} className={`w-full ${spacingTop}`} />
    case 'TextArea':
      return <TextArea key={JSON.stringify(component.content)} {...component.content} className={`w-full ${spacingTop}`} />
    case 'ButtonsGroup':
      return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} className={`w-full ${spacingTop}`} />
    default:
      return ('')
  }
}
