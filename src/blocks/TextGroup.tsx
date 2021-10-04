import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

export interface TextGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to display for heading
   */
  title: string

  /**
   * text to display for paragraph
   */
  body: string

  /**
   * className override
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const TextGroup: FC<TextGroupProps> = ({title = '', body = '', className = ''}) => {
  return (
    <div className={cn('p-6', className)}>
      <h5 className={cn(['fontStyle-lg', 'strong', 'uppercase', 'text-gray-900', 'dark:text-gray-50'])}>{title}</h5>
      <hr className="border-primary-500 dark:border-primary-400 mt-4" />
      <p className="fontStyle-base text-gray:500 dark:text-gray-400 mt-8">{body}</p>
    </div>
  )
}
