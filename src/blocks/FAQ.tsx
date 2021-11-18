import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

export interface QAProps {
  question: string
  answer: string
}

export interface FAQProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Questions object that will be parsed through to build the component
   */
  content?: QAProps[]
}

/**
 * Primary UI component for user interaction
 */
export const FAQ: FC<FAQProps> = ({content = [], className = ''}) => {
  return (
    <div className={cn('text-gray-900 dark:text-gray-50 flex flex-col gap-y-12', className)}>
      {content.map((qa) => {
        return (
          <div key={qa.question}>
            <div className="fontStyle-lg strong">{qa.question}</div>
            <div className="pt-2">{qa.answer}</div>
          </div>
        )
      })}
    </div>
  )
}
