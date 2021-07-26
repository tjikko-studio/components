import React, { FC, HTMLAttributes } from 'react'

export interface FAQProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to show as question
   */
  question: string
  /**
   * text to show as answer
   */
  answer?: string

  /**
   * Additional space-separated class names to append
   */
  className?: string
}


/**
 * Primary UI component for user interaction
 */
export const FAQ: FC<FAQProps> = ({
  question,
  answer = '',
  className
}) => {
  return (
    <div
      className={`text-gray-900 ${className}`}
    >
      <div
        className='font-semibold text-lg leading-7'
      >
        {question}
      </div>
      <div
        className='pt-2 text-base leading-6'
      >
        {answer}
      </div>
    </div>
  )
}
