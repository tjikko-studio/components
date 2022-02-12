import React, {HTMLAttributes} from 'react'

import {SideNavItem, SideNavItemProps} from './SideNavItem'

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  /**
   * SideNav items list array that will be parsed through to build the component
   */
  items?: SideNavItemProps[]
}

/**
 * Primary UI component for user interaction
 */
export const SideNav = ({items = [], className = ''}: SideNavProps) => {
  return (
    <ul className={className}>
      {items.map((item) => {
        return <SideNavItem key={`${item.text}_${item.link}`} {...item} />
      })}
    </ul>
  )
}
