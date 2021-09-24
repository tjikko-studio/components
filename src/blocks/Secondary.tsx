// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'
import {Media, ImageProps} from '../parts/Media'
import {GroupButtonProps, ButtonsGroup} from '../blocks/ButtonsGroup'
export interface SecondaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * default/horizontal (left to right) or vertical (image above)
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
   * className override
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
  className = ''

}) => {
  const finalLayout = layout || 'default'

  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${
        layout === 'default'
          ? 'sm:flex'
          : ''
      } ${
        imagePosition === 'right'
          ? 'sm:flex-row-reverse'
          : ''
      }`}
    >
      {
        (layout === 'default' || layout === 'vertical') && (
          <>
            <div
              className={`${
                layout === 'vertical'
                  ? 'sm:pb-8'
                  : 'sm:w-1/2 sm:p-4'
              }`}
            >
              {image && (
                <Media
                  media={image}
                  autoplay={autoplay}
                  muted={muted}
                  controls={controls}
                  loop={loop}
                  className={'rounded-lg shadow-xl w-full h-full'}
                />
              )}
            </div>
            <div
              className={`mt-4 sm:mt-0 ${
                layout !== 'vertical'
                  && 'sm:w-1/2 sm:flex'
              }`}
            >
              <div
                className={
                  layout === 'vertical'
                    ? ''
                    : 'sm:pl-12'
                }
              >
                <h2
                  className='fontStyle-4xl mb-4 break-words'
                >
                  {title}
                </h2>
                <p
                  className='fontStyle-base'
                  dangerouslySetInnerHTML={{__html: body}}
                />
                {
                  Object.keys(buttons).length >= 1 &&
                  <ButtonsGroup
                    key={JSON.stringify(buttons)}
                    buttons={buttons}
                    className='space-x-4 mt-6'
                  />
                }
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
