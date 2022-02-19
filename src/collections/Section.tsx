import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import extractCombo from '../../utilities/extractCombo'
import lightOrDark from '../../utilities/lightOrDark'
import makeRandomId from '../../utilities/makeRandomId'
import {ContentColumns} from '../layouts/ContentColumns'

import {ColumnProps, ComponentsExtraProps} from '../../shared/types'

export interface SectionItemProps {
  id: string
  columns: ColumnProps[]
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Background color
   */
  bgColor?: string
  /**
   * Wrapper background color
   */
  wrapperColor?: string
  aboveColor?: string

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
   * Floating section
   * With some effects around it
   */
  floating?: boolean
  floatingAbove?: boolean
  abovePos?: string

  /**
   * Sections object that will be parsed through to build the component
   */
  content?: SectionItemProps[]
  templatesContent?: Record<string, ColumnProps>
}

// eslint-disable-next-line complexity
export const Section = (props: SectionProps) => {
  let {
    bgColor = 'transparent',
    wrapperColor = 'transparent',
    aboveColor = 'transparent',
    layoutWidth = 'default',
    layoutSpacing = 'default',
    contentPosition = 'center|center',
    floating = false,
    floatingAbove = false,
    abovePos = 'bottom',
    content = [],
    templatesContent = {},
    className
  } = props
  content = typeof content === 'string' ? JSON.parse(content) : content
  const sectionHeadingId = makeRandomId()
  const [verAlign, horAlign] = extractCombo(contentPosition)
  const theme = !bgColor || bgColor === 'transparent' ? 'light' : lightOrDark(bgColor)
  // See safelist in tailwind.safelist.js
  const hAlign = horAlign ? `justify-${horAlign}` : ''
  const vAlign = verAlign ? `items-${verAlign}` : ''

  const classes = ['w-full', 'h-full', 'max-w-screen-xl', 'px-4', 'sm:px-8']
  const colorClass = theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
  const innerGridClasses: string[] = []
  const outerGridClasses: string[] = []

  let imagePosPrimary = 'undefined'

  function getNewPos(prevPos: string, newPos: string) {
    const finalPos = newPos || 'auto'
    switch (`${prevPos} | ${finalPos}`) {
      case 'undefined | auto':
        return 'left'
      case 'left | auto':
        return 'right'
      case 'right | auto':
        return 'left'
      default:
        return finalPos
    }
  }

  const columnComponentExtraProps: ComponentsExtraProps = {
    Primary: (baseProps: {imagePosition: string}) => {
      imagePosPrimary = getNewPos(imagePosPrimary, baseProps.imagePosition)
      return {
        imagePosition: imagePosPrimary
      }
    }
  }

  if (layoutSpacing === 'tight') {
    classes.push('py-16', 'sm:py-24', 'md:py-32')
    outerGridClasses.push('flex', 'gap-y-12')
    innerGridClasses.push(cn(outerGridClasses))
    outerGridClasses.push('flex-col sm:gap-y-14 md:gap-y-18')
  } else {
    classes.push('py-24', 'sm:py-32', 'md:py-40')
    outerGridClasses.push('flex', 'gap-y-14')
    innerGridClasses.push(cn(outerGridClasses))
    outerGridClasses.push('flex-col gap-y-14 sm:gap-y-22 md:gap-y-26')
  }
  if (hAlign) {
    classes.push(hAlign)
  }
  if (vAlign) {
    classes.push(vAlign)
  }

  return (
    <section
      className={cn('overflow-hidden', theme, className, {'py-12 relative': floating})}
      style={{backgroundColor: floating ? wrapperColor : bgColor}}
      aria-labelledby={sectionHeadingId}
    >
      <div role="presentation" className={cn('flex', 'justify-center')}>
        <div
          role="presentation"
          className={cn(classes, colorClass, outerGridClasses, {
            'md:rounded-lg md:shadow-2xl': floating,
            'relative z-10': floating && floatingAbove
          })}
          style={{backgroundColor: floating && bgColor}}
        >
          {content.length >= 1 ? (
            <ContentColumns
              content={content}
              contentPosition={contentPosition}
              componentsExtraProps={columnComponentExtraProps}
              columnClasses="flex flex-col gap-y-6"
              templatesContent={templatesContent}
              sectionHeadingId={sectionHeadingId}
              className={cn(innerGridClasses)}
            />
          ) : (
            <div>No content yet</div>
          )}
        </div>
      </div>
      {floating && floatingAbove && <div className={cn('absolute w-full h-1/2', `${abovePos}-0`)} style={{backgroundColor: aboveColor}} />}
    </section>
  )
}
