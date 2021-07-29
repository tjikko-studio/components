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
      <h5 className='text-gray-900 text-lg tracking-wider uppercase font-semibold'>
        {title}
      </h5>
      <hr className='border-primary-500 mt-4' />
      <p className='text-gray-500 text-base mt-8'>{body}</p>
    </div>
  )
}
