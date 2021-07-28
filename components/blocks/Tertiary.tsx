import React, {FC, HTMLAttributes} from 'react'


export interface TertiaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Block type
   */
  type?: 'default' | 'vertical'
  /**
   * Is mirror
   */
  mirror?: boolean
  /**
   *
   *  image url to show
   */
  imageUrl?: string
  head: string
  text: string
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
  mirror = false,
  imageUrl,
  head,
  text,
  className = ''
}) => {
  const Image = () => {
    return (
      <div
        className={(type === 'vertical' ? 'pb-6' : '')}
      >
        <img
          src={imageUrl}
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
            {head}
          </h2>
          <p
            className='text-base pt-2'
          >
            {text}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`text-gray-900 dark:text-gray-50 ${type === 'default' ? 'flex' : ''} ${mirror ? 'flex-row-reverse' : ''} ${className}`}
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
