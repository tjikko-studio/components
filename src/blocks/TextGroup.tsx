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
}

/**
 * Primary UI component for user interaction
 */
export const TextGroup: FC<TextGroupProps> = ({title = '', body = '', className = ''}) => {
  return (
    <div className={cn('p-6', className)}>
      <h3 className={cn(['fontStyle-xl', 'text-gray-900', 'dark:text-gray-50'])}>{title}</h3>
      <hr className="border-primary-500 dark:border-primary-400 mt-3 border-t-2" />
      <p className="text-gray:500 dark:text-gray-400 mt-6">{body}</p>
    </div>
  )
}
