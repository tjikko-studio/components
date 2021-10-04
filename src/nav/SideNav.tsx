import React, {FC, HTMLAttributes} from 'react'

import {SideNavItem, SideNavItemProps} from './SideNavItem'

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  /**
   * SideNav items list array that will be parsed through to build the component
   */
  items?: SideNavItemProps[]

  /**
   * className override
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SideNav: FC<SideNavProps> = ({items = [], className = ''}) => {
  return (
    <ul className={className}>
      {items.map((item) => {
        return <SideNavItem key={`${item.text}_${item.link}`} {...item} />
      })}
    </ul>
  )
}
