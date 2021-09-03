import React, {FC, HTMLAttributes, useState} from 'react'
import {PopUpNavItem} from './PopUpNavItem'
import {ListNav, MenuType} from './ListNav'
import ArrowDown from '/assets/icons/arrow-down-s-line.svg'

export interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style
   */
  styles: 'default' | 'default/white' | 'flat'
  
  /**
   * text to show as menu
   */
  label: string
  
  /**
   * link to go when menu clicked
   */
  link?: string
  
  /**
   * Sub menu items list array that will be parsed through to build the component
   */
  dropdown?: MenuType[]
  
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
  styles = 'default/white',
  link = null,
  dropdown = [],
  className,
}) => {
  const [mouseIn, setMouseIn] = useState(false)
  const [mouseClick, setMouseClick] = useState(false)
  console.log()
  return (
    <></>
  )
  /* return (
    <div
      className={`w-max relative ${className}`}
      style={{width: 'fit-content'}}
      onMouseEnter={() => {setMouseIn(true); setMouseClick(true)}}
      onMouseLeave={() => setMouseIn(false)}
    >
      <PopUpNavItem
        onClick={() => setMouseClick(!mouseClick)}
        type={(styles === 'default/white') ? 'special' : 'default'}
        label={label}
        href={link}
        className={`flex items-center ${mouseIn && styles === 'default' ? 'text-primary-600' : ''} ${mouseIn && styles === 'default/white' ? 'text-primary-300' : ''} ${mouseIn && styles === 'flat' ? 'text-primary-100 dark:text-primary-300' : ''}`}
      >
        {(dropdown.length > 0) && (
          <span className='ml-2.5'>
            <ArrowDown
              width='18'
              height='18'
            />
          </span>
        )
        }
      </PopUpNavItem>
      {(mouseIn && mouseClick) && (dropdown.length > 0) && (
        <div
          className='absolute left-0 top-full pt-1 w-max'
        >
          <ListNav styles={styles === 'flat' ? 'flat' : 'elevated'} listnavContent={dropdown} />
        </div>
      )
      }
    </div>
  ) */
}
