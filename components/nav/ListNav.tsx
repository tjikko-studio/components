import React, {FC, HTMLAttributes} from 'react'
import {PopUpNavItem, PopUpNavItemProps} from './PopUpNavItem'

export interface MenuItem {
  name: string
  url: string
  type?: "default" | "header" | "button"
}

export interface MenuType {
  groupCaption: string
  groups: Array<MenuItem>
}

export interface ListNavProps extends HTMLAttributes<HTMLDivElement> {

  /**
   * style
   */
  styles: "elevated" | "flat"
  /**
   * If data contains one, it will be single. If data contains more than one, it will be multi. At this time, last element will be tertiary  button.
   */
  linkList: Array<MenuType>
}

/**
 * Primary UI component for user interaction
 */
export const ListNav: FC<ListNavProps> = ({
  styles = "elevated",
  linkList = []
}) => {
  linkList = (linkList === null || linkList === undefined) ? [] : linkList
  const classes = ['rounded-lg', 'bg-gray-50', 'dark:bg-transparent', 'px-3', 'py-2.5', 'w-max']
  if (styles === 'elevated') {
    classes.push('shadow-lg')
  }
  if (linkList.length > 1) {
    switch (styles) {
      case 'elevated':
        classes.push('flex')
        break
      case 'flat':
        classes.push('grid', 'grid-cols-2')
      default:
        break
    }
  }
  return (
    <div
      className={classes.join(' ')}
      style={{width: 'fit-content'}}
    >
      {
        linkList.map((menu, index) => {
          return <div className="m-1.5 w-max" key={index} >
            {
              (linkList.length > 1) && (
                <div
                  className={`font-semibold text-sm leading-5 uppercase px-3 py-2.5 dark:text-gray-100 text-gray-800`}
                >
                  {menu.groupCaption}
                </div>
              )
            }
            {
              menu.groups.map((menuItem, subIndex) => {
                return (<PopUpNavItem caption={menuItem.name} type={menuItem.type ? menuItem.type : "default"} key={subIndex} className='px-3 py-2.5' href={menuItem.url} ></PopUpNavItem>)
              })
            }
          </div>
        })
      }
    </div>
  )
}
