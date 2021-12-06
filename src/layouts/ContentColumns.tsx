import React, {CSSProperties, FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import extractCombo from '../../utilities/extractCombo'
import getComponent from '../../utilities/getComponent'
import getWidth from '../../utilities/getWidth'

import {AttrProps, ColumnProps, ComponentsExtraProps, ContentPosition} from '../../shared/types'

export interface SectionItemProps {
  id: string
  attrs?: AttrProps
  columns: ColumnProps[]
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

  sectionHeadingId?: string
}

export const ContentColumns: FC<ContentColumnsProps> = ({
  content = [],
  contentPosition = 'center|center',
  componentsExtraProps = {},
  contentSectionClasses = cn(['gap-y-8', 'sm:gap-x-6', 'md:gap-x-12', 'w-full', 'h-full']),
  contentSectionStyles = {},
  columnClasses = '',
  columnStyles = {},
  templatesContent = {},
  className,
  sectionHeadingId
}) => {
  const toComponent = getComponent(templatesContent)
  const [verAlign, horAlign] = extractCombo(contentPosition)
  // See safelist in tailwind.safelist.js
  const align = horAlign && verAlign ? `justify-${horAlign} items-${verAlign}` : ''
  const headingExtraPropsFn = componentsExtraProps.Heading
  if (headingExtraPropsFn) {
    componentsExtraProps.Heading = (props) => {
      return {...headingExtraPropsFn(props), id: sectionHeadingId}
    }
  } else {
    componentsExtraProps.Heading = () => {
      return {
        id: sectionHeadingId
      }
    }
  }

  return (
    <>
      {content
        ? content.map(({columns, id, attrs}) => {
            const fullHeight = typeof attrs?.full_height === 'boolean' ? attrs.full_height : true
            const columnsLength = columns.length
            contentSectionClasses += columnsLength === 4 ? 'sm:gap-y-6 md:gap-y-12' : 'sm:gap-y-12 md:gap-y-24'
            return (
              <div
                role="presentation"
                key={id || JSON.stringify(columns)}
                className={cn('grid sm:grid-cols-12', contentSectionClasses, className, attrs?.className)}
                style={{...contentSectionStyles}}
              >
                {columns.map(({width = '1/1', blocks, id: columnId}) => {
                  const columns = columnsLength === 4 ? `sm:col-span-6 lg:col-span-3` : `col-span-${getWidth(width)}`
                  return (
                    // See safelist in tailwind.safelist.js
                    <div
                      role="presentation"
                      key={columnId || JSON.stringify(blocks)}
                      className={cn(columns, align, columnClasses)}
                      style={{...columnStyles}}
                    >
                      {blocks.map((block) => {
                        block.content.fullHeight = fullHeight
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
