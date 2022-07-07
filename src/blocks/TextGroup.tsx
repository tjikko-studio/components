/* eslint-disable complexity */
import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import {Heading, HeadingAlignment, HeadingLevel, HeadingSize} from '../blocks/Heading'
import {ImageProps} from '../parts/Media'

export interface TextGroupProps extends HTMLAttributes<HTMLDivElement> {
  heading_text?: string
  heading_level?: HeadingLevel
  heading_size?: HeadingSize
  heading_alignment?: HeadingAlignment

  /**
   * text to display for paragraph
   */
  body: string

  /**
   *  Block image
   */
  image?: ImageProps | null

  textAlign?: 'left' | 'center' | 'right'
  mobileIgnoreAlign?: boolean
  verticalAlign?: 'top' | 'center' | 'third'
  ratio?: '1/1' | '16/9'
  hasSepar?: boolean
  hasBackground?: boolean
  bgColor?: string
  dark?: boolean
  contentShadow?: boolean
  isElevated?: boolean

  /**
   * Height of the card
   */
  fullHeight?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const TextGroup = ({
  heading_text,
  heading_level = 'h3',
  heading_size = 'h3',
  heading_alignment,
  body = '',
  image,
  className = '',
  textAlign = 'left',
  mobileIgnoreAlign,
  ratio,
  verticalAlign = 'top',
  hasSepar = true,
  hasBackground = false,
  bgColor = '#f3f4f6',
  dark = false,
  contentShadow = false,
  isElevated = false,
  fullHeight = true
}: TextGroupProps) => {
  if (heading_level === '') {
    heading_level = 'h3'
  }
  if (heading_size === '') {
    heading_size = 'h3'
  }

  const textAlignOutput =
    textAlign === 'left'
      ? 'md:w-full'
      : textAlign === 'center'
      ? mobileIgnoreAlign
        ? 'sm:text-center'
        : 'text-center'
      : textAlign === 'right'
      ? mobileIgnoreAlign
        ? 'sm:text-right'
        : 'text-right'
      : ''
  const wrapperClasses = []
  const innerClasses = []
  if (verticalAlign === 'third') {
    wrapperClasses.push('grid grid-rows-6')
    innerClasses.push('row-start-2')
  } else if (verticalAlign === 'center') {
    wrapperClasses.push('flex flex-col justify-center')
  }
  //const verticalPosition = verticalAlign === 'third' ? 'row-start-2' : verticalAlign === 'center' ? 'row-start-3' : ''

  const ratioOutput = ratio && hasBackground && `ratio-${ratio}`
  const theme = dark ? 'dark' : !hasBackground ? 'inherit' : !bgColor ? 'inherit' : lightOrDark(bgColor)

  const [textColor, borderColor] =
    theme === 'inherit'
      ? ['text-inherit', 'border-primary-200 dark:border-primary-700']
      : theme === 'light'
      ? ['text-gray-900', 'border-primary-200']
      : theme === 'dark' && ['text-gray-50', 'border-primary-400']

  return (
    <div
      className={cn(
        'py-4 w-full overflow-hidden',
        {relative: image},
        {'h-full': fullHeight},
        {'rounded-lg': hasBackground},
        {'shadow-2xl': hasBackground && isElevated},
        {'bg-cover': image},
        {'text-shadow-lg': contentShadow},
        wrapperClasses,
        contentShadow,
        textAlignOutput,
        ratioOutput,
        textColor,
        className
      )}
      style={{backgroundColor: hasBackground && bgColor, backgroundImage: image && hasBackground && `url(${image.url})`}}
    >
      <div className={cn('relative z-10', innerClasses)}>
        {heading_text && (
          <Heading
            heading_text={heading_text}
            heading_level={heading_level}
            heading_size={heading_size}
            heading_alignment={heading_alignment}
          />
        )}
        {hasSepar && <hr role="presentation" className={cn('my-3 sm:my-4', borderColor)} />}
        {body && <div className="mt-2" dangerouslySetInnerHTML={{__html: body}} />}
      </div>
      {contentShadow && (
        <div
          aria-hidden="true"
          className={cn([
            'absolute',
            'h-full',
            'left-0',
            'w-full',
            'transform',
            'scale-y-150',
            'bg-gradient-to-t',
            'from-transparent',
            'via-gray-900',
            'to-transparent',
            'opacity-60'
          ])}
        />
      )}
    </div>
  )
}
