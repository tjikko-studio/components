// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'
import cn from 'classnames'

export interface PopUpNavItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * pop up type
   */
  type: 'default' | 'header' | 'button' | 'special'

  /**
   * Force padding
   */
  padding?: boolean

  /**
   * flag to check pop up item is active
   */
  isActive?: boolean

  /**
   * text to show
   */
  label: string

  /**
   * link to show
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
  label = 'link',
  type = 'default',
  padding = true,
  href = '#',
  isActive = false,
  children = []
}) => {
  const classes = ['flex items-center cursor-pointer']
  switch (type) {
  case 'special':
    classes.push(...[!padding && 'py-2.5', 'fontStyle-base text-gray-100'])
    if (isActive) {
      classes.push('text-primary-300 dark:text-primary-300')
    } else {
      classes.push(...[
        'hover:text-primary-300',
        'dark:text-gray-100',
        'dark:hover:text-primary-300'
      ])
    }

    break
  case 'header':
    classes.push(...[
      'fontStyle-sm',
      'uppercase',
      'strong',
      'py-2.5',
      'text-gray-800',
      'dark:text-gray-100'
    ])
    break
  case 'button':
    classes.push(...[padding && 'py-3.5', 'fontStyle-xs uppercase strong'])
    if (isActive) {
      classes.push('text-primary-700 dark:text-primary-100')
    } else {
      classes.push(...[
        'text-primary-600',
        'hover:text-primary-700',
        'dark:text-primary-300',
        'dark:hover:text-primary-100'
      ])
    }
    break
  case 'default':
  default:
    classes.push(...[padding && 'py-2.5', 'fontStyle-sm'])
    if (isActive) {
      classes.push('text-primary-600 dark:text-primary-300')
    } else {
      classes.push(...[
        'hover:text-primary-600',
        'dark:text-gray-100',
        'dark:hover:text-primary-300'
      ])
    }
    break
  }
  return (
    <div
      className={cn(classes)}
      role={'navigation'}
      aria-label={label}
    >
      <a href={href}>
        {label}
      </a>
      {
        children ? children : ''
      }
    </div>
  )
}
