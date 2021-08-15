import React, {FC, HTMLAttributes} from 'react'
import {Media, ImageProps} from '../parts/Media'

export interface TertiaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Is the composent direction  default/horizontasl (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

  /**
   * Is mirror
   */
  imagePosition?: 'undefined' | 'auto' | 'left' | 'right'

  /**
  *  Block image
  */
  image?: ImageProps

  /**
  *  Video properties
  */
  autoplay ?: boolean
  muted ?: boolean
  controls ?: boolean
  loop ?: boolean


  /**
   * text to display for heading
   */
  title: string

  /**
   * text to display for paragraph
   */
  body: string

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}


/**
 * Primary UI component for user interaction
 */
export const Tertiary: FC<TertiaryProps> = ({
  layout = 'default',
  imagePosition = 'auto',
  image,
  autoplay,
  muted,
  controls,
  loop,
  title,
  body,
  className = ''
}) => {
  const Image = () => {
    return (
      <div
        className={(layout === 'vertical' ? 'pb-6' : '')}
      >
        {image && (
          <Media
            media={image}
            autoplay={autoplay} muted={muted} controls={controls} loop={loop}
            className={`rounded-lg ${layout === 'default' ? ' w-auto' : ''}`}
          />
        )}
      </div>
    )
  }
  const Text = () => {
    return (
      <div
        className={layout !== 'vertical' ? 'flex justify-center' : ''}
      >
        <div
          className={layout !== 'vertical' ? 'pl-12' : ''}
        >
          <h2
            className='fontStyle-2xl'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base pt-2'
          >
            {body}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${layout === 'default' ? 'flex' : ''} ${imagePosition === 'right' ? 'flex-row-reverse' : ''} ${className}`}
    >
      {
        (layout === 'default' || layout === 'vertical') && (
          <>
            <Image />
            <Text />
          </>
        )
      }
    </div>
  )
}
