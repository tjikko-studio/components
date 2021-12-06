import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {ButtonProps} from '../Button'
import {ImageProps, Media} from '../parts/Media'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'horizontal' | 'vertical'

  /**
   * Image Position
   */
  imagePosition?: 'left' | 'right'

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
   *  Video properties
   */
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean

  /**
   *  Block buttons list
   */
  buttons?: ButtonProps[]

  /**
   * Background color
   */
  hasBackground?: boolean
  bgColor?: string

  /**
   * Is elevated (Will have a drop shadow)
   */
  isElevated?: boolean

  /**
   * Height of the card
   */
  fullHeight?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Card: FC<CardProps> = ({
  layout = 'vertical',
  imagePosition = 'left',
  image = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  title = '',
  body = '',
  buttons = [],
  className = '',
  bgColor,
  isElevated = false,
  hasBackground = true,
  fullHeight = true
}) => {
  const bgColorOutput = !hasBackground ? '' : bgColor ? bgColor : '#f3f4f6'

  return (
    <div
      className={cn(
        'w-full flex flex-col gap-6',
        {'h-full': fullHeight},
        hasBackground && lightOrDark(bgColorOutput),
        {'xl:flex-row xl:h-auto': layout === 'horizontal'},
        {'rounded-lg overflow-hidden': hasBackground},
        {'shadow-2xl': isElevated && hasBackground},
        className
      )}
      style={{backgroundColor: bgColorOutput}}
    >
      {image && (
        <Media
          media={image}
          autoplay={autoplay}
          muted={muted}
          controls={controls}
          loop={loop}
          ratio="16/9"
          className={cn({'shadow-2xl': isElevated && !hasBackground}, {'overflow-hidden xl:w-1/2': layout === 'horizontal'})}
          mediaClasses={cn('object-cover', {'rounded-lg': !hasBackground})}
        />
      )}
      <div
        className={cn(
          'flex flex-col justify-between',
          {'p-6': hasBackground},
          {'pt-0': image},
          {'xl:pt-6 xl:w-1/2 xl:h-full': image && layout === 'horizontal'},
          {'xl:pr-0 xl:order-first': image && imagePosition === 'right' && layout === 'horizontal'},
          {'xl:pl-0': image && imagePosition === 'left' && layout === 'horizontal'}
        )}
      >
        {(title || body) && (
          <div>
            <h3 className={cn('text-gray-900 dark:text-gray-50 fontStyle-2xl')}>{title}</h3>
            <p className={cn('text-gray:500 dark:text-gray-400 mt-3')}>{body}</p>
          </div>
        )}
        {Object.keys(buttons).length ? <ButtonsGroup buttons={buttons} className="gap-x-4 mt-4" /> : null}
      </div>
    </div>
  )
}
