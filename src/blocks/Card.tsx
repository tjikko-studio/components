import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import lightOrDark from '../../utilities/lightOrDark'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading, HeadingAlignment, HeadingLevel, HeadingSize} from '../blocks/Heading'
import {ButtonProps} from '../Button'
import {ImageProps, Media} from '../parts/Media'

export type CardLayout = 'horizontal' | 'vertical'

export type CardImagePosition = 'left' | 'right'
export type CardImage = ImageProps | null

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  layout?: CardLayout
  imagePosition?: CardImagePosition
  heading_text?: string
  heading_level?: HeadingLevel
  heading_size?: HeadingSize
  heading_alignment?: HeadingAlignment
  body?: string
  image?: CardImage
  image_srcset_medium?: string
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
  image_srcset_medium = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  heading_text,
  heading_level = 'h3',
  heading_size = 'h4',
  heading_alignment,
  body = '',
  buttons = [],
  className = '',
  bgColor,
  isElevated = false,
  hasBackground = true,
  fullHeight = true,
  allowRoundedCorners = true
}: CardProps) => {
  if (heading_level === '') {
    heading_level = 'h3'
  }
  if (heading_size === '') {
    heading_size = 'h5'
  }
  if (heading_alignment === '') {
    heading_alignment = 'left'
  }
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
      style={{backgroundColor: heading_text || body ? bgColorOutput : 'transparent'}}
    >
      {image && (
        <Media
          media={image}
          image_srcset={image_srcset_medium}
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
        {(heading_text || body) && (
          <div>
            <Heading
              heading_text={heading_text}
              heading_level={heading_level}
              heading_size={heading_size}
              heading_alignment={heading_alignment}
              className={cn(colorClass)}
            />
            <div className={cn('mt-3', pColorClass)} dangerouslySetInnerHTML={{__html: body}} />
          </div>
        )}
        {Object.keys(buttons).length ? <ButtonsGroup buttons={buttons} className="gap-x-4 mt-4" /> : null}
      </div>
    </div>
  )
}
