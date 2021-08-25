import React, { FC, HTMLAttributes } from 'react'
import {ButtonsGroup, GroupButtonProps} from '../blocks/ButtonsGroup'
import {Media, ImageProps} from '../parts/Media'

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Is the component direction  default/horizontal (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

  /**
   * Image position
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
  *  Block buttons list
  */
  buttons?: GroupButtonProps[]

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Primary: FC<PrimaryProps> = ({
  layout = 'default',
  imagePosition = 'auto',
  image,
  autoplay,
  muted,
  controls,
  loop,
  title,
  body,
  buttons,
}) => {
  const Text = () => {
    return (
      <div
        className={`mt-4 sm:mt-0 ${layout !== 'vertical' && 'sm:flex sm:items-center sm:justify-center'} `}
      >
        <div
          className={`${layout !== 'vertical' ? 'sm:pl-12' : ''} `}
        >
          <h2
            className='fontStyle-4xl'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base mt-2'
          >
            {body}
          </p>
          {
            Object.keys(buttons).length >= 1 &&
            <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className='space-x-4mt-6' />
          }
        </div>
      </div>
    )
  }
  return (
    <div
      className={`body-gray-900 dark:body-gray-50 ${layout === 'default' ? 'sm:flex' : ''} ${imagePosition === 'right' ? 'sm:flex-row-reverse' : ''}`}
    >
      {
        (layout === 'default' || layout === 'vertical') && (
          <>
            <div
              className={`${layout === 'vertical' ? 'sm:pb-8' : 'sm:px-12 sm:py-6'}`}
            >
              {image && (
                <Media
                  media={image}
                  autoplay={autoplay} muted={muted} controls={controls} loop={loop}
                  className={`rounded-lg ${layout === 'default' ? ' w-auto' : ''}`}
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
