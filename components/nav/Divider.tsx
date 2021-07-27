import React, {FC, HTMLAttributes} from 'react'

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Divider data object
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Divider: FC<DividerProps> = ({ className }) => {
  return (
    <hr
      className={`border-0 border-t my-2 border-gray-300 dark:border-gray-600 ${className}`}
    />
  )
}
