import React, {FC, HTMLAttributes} from 'react'
import {SideNavItemProps, SideNavItem} from './SideNavItem'

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  /**
   * SideNav data object
   */
  items?: SideNavItemProps[]
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SideNav: FC<SideNavProps> = ({
  items = [],
  className
}) => {

  return (
    <ul
      className={`${className ? className : ''}`}
    >
      {items.map((item) => (
        <SideNavItem
          key={`${item.text}_${item.url}`}
          {...item}
        />
      ))}
    </ul>
  )
}
