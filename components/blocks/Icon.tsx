import React, {FC, HTMLAttributes, useState, useEffect} from 'react'
/*
* In production mode, show dynamic image and video with url
*/

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * type of Icon ('horizontal' | 'vertical')
   */
  type?: 'horizontal' | 'vertical'
  /**
   *  image url to show
   */
  image?: string
  /**
   * title text
   */
  title?: string
  /**
   * content text
   */
  body?: string
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Icon: FC<IconProps> = ({
  type = 'horizontal',
  title,
  body,
  image
}) => {
  image = image[0]
  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${type === 'horizontal' ? 'flex' : ''}`}
    >
      <div
        className={type === 'horizontal' ? 'px-6 pb-14' : 'py-2'}
      >
         {image && (
          <img
            src={image.url}
            className={`w-14 h-14`}
          />
        )}
      </div>
      <div
        className={type === 'horizontal' ? 'ml-6' : 'mt-6'}
        style={
          {
            width: type === 'horizontal' ? '310px' : '290px'
          }
        }
      >
        <h2
          className='fontStyle-2xl'
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
