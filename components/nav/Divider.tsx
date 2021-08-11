import React, {FC, HTMLAttributes} from 'react'

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Is the composent direction vertical or horizontasl
   */
  direction?: 'vertical' | 'horizontal'
  
  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string

  /**
   * force dark mode (This will bypass dark mode and apply the darkmode on the composant even in light mode
   */
  forceDark?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Divider: FC<DividerProps> = ({
  direction = "horizontal",
  className = '',
  forceDark = false
}) => {
  const dividerClasses = ['border-0 border-gray-300 dark:border-gray-600']
  switch (direction) {
    case 'horizontal':
      dividerClasses.push('border-t w-full h-px my-4 inline-table')
      break
    case 'vertical':
      dividerClasses.push('border-l w-px h-full mx-4 inline-block')
      break
  }
  forceDark &&  dividerClasses.push('border-gray-600')
  className && dividerClasses.push(className)
  return (
    <hr
    className={dividerClasses.join(' ')}
    />
  )
}
