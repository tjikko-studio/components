import React, {FC, HTMLAttributes} from 'react'

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

  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SideNavItem: FC<SideNavItemProps> = ({
  link = '#',
  type = 'linkHeader',
  text = 'Link Header',
  status = 'default',
  spacer = false
}) => {

  return (
    <li
      className={`list-none border-l-2 pr-3 ${spacer ? 'py-1.5' : 'py-2.5'} ${type === 'link' ? 'pl-7' : 'pl-5'} ${status === 'default' ? 'border-gray-200 dark:border-gray-700' : 'border-primary-600 dark:border-primary-300 text-primary-700 dark:text-primary-200'} hover:border-primary-600 dark:hover:border-primary-300 hover:text-primary-700 dark:hover:text-primary-200 text-gray-600 dark:text-gray-300 cursor-pointer`}
    >

      {spacer ? '' :
        <a
          href={link ? link : '#'}
          className={`fontStyle-sm ${type === 'header' ? 'strong' : ''}`}
        >{text}</a>}
    </li>

  )
}
