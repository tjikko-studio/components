import React, {CSSProperties, FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import containVal from '../../utilities/containVal'
import extractCombo from '../../utilities/extractCombo'
import getComponent from '../../utilities/getComponent'
import getWidth from '../../utilities/getWidth'

import {ColumnProps, ComponentsExtraProps, ContentPosition} from '../../shared/types'

export interface SectionItemProps {
  id: string
  columns: ColumnProps[]
  attrs?: {className?: string}
}

export interface ContentColumnsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sections object that will be parsed through to build the component
   */
  content?: SectionItemProps[]

  /**
   * Content Position
   */
  contentPosition?: ContentPosition

  /**
   * Rendered components extra props that changes the styles
   */
  componentsExtraProps?: ComponentsExtraProps

  /**
   * Custom classes for section
   */
  contentSectionClasses?: string

  /**
   * Custom styles for section
   */
  contentSectionStyles?: CSSProperties

  /**
   * Custom classes for columns
   */
  columnClasses?: string

  /**
   * Custom styles for columns
   */
  columnStyles?: CSSProperties

  templatesContent?: Record<string, ColumnProps>
}

export const ContentColumns: FC<ContentColumnsProps> = ({
  content = [],
  contentPosition = 'center|center',
  componentsExtraProps = {},
  contentSectionClasses = cn(['gap-y-8', 'sm:gap-y-12', 'md:gap-y-24', 'sm:gap-x-12', 'md:gap-x-16', 'w-full', 'h-full']),
  contentSectionStyles = {},
  columnClasses = '',
  columnStyles = {},
  templatesContent = {},
  className
}) => {
  const toComponent = getComponent(templatesContent)
  const [verAlign, horAlign] = extractCombo(contentPosition)
  // See safelist in tailwind.safelist.js
  const align = horAlign && verAlign ? `justify-${horAlign} items-${verAlign}` : ''

  return (
    <>
      {content
        ? content.map(({columns, id, attrs}) => {
            return (
              <div
                key={id || JSON.stringify(columns)}
                className={cn('grid sm:grid-cols-12', contentSectionClasses, className, attrs?.className)}
                style={{...contentSectionStyles}}
              >
                {columns.map(({width = '1/1', blocks, id: columnId}) => {
                  return (
                    // See safelist in tailwind.safelist.js
                    <div
                      key={columnId || JSON.stringify(blocks)}
                      className={cn([`col-span-${getWidth(width)}`, align, columnClasses])}
                      style={{...columnStyles}}
                    >
                      {blocks.map((block) => {
                        return toComponent(block, {
                          ...componentsExtraProps
                        })
                      })}
                    </div>
                  )
                })}
              </div>
            )
          })
        : null}
    </>
  )
}
