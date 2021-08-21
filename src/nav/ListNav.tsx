import React, {FC, HTMLAttributes} from 'react'
import {PopUpNavItem} from './PopUpNavItem'

export interface MenuItem {
  name: string
  url: string
  type?: 'default' | 'header' | 'button'
}

export interface MenuType {
  groupCaption: string
  groups: MenuItem[]
}

export interface ListNavProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style
   */
  styles: 'elevated' | 'flat'
  
  /**
   * Links items list array that will be parsed through to build the component
   */
  linkList: MenuType[],
  
  /**
   * className modifier that will add custom classes if needed (margin, padding, direction, etc.)
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const ListNav: FC<ListNavProps> = ({
  styles = 'elevated',
  linkList = [],
  className,
}) => {
  linkList = (linkList === null || linkList === undefined) ? [] : linkList
  const classes = [className]
  var wMax = ''
  switch (styles) {
    case 'elevated':
      classes.push('flex w-max space-x-6 px-6 py-2.5 shadow-lg rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50')
      wMax = 'w-max'
      break
    case 'flat':
      classes.push('grid sm:grid-cols-2 justify-items-stretch gap-6')
      wMax = ''
    default:
      break
  }
  return (
    <div
      className={classes.join(' ')}
    >
      {
        linkList.map((menu, index) => {
          return <div className={`${wMax}`} key={index} >
            {
              (linkList.length > 1) && (
                <PopUpNavItem
                  caption={menu.groupCaption}
                  type={'header'}
                  className='py-2.5'
                />
              )
            }
            {
              menu.groups.map((menuItem, subIndex) => {
                return (<PopUpNavItem caption={menuItem.name} type={menuItem.type ? menuItem.type : 'default'} key={subIndex} className='py-2.5' href={menuItem.url} />)
              })
            }
          </div>
        })
      }
    </div>
  )
}
