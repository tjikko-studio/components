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
  imageUrl?: string
  head?: string
  text?: string
  cta_name: string
  cta_url: string

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
  imageUrl,
  head,
  text,
  cta_name,
  cta_url,
  mirror = 'false',
  className,

}) => {
  const Image = () => {
    return (
      <div
        className={type === 'vertical' ? 'pb-6' : ''}
      >
        <img
          src={imageUrl}
          className={`rounded-lg ${type === 'default' && 'w-auto'}`}
        />
      </div>
    )
  }
  const Text = () => {
    return (
      <div
        className={`
          ${type !== 'vertical' && 'flex justify-center'}
        `}
      >
        <div
          className={`
              ${type !== 'vertical' && 'pl-12'}
          `}
        >
          <h2 className='fontStyle-4xl'>{head}</h2>
          <p className='text-base pt-2'>{text}</p>
          {
            (cta_name && cta_url) &&
            <div
              className="pt-6">
              <Button
                text={cta_name}
                url={cta_url}
                type="tertiary"
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
        ${type === 'default' && 'flex'}
        ${mirror && 'flex-row-reverse'}
        ${className ? className : ''}
      `}
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
