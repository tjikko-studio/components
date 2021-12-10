/* eslint-disable complexity */
import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import {Heading} from '../blocks/Heading'
import {ImageProps} from '../parts/Media'

export interface TextGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to display for heading
   */
  title: string

  /**
   * text to display for paragraph
   */
  body: string

  /**
   *  Block image
   */
  image?: ImageProps | null

  /**
   * Styles
   */
  titleSize?: 'default' | 'big' | 'huge'
  textAlign?: 'left' | 'center' | 'right'
  verticalAlign?: 'top' | 'center'
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
export const TextGroup: FC<TextGroupProps> = ({
  title = '',
  body = '',
  image,
  className = '',
  titleSize = 'default',
  textAlign = 'left',
  ratio,
  verticalAlign = '',
  hasSepar = true,
  hasBackground = false,
  bgColor = '#f3f4f6',
  dark = false,
  contentShadow = false,
  isElevated = false,
  fullHeight = true
}) => {
  const titleSizeOutput =
    titleSize === 'huge'
      ? 'fontStyle-4xl md:fontStyle-5xl xl:fontStyle-6xl uppercase'
      : titleSize === 'big'
      ? 'fontStyle-3xl sm:fontStyle-4xl'
      : 'fontStyle-xl sm:fontStyle-2xl'

  const textAlignOutput =
    textAlign === 'left' ? 'md:w-full' : textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : ''

  const ratioOutput = ratio && hasBackground && `ratio-${ratio}`
  const theme = dark ? 'dark' : !hasBackground ? 'inherit' : !bgColor ? 'inherit' : lightOrDark(bgColor)

  const [textColor, borderColor] =
    theme === 'inherit'
      ? ['text-gray-900 dark:text-gray-50', 'border-primary-500 dark:border-primary-400']
      : theme === 'light'
      ? ['text-gray-900', 'border-primary-500']
      : theme === 'dark' && ['text-gray-50', 'border-primary-400']

  return (
    <div
      className={cn(
        'flex flex-col p-4 w-full overflow-hidden',
        {relative: image},
        {'h-full': fullHeight},
        {'rounded-lg': hasBackground},
        {'shadow-2xl': hasBackground && isElevated},
        {'bg-cover': image},
        {'justify-center': verticalAlign === 'center' && hasBackground},
        {'text-shadow-lg': contentShadow},
        contentShadow,
        textAlignOutput,
        ratioOutput,
        textColor,
        className
      )}
      style={{backgroundColor: hasBackground && bgColor, backgroundImage: image && hasBackground && `url(${image.url})`}}
    >
      <div className="relative z-10">
        {title && <Heading level="h3" text={title} className={cn(titleSizeOutput)} />}
        {hasSepar && <hr role="presentation" className={cn('my-2 sm:my-3', borderColor)} />}
        {body && <p className="mt-2">{body}</p>}
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
