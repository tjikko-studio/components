import React, {FC, HTMLAttributes, useState, useEffect} from 'react'
import {SideNavItemProps, SideNavItem} from './SideNavItem'

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sidenav items list array that will be parsed through to build the component
   */
  items?: SideNavItemProps[]
  
  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SideNav: FC<SideNavProps> = ({
  items = [],
  className = ''
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
