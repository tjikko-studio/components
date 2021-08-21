import React, {FC, HTMLAttributes} from 'react'
import {Media, ImageProps} from '../parts/Media'
import {ButtonsGroup, GroupButtonProps} from '../blocks/ButtonsGroup'

export interface SecondaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Is the component direction  default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

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

  /**
  *  Block buttons list
  */
  buttons?: GroupButtonProps[]

  /**
   * Image Position
   */
  imagePosition?: 'undefined' | 'auto' | 'left' | 'right' | 'top'

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Secondary: FC<SecondaryProps> = ({
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
  className = '',

}) => {
  /* getContent('pages/solutions+remote-presentations/files/file.mp4', 'en') */
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
          className={`${layout !== 'vertical' ? 'sm:pl-12' : ''} `}
        >
          <h2
            className='fontStyle-4xl mb-4'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base'
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </div>
    )
  }
  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${layout === 'default' ? 'sm:flex' : ''} ${imagePosition === 'right' ? 'sm:flex-row-reverse' : ''}`}
    >
      {
        (layout === 'default' || layout === 'vertical') && (
          <>
            <div
              className={`${layout === 'vertical' ? 'sm:pb-8' : 'w-1/2 sm:p-4'}`}
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
        )
      }
    </div>
  )
}
