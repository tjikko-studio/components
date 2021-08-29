import React, { FC, HTMLAttributes } from 'react'
import getComponent from '../../utilities/getComponent'
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
          const hasLabel = keyExists(columns, 'label', ['type', 'Input'])
          return(
          <section key={JSON.stringify(columns)} className={`${formClasses.join(' ')}`}>
            {
              columns.map((column) => (
                <div key={JSON.stringify(column)} className={`sm:col-span-${getWidth(column.width)}`}>
                  {
                    column.blocks.map((block) => {
                      const columnInputLabel = ((hasLabel && block.type === 'ButtonsGroup') || (hasLabel && !block.content['label'] ))
                      const spacingTop = columnInputLabel ? 'sm:pt-7' : ''
                      return getComponent(block, {
                        Input: (baseProps:any) => {
                          return {
                            className: `${baseProps.className} w-full ${spacingTop}`
                          }
                        },
                        TextArea: (baseProps: any) => {
                          return {
                            className: `${baseProps.className} w-full ${spacingTop}`
                          }
                        },
                        ButtonsGroup: (baseProps: any) => {
                          return {
                            className: `${baseProps.className} w-full ${spacingTop}`
                          }
                        }
                      });
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
