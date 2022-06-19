import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading} from '../blocks/Heading'
import {ButtonProps} from '../Button'
import {ImageProps, Media} from '../parts/Media'

export type CardLayout = 'horizontal' | 'vertical'

export type CardImagePosition = 'left' | 'right'
export type CardImage = ImageProps | null

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  layout?: CardLayout
  imagePosition?: CardImagePosition
  title?: string
  body?: string
  image?: CardImage
  buttons?: ButtonProps[]
  hasBackground?: boolean
  bgColor?: string
  isElevated?: boolean
  fullHeight?: boolean

  allowRoundedCorners?: boolean
  /**
   *  Video properties
   */
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  loop?: boolean
}

// eslint-disable-next-line complexity
export const Card = ({
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
  fullHeight = true,
  allowRoundedCorners = true
}: CardProps) => {
  const bgColorOutput = !hasBackground ? '' : bgColor ? bgColor : '#f3f4f6'
  const theme = lightOrDark(bgColorOutput)
  const colorClass = theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
  const pColorClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-900'

  if (Array.isArray(image)) {
    image = image[0]
  }
  return (
    <div
      className={cn(
        'w-full flex flex-col gap-6',
        {'h-full': fullHeight},
        hasBackground && theme,
        {'xl:flex-row xl:h-auto': layout === 'horizontal'},
        {'rounded-lg': hasBackground && allowRoundedCorners},
        {'shadow-2xl': isElevated && hasBackground},
        className
      )}
      style={{backgroundColor: title || body ? bgColorOutput : 'transparent'}}
    >
      {image && (
        <Media
          media={image}
          autoplay={autoplay}
          muted={muted}
          controls={controls}
          loop={loop}
          ratio="16/9"
          className={cn(
            {'shadow-2xl': isElevated && !hasBackground},
            {'rounded-lg': !hasBackground && allowRoundedCorners},
            {'rounded-t-lg': hasBackground && allowRoundedCorners},
            {'overflow-hidden xl:w-1/2': layout === 'horizontal'}
          )}
          mediaClasses={cn('object-cover')}
        />
      )}
      <div
        className={cn(
          'flex flex-col flex-grow',
          {'p-6 justify-between': hasBackground},
          {'pt-0': image},
          {'xl:pt-6 xl:w-1/2 xl:h-full': image && layout === 'horizontal'},
          {'xl:pr-0 xl:order-first': image && imagePosition === 'right' && layout === 'horizontal'},
          {'xl:pl-0': image && imagePosition === 'left' && layout === 'horizontal'}
        )}
      >
        {(title || body) && (
          <div>
            <Heading level="h3" text={title} className={cn('fontStyle-2xl', colorClass)} />
            <div className={cn('mt-3', pColorClass)} dangerouslySetInnerHTML={{__html: body}} />
          </div>
        )}
        {Object.keys(buttons).length ? <ButtonsGroup buttons={buttons} className="gap-x-4 mt-4" /> : null}
      </div>
    </div>
  )
}
