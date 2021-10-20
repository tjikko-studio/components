import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Is the component direction vertical or horizontal
   */
  direction?: 'vertical' | 'horizontal'

  /**
   * className override
   */
  className?: string

  /**
   * apply dark theme in dark and light modes
   */
  forceDark?: boolean
}

const extraClasses = {
  horizontal: 'border-t w-full h-px my-4 inline-table',
  vertical: 'border-l w-px h-full mx-4 inline-block'
}

/**
 * Primary UI component for user interaction
 */
export const Divider: FC<DividerProps> = ({direction = 'horizontal', className, forceDark = false}) => {
  const dividerClasses = ['border-0 border-gray-300 dark:border-gray-600']

  dividerClasses.push(extraClasses[direction])
  if (forceDark) {
    dividerClasses.push('border-gray-600')
  }

  return <hr className={cn(dividerClasses, className)} />
}
