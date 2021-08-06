import React, {FC, HTMLAttributes} from 'react'
import {Button} from '../Button'

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
  button_name: string
  button_url: string

  /**
   * Is mirror
   */
  mirror?: boolean
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
  button_name,
  button_url,
  mirror = 'false',
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
            (button_name && button_url) &&
            <div
              className='pt-6'>
              <Button
                label={button_name}
                link={button_url}
                type='tertiary'
                size='large'
              />
            </div>
          }
        </div>
      </div>
    )
  }
  return (
    <div
      className={`${type === 'default' && 'flex'} ${mirror && 'flex-row-reverse'} ${className}`}
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
