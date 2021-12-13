import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {Heading} from '../blocks/Heading'
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
  if (!textPositionVertical) textPositionVertical = 'center'

  return (
    <div className={cn('grid gap-6 text-gray-900 dark:text-gray-50', {'lg:grid-cols-2 lg:gap-12': finalLayout === 'default'})}>
      {(finalLayout === 'default' || finalLayout === 'vertical') && (
        <>
          <Media
            media={image}
            autoplay={autoplay}
            muted={muted}
            controls={controls}
            loop={loop}
            className={cn(
              'rounded-lg shadow-2xl',
              {'lg:col-start-2 lg:row-start-1': imagePosition === 'right' && finalLayout === 'default'},
              {'lg:col-start-1': imagePosition === 'left' && finalLayout === 'default'}
            )}
            ratio="16/9"
          />
          <div
            className={cn(
              'flex flex-col',
              {'justify-center': textPositionVertical === 'center'},
              {'lg:col-start-1': imagePosition === 'right' && finalLayout === 'default'},
              {'lg:col-start-2 lg:row-start-1': imagePosition === 'left' && finalLayout === 'default'},
              className
            )}
          >
            <Heading level="h3" text={title} className={cn('break-words', titleSize)} />
            <div className="mt-2" dangerouslySetInnerHTML={{__html: body}} />
            {Object.keys(buttons).length ? <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className="gap-x-4 mt-4" /> : null}
          </div>
        </>
      )}
    </div>
  )
}
