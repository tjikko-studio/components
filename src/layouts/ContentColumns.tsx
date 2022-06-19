import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import extractCombo from '../../utilities/extractCombo'
import getComponent from '../../utilities/getComponent'

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
   * Custom classes for columns
   */
  columnClasses?: string

  templatesContent?: Record<string, ColumnProps>

  locale?: string

  sectionHeadingId?: string
}

const defaultJustifyContent = 'flex-start'

export const ContentColumns = ({
  content = [],
  contentPosition = 'center|center',
  componentsExtraProps = {},
  contentSectionClasses = cn(['flex-wrap', 'sm:flex-nowrap', 'gap-y-8', 'sm:gap-x-6', 'md:gap-x-12', 'w-full', 'h-full']),
  columnClasses = '',
  templatesContent = {},
  locale,
  className,
  sectionHeadingId
}: ContentColumnsProps) => {
  content = typeof content === 'string' ? JSON.parse(content) : content
  const toComponent = getComponent(templatesContent, locale)
  const [verAlign, horAlign] = extractCombo(contentPosition)
  // See safelist in tailwind.safelist.js
  const hAlign = horAlign ? `justify-${horAlign}` : ''
  const vAlign = verAlign ? `items-${verAlign}` : ''
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
        ? content.map(({columns = [], id, attrs}) => {
            const fullHeight = typeof attrs?.full_height === 'boolean' ? attrs?.full_height : true
            const rowJustifyContent = fallback(attrs?.row_justify_content, 'center')
            const colJustifyContent = fallback(attrs?.col_justify_content, defaultJustifyContent)
            const nbColumns = columns.length
            contentSectionClasses += nbColumns === 4 ? 'sm:gap-y-6 md:gap-y-12' : ' sm:gap-y-12 md:gap-y-18'
            return (
              <div
                role="presentation"
                key={id || JSON.stringify(columns)}
                className={cn(contentSectionClasses, className, attrs?.className)}
                style={{justifyContent: rowJustifyContent}}
              >
                {columns.map(({width = '1/1', blocks, id: columnId}) => {
                  const basis = width === '1/1' ? 'full' : width
                  const columns = `basis-full sm:basis-${basis}`
                  return (
                    // See safelist in tailwind.safelist.js
                    <div
                      role="presentation"
                      key={columnId || JSON.stringify(blocks)}
                      className={cn(columns, hAlign, vAlign, columnClasses)}
                      style={{justifyContent: colJustifyContent}}
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

function fallback(str: string | undefined, defaultValue: string): string {
  return !str || str === '' ? defaultValue : str
}
