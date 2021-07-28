import React, {FC, HTMLAttributes, useState, useEffect} from 'react'
import {useMediaPredicate} from 'react-media-hook'

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
   *  nav url
   */
  url?: string
  /**
   * status of item
   */
  status?: 'default' | 'active' | 'hover'
  /**
   * space bar ? if spacer, true else false
   */
  spacer?: boolean
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SideNavItem: FC<SideNavItemProps> = ({
  url = '#',
  type = 'linkHeader',
  text = 'Link Header',
  status = 'default',
  spacer = false
}) => {
  const desktop = useMediaPredicate('(min-width: 640px)')

  return (
    <li
      className={`list-none border-l-2 pr-3 ${spacer ? 'py-1.5' : 'py-2.5'} ${type === 'link' ? 'pl-7' : 'pl-5'} ${status === 'default' ? 'border-gray-200 dark:border-gray-700' : 'border-brand-600 dark:border-brand-300 text-brand-700 dark:text-brand-200'} hover:border-brand-600 dark:hover:border-brand-300 hover:text-brand-700 dark:hover:text-brand-200 text-gray-600 dark:text-gray-300 cursor-pointer`}
    >
      {spacer ? '' :
        <a
          href={url ? url : '#'}
          className={`fontStyle-sm ${type === 'header' ? 'font-semibold' : ''}`}
        >{text}</a>}
    </li>
  )
}
