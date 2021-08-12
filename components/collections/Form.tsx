import React, { FC, HTMLAttributes } from 'react'
import {Input} from '../form/Input'
import {TextArea} from '../form/TextArea'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import keyExists from '../../utilities/keyExists'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * What is the width of the form?
   */
   width ?: 'string'
  
  /**
   * Form object that will be parsed through to build the component
   */
  content?: {}
}

export const Form: FC<FormProps> = ({
  layout = 'compact',
  width = 'full',
  content
}) => {
  const formClasses = [`grid sm:grid-cols-12 gap-4 w-${width}`]
  let columnInputLabel : boolean;
  const getWidth = (args, length = 12) => {
    return length / args[1] * args[0]
  }
  
  // Syntax With Camelcases (Used in components)
  const getComponent = (component, columnInputLabel) => {
    switch (component.type) {
      case 'Input':
        return <Input key={JSON.stringify(component.content)} {...component.content} className='w-full' />
      case 'TextArea':
        return <TextArea key={JSON.stringify(component.content)} {...component.content} className='w-full' />
      case 'ButtonsGroup':
        return <ButtonsGroup key={JSON.stringify(component.content)} {...component.content} className={`w-full ${columnInputLabel && 'sm:pt-7' }`} />
      default:
        return ('')
    }
  }

  return (
    <form className='grid gap-4'>
      {
        content.map((section) => (
          <section className={`${formClasses.join(' ')}`}>
            {columnInputLabel = false}
            {
              section.columns.map((column) => (
                <div className={`sm:col-span-${getWidth(column.width.split('/'))}`}>
                  {
                    column.blocks.map((block) => {
                      if (block.type != 'ButtonsGroup')
                        columnInputLabel = keyExists(block.content, "label")
                      return getComponent(block, columnInputLabel);
                    })
                  }
                </div>
              ))
            }
          </section>
        ))
      }
    </form>
  )
}
