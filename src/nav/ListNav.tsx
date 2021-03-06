import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import parseLink from '../../utilities/parseLink'
import {PopUpNavItem} from './PopUpNavItem'

import {MenuType} from '../../shared/types'

export interface ListNavProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style
   */
  styles: 'elevated' | 'flat'

  /**
   * Links items list array that will be parsed through to build the component
   */
  listNavContent: MenuType[]
  theme?: string
}

const availableStyles = {
  elevated: ['flex', 'w-max', 'gap-x-6', 'px-6', 'py-4', 'shadow-lg', 'rounded-lg', 'bg-gray-50', 'text-gray-900', 'dark:text-gray-50'],
  flat: ['sm:grid', 'sm:grid-cols-2', 'xs:gap-6', 'justify-items-stretch']
}

/**
 * Primary UI component for user interaction
 */
export const ListNav = ({styles = 'elevated', listNavContent = [], className = '', theme = 'light'}: ListNavProps) => {
  const classes = [className]
  let wMax = ''
  classes.push(...availableStyles[styles])
  if (styles === 'elevated') {
    wMax = 'w-max'
  }

  return (
    <div className={cn(classes)}>
      {listNavContent.map((menu) => {
        return (
          <div className={wMax} key={menu.label} role={'navigation'} aria-label={menu.label}>
            {listNavContent.length > 1 && <PopUpNavItem label={menu.label} type={'header'} theme={theme} />}
            {menu.content.map((menuItem) => {
              const {url, target} = parseLink(menuItem.link)
              return (
                <PopUpNavItem
                  key={menuItem.label}
                  label={menuItem.label}
                  type={menuItem.type ? menuItem.type : 'default'}
                  className="py-1"
                  href={url}
                  target={target}
                  theme={theme}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
