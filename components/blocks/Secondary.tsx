import React, {FC, HTMLAttributes} from 'react'
export interface CTAInfoType {
  head: string
  text: string
}

export interface SecondaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Block type
   */
  type?: 'default' | 'vertical'
  /**
   *  image url to show
   */
  imageUrl?: string
  /**
   * text and button to show
   */
  info: CTAInfoType

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
  info = {},
  mirror = 'false',
  className,

}) => {
  const Image = () => {
    return (
      <div
        className={`
          ${type === 'vertical' && 'pb-6'}
        `}
      >
        <img
          src={imageUrl}
          className={`rounded-lg
            ${type === 'default' && 'w-auto'}
          `}
        />
      </div>
    )
  }
  const Text = () => {
    return (
      <div
        className={`
          ${type != 'vertical' && 'flex justify-center'}
        `}
      >
        <div
          className={`
              ${type != 'vertical' && 'pl-12'}
          `}
        >
          <h2 className='fontStyle-4xl'>{info.head}</h2>
          <p className='text-base pt-2'>{info.text}</p>
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
