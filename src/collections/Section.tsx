import React, {FC, HTMLAttributes} from 'react'
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

export const Section: FC<SectionProps> = ({
  bgColor = 'transparent',
  wrapperColor = '',
  aboveColor = '',
  layoutWidth = 'default',
  layoutSpacing = 'default',
  contentPosition = 'center|center',
  floating = false,
  floatingAbove = false,
  abovePos = 'bottom',
  content = [],
  templatesContent = {},
  className
}) => {
  const sectionHeadingId = makeRandomId()
  const [verAlign, horAlign] = extractCombo(contentPosition)
  const theme = !bgColor || bgColor === 'transparent' ? 'light' : lightOrDark(bgColor)
  // See safelist in tailwind.safelist.js
  const align = horAlign && verAlign ? `justify-${horAlign} items-${verAlign}` : ''

  const classes = ['text-gray-900', 'dark:text-gray-50', 'w-full', 'h-full', 'max-w-screen-xl', 'mx-auto']
  const gridClasses: string[] = []

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
    Text: (baseProps) => {
      return {
        className: cn(baseProps.className, 'text-gray-900 dark:text-gray-50')
      }
    },
    Primary: (baseProps: {imagePosition: string}) => {
      imagePosPrimary = getNewPos(imagePosPrimary, baseProps.imagePosition)
      return {
        imagePosition: imagePosPrimary
      }
    }
  }

  if (layoutWidth === 'tight') {
    classes.push('px-4', 'sm:px-8', 'md:px-24', 'xl:px-0')
  } else {
    classes.push('px-4', 'sm:px-8', 'md:px-12', 'xl:px-0')
  }
  if (layoutSpacing === 'tight') {
    classes.push('py-4', 'sm:py-8', 'md:py-16')
    gridClasses.push('grid', 'gap-y-4', 'sm:gap-y-8', 'md:gap-y-16')
  } else {
    classes.push('py-12', 'sm:py-16', 'md:py-24')
    gridClasses.push('grid', 'gap-y-12', 'sm:gap-y-16', 'md:gap-y-24')
  }
  if (align) {
    classes.push(align)
  }

  return (
    <section
      className={cn('overflow-hidden', theme, className, floating && 'py-12 relative')}
      style={{backgroundColor: floating ? wrapperColor : bgColor}}
      aria-labelledby={sectionHeadingId}
    >
      <div className={cn(floating && 'mx-0 md:mx-8 xl:mx-auto')}>
        <div
          className={cn(classes, gridClasses, floating && 'md:rounded-lg md:shadow-2xl', floating && floatingAbove && 'relative z-10')}
          style={{backgroundColor: floating && bgColor}}
        >
          {content.length >= 1 ? (
            <ContentColumns
              content={content}
              contentPosition={contentPosition}
              componentsExtraProps={columnComponentExtraProps}
              columnClasses="flex flex-col gap-y-6 h-full"
              templatesContent={templatesContent}
              className={cn(gridClasses)}
              sectionHeadingId={sectionHeadingId}
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
