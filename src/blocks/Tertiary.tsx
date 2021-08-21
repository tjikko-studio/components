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
  image = {},
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  title = '',
  body = '',
  className = '',
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
        className={`mt-4 sm:mt-0 ${layout !== 'vertical' && 'w-1/2 sm:flex '} `}
      >
        <div
          className={`
            ${layout !== 'vertical' && imagePosition === 'right' ? 'sm:pr-6' : ''}
            ${layout !== 'vertical' && imagePosition === 'left' ? 'sm:pl-6' : ''}
          `}
        >
          <h2
            className='fontStyle-2xl mb-2'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base'
            dangerouslySetInnerHTML={{ __html: body }}
          >
          </p>
        </div>
      </div>
    )
  }
  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${layout === 'default' ? 'sm:flex' : ''} ${imagePosition === 'right' ? 'sm:flex-row-reverse' : ''}`}
    >
      {
        <>
          <div
            className={`${layout === 'vertical' ? 'sm:pb-8' : 'w-1/2'}`}
          >
            {image && (
              <Media
                media={image}
                autoplay={autoplay} muted={muted} controls={controls} loop={loop}
                className={`rounded-lg shadow-xl ${layout === 'default' ? ' w-auto' : ''}`}
              />
            )}
          </div>
          <Text />
        </>
      }
    </div>
  )
}