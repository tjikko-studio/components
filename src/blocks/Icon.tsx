import React, {FC, HTMLAttributes} from 'react'
import {Media, ImageProps} from '../parts/Media'

/*
* In production mode, show dynamic image and video with url
*/

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * layout of Icon ('horizontal' | 'vertical')
   */
  layout?: 'horizontal' | 'vertical'

  /**
   *  image url to show
   */
  image?: ImageProps | null

  /**
   * title text
   */
  title?: string

  /**
   * content text
   */
  body?: string

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Icon: FC<IconProps> = ({
  layout = 'horizontal',
  image = null,
  title = '',
  body = '',
  className = ''
}) => {
  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${layout === 'horizontal' ? 'sm:flex' : ''}`}
    >
      <div
        className={`flex-shrink-0  w-32 ${layout !== 'horizontal' && 'sm:pb-14 pb-6'}`}
      >
        {image && (
          <Media
            media={image}
            className={`w-32 h-32`}
          />
        )}
      </div>
      <div
        className={layout === 'horizontal' ? 'sm:ml-6' : 'mt-6'}
      >
        <h2
          className='fontStyle-2xl break-words'
        >
          {
            title && title !== '' ? title : 'title'
          }
        </h2>
        <p
          className='fontStyle-base pt-2'
        >
          {
            body && body === '' ? body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
        </p>
      </div>
    </div>
  )
}
