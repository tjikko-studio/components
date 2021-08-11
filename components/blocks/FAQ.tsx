import React, { FC, HTMLAttributes } from 'react'

export interface FaqProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to show as question
   */
  content?: {}

  /**
   * Additional space-separated class names to append
   */
  className?: string
}


/**
 * Primary UI component for user interaction
 */
export const Faq: FC<FaqProps> = ({
  content,
  className
}) => {
  return (
    <div
      className={`text-gray-900 dark:text-gray-50 flex flex-col space-y-12 ${className}`}
    >
      {
        content.map((question) => {
          return (
            <div>
              <div
                className='fontStyle-lg strong'
              >
                {question.question}
              </div>
              <div
                className='pt-2 fontStyle-base'
              >
                {question.answer}
              </div>
            </div>  
          )
        })
      }
    </div>
  )
}
