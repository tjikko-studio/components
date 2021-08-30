import React, {FC, HTMLAttributes} from 'react'

import getComponent from '../../utilities/getComponent'
import getWidth from '../../utilities/getWidth'
import containVal from '../../utilities/containVal'

export interface BlockProps {
  type: string
  content: any
}

export interface ColumnProps {
  width: string
  blocks: BlockProps[]
}

export interface SectionItemProps {
  columns: ColumnProps[]
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background color
   */
  bgColor?: string

  /**
   * Content Position
   */
  contentPosition?: 'center|center' | 'bottom|left'

  /**
   * Layout width
   */
  layoutWidth?: 'default' | 'tight'

  /**
   * Layout vertical spacing
   */
  layoutSpacing?: 'default' | 'tight'

  /**
   * Sections object that will be parsed through to build the component
   */
  content?: SectionItemProps[]
}

function extractCombo (thing: string) {
  return thing ? thing.split('|') : [null, null]
}

export const Section: FC<SectionProps> = ({
  bgColor = 'transparent',
  layoutWidth = 'default',
  layoutSpacing = 'default',
  contentPosition = 'center|center',
  content = []
}) => {
  const [verAlign, horAlign] = extractCombo(contentPosition)
  const [theme, background] = extractCombo(bgColor)
  const align = (horAlign && verAlign) ? `justify-${horAlign} items-${verAlign}` : ''
  return (
    <div
      className={`overflow-hidden ${theme ? theme : ''}`}
      style={{ backgroundColor: background}}
    >
      <div
      className={`
      text-gray-900 dark:text-gray-50  grid gap-y-8 sm:gap-y-12 md:gap-y-16 w-full h-full max-w-screen-xl mx-auto
      ${layoutWidth === 'tight' ? 'px-4 sm:px-8 md:px-24' : 'px-4 sm:px-8 md:px-12'}
      ${layoutSpacing === 'tight' ? 'py-8 sm:py-12 md:py-16' : 'py-16 sm:py-24 md:py-32'}
      ${align ? align : ''}
    `}>
      {
        content.map(({columns}) => {
          const headerClass = content.length >= 2 && containVal(columns[0].blocks, 'type', ['Heading', 'Text']) ? 'mb-4 sm: mb-8' : ''
          return(
              <section key={JSON.stringify(columns)} className="grid sm:grid-cols-12 gap-y-8 sm:gap-y-12 md:gap-y-24 sm:gap-x-12 md:gap-x-16 w-full h-full">
                {
                  columns.map(({
                    width,
                    blocks
                  }) => (
                    <div key={JSON.stringify(blocks)} className={`col-span-${getWidth(width)} flex flex-col ${align} space-y-8 h-full ${headerClass}`}>
                      {
                        blocks.map((block) => {
                          return getComponent(block, {
                            Text: (baseProps: any) => {
                              return {
                                className: `${baseProps.className} text-gray-900 dark:text-gray-50`
                              }
                            }
                          })
                        })
                      }
                    </div>
                  ))
                }
              </section>
            )
          }
        )
      }
    </div>
    </div>
  )
}
