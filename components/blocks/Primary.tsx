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
  imageUrl?: string
  head?: string
  text?: string
  cta_name: string
  cta_url: string

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
  imageUrl = '',
  head,
  text,
  cta_name,
  cta_url
}) => {
  const Text = () => {
    return (
      <div
        className={`
          ${type !== "vertical" && "flex items-center justify-center"}
        `}
      >
        <div
          className={`
            ${type !== 'vertical' && 'pl-12'}
        `} >
          <h2
            className='fontStyle-4xl'
          >
            {head}
          </h2>
          <p
            className='text-base pt-4'
          >
            {text}
          </p>
          {
            cta_name && cta_url &&
            <div
              className="pt-6">
              <Button
                text={cta_name}
                url={cta_url}
                type="primary"
                icon='none'
                size="large"
              />
            </div>
          }
        </div>
      </div>
    )
  }
  return (
    <div
      className={`
        text-gray-900 dark:text-gray-50 
        ${type === 'default' ? 'flex' : ''}${mirror ? ' flex-row-reverse' : ''}
      `}
    >
      {
        (type === "default" || type === "vertical") && (
          <>
            {imageUrl && (
              <div
                className={`${type === 'vertical' ? 'pb-8' : 'px-12 py-6'}`}
              >
                <img
                  src={imageUrl}
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
