import React, { FC, HTMLAttributes } from 'react'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to display for heading
   */
  title: string
  /**
   * text to display for paragraph
   */
  body: string
  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Text: FC<TextProps> = ({ title = '', body = '', className }) => {
  return (
    <div className={`p-6 ${className}`}>
      <h5 className='fontStyle-lg strong uppercase text-gray-900'>
        {title}
      </h5>
      <hr className='border-primary-500 mt-4' />
      <p className='fontStyle-base text-gray-500 mt-8'>{body}</p>
    </div>
  )
}
