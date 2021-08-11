import React, {FC, HTMLAttributes} from 'react'


export interface TertiaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Is the composent direction  default/horizontasl (left to right) or vertical (image above)
   */
  layout?: 'default' | 'vertical'
  
  /**
   * Is mirror
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
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}


/**
 * Primary UI component for user interaction
 */
export const Tertiary: FC<TertiaryProps> = ({
  layout = 'default',
  imagePosition = 'automatic',
  image,
  title,
  body,
  className = ''
}) => {
  image = image[0];
  const Image = () => {
    return (
      <div
        className={(layout === 'vertical' ? 'pb-6' : '')}
      >
         {image && (
          <img
            src={image.url}
            className={`rounded-lg${layout === 'default' ? ' w-auto' : ''}`}
          />
        )}
      </div>
    )
  }
  const Text = () => {
    return (
      <div
        className={layout !== 'vertical' ? 'flex justify-center' : ''}
      >
        <div
          className={layout !== 'vertical' ? 'pl-12' : ''}
        >
          <h2
            className='fontStyle-2xl'
          >
            {title}
          </h2>
          <p
            className='fontStyle-base pt-2'
          >
            {body}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${layout === 'default' ? 'flex' : ''} ${imagePosition === 'right' ? 'flex-row-reverse' : ''} ${className}`}
    >
      {
        (layout === 'default' || layout === 'vertical') && (
          <>
            <Image />
            <Text />
          </>
        )
      }
    </div>
  )
}
