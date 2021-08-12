import React, {FC, HTMLAttributes} from 'react'
import {ButtonsGroup} from '../blocks/ButtonsGroup'

export interface SecondaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Is the composent direction  default/horizontasl (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'

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
   * Image position
   */
   imagePosition?: 'auto' | 'left' | 'right'
  
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
  image,
  title,
  body,
  buttons,
  className = '',

}) => {
  const Image = () => {
    return (
      <div
        className={layout === 'vertical' ? 'pb-6' : ''}
      >
        {image && (
          <img
            src={image.url}
            className={`rounded-lg ${layout === 'default' && 'w-auto'}`}
          />
        )}
      </div>
    )
  }
  const Text = () => {
    return (
      <div
        className={`text-gray-900 dark:text-gray-50 ${layout !== 'vertical' && 'flex justify-center'}`}
      >
        <div
          className={`
              ${layout !== 'vertical' && 'pl-12'}
          `}
        >
          <h2 className='fontStyle-4xl'>{title}</h2>
          <p className='fontStyle-base pt-2'>{body}</p>
          {
            Object.keys(buttons).length >= 1 &&
            <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} className='mt-6' />
          }
        </div>
      </div>
    )
  }
  return (
    <div
      className={`${layout === 'default' && 'flex'} ${imagePosition === 'right' && 'flex-row-reverse'} ${className}`}
    >
      {(layout === 'default' || layout === 'vertical') && (
        <>
          <Image />
          <Text />
        </>
      )}
    </div>
  )
}
