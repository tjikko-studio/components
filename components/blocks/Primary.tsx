import React, { FC, HTMLAttributes } from 'react'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {useMediaPredicate} from 'react-media-hook'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const tailwind = resolveConfig(tailwindConfig);

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Is the composent direction  default/horizontasl (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'
  
  /**
   * Image position
   */
   imagePosition?: 'automatic' | 'left' | 'right'

  /**
  *  Block image
  */
  image?: {}
  
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
  buttons?: {}
  
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
  imagePosition = 'automatic',
  image,
  title,
  body,
  buttons,
}) => {
  image = image[0];
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
            {image && (
              <div
                className={`${layout === 'vertical' ? 'sm:pb-8' : 'sm:px-12 sm:py-6'}`}
              >
                <img
                  src={image.url}
                  className={`rounded-lg${layout === 'default' ? ' w-auto' : ''}`}
                />
              </div>
            )}
            <Text />
          </>
        )
      }
    </div>
  )
}
