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
  image = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  title = '',
  body = '',
  buttons = [],
  className = ''
}) => {
  const finalLayout = layout || 'default'

  return (
    <div
      className={cn(
        'text-gray-900 dark:text-gray-50',
        finalLayout === 'default' && 'lg:flex',
        imagePosition === 'right' && 'lg:flex-row-reverse'
      )}
    >
      {(finalLayout === 'default' || finalLayout === 'vertical') && (
        <>
          <div className={cn(layout === 'vertical' ? 'lg:pb-8' : 'lg:w-1/2 lg:p-4')}>
            {image && (
              <Media
                media={image}
                autoplay={autoplay}
                muted={muted}
                controls={controls}
                loop={loop}
                alt={image.url ? image.alt || title : ''}
                className={'rounded-lg shadow-xl w-full h-full'}
              />
            )}
          </div>
          <div className={cn('mt-4 lg:mt-0', finalLayout !== 'vertical' && 'lg:w-1/2 lg:flex lg:items-center lg:justify-left', className)}>
            <div className={cn(finalLayout !== 'vertical' && 'lg:pl-12')}>
              <h2 className="fontStyle-4xl mb-4 break-words">{title}</h2>
              <p className="fontStyle-base" dangerouslySetInnerHTML={{__html: body}} />
              {Object.keys(buttons).length && <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className="space-x-4 mt-6" />}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
