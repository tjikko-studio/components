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
  image?: ImageProps | null

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
}


/**
 * Primary UI component for user interaction
 */
export const Tertiary: FC<TertiaryProps> = ({
  layout = 'default',
  imagePosition = 'auto',
  image = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  title = '',
  body = ''
}) => {
  const Text = () => {
    return (
      <div
        className={`mt-4 sm:mt-0 ${layout !== 'vertical' && 'sm:w-1/2 sm:flex '} `}
      >
        <div
          className={`
            ${layout !== 'vertical' && imagePosition === 'right' ? 'sm:pr-6' : ''}
            ${layout !== 'vertical' && imagePosition === 'left' ? 'sm:pl-6' : ''}
          `}
        >
          <h2
            className='fontStyle-2xl mb-2 break-words block w-full'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base break-words'
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
      <div
        className={`${layout === 'vertical' ? 'sm:pb-8' : 'sm:w-1/2'}`}
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
    </div>
  )
}
