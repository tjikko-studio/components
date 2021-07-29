import React, {FC, HTMLAttributes, useState, useEffect} from 'react'
import {useMediaPredicate} from 'react-media-hook'

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
  const desktop = useMediaPredicate('(min-width: 640px)')

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
