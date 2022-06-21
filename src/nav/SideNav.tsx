import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import categoryNameFromId from '../../utilities/categoryNameFromId'

import {CategoriesType} from '../../shared/types'

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  items?: CategoriesType
  onFilter?: (categoryId: string) => void
  currentFilter?: string | null
  classNames?: {
    sidebar: string
    heading: string
    item: string
    target: string
  }
}

export const SideNav = ({
  items = {},
  onFilter = () => {},
  currentFilter = null,
  classNames = {
    sidebar: 'text-gray-600',
    heading: 'border-gray-600',
    item: 'border-gray-600 hover:text-primary-700 hover:border-primary-600',
    target: 'text-primary-700 border-primary-600'
  },
  className = ''
}: SideNavProps) => {
  const commonClasses = ['list-none', 'border-l-2', 'pr-3']
  const headerClasses = [...commonClasses, 'pl-5', ' pt-3', 'strong']
  const linkClasses = [...commonClasses, 'pl-7', 'py-0.5', 'cursor-pointer']
  return (
    <ul className={cn(className, classNames.sidebar)}>
      {Object.keys(items).map((groupName) => {
        const categories = items[groupName]
        return (
          <React.Fragment key={groupName}>
            <li className={cn(headerClasses, classNames.heading)}>{groupName}</li>
            {categories.map((categoryId) => {
              const categoryName = categoryNameFromId(categoryId)
              return (
                <li key={categoryId} className={cn(linkClasses, currentFilter === categoryName ? classNames.target : classNames.item)}>
                  <span
                    onClick={(event) => {
                      const categoryId = event.currentTarget.getAttribute('data-category-id')
                      return onFilter(categoryId)
                    }}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        const categoryId = event.currentTarget.getAttribute('data-category-id')
                        onFilter(categoryId)
                      }
                    }}
                    data-category-id={categoryId}
                    tabIndex={0}
                  >
                    {categoryName.substring(categoryName.lastIndexOf('/') + 1)}
                  </span>
                </li>
              )
            })}
          </React.Fragment>
        )
      })}
    </ul>
  )
}
