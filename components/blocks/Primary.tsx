import React, { FC, HTMLAttributes } from 'react'
import {Button} from '../Button'

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Block type
   */
  type?: 'default' | 'vertical'
  /**
   * Is mirror
   */
  mirror?: boolean
  /**
  *  image url to show
  */
  image?: string
  title?: string
  body?: string
  button_name: string
  button_url: string

  /**
   * Additional space-separated class names to append
   */
  className?: string
}


/**
 * Primary UI component for user interaction
 */
export const Primary: FC<PrimaryProps> = ({
  type = 'vertical',
  mirror = false,
  image = '',
  title,
  body,
  button_name,
  button_url
}) => {
  const Text = () => {
    return (
      <div
        className={type !== 'vertical' ? 'flex items-center justify-center' : ''}
      >
        <div
          className={type !== 'vertical' ? 'pl-12' : ''} >
          <h2
            className='fontStyle-4xl'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base pt-4'
          >
            {body}
          </p>
          {
            button_name && button_url &&
            <div
              className='pt-6'>
              <Button
                body={button_name}
                url={button_url}
                type='primary'
                icon='none'
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
      className={`body-gray-900 dark:body-gray-50 ${type === 'default' ? 'flex' : ''} ${mirror ? 'flex-row-reverse' : ''}`}
    >
      {
        (type === 'default' || type === 'vertical') && (
          <>
            {image && (
              <div
                className={`${type === 'vertical' ? 'pb-8' : 'px-12 py-6'}`}
              >
                <img
                  src={image}
                  className={`rounded-lg${type === 'default' ? ' w-auto' : ''}`}
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
