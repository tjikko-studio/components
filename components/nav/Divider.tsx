import React, {FC, HTMLAttributes} from 'react'

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Divider data object
   */
  classNames?: string
}

/**
 * Primary UI component for user interaction
 */
export const Divider: FC<DividerProps> = ({
  ...props
}) => {
  return (
    <hr
      {...props}
      className={`border-0 border-t my-2 border-gray-300 dark:border-gray-600 ${props.className}`}
    />
  )
}
