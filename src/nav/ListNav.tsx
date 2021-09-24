// eslint-disable-next-line no-use-before-define
import React, {FC, HTMLAttributes} from 'react'
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
  listNavContent: MenuType[],

  /**
   * className override
   */
  className?: string
}

const availableStyles = {
  elevated: [
    'flex',
    'w-max',
    'space-x-6',
    'px-6',
    'py-2.5',
    'shadow-lg',
    'rounded-lg',
    'bg-gray-50',
    'dark:bg-gray-800',
    'text-gray-900',
    'dark:text-gray-50'
  ],
  flat: [
    'sm:grid',
    'sm:grid-cols-2',
    'xs:gap-6',
    'justify-items-stretch'
  ]
}
/**
 * Primary UI component for user interaction
 */
export const ListNav: FC<ListNavProps> = ({
  styles = 'elevated',
  listNavContent = [],
  className = ''
}) => {
  const classes = [className]
  let wMax = ''
  classes.push(...availableStyles[styles])
  if (styles === 'elevated') {
    wMax = 'w-max'
  }

  return (
    <div
      className={classes.join(' ')}
    >
      {
        listNavContent.map((menu) => {
          return (
            <div className={wMax} key={menu.label} >
              {
                (listNavContent.length > 1) && (
                  <PopUpNavItem
                    label={menu.label}
                    type={'header'}
                    className='py-2.5'
                  />
                )
              }
              {
                menu.content.map((menuItem) => {
                  return (
                    <PopUpNavItem
                      key={menuItem.label}
                      label={menuItem.label}
                      type={menuItem.type ? menuItem.type : 'default'}
                      className='py-2.5'
                      href={menuItem.link}
                    />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
