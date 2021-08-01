import React, {FC, HTMLAttributes} from 'react'

export interface PopUpNavItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * pop up type
   */
  type: 'default' | 'header' | 'button' | 'special'
  /**
   * flag to check pop up item is active
   */
  isActive?: boolean
  /**
   * text to show
   */
  caption: string
  /**
   * url to show
   */
  href?: string
  /**
   * child node
   */
  children?: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const PopUpNavItem: FC<PopUpNavItemProps> = ({
  caption = 'Link',
  type = 'default',
  href = '#',
  isActive = false,
  children
}) => {
  const classes = ['flex items-center']
  switch (type) {
    case 'special':
      classes.push('py-2.5 fontStyle-base text-gray-100')
      if (isActive) {
        classes.push('text-primary-300 dark:text-primary-300')
      } else {
        classes.push('hover:text-primary-300 dark:text-gray-100 dark:hover:text-primary-300')
      }

      break
    case 'header':
      classes.push('fontStyle-sm uppercase strong py-2.5 text-gray-800 dark:text-gray-100')
      break
    case 'button':
      classes.push('py-3.5 fontStyle-xs uppercase strong')
      if (isActive) {
        classes.push('text-primary-700 dark:text-primary-100')
      } else {
        classes.push('text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-100')
      }
      break
    case 'default':
    default:
      classes.push('py-2.5 fontStyle-sm')
      if (isActive) {
        classes.push('text-primary-600 dark:text-primary-300')
      } else {
        classes.push('text-gray-800 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-300')
      }
      break
  }
  return (
    <div
      className={classes.join(' ')}
    >
      <a href={href}>
        {caption}
      </a>
      {
        children ? children : ''
      }
    </div>
  )
}
