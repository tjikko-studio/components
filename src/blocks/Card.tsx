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
   * Immage Position
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

  /**
   * List of column component types
   * If there are multiple cards, h-full won't be applied
   */
  typesList?: string[]
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
  fullHeight,
  typesList
}) => {
  const cardsFullHeight = fullHeight
    ? fullHeight
    : typesList && typesList.reduce((acc, curr) => curr === 'Card' && (acc += 1), 0) === 1
    ? true
    : false
  const bgColorOutput = !hasBackground ? '' : bgColor ? bgColor : '#f3f4f6'

  return (
    <div
      className={cn(
        'w-full grid grid-rows-min-full gap-6',
        hasBackground && lightOrDark(bgColorOutput),
        {'h-full': cardsFullHeight},
        {'xl:grid-rows-none': layout === 'horizontal'},
        {'rounded-lg overflow-hidden': hasBackground},
        {'shadow-2xl': isElevated && hasBackground},
        {'xl:grid-cols-2': layout === 'horizontal'},
        className
      )}
      style={{backgroundColor: bgColorOutput}}
    >
      <Media
        media={image}
        autoplay={autoplay}
        muted={muted}
        controls={controls}
        loop={loop}
        ratio="16/9"
        className={cn(
          {'shadow-2xl': isElevated && !hasBackground},
          {'overflow-hidden xl:h-full xl:w-full': layout === 'horizontal'},
          {'xl:col-start-2 xl:row-start-1': imagePosition === 'right' && layout === 'horizontal'},
          {'xl:col-start-1 ': imagePosition === 'left' && layout === 'horizontal'}
        )}
        mediaClasses={cn('object-cover', {'rounded-lg': !hasBackground})}
      />
      <div
        className={cn(
          'h-full p-6 pt-0 flex flex-col',
          {'justify-between': hasBackground},
          {'xl:pt-6': layout === 'horizontal'},
          {'xl:pr-0 xl:col-start-1': imagePosition === 'right' && layout === 'horizontal'},
          {'xl:pl-0 xl:col-start-2 xl:row-start-1': imagePosition === 'left' && layout === 'horizontal'}
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
