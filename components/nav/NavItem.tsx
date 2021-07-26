import React, {FC, HTMLAttributes, useState} from 'react'
import {PopUpNavItem} from './PopUpNavItem'
import ArrowDown from '../../assets/icons/arrow-down-s-line.svg'
import {ListNav, MenuType} from './ListNav'

export interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * set nav item type
   */
  styles: "default" | "default/white" | "flat"
  /**
   * text to show as menu
   */
  caption: string
  /**
   * url to go when menu clicked
   */
  link?: string
  /**
   * sub menu json object same as list nav
   */
  submenu?: MenuType[]
  /**
   * Additional space-separated class names to append
   */
  className?: string

}

/**
 * Primary UI component for user interaction
 */
export const NavItem: FC<NavItemProps> = ({
  caption = "Label",
  link = null,
  styles = "default/white",
  ...props
}) => {
  const [mouseIn, setMouseIn] = useState(false)
  const [mouseClick, setMouseClick] = useState(false)
  let keys = []
  try {
    keys = (props.submenu === undefined || props.submenu === null) ? [] : Object.keys(props.submenu)
  } catch (error) {
    console.log("sub menu structure error")
    keys = []
  }
  return (
    <div
      {...props}
      className={`w-max relative
                ${props.className ? props.className : ""}
            `}
      style={{width: 'fit-content'}}
      onMouseEnter={() => {setMouseIn(true); setMouseClick(true)}}
      onMouseLeave={() => setMouseIn(false)}
    >
      <PopUpNavItem
        onClick={() => setMouseClick(!mouseClick)}
        type={(styles == "default/white") ? "special" : "default"}
        caption={caption}
        href={link}
        className={`flex items-center ${mouseIn && styles == "default" ? "text-brand-600" : ""} ${mouseIn && styles == "default/white" ? "text-brand-300" : ""} ${mouseIn && styles == "flat" ? "text-brand-100 dark:text-brand-300" : ""}`}
      >
        {(keys.length > 0) && (
          <span className='ml-2.5'>
            <ArrowDown
              width='18'
              height='18'
            />
          </span>
        )
        }
      </PopUpNavItem>
      {(mouseIn && mouseClick) && (keys.length > 0) && (
        <div
          className='absolute left-0 top-full pt-3.5 w-max'
        >
          <ListNav styles={styles == "flat" ? "flat" : "elevated"} linkList={props.submenu} />
        </div>
      )
      }
    </div>
  )
}
