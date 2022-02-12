import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

export interface SideNavItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * type of SideNavItem ('linkHeader' | 'link' | 'header')
   */
  type?: 'linkHeader' | 'link' | 'header'

  /**
   *  nav text
   */
  text?: string

  /**
   *  nav link
   */
  link?: string

  /**
   * status of item
   */
  status?: 'default' | 'active' | 'hover'

  /**
   * space bar ? if spacer, true else false
   */
  spacer?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const SideNavItem = ({
  link = '#',
  type = 'linkHeader',
  text = 'Link Header',
  status = 'default',
  spacer = false
}: SideNavItemProps) => {
  link = link ? link : '#'
  const classes = [
    'list-none',
    'border-l-2',
    'pr-3',
    'hover:border-primary-600',
    'dark:hover:border-primary-300',
    'hover:text-primary-700',
    'dark:hover:text-primary-200',
    'text-gray-600',
    'dark:text-gray-300',
    'cursor-pointer'
  ]
  classes.push(spacer ? 'py-1.5' : 'py-2.5')
  classes.push(type === 'link' ? 'pl-7' : 'pl-5')
  classes.push(
    ...(status === 'default'
      ? ['border-gray-200', 'dark:border-gray-700']
      : ['border-primary-600', 'dark:border-primary-300', 'text-primary-700', 'dark:text-primary-200'])
  )

  return (
    <li className={cn(classes)}>
      {spacer ? (
        ''
      ) : (
        <a href={link} className={cn('fontStyle-sm', type === 'header' && 'strong')}>
          {text}
        </a>
      )}
    </li>
  )
}
