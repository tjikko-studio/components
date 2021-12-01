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
   * IOmage Position
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
   * Styles
   */
  titleSize?: 'default' | 'big' | 'huge'
  textAlign?: 'left' | 'center'
  bgColor?: string
  isElevated?: boolean
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
  titleSize = 'default',
  textAlign = 'left',
  bgColor,
  isElevated = false
}) => {
  const bgColorOutput = bgColor ? bgColor : '#f3f4f6'

  return (
    <div
      className={cn(
        lightOrDark(bgColorOutput),
        'w-full h-full grid grid-rows-min-full gap-6 rounded-lg overflow-hidden',
        {'xl:grid-rows-none': layout === 'horizontal'},
        {'shadow-2xl': isElevated},
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
          {'overflow-hidden xl:h-full xl:w-full': layout === 'horizontal'},
          {'xl:col-start-2 xl:row-start-1': imagePosition === 'right' && layout === 'horizontal'},
          {'xl:col-start-1 ': imagePosition === 'left' && layout === 'horizontal'}
        )}
        mediaClasses="object-cover"
      />
      <div
        className={cn(
          'h-full p-6 pt-0 flex flex-col justify-between',
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
        {Object.keys(buttons).length ? <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className="gap-x-4 mt-4" /> : null}
      </div>
    </div>
  )
}
