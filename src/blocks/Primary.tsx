import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {ButtonProps} from '../Button'
import {ImageProps, Media} from '../parts/Media'

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

  /**
   * Image Position
   */
  imagePosition?: 'undefined' | 'auto' | 'left' | 'right' | 'top'

  /**
   * Text Position Position
   */
  textPositionVertical?: 'center' | 'top'

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
   * Text Size
   */
  textSize?: 'regular' | 'small'

  /**
   * text to display for heading
   */
  title: string

  /**
   * text to display for paragraph
   */
  body: string

  /**
   *  Block buttons list
   */
  buttons?: ButtonProps[]
}

/**
 * Primary UI component for user interaction
 */
export const Primary: FC<PrimaryProps> = ({
  layout = 'default',
  imagePosition = 'auto',
  textPositionVertical = 'center',
  image = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  textSize = 'regular',
  title = '',
  body = '',
  buttons = [],
  className = ''
}) => {
  const finalLayout = layout || 'default'
  const titleSize = textSize === 'small' ? 'fontStyle-2xl' : 'fontStyle-3xl'

  return (
    <div
      className={cn(
        'flex gap-6 flex-col text-gray-900 dark:text-gray-50',
        {'lg:flex-row-reverse': imagePosition === 'right' && finalLayout === 'default'},
        {'lg:flex-row lg:gap-12': finalLayout === 'default'}
      )}
    >
      {(finalLayout === 'default' || finalLayout === 'vertical') && (
        <>
          <Media
            media={image}
            autoplay={autoplay}
            muted={muted}
            controls={controls}
            loop={loop}
            className="rounded-lg shadow-xl w-full h-full"
            wrapperClassName={'flex-1'}
          />
          <div className={cn('flex flex-col flex-1', {'justify-center': textPositionVertical === 'center'}, className)}>
            <h2 className={cn('break-words', titleSize)}>{title}</h2>
            <p className="mt-2" dangerouslySetInnerHTML={{__html: body}} />
            {Object.keys(buttons).length ? <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className="gap-x-4 mt-4" /> : null}
          </div>
        </>
      )}
    </div>
  )
}
