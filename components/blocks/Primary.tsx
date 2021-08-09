import React, { FC, HTMLAttributes } from 'react'
import {ButtonsGroup} from '../blocks/ButtonsGroup'
import {useMediaPredicate} from 'react-media-hook'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const tailwind = resolveConfig(tailwindConfig);

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Block type
   */
  type?: 'default' | 'vertical'
  /**
   * Image position
   */
   imagePosition?: 'automatic' | 'left' | 'right'
  /**
  *  image url to show
  */
  image?: string
  title?: string
  body?: string
  buttons?: {}

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
  imagePosition = 'left',
  image = '',
  title,
  body,
  buttons,
}) => {
  //const sm = useMediaPredicate(`(min-width: ${tailwind.theme.screens.sm})`)

  const Text = () => {
    return (
      <div
        className={`mt-4 sm:mt-0 ${type !== 'vertical' && 'sm:flex sm:items-center sm:justify-center'} `} 
      >
        <div
          className={`${type !== 'vertical' ? 'sm:pl-12' : ''} `}
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
            <ButtonsGroup key={JSON.stringify(buttons)} buttons={buttons} />
          }
        </div>
      </div>
    )
  }
  return (
    <div
      className={`body-gray-900 dark:body-gray-50 ${type === 'default' ? 'sm:flex' : ''} ${imagePosition === 'right' ? 'sm:flex-row-reverse' : ''}`}
    >
      {
        (type === 'default' || type === 'vertical') && (
          <>
            {image && (
              <div
                className={`${type === 'vertical' ? 'sm:pb-8' : 'sm:px-12 sm:py-6'}`}
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
