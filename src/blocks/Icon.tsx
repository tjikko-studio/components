import React, {FC, HTMLAttributes} from 'react'
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
  imageUrl?: string
  /**
   * heading text
   */
  heading?: string
  /**
   * content text
   */
  text?: string
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Icon: FC<IconProps> = ({
  type = 'horizontal',
  heading = 'Heading',
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  imageUrl
}) => {

  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${type === 'horizontal' ? 'flex' : ''}`}
    >
      <div
        className={type === 'horizontal' ? 'px-6 pb-14' : 'py-2'}
      >
        <img
          src={imageUrl}
          className={`w-14 h-14`}
        />
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
            heading && heading === '' ? heading : 'Heading'
          }
        </h2>
        <p
          className='fontStyle-base pt-2'
        >
          {
            text && text === '' ? text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
        </p>
      </div>
    </div>
  )
}
