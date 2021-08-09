import React, {FC, HTMLAttributes} from 'react'


export interface TertiaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Block type
   */
  type?: 'default' | 'vertical'
  /**
   * Is mirror
   */
  imagePosition?: 'automatic' | 'left' | 'right'
  /**
   *
   *  image url to show
   */
  image?: string
  title: string
  body: string
  /**
   * Additional space-separated class names to append
   */
  className?: string
}


/**
 * Primary UI component for user interaction
 */
export const Tertiary: FC<TertiaryProps> = ({
  type = 'vertical',
  imagePosition = 'left',
  image,
  title,
  body,
  className = ''
}) => {
  const Image = () => {
    return (
      <div
        className={(type === 'vertical' ? 'pb-6' : '')}
      >
        <img
          src={image}
          className={`rounded-lg${type === 'default' ? ' w-auto' : ''}`}
        />
      </div>
    )
  }
  const Text = () => {
    return (
      <div
        className={type !== 'vertical' ? 'flex justify-center' : ''}
      >
        <div
          className={type !== 'vertical' ? 'pl-12' : ''}
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
      className={`text-gray-900 dark:text-gray-50 ${type === 'default' ? 'flex' : ''} ${imagePosition === 'right' ? 'flex-row-reverse' : ''} ${className}`}
    >
      {
        (type === 'default' || type === 'vertical') && (
          <>
            <Image />
            <Text />
          </>
        )
      }
    </div>
  )
}
