import React, {HTMLAttributes, useState} from 'react'
import cn from 'classnames'

import ArrowDown from '/assets/icons/arrow-down-s-line.svg'

import parseLink from '../../utilities/parseLink'
import {ListNav} from './ListNav'
import {PopUpNavItem} from './PopUpNavItem'

import {LinkObject, MenuType} from '../../shared/types'

export interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style
   */
  styles?: 'default' | 'special'

  /**
   * Popup Style
   */
  popup?: 'elevated' | 'flat'

  /**
   * Padding
   */
  padding?: boolean

  /**
   * text to show as menu
   */
  label: string

  /**
   * link to go when menu clicked
   */
  link?: LinkObject

  /**
   * Sub menu items list array
   */
  listNavContent?: MenuType[]

  /**
   * Dropdown on the right or top
   */
  dropdownRight?: boolean
  dropdownTop?: boolean
  theme?: string
}

/**
 * Primary UI component for user interaction
 */
export const NavItem = ({
  label = 'Label',
  theme = 'light',
  styles = 'default',
  popup = 'flat',
  padding = true,
  link = null,
  listNavContent = [],
  dropdownRight = false,
  dropdownTop = false,
  className = ''
}: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const showSubMenu = () => {
    setIsOpen(true)
  }
  const hideSubMenu = () => {
    setIsOpen(false)
  }

  const {url, target} = parseLink(link)

  const eventHandlers = listNavContent.length
    ? {
        onMouseOver: showSubMenu,
        onMouseOut: hideSubMenu,
        onFocus: showSubMenu,
        onBlur: hideSubMenu
      }
    : {}
  return (
    <div className={cn('w-max relative z-10 gap-x-2.5', className)} style={{width: 'fit-content'}} {...eventHandlers}>
      <PopUpNavItem
        type={styles}
        label={label}
        href={url}
        target={target}
        padding={padding}
        className={cn(
          'flex items-center',
          listNavContent.length && 'gap-x-1.5',
          styles === 'default' && 'hover:text-primary-600',
          styles === 'special' && 'hover:text-primary-300',
          popup === 'flat' && 'hover:text-primary-100 hover:dark:text-primary-300'
        )}
        theme={theme}
      >
        {listNavContent.length && <ArrowDown className="w-5 h-5 relative top-px" />}
      </PopUpNavItem>
      {listNavContent.length ? (
        <div
          className={cn(
            'absolute w-max',
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
            dropdownRight === false ? 'left-0' : 'right-0',
            dropdownTop === false ? 'top-full pt-1' : 'bottom-full pb-3'
          )}
          {...eventHandlers}
        >
          <ListNav styles={popup === 'flat' ? 'flat' : 'elevated'} listNavContent={listNavContent} theme={'light'} />
        </div>
      ) : null}
    </div>
  )
}
