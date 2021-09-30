// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes, useState} from 'react'
import cn from 'classnames'

import {PopUpNavItem} from './PopUpNavItem'
import {ListNav} from './ListNav'
import {MenuType} from '../../shared/types'
import ArrowDown from '/assets/icons/arrow-down-s-line.svg'

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
  link?: string

  /**
   * Sub menu items list array
   */
  listNavContent?: MenuType[]

  /**
   * Dropdown on the right or top
   */
  dropdownRight?: boolean
  dropdownTop?: boolean

  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const NavItem: FC<NavItemProps> = ({
  label = 'Label',
  styles = 'default',
  popup = 'white',
  padding = true,
  link = null,
  listNavContent = [],
  dropdownRight = false,
  dropdownTop = false,
  className = ''
}) => {
  const [mouseIn, setMouseIn] = useState(false)
  const [mouseClick, setMouseClick] = useState(false)

  return (
    <div
      className={cn('w-max relative z-10', className)}
      style={{width: 'fit-content'}}
      onMouseEnter={() => {
        setMouseIn(true)
        setMouseClick(true)
      }}
      onMouseLeave={() => {
        setMouseIn(false)
      }}
    >
      <PopUpNavItem
        onClick={() => {
          setMouseClick(!mouseClick)
        }}
        type={styles}
        label={label}
        href={link}
        padding={padding}
        className={cn(
          'flex items-center',
          mouseIn && styles === 'default' && 'hover:text-primary-600',
          mouseIn && styles === 'special' && 'hover:text-primary-300',
          mouseIn &&
            popup === 'flat' &&
            'hover:text-primary-100 hover:dark:text-primary-300'
        )}
      >
        {(listNavContent) && (
          <span className='ml-2.5'>
            <ArrowDown
              width='18'
              height='18'
            />
          </span>
        )
        }
      </PopUpNavItem>
      {(mouseIn && mouseClick) && (listNavContent) && (
        <div
          className={cn(
            'absolute w-max',
            dropdownRight === false ? 'left-0' : 'right-0',
            dropdownTop === false ? 'top-full pt-1' : 'bottom-full pb-3'
          )}
        >
          <ListNav
            styles={popup === 'flat' ? 'flat' : 'elevated'}
            listNavContent={listNavContent}
          />
        </div>
      )
      }
    </div>
  )
}
