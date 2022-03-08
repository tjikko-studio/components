import React, {HTMLAttributes} from 'react'
import cn from 'classnames'

import categoryNameFromId from '../../utilities/categoryNameFromId'

import {CategoriesType} from '../../shared/types'

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  items?: CategoriesType
  onFilter?: React.MouseEventHandler
  currentFilter?: string | null
}

export const SideNav = ({
  items = {},
  onFilter = (event) => {
    event.preventDefault()
  },
  currentFilter = null,
  className = ''
}: SideNavProps) => {
  const commonClasses = ['list-none', 'border-l-2', 'pr-3']
  const commonNonTargeted = ['text-gray-600', 'dark:text-gray-300']
  const headerClasses = [...commonClasses, ...commonNonTargeted, 'pl-5', 'strong']
  const linkClasses = [
    ...commonClasses,
    'pl-7',
    'cursor-pointer',

    'hover:border-primary-600',
    'dark:hover:border-primary-300',

    'hover:text-primary-700',
    'dark:hover:text-primary-200'
  ]
  const nonTargetedLink = [...commonNonTargeted, 'border-gray-200', 'dark:border-gray-700']
  const targetedLink = ['border-primary-600', 'dark:border-primary-300', 'text-primary-700', 'dark:text-primary-200']
  return (
    <ul className={className}>
      {Object.keys(items).map((groupName) => {
        const categories = items[groupName]
        return (
          <React.Fragment key={groupName}>
            <li className={cn(headerClasses)}>{groupName}</li>
            {categories.map((categoryId) => {
              const categoryName = categoryNameFromId(categoryId)
              const targetedClassName = currentFilter === categoryName ? targetedLink : nonTargetedLink
              console.log({currentFilter, categoryName, targetedClassName})
              return (
                <li key={categoryId} className={cn(linkClasses, targetedClassName)}>
                  <span onClick={onFilter} data-category-id={categoryId}>
                    {categoryName}
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
