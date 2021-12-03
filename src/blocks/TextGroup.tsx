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
   * Styles
   */
  titleSize?: 'default' | 'big' | 'huge'
  textAlign?: 'left' | 'center'
  hasSepar?: boolean
  hasBackground?: boolean
  bgColor?: string
  isElevated?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const TextGroup: FC<TextGroupProps> = ({
  title = '',
  body = '',
  className = '',
  titleSize = 'default',
  textAlign = 'left',
  hasSepar = true,
  hasBackground = false,
  bgColor = '#f3f4f6',
  isElevated = false
}) => {
  const titleSizeOutput = titleSize === 'huge' ? 'fontStyle-7xl' : titleSize === 'big' ? 'fontStyle-4xl' : 'fontStyle-xl'

  return (
    <div
      className={cn(
        'p-6 w-full',
        `text-${textAlign}`,
        hasBackground && `rounded-lg`,
        hasBackground && isElevated && 'shadow-2xl',
        className
      )}
      style={{backgroundColor: hasBackground && bgColor}}
    >
      {title && <h3 className={cn('text-gray-900 dark:text-gray-50', titleSizeOutput)}>{title}</h3>}
      {hasSepar && <hr className={cn('border-primary-500 dark:border-primary-400 border-t-2', titleSize !== 'huge' ? 'my-3' : 'mb-3')} />}
      {body && <p className={cn('text-gray:500 dark:text-gray-400', (titleSize !== 'huge' || hasSepar) && 'mt-3')}>{body}</p>}
    </div>
  )
}
