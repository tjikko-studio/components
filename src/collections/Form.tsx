import React, { FC, HTMLAttributes } from 'react'
import getComponent from '../../utilities/getComponent'
import getWidth from '../../utilities/getWidth'
import { ColumnProps } from '../../shared/types'

export interface FormItemProps {
  columns: ColumnProps[]
}
export interface FormProps extends HTMLAttributes<HTMLElement> {
  /**
   * What is the width of the form?
   */
  width?: 'string'

  /**
   * Form object that will be parsed through to build the component
   */
  content?: FormItemProps[]
}

export const Form: FC<FormProps> = ({
  width = 'full',
  content = []
}) => {

  return (
    <form className='grid gap-4'>
      {
        content.map(({ columns }) => {
          return (
            // See the tailwind hacks in src/index.tsx
            <section key={JSON.stringify(columns)} className={`grid sm:grid-cols-12 gap-4 items-center items-end w-${width}`}>
              {
                columns.map((column) => (
                  // See the tailwind hacks in src/index.tsx
                  <div key={JSON.stringify(column)} className={`sm:col-span-${getWidth(column.width)}`}>
                    {
                      column.blocks.map((block) => {
                        return getComponent(block, {
                          Input: (baseProps: any) => {
                            return {
                              className: `${baseProps.className} w-full`
                            }
                          },
                          TextArea: (baseProps: any) => {
                            return {
                              className: `${baseProps.className} w-full`
                            }
                          },
                          ButtonsGroup: (baseProps: any) => {
                            return {
                              className: `${baseProps.className} w-full`
                            }
                          }
                        });
                      })
                    }
                  </div>
                ))
              }
            </section>
          )
        })
      }
    </form>
  )
}
