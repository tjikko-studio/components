import React, { FC, HTMLAttributes } from 'react'
import {Input} from '../form/Input'
import {TextArea} from '../form/TextArea'
import {ButtonsGroup} from '../blocks/ButtonsGroup'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background datas
   */
  layout ?: 'compact' | 'columns'
  /**
   * background video url
   */
  content?: {}
}

export const Form: FC<FormProps> = ({
  layout = 'compact',
  content
}) => {
  const formClasses = []
  const inputClasses = []

  const getWidth = (args, length = 12) => {
    return length / Number(args[1]) *  Number(args[0])
  }
  
  // Syntax With Camelcases (Used in components)
  const getComponent = (component) => {
    switch (component.type) {
      case 'Input':
        return <Input key={JSON.stringify(component.content)} {...component.content} className={`${inputClasses}`} />
      case 'TextArea':
        return <TextArea key={JSON.stringify(component.content)} {...component.content} className={`${inputClasses}`} />
      case 'ButtonsGroup':
        return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} />
      default:
        return ('')
    }
  }

  switch (layout){
    case 'compact':
      formClasses.push('flex space-x-4')
      break
    case 'columns':
      formClasses.push('grid grid-cols-12 gap-x-4')
      inputClasses.push('w-full')
      break
  }
  console.log(content);
  return (
    <>
      {
        content.map((section) => (
          <section className={`${formClasses.join(' ')}`}>
            {
              section.columns.map((column) => (
                <div className={`col-span-${getWidth(column.width.split('/'))}`}>
                  {
                    column.blocks.map((block) => {
                      return getComponent(block);
                    })
                  }
                </div>
              ))
            }
          </section>
        ))
      }
    </>
  )
}
