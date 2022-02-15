import React, {HTMLAttributes} from 'react'
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
export const FAQ = ({content = [], className = ''}: FAQProps) => {
  return (
    <div className={cn('flex flex-col gap-y-12', className)}>
      {content.map((qa) => {
        return (
          <div key={qa.question}>
            <div className="fontStyle-lg strong" dangerouslySetInnerHTML={{__html: qa.question}} />
            <div className="pt-2" dangerouslySetInnerHTML={{__html: qa.answer}} />
          </div>
        )
      })}
    </div>
  )
}
