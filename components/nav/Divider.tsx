import React, {FC, HTMLAttributes} from 'react'

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Divider data object
   */
  className?: string
  dark?: boolean
  direction?: 'vertical' | 'horizontal'
}

/**
 * Primary UI component for user interaction
 */
export const Divider: FC<DividerProps> = ({
  className = '',
  dark = false,
  direction = "horizontal"
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
  dark &&  dividerClasses.push('border-gray-600')
  className && dividerClasses.push(className)
  return (
    <hr
    className={dividerClasses.join(' ')}
    />
  )
}
