import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

import {ButtonsGroup, GroupButtonProps} from '../blocks/ButtonsGroup'
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
  textPositionVertical?: '' | 'center' | 'top'

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
  textSize?: '' | 'regular' | 'small'

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
  buttons?: GroupButtonProps[]

  /**
   * className override
   */
  className?: string
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

  let titleSize = ''
  if (textSize === 'regular' || textSize === '') {
    titleSize = 'fontStyle-4xl'
  } else if (textSize === 'small' || textSize === '') {
    titleSize = 'fontStyle-3xl'
  }

  return (
    <div
      className={cn(
        'flex gap-6 flex-col lg:gap-12 text-gray-900 dark:text-gray-50',
        finalLayout === 'default' && 'lg:flex-row',
        imagePosition === 'right' && finalLayout === 'default' && 'lg:flex-row-reverse',
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
            className={'rounded-lg shadow-xl w-full h-full'}
            wrapperClassName={'flex-1'}
          />
          <div className={cn('flex items-center flex-1', className, textPositionVertical === 'top' && 'items-baseline')}>
            <div>
              <h2 className={cn('mb-2 break-words', titleSize)}>{title}</h2>
              <p dangerouslySetInnerHTML={{__html: body}} />
              {Object.keys(buttons).length ? (
                <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className="gap-x-4 mt-6" />
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
