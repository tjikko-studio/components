import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import extractCombo from '../../utilities/stringUtils'
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

  className?: string
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
  const [verAlign, horAlign] = extractCombo(contentPosition)
  const theme = !bgColor || bgColor === 'transparent' ? 'light' : lightOrDark(bgColor)
  // See safelist in tailwind.safelist.js
  const align = horAlign && verAlign ? `justify-${horAlign} items-${verAlign}` : ''

  let imagePosPrimary = 'undefined'
  let imagePosSecondary = 'undefined'
  let imagePosTertiary = 'undefined'
  let wrapperBg = ''
  let nextBg = ''
  let wrapperClasses = []
  let innerBg = ''

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
    },
    Secondary: (baseProps: {imagePosition: string}) => {
      imagePosSecondary = getNewPos(imagePosSecondary, baseProps.imagePosition)
      return {
        imagePosition: imagePosSecondary
      }
    },
    Tertiary: (baseProps: {imagePosition: string}) => {
      imagePosTertiary = getNewPos(imagePosTertiary, baseProps.imagePosition)
      return {
        imagePosition: imagePosTertiary
      }
    }
  }

  const classes = [
    'text-gray-900',
    'dark:text-gray-50',
    'grid',
    'gap-y-8',
    'sm:gap-y-12',
    'md:gap-y-16',
    'w-full',
    'h-full',
    'max-w-screen-xl',
    'mx-auto'
  ]
  if (layoutWidth === 'tight') {
    classes.push('px-4', 'sm:px-8', 'md:px-24')
  } else {
    classes.push('px-4 sm:px-8 md:px-12')
  }
  if (layoutSpacing === 'tight') {
    classes.push('py-8', 'sm:py-12', 'md:py-16')
  } else {
    classes.push('py-16', 'sm:py-24', 'md:py-32')
  }
  if (align) {
    classes.push(align)
  }
  if (floating) {
    innerBg = bgColor
    wrapperClasses.push('py-12 relative')
    classes.push('rounded-lg shadow-2xl')
    wrapperBg = wrapperColor
    if (floatingAbove) {
      nextBg = aboveColor
      classes.push('relative z-10')
      abovePos = `${abovePos}-0`
    }
  } else {
    wrapperBg = bgColor
  }

  return (
    <section className={cn('overflow-hidden', theme, className, wrapperClasses)} style={{backgroundColor: wrapperBg}}>
      <div className={cn(classes)} style={{backgroundColor: innerBg}}>
        {content.length >= 1 ? (
          <ContentColumns
            content={content}
            contentPosition={contentPosition}
            componentsExtraProps={columnComponentExtraProps}
            columnClasses="flex flex-col space-y-6 h-full"
            templatesContent={templatesContent}
          />
        ) : (
          <div>No content yet</div>
        )}
      </div>
      {floatingAbove && <div className={cn('absolute w-full h-1/2', abovePos)} style={{backgroundColor: nextBg}} />}
    </section>
  )
}
