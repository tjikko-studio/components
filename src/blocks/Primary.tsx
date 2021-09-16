import React, { FC, HTMLAttributes } from 'react'
import {ButtonsGroup, GroupButtonProps} from '../blocks/ButtonsGroup'
import {Media, ImageProps} from '../parts/Media'

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {

  /**
   * Block Type
   */
  type?: 'primary' | 'secondary' | 'tertiary'

  /**
   * Is the component direction  default/horizontal (left to right) or vertical (image above)
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
}

/**
 * Primary UI component for user interaction
 */
export const Primary: FC<PrimaryProps> = ({
  type = 'primary',
  layout = 'default',
  imagePosition = 'auto',
  image = null,
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  title = '',
  body = '',
  buttons = []
}) => {
  layout = !layout ? 'default' : layout
  const hasButtons = type !== 'tertiary' && Object.keys(buttons).length >= 1

  const outerDivClasses = {
    primary: `lg:mt-0 ${layout !== 'vertical' && 'lg:w-1/2 lg:flex lg:items-center lg:justify-center'}`,
    secondary: `sm:mt-0 ${layout !== 'vertical' && 'sm:w-1/2 sm:flex'}`,
    tertiary: `sm:mt-0 ${layout !== 'vertical' ? 'sm:w-1/2 sm:flex sm:ml-6' : ''}`
  }
  const innerDivClasses = {
    primary: layout !== 'vertical' ? 'lg:pl-12' : '',
    secondary: layout !== 'vertical' ? 'sm:pl-12' : '',
    tertiary: ''
  }
  const headerClasses = type === 'tertiary' ? 'fontStyle-2xl mb-2 break-words block w-full' : 'fontStyle-4xl mb-4 break-words'
  const textClasses = type === 'tertiary' ? 'break-words' : ''

  return (
    <div
      className={`text-gray-900 dark:text-gray-50 grid ${layout === 'default' ? 'lg:grid-cols-2 lg:grid-flow-row lg:gap-x-4' : 'lg:gap-y-8'}`}
    >
      <div className={imagePosition === 'right' && layout === 'default' ? 'order-last' : ''}>
        {image && (
          <Media
            media={image}
            autoplay={autoplay} muted={muted} controls={controls} loop={loop}
            className={`rounded-lg shadow-xl ${layout === 'default' ? ' w-auto' : ''}`}
          />
        )}
      </div>
      <div className={`mt-4 ${outerDivClasses[type]}`} >
        <div className={innerDivClasses[type]}>
          <h2 className={headerClasses} >
            {title}
          </h2>
          <p
            className={`fontStyle-base ${textClasses}`}
            dangerouslySetInnerHTML={{__html: body}}
          />
          {
            hasButtons && <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className='space-x-4 mt-6' />
          }
        </div>
      </div>
    </div>
  )
}
