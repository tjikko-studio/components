import React, {FC, HTMLAttributes} from 'react'
import {ButtonsGroup} from '../blocks/ButtonsGroup'

export interface SecondaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Block type
   */
  type?: 'default' | 'vertical'
  /**
   *  image url to show
   */
  image?: string
  title?: string
  body?: string
  buttons?: {}

  /**
   * Image position
   */
   imagePosition?: 'automatic' | 'left' | 'right'
  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Secondary: FC<SecondaryProps> = ({
  type = 'vertical',
  image,
  title,
  body,
  buttons,
  imagePosition = 'left',
  className = '',

}) => {
  const Image = () => {
    return (
      <div
        className={type === 'vertical' ? 'pb-6' : ''}
      >
        <img
          src={image}
          className={`rounded-lg ${type === 'default' && 'w-auto'}`}
        />
      </div>
    )
  }
  const Text = () => {
    return (
      <div
        className={`text-gray-900 dark:text-gray-50 ${type !== 'vertical' && 'flex justify-center'}`}
      >
        <div
          className={`
              ${type !== 'vertical' && 'pl-12'}
          `}
        >
          <h2 className='fontStyle-4xl'>{title}</h2>
          <p className='fontStyle-base pt-2'>{body}</p>
          {
            buttons &&
            <ButtonsGroup key={JSON.stringify(buttons)} {...buttons} />
          }
        </div>
      </div>
    )
  }
  return (
    <div
      className={`${type === 'default' && 'flex'} ${imagePosition === 'right' && 'flex-row-reverse'} ${className}`}
    >
      {(type === 'default' || type === 'vertical') && (
        <>
          <Image />
          <Text />
        </>
      )}
    </div>
  )
}
