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
      className={`text-gray-900 dark:text-gray-50 ${className}`}
    >
      <div
        className='fontStyle-lg strong'
      >
        {question}
      </div>
      <div
        className='pt-2 fontStyle-base'
      >
        {answer}
      </div>
    </div>
  )
}
