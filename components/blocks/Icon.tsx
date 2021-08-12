import React, {FC, HTMLAttributes, useState, useEffect} from 'react'
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
  image?: {}
  
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
  image,
  title,
  body,
  className
}) => {
  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${layout === 'horizontal' ? 'flex' : ''}`}
    >
      <div
        className={layout === 'horizontal' ? 'px-6 pb-14' : 'py-2'}
      >
         {image && (
          <img
            src={image.url}
            className={`w-14 h-14`}
          />
        )}
      </div>
      <div
        className={layout === 'horizontal' ? 'ml-6' : 'mt-6'}
        style={
          {
            width: layout === 'horizontal' ? '310px' : '290px'
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
